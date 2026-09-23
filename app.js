/* =========================================================
   拼音花園 · 畫面切換邏輯
   ========================================================= */

/* 需要顯示常駐頂部列的畫面 */
var SCREENS_WITH_TOP_BAR = ["screen-home", "screen-settings"];

/* App 開啟時預設顯示的畫面 */
var DEFAULT_SCREEN = "screen-welcome";

/* 歡迎頁自動跳轉到主頁的延遲（毫秒） */
var WELCOME_AUTO_ADVANCE_MS = 4500;

/* 歡迎頁自動跳轉計時器的 handle；null 代表目前沒有計時器 */
var welcomeTimer = null;

/* 清除歡迎頁自動跳轉計時器（若存在） */
function clearWelcomeTimer() {
  if (welcomeTimer !== null) {
    clearTimeout(welcomeTimer);
    welcomeTimer = null;
  }
}

/**
 * 歡迎頁「開始」按鈕的處理：
 * 立即清除自動跳轉計時器，再切換到主頁，避免計時器稍後又觸發一次。
 */
function startFromWelcome() {
  clearWelcomeTimer();
  showScreen("screen-home");
}
window.startFromWelcome = startFromWelcome;

/**
 * 切換到指定畫面。
 *
 * @param {string} screenId - 目標畫面的 id，例如 "screen-home"。
 *                             有效值：screen-welcome / screen-home / screen-pinyin /
 *                             screen-mode1 / screen-mode2 / screen-mode3 / screen-settings
 *
 * 行為：
 *  - 隱藏所有 .screen，只顯示 screenId 對應的畫面（加上 .is-active）。
 *  - 依 SCREENS_WITH_TOP_BAR 決定是否顯示 #top-bar。
 *  - 捲回頁面頂端。
 *  - 若 screenId 不存在，會在 console 發出警告並且不切換。
 */
function showScreen(screenId) {
  var target = document.getElementById(screenId);
  if (!target || !target.classList.contains("screen")) {
    console.warn('[showScreen] 找不到畫面：' + screenId);
    return;
  }

  var screens = document.querySelectorAll("[data-screen]");
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.toggle("is-active", screens[i] === target);
  }

  var showTopBar = SCREENS_WITH_TOP_BAR.indexOf(screenId) !== -1;
  var topBar = document.getElementById("top-bar");
  if (topBar) {
    topBar.hidden = !showTopBar;
  }
  document.body.classList.toggle("no-top-bar", !showTopBar);

  /* 進入歡迎頁時啟動自動跳轉計時器；離開時清除，避免切走後又被拉回 */
  clearWelcomeTimer();
  if (screenId === "screen-welcome") {
    welcomeTimer = setTimeout(function () {
      welcomeTimer = null;
      showScreen("screen-home");
    }, WELCOME_AUTO_ADVANCE_MS);
  }

  window.scrollTo(0, 0);
}

/* 讓 inline onclick 能呼叫到 */
window.showScreen = showScreen;

/* 兔子 sprite 路徑（正式插圖放同檔名即可，不用改碼） */
var RABBIT_SPRITE_SRC = "assets/images/rabbit-sprite.png";

/**
 * 檢查兔子 sprite 是否存在；載入失敗時在 #screen-welcome 加上 .no-rabbit-sprite，
 * 由 CSS 切換成 emoji 佔位（跳躍位移仍保留）。
 */
function checkRabbitSprite() {
  var welcome = document.getElementById("screen-welcome");
  if (!welcome) return;
  var probe = new Image();
  probe.onerror = function () {
    welcome.classList.add("no-rabbit-sprite");
  };
  probe.onload = function () {
    welcome.classList.remove("no-rabbit-sprite");
  };
  probe.src = RABBIT_SPRITE_SRC;
}

/* =========================================================
   共用小工具
   ========================================================= */

/* Fisher–Yates 洗牌，回傳新陣列，不動到原本的資料 */
function shuffle(list) {
  var arr = list.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/* 目前由 playAudio() 播放中的 Audio 物件 */
var sharedAudio = null;

/**
 * 播放一段讀音音檔。音檔載入或播放失敗時，優先退回瀏覽器語音合成唸出
 * fallbackText；沒有 fallbackText 而有給 onUnavailable，就改呼叫它
 * （例如答對/答錯提示音沒有文字可唸，改用合成音效代替）。
 * 方便正式音檔還沒放進來時就能測整個流程。全程不丟例外。
 *
 * @param {string} path              音檔路徑
 * @param {string} [fallbackText]    音檔不可用時改用 speechSynthesis 唸的文字
 * @param {function(number):void} [onUnavailable]  兩者都不可用時的最後備援，
 *        參數是目前音效音量（0-1）
 * @returns {HTMLAudioElement|null}
 */
function playAudio(path, fallbackText, onUnavailable) {
  stopAudio();

  /* 音效總開關：關閉時完全不播（含語音合成 / 合成音效 fallback）*/
  if (typeof SettingsState !== "undefined" && !SettingsState.sfxEnabled) {
    return null;
  }
  /* 百分比 → 0-1 音量 */
  var vol =
    typeof SettingsState !== "undefined"
      ? Math.min(1, Math.max(0, SettingsState.sfxVolume / 100))
      : 1;

  var handled = false;
  function fallback() {
    if (handled) return;
    handled = true;
    try {
      if (fallbackText && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(fallbackText);
        u.lang = "zh-CN";
        u.rate = 0.85;
        u.volume = vol;
        window.speechSynthesis.speak(u);
      } else if (typeof onUnavailable === "function") {
        onUnavailable(vol);
      }
    } catch (e) {
      console.warn("[audio] 備援播放失敗：" + (fallbackText || path), e);
    }
  }

  try {
    var audio = new Audio(path);
    audio.volume = vol;
    sharedAudio = audio;

    audio.addEventListener("error", function () {
      console.warn("[audio] 音檔載入失敗，改用備援音效：" + path);
      fallback();
    });

    var maybePromise = audio.play();
    if (maybePromise && typeof maybePromise.catch === "function") {
      maybePromise.catch(function (err) {
        console.warn("[audio] 音檔無法播放，改用備援音效：" + path, err);
        fallback();
      });
    }
    return audio;
  } catch (e) {
    console.warn("[audio] 播放音檔時發生例外，改用備援音效：" + path, e);
    fallback();
    return null;
  }
}

/* 停掉目前播放的音檔與語音合成 */
function stopAudio() {
  if (sharedAudio) {
    try {
      sharedAudio.pause();
    } catch (e) {
      /* 忽略 */
    }
    sharedAudio = null;
  }
  try {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  } catch (e) {
    /* 忽略 */
  }
}

/* 答對 / 答錯提示音；三個遊戲模式共用。
   正式音檔放進 assets/audio/sfx/ 同檔名即可，程式不用改。
   音檔還沒準備好時，沒有文字可唸（不像拼音發音有語音合成可退），
   改用 Web Audio 即時合成一個短音效，這樣不用等音檔也聽得到提示音。 */
var SFX_CORRECT_PATH = "assets/audio/sfx/correct.mp3";
var SFX_INCORRECT_PATH = "assets/audio/sfx/incorrect.mp3";

/* 共用的 AudioContext（延遲建立：瀏覽器要求要在使用者操作後才能啟用）*/
var sharedAudioCtx = null;
function getAudioCtx() {
  try {
    if (!sharedAudioCtx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      sharedAudioCtx = new Ctx();
    }
    if (sharedAudioCtx.state === "suspended") {
      sharedAudioCtx.resume();
    }
    return sharedAudioCtx;
  } catch (e) {
    console.warn("[audio] 無法建立 AudioContext，跳過合成提示音", e);
    return null;
  }
}

/**
 * 合成一段極短的提示音效，取代還沒準備好的 correct.mp3 / incorrect.mp3。
 * 答對＝兩個音上揚的清脆鈴聲；答錯＝下降的低沉短音。
 * @param {boolean} correct
 * @param {number} vol  0-1，已依 SettingsState.sfxVolume 換算
 */
function playSynthFeedbackTone(correct, vol) {
  var ctx = getAudioCtx();
  if (!ctx) return;
  var now = ctx.currentTime;
  var notes = correct ? [523.25, 783.99] : [220, 164.81]; // 答對：C5→G5／答錯：A3→E3
  var noteDur = correct ? 0.11 : 0.16;
  notes.forEach(function (freq, i) {
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = correct ? "sine" : "square";
    osc.frequency.value = freq;
    var start = now + i * noteDur;
    var end = start + noteDur;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(0.35 * vol, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, end);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(end + 0.02);
  });
}

/**
 * 播放答對／答錯提示音。是否播放、音量大小都由 playAudio() 內部依
 * SettingsState.sfxEnabled / sfxVolume 決定，這裡不用重複判斷；
 * 正式音檔不可用時自動退回 playSynthFeedbackTone() 合成音效。
 * @param {boolean} correct
 */
function playFeedbackSfx(correct) {
  playAudio(correct ? SFX_CORRECT_PATH : SFX_INCORRECT_PATH, null, function (vol) {
    playSynthFeedbackTone(correct, vol);
  });
}

/* =========================================================
   設定（音效 / 背景音樂 / 介面語言）
   ========================================================= */

var SETTINGS_STORAGE_KEY = "pinyinGarden.settings.v1";

var SETTINGS_DEFAULTS = {
  sfxEnabled: true, // 音效總開關（按鈕音、答對答錯音、拼音發音）
  sfxVolume: 70, // 0-100
  bgmEnabled: true, // 背景音樂開關
  bgmVolume: 70, // 0-100
  language: "zh", // 介面語言（只影響 UI 文字，不影響教學內容）
};

/**
 * 全域設定狀態。初始為預設值；loadSettings() 會用 localStorage 的紀錄覆寫。
 *   { sfxEnabled, sfxVolume, bgmEnabled, bgmVolume, language }
 */
var SettingsState = {
  sfxEnabled: SETTINGS_DEFAULTS.sfxEnabled,
  sfxVolume: SETTINGS_DEFAULTS.sfxVolume,
  bgmEnabled: SETTINGS_DEFAULTS.bgmEnabled,
  bgmVolume: SETTINGS_DEFAULTS.bgmVolume,
  language: SETTINGS_DEFAULTS.language,
};

/* 查一個介面字串；找不到就回退到 zh，再找不到回傳 key 本身 */
function t(key) {
  var dict = window.uiStrings || {};
  var lang = SettingsState.language || "zh";
  if (dict[lang] && dict[lang][key] != null) return dict[lang][key];
  if (dict.zh && dict.zh[key] != null) return dict.zh[key];
  return key;
}

/**
 * 套用介面語言：把頁面上所有 data-i18n / data-i18n-aria 元素換成該語言的文字。
 * 可在任何畫面呼叫。只動介面用語，不動教學內容。
 */
function applyLanguage(langCode) {
  var dict = window.uiStrings || {};
  var table = dict[langCode] || dict.zh || {};
  var fallback = dict.zh || {};
  function lookup(key) {
    if (table[key] != null) return table[key];
    if (fallback[key] != null) return fallback[key];
    return null;
  }

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var v = lookup(el.getAttribute("data-i18n"));
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    var v = lookup(el.getAttribute("data-i18n-aria"));
    if (v != null) el.setAttribute("aria-label", v);
  });

  var title = lookup("appTitle");
  if (title) document.title = title;
  var langAttr = (window.uiLangAttr && window.uiLangAttr[langCode]) || langCode;
  document.documentElement.setAttribute("lang", langAttr);
}

/* App 啟動時執行一次：讀 localStorage、套用語言、把設定頁 UI 同步到目前狀態 */
function loadSettings() {
  try {
    var raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (raw) {
      var saved = JSON.parse(raw);
      if (saved && typeof saved === "object") {
        if (typeof saved.sfxEnabled === "boolean") SettingsState.sfxEnabled = saved.sfxEnabled;
        if (typeof saved.bgmEnabled === "boolean") SettingsState.bgmEnabled = saved.bgmEnabled;
        SettingsState.sfxVolume = clampVolume(saved.sfxVolume, SettingsState.sfxVolume);
        SettingsState.bgmVolume = clampVolume(saved.bgmVolume, SettingsState.bgmVolume);
        if (window.uiStrings && window.uiStrings[saved.language]) {
          SettingsState.language = saved.language;
        }
      }
    }
  } catch (e) {
    console.warn("[settings] 讀取 localStorage 失敗，改用預設值", e);
  }

  buildLanguageList();
  applyLanguage(SettingsState.language);
  syncSettingsUI();
  /* TODO(bgm): 之後有背景音樂素材時，這裡依 SettingsState.bgmEnabled / bgmVolume 起始播放 */
}

function clampVolume(value, fallback) {
  var n = Number(value);
  if (!isFinite(n)) return fallback;
  return Math.min(100, Math.max(0, Math.round(n)));
}

function persistSettings() {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(SettingsState));
  } catch (e) {
    console.warn("[settings] 寫入 localStorage 失敗", e);
  }
}

/**
 * 共用：更新一項設定並「立即生效 + 立即存檔」，不需要儲存按鈕。
 * @param {string} key   sfxEnabled | sfxVolume | bgmEnabled | bgmVolume | language
 * @param {*}      value
 */
function updateSetting(key, value) {
  if (!(key in SettingsState)) return;

  if (key === "sfxVolume" || key === "bgmVolume") {
    value = clampVolume(value, SettingsState[key]);
  }
  SettingsState[key] = value;
  persistSettings();

  if (key === "language") {
    applyLanguage(value);
    syncSettingsUI();
  } else {
    /* 音效 / 音量：更新設定頁 UI 顯示（百分比、灰階、開關） */
    syncSettingsUI();
    /* TODO(bgm): bgmEnabled / bgmVolume 變更時，之後接上背景音樂的播放 / 音量控制 */
  }
}

/* 產生語言選單（語言名稱一律用該語言自稱，不翻譯）*/
function buildLanguageList() {
  var ul = document.getElementById("set-lang-list");
  if (!ul || !window.uiLanguageNames) return;
  ul.innerHTML = "";
  window.uiLanguageNames.forEach(function (item) {
    var li = document.createElement("li");
    li.setAttribute("role", "option");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-option";
    btn.setAttribute("data-lang", item.code);
    btn.innerHTML =
      '<span class="lang-option__check" aria-hidden="true">✓</span>' +
      '<span class="lang-option__name"></span>';
    btn.querySelector(".lang-option__name").textContent = item.name;
    btn.addEventListener("click", function () {
      updateSetting("language", item.code);
    });
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

/* 把設定頁的控制項同步到目前 SettingsState */
function syncSettingsUI() {
  syncAudioRow("sfx", SettingsState.sfxEnabled, SettingsState.sfxVolume);
  syncAudioRow("bgm", SettingsState.bgmEnabled, SettingsState.bgmVolume);

  var langBtns = document.querySelectorAll("#set-lang-list .lang-option");
  langBtns.forEach(function (btn) {
    var on = btn.getAttribute("data-lang") === SettingsState.language;
    btn.classList.toggle("is-selected", on);
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });
}

function syncAudioRow(prefix, enabled, volume) {
  var toggle = document.getElementById("set-" + prefix + "-toggle");
  var slider = document.getElementById("set-" + prefix + "-volume");
  var pct = document.getElementById("set-" + prefix + "-pct");
  var row = document.getElementById("set-" + prefix + "-row");
  if (toggle) toggle.checked = !!enabled;
  if (slider) {
    slider.value = String(volume);
    slider.disabled = !enabled; // 關閉時滑桿不可調（數值仍保留）
  }
  if (pct) pct.textContent = volume + "%";
  if (row) row.classList.toggle("is-disabled", !enabled);
}

window.applyLanguage = applyLanguage;
window.updateSetting = updateSetting;

/* =========================================================
   遊戲模式 1（聽音辨拼音）
   ========================================================= */

/**
 * 模式 1 的遊戲狀態，全部集中在這個物件，避免和其他模式的變數互相干擾。
 *
 *   total        {number}   本回合題數（固定 10，來自 mode1-questions.js 的 MODE1_TOTAL）
 *   questions    {Array}    本回合實際使用的題目；已隨機排序，每題的 options 也已隨機打散。
 *                           每筆：{ audio, correct, options: string[] }
 *   current      {number}   目前題號索引（0-based）。0 = 第 1 題，答完第 10 題後 = 10。
 *   score        {number}   累計答對題數（答對 +1，答錯不扣），只在結果畫面顯示。
 *   locked       {boolean}  本題是否已作答（true 時忽略後續點擊）。
 *   advanceTimer {number|null}  「答完 → 進下一題」的 setTimeout handle。
 */
var Mode1State = {
  total: 10,
  questions: [],
  current: 0,
  score: 0,
  locked: false,
  advanceTimer: null,
};


/* Fisher–Yates 洗牌，回傳新陣列，不動到原本的資料 */
function mode1Shuffle(list) {
  var arr = list.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/* 停掉目前的音檔與待跳轉計時器（切換題目 / 離開畫面前呼叫） */
function mode1ClearTransients() {
  if (Mode1State.advanceTimer !== null) {
    clearTimeout(Mode1State.advanceTimer);
    Mode1State.advanceTimer = null;
  }
  stopAudio();
  var playBtn = document.getElementById("mode1-play-btn");
  if (playBtn) playBtn.classList.remove("is-playing");
  var nextBtn1 = document.getElementById("mode1-next-btn");
  if (nextBtn1) nextBtn1.hidden = true;
}

/**
 * 開始 / 重新開始模式 1：
 * 重置狀態（分數、題號、進度條歸零）、重新隨機排列題目與選項，
 * 切到 screen-mode1，渲染第 1 題。
 * 主頁「遊戲模式 1」按鈕與結果畫面「再玩一次」都呼叫這個函式。
 */
function startMode1() {
  mode1ClearTransients();

  var bank =
    typeof window.MODE1_QUESTIONS !== "undefined" ? window.MODE1_QUESTIONS : [];
  var total =
    typeof window.MODE1_TOTAL !== "undefined" ? window.MODE1_TOTAL : bank.length;

  /* 隨機排題目、取本回合題數，再逐題打散選項順序 */
  var picked = mode1Shuffle(bank).slice(0, total);
  Mode1State.questions = picked.map(function (q) {
    return {
      audio: q.audio,
      correct: q.correct,
      options: mode1Shuffle(q.options),
    };
  });
  Mode1State.total = Mode1State.questions.length || total;
  Mode1State.current = 0;
  Mode1State.score = 0;
  Mode1State.locked = false;

  /* 切回遊戲畫面、隱藏結果畫面 */
  var playView = document.getElementById("mode1-play");
  var resultView = document.getElementById("mode1-result");
  if (playView) playView.hidden = false;
  if (resultView) resultView.hidden = true;

  showScreen("screen-mode1");

  if (Mode1State.questions.length === 0) {
    console.warn("[mode1] 題庫是空的（mode1-questions.js 未載入？），無法開始。");
    return;
  }
  mode1BuildTicks();
  mode1SetRabbit(0);
  mode1RenderQuestion();
}

/* 依總題數在進度條下方鋪出 1~總題數 的刻度 */
function mode1BuildTicks() {
  var ol = document.getElementById("mode1-progress-ticks");
  if (!ol) return;
  ol.innerHTML = "";
  for (var i = 1; i <= Mode1State.total; i++) {
    var li = document.createElement("li");
    li.textContent = String(i);
    ol.appendChild(li);
  }
}

/* 標記目前題號（is-current）與已答過的題號（is-done）*/
function mode1UpdateTicks() {
  var ol = document.getElementById("mode1-progress-ticks");
  if (!ol) return;
  var items = ol.children;
  for (var i = 0; i < items.length; i++) {
    items[i].classList.toggle("is-current", i === Mode1State.current);
    items[i].classList.toggle("is-done", i < Mode1State.current);
  }
}

/* 把兔子對齊到第 answeredCount 個題號刻度的正上方
   （0 = 第 1 題刻度，total-1 = 最後一題刻度；CSS 用同一組公式定位刻度）*/
function mode1SetRabbit(answeredCount) {
  var rabbit = document.getElementById("mode1-rabbit");
  if (!rabbit) return;
  var denom = Mode1State.total > 1 ? Mode1State.total - 1 : 1;
  var pos = answeredCount / denom;
  if (pos < 0) pos = 0;
  if (pos > 1) pos = 1;
  rabbit.style.setProperty("--rabbit-pos", String(pos));
}

/* 渲染目前題目：重建 4 個選項按鈕、解鎖作答、嘗試自動播放讀音 */
function mode1RenderQuestion() {
  var q = Mode1State.questions[Mode1State.current];
  if (!q) return;

  Mode1State.locked = false;

  mode1UpdateTicks();

  var grid = document.getElementById("mode1-options");
  if (grid) {
    grid.innerHTML = "";
    q.options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", function () {
        mode1Answer(opt, btn);
      });
      grid.appendChild(btn);
    });
  }

  /* 進到新題目時，兔子停在「已答題數 = current」的位置 */
  mode1SetRabbit(Mode1State.current);

  /* 自動播一次讀音（失敗不影響流程） */
  mode1PlayAudio();
}

/**
 * 播放（或重播）目前題目的讀音。沿用共用 playAudio()，因此音效總開關 /
 * 音量設定（SettingsState.sfxEnabled / sfxVolume）同樣適用；
 * 音檔不可用時退回語音合成唸出正確答案，全程不讓流程卡住。
 */
function mode1PlayAudio() {
  var q = Mode1State.questions[Mode1State.current];
  if (!q) return;

  var playBtn = document.getElementById("mode1-play-btn");
  if (playBtn) playBtn.classList.add("is-playing");

  function stopPulse() {
    if (playBtn) playBtn.classList.remove("is-playing");
  }

  var audio = playAudio(q.audio, q.correct);
  if (audio) {
    audio.addEventListener("ended", stopPulse);
    audio.addEventListener("error", stopPulse);
  }
  /* 走語音合成或立即失敗時，讓脈動動畫最多轉 1.5 秒 */
  setTimeout(stopPulse, 1500);
}

/**
 * 處理一次作答。
 * @param {string} chosen - 使用者點的選項字串
 * @param {HTMLButtonElement} btnEl - 被點的按鈕
 */
function mode1Answer(chosen, btnEl) {
  if (Mode1State.locked) return;
  Mode1State.locked = true;

  var q = Mode1State.questions[Mode1State.current];
  var grid = document.getElementById("mode1-options");
  var buttons = grid ? grid.querySelectorAll(".option-btn") : [];

  /* 鎖定所有選項 */
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.add("is-locked");
  }

  /* 答題當下停掉題目讀音的脈動效果，讓答對/答錯提示音接著播 */
  var playBtn1 = document.getElementById("mode1-play-btn");
  if (playBtn1) playBtn1.classList.remove("is-playing");

  if (chosen === q.correct) {
    Mode1State.score += 1;
    if (btnEl) btnEl.classList.add("feedback-correct");
    playFeedbackSfx(true);
  } else {
    if (btnEl) btnEl.classList.add("feedback-incorrect");
    /* 標出正解 */
    for (var k = 0; k < buttons.length; k++) {
      if (buttons[k].textContent === q.correct) {
        buttons[k].classList.add("option-reveal");
      }
    }
    playFeedbackSfx(false);
  }

  /* 顯示「下一題」按鈕，等玩家點擊才前進（不再自動跳題） */
  var nextBtn1 = document.getElementById("mode1-next-btn");
  if (nextBtn1) nextBtn1.hidden = false;
}

/* 玩家點擊「下一題」：兔子前進一格、進入下一題（或結果畫面） */
function mode1Next() {
  if (!Mode1State.locked) return;
  var nextBtn1 = document.getElementById("mode1-next-btn");
  if (nextBtn1) nextBtn1.hidden = true;

  mode1SetRabbit(Mode1State.current + 1);
  Mode1State.current += 1;

  if (Mode1State.current >= Mode1State.total) {
    mode1ShowResult();
  } else {
    mode1RenderQuestion();
  }
}

/* 顯示結果畫面（同一個 screen 容器內切換內容） */
function mode1ShowResult() {
  mode1ClearTransients();

  var playView = document.getElementById("mode1-play");
  var resultView = document.getElementById("mode1-result");
  if (playView) playView.hidden = true;
  if (resultView) resultView.hidden = false;

  var scoreEl = document.getElementById("mode1-score");
  var totalEl = document.getElementById("mode1-total");
  if (scoreEl) scoreEl.textContent = String(Mode1State.score);
  if (totalEl) totalEl.textContent = String(Mode1State.total);
}

/* 離開模式 1 回主頁：先清乾淨計時器與音檔，再切畫面 */
function mode1Exit() {
  mode1ClearTransients();
  showScreen("screen-home");
}

window.startMode1 = startMode1;
window.mode1PlayAudio = mode1PlayAudio;
window.mode1Next = mode1Next;
window.mode1Exit = mode1Exit;

/* =========================================================
   遊戲模式 2（聲調大考驗）
   ========================================================= */

/**
 * 模式 2 的遊戲狀態，集中管理，避免和其他模式互相干擾。
 *
 *   total        {number}   本回合題數（固定 10）
 *   questions    {Array}    本回合題目；已隨機排序，每題 options 也已打散。
 *                           每筆：{ audio, correct, options: string[] }
 *   current      {number}   目前題號索引（0-based）
 *   score        {number}   累計答對題數（答對 +1、答錯不扣），只在結果畫面顯示
 *   locked       {boolean}  本題是否已作答（true 時忽略點擊）
 *   advanceTimer {number|null}  「答完 → 進下一題」的 setTimeout handle
 */
var Mode2State = {
  total: 10,
  questions: [],
  current: 0,
  score: 0,
  locked: false,
  advanceTimer: null,
};


/* 停掉音檔與待跳轉計時器（切題 / 離開畫面前呼叫）*/
function mode2ClearTransients() {
  if (Mode2State.advanceTimer !== null) {
    clearTimeout(Mode2State.advanceTimer);
    Mode2State.advanceTimer = null;
  }
  stopAudio();
  var playBtn = document.getElementById("mode2-play-btn");
  if (playBtn) playBtn.classList.remove("is-playing");
  var nextBtn2 = document.getElementById("mode2-next-btn");
  if (nextBtn2) nextBtn2.hidden = true;
}

/**
 * 進入 / 重新開始模式 2：
 * 重置 Mode2State、打亂題目與選項順序、切到 screen-mode2、顯示第一題、更新進度條。
 * 主頁「遊戲模式 2」按鈕與結果畫面「再玩一次」都呼叫這個。
 */
function startMode2() {
  mode2ClearTransients();

  var bank =
    typeof window.mode2Questions !== "undefined" ? window.mode2Questions : [];
  var total =
    typeof window.MODE2_TOTAL !== "undefined" ? window.MODE2_TOTAL : bank.length;

  var picked = shuffle(bank).slice(0, total);
  Mode2State.questions = picked.map(function (q) {
    return {
      audio: q.audio,
      correct: q.correct,
      options: shuffle(q.options),
    };
  });
  Mode2State.total = Mode2State.questions.length || total;
  Mode2State.current = 0;
  Mode2State.score = 0;
  Mode2State.locked = false;

  var playView = document.getElementById("mode2-play");
  var resultView = document.getElementById("mode2-result");
  if (playView) playView.hidden = false;
  if (resultView) resultView.hidden = true;

  showScreen("screen-mode2");

  if (Mode2State.questions.length === 0) {
    console.warn("[mode2] 題庫是空的（mode2-questions.js 未載入？），無法開始。");
    return;
  }
  mode2BuildTicks();
  mode2SetRabbit(0);
  mode2RenderQuestion();
}

/* 依總題數鋪出 1~總題數 的進度刻度 */
function mode2BuildTicks() {
  var ol = document.getElementById("mode2-progress-ticks");
  if (!ol) return;
  ol.innerHTML = "";
  for (var i = 1; i <= Mode2State.total; i++) {
    var li = document.createElement("li");
    li.textContent = String(i);
    ol.appendChild(li);
  }
}

/* 標記目前題號（is-current）與已答過的題號（is-done）*/
function mode2UpdateTicks() {
  var ol = document.getElementById("mode2-progress-ticks");
  if (!ol) return;
  var items = ol.children;
  for (var i = 0; i < items.length; i++) {
    items[i].classList.toggle("is-current", i === Mode2State.current);
    items[i].classList.toggle("is-done", i < Mode2State.current);
  }
}

/* 把兔子對齊到第 answeredCount 個題號刻度的正上方（同 mode1SetRabbit）*/
function mode2SetRabbit(answeredCount) {
  var rabbit = document.getElementById("mode2-rabbit");
  if (!rabbit) return;
  var denom = Mode2State.total > 1 ? Mode2State.total - 1 : 1;
  var pos = answeredCount / denom;
  if (pos < 0) pos = 0;
  if (pos > 1) pos = 1;
  rabbit.style.setProperty("--rabbit-pos", String(pos));
}

/* 渲染目前題目：重建 4 個聲調選項、解鎖作答、播放讀音 */
function mode2RenderQuestion() {
  var q = Mode2State.questions[Mode2State.current];
  if (!q) return;

  Mode2State.locked = false;
  mode2UpdateTicks();

  var grid = document.getElementById("mode2-options");
  if (grid) {
    grid.innerHTML = "";
    q.options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      /* pinyin-text：拼音選項一律用 Varela Round，避免聲調符號位移 */
      btn.className = "option-btn pinyin-text";
      btn.textContent = opt;
      btn.dataset.pinyin = opt;
      btn.addEventListener("click", function () {
        mode2Answer(opt, btn);
      });
      grid.appendChild(btn);
    });
  }

  mode2SetRabbit(Mode2State.current);
  mode2PlayAudio();
}

/* 播放（或重播）目前題目讀音；音檔不可用時退回語音合成唸 correct */
function mode2PlayAudio() {
  var q = Mode2State.questions[Mode2State.current];
  if (!q) return;

  var btn = document.getElementById("mode2-play-btn");
  if (btn) btn.classList.add("is-playing");

  function stopPulse() {
    if (btn) btn.classList.remove("is-playing");
  }

  var audio = playAudio(q.audio, q.correct);
  if (audio) {
    audio.addEventListener("ended", stopPulse);
    audio.addEventListener("error", stopPulse);
  }
  /* 走語音合成或立即失敗時，讓脈動動畫最多轉 1.5 秒 */
  setTimeout(stopPulse, 1500);
}

/**
 * 處理一次作答。
 * @param {string} chosen  使用者點的拼寫
 * @param {HTMLButtonElement} btnEl  被點的按鈕
 */
function mode2Answer(chosen, btnEl) {
  if (Mode2State.locked) return;
  Mode2State.locked = true;

  var q = Mode2State.questions[Mode2State.current];
  var grid = document.getElementById("mode2-options");
  var buttons = grid ? grid.querySelectorAll(".option-btn") : [];

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.add("is-locked");
  }

  /* 答題當下停掉題目讀音的脈動效果，讓答對/答錯提示音接著播 */
  var playBtn2 = document.getElementById("mode2-play-btn");
  if (playBtn2) playBtn2.classList.remove("is-playing");

  if (chosen === q.correct) {
    Mode2State.score += 1;
    if (btnEl) btnEl.classList.add("feedback-correct");
    playFeedbackSfx(true);
  } else {
    if (btnEl) btnEl.classList.add("feedback-incorrect");
    for (var k = 0; k < buttons.length; k++) {
      if (buttons[k].dataset.pinyin === q.correct) {
        buttons[k].classList.add("option-reveal");
      }
    }
    playFeedbackSfx(false);
  }

  /* 顯示「下一題」按鈕，等玩家點擊才前進（不再自動跳題） */
  var nextBtn2 = document.getElementById("mode2-next-btn");
  if (nextBtn2) nextBtn2.hidden = false;
}

/* 玩家點擊「下一題」：兔子前進一格、進入下一題（或結果畫面） */
function mode2Next() {
  if (!Mode2State.locked) return;
  var nextBtn2 = document.getElementById("mode2-next-btn");
  if (nextBtn2) nextBtn2.hidden = true;

  mode2SetRabbit(Mode2State.current + 1);
  Mode2State.current += 1;

  if (Mode2State.current >= Mode2State.total) {
    mode2ShowResult();
  } else {
    mode2RenderQuestion();
  }
}

/* 顯示結果畫面（同一個 screen 容器內切換內容）*/
function mode2ShowResult() {
  mode2ClearTransients();

  var playView = document.getElementById("mode2-play");
  var resultView = document.getElementById("mode2-result");
  if (playView) playView.hidden = true;
  if (resultView) resultView.hidden = false;

  var scoreEl = document.getElementById("mode2-score");
  var totalEl = document.getElementById("mode2-total");
  if (scoreEl) scoreEl.textContent = String(Mode2State.score);
  if (totalEl) totalEl.textContent = String(Mode2State.total);
}

/* 離開模式 2 回主頁：先清乾淨計時器與音檔，再切畫面 */
function mode2Exit() {
  mode2ClearTransients();
  showScreen("screen-home");
}

window.startMode2 = startMode2;
window.mode2PlayAudio = mode2PlayAudio;
window.mode2Next = mode2Next;
window.mode2Exit = mode2Exit;

/* =========================================================
   遊戲模式 3（聽音選拼音 — 詞語版）
   結構與模式 2 相同，只是題目是雙音節以上的詞語
   ========================================================= */

/**
 * 模式 3 的遊戲狀態，集中管理，避免和其他模式互相干擾。
 *
 *   total        {number}   本回合題數（固定 10）
 *   questions    {Array}    本回合題目；已隨機排序，每題 options 也已打散。
 *                           每筆：{ audio, correct, options: string[] }
 *   current      {number}   目前題號索引（0-based）
 *   score        {number}   累計答對題數（答對 +1、答錯不扣），只在結果畫面顯示
 *   locked       {boolean}  本題是否已作答（true 時忽略點擊）
 *   advanceTimer {number|null}  「答完 → 進下一題」的 setTimeout handle
 */
var Mode3State = {
  total: 10,
  questions: [],
  current: 0,
  score: 0,
  locked: false,
  advanceTimer: null,
};


/* 停掉音檔與待跳轉計時器（切題 / 離開畫面前呼叫）*/
function mode3ClearTransients() {
  if (Mode3State.advanceTimer !== null) {
    clearTimeout(Mode3State.advanceTimer);
    Mode3State.advanceTimer = null;
  }
  stopAudio();
  var playBtn = document.getElementById("mode3-play-btn");
  if (playBtn) playBtn.classList.remove("is-playing");
  var nextBtn3 = document.getElementById("mode3-next-btn");
  if (nextBtn3) nextBtn3.hidden = true;
}

/**
 * 進入 / 重新開始模式 3：
 * 重置 Mode3State、打亂題目與選項順序、切到 screen-mode3、顯示第一題、更新進度條。
 * 主頁「遊戲模式 3」按鈕與結果畫面「再玩一次」都呼叫這個。
 */
function startMode3() {
  mode3ClearTransients();

  var bank =
    typeof window.mode3Questions !== "undefined" ? window.mode3Questions : [];
  var total =
    typeof window.MODE3_TOTAL !== "undefined" ? window.MODE3_TOTAL : bank.length;

  var picked = shuffle(bank).slice(0, total);
  Mode3State.questions = picked.map(function (q) {
    return {
      audio: q.audio,
      correct: q.correct,
      options: shuffle(q.options),
    };
  });
  Mode3State.total = Mode3State.questions.length || total;
  Mode3State.current = 0;
  Mode3State.score = 0;
  Mode3State.locked = false;

  var playView = document.getElementById("mode3-play");
  var resultView = document.getElementById("mode3-result");
  if (playView) playView.hidden = false;
  if (resultView) resultView.hidden = true;

  showScreen("screen-mode3");

  if (Mode3State.questions.length === 0) {
    console.warn("[mode3] 題庫是空的（mode3-questions.js 未載入？），無法開始。");
    return;
  }
  mode3BuildTicks();
  mode3SetRabbit(0);
  mode3RenderQuestion();
}

/* 依總題數鋪出 1~總題數 的進度刻度 */
function mode3BuildTicks() {
  var ol = document.getElementById("mode3-progress-ticks");
  if (!ol) return;
  ol.innerHTML = "";
  for (var i = 1; i <= Mode3State.total; i++) {
    var li = document.createElement("li");
    li.textContent = String(i);
    ol.appendChild(li);
  }
}

/* 標記目前題號（is-current）與已答過的題號（is-done）*/
function mode3UpdateTicks() {
  var ol = document.getElementById("mode3-progress-ticks");
  if (!ol) return;
  var items = ol.children;
  for (var i = 0; i < items.length; i++) {
    items[i].classList.toggle("is-current", i === Mode3State.current);
    items[i].classList.toggle("is-done", i < Mode3State.current);
  }
}

/* 把兔子對齊到第 answeredCount 個題號刻度的正上方（同 mode1SetRabbit）*/
function mode3SetRabbit(answeredCount) {
  var rabbit = document.getElementById("mode3-rabbit");
  if (!rabbit) return;
  var denom = Mode3State.total > 1 ? Mode3State.total - 1 : 1;
  var pos = answeredCount / denom;
  if (pos < 0) pos = 0;
  if (pos > 1) pos = 1;
  rabbit.style.setProperty("--rabbit-pos", String(pos));
}

/* 渲染目前題目：重建 4 個詞語選項、解鎖作答、播放讀音 */
function mode3RenderQuestion() {
  var q = Mode3State.questions[Mode3State.current];
  if (!q) return;

  Mode3State.locked = false;
  mode3UpdateTicks();

  var grid = document.getElementById("mode3-options");
  if (grid) {
    grid.innerHTML = "";
    q.options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      /* pinyin-text：拼音選項一律用 Varela Round，避免聲調符號位移 */
      btn.className = "option-btn pinyin-text";
      btn.textContent = opt;
      btn.dataset.pinyin = opt;
      btn.addEventListener("click", function () {
        mode3Answer(opt, btn);
      });
      grid.appendChild(btn);
    });
  }

  mode3SetRabbit(Mode3State.current);
  mode3PlayAudio();
}

/* 播放（或重播）目前題目讀音；音檔不可用時退回語音合成唸 correct */
function mode3PlayAudio() {
  var q = Mode3State.questions[Mode3State.current];
  if (!q) return;

  var btn = document.getElementById("mode3-play-btn");
  if (btn) btn.classList.add("is-playing");

  function stopPulse() {
    if (btn) btn.classList.remove("is-playing");
  }

  var audio = playAudio(q.audio, q.correct);
  if (audio) {
    audio.addEventListener("ended", stopPulse);
    audio.addEventListener("error", stopPulse);
  }
  /* 走語音合成或立即失敗時，讓脈動動畫最多轉 1.5 秒 */
  setTimeout(stopPulse, 1500);
}

/**
 * 處理一次作答。
 * @param {string} chosen  使用者點的拼寫
 * @param {HTMLButtonElement} btnEl  被點的按鈕
 */
function mode3Answer(chosen, btnEl) {
  if (Mode3State.locked) return;
  Mode3State.locked = true;

  var q = Mode3State.questions[Mode3State.current];
  var grid = document.getElementById("mode3-options");
  var buttons = grid ? grid.querySelectorAll(".option-btn") : [];

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.add("is-locked");
  }

  /* 答題當下停掉題目讀音的脈動效果，讓答對/答錯提示音接著播 */
  var playBtn3 = document.getElementById("mode3-play-btn");
  if (playBtn3) playBtn3.classList.remove("is-playing");

  if (chosen === q.correct) {
    Mode3State.score += 1;
    if (btnEl) btnEl.classList.add("feedback-correct");
    playFeedbackSfx(true);
  } else {
    if (btnEl) btnEl.classList.add("feedback-incorrect");
    for (var k = 0; k < buttons.length; k++) {
      if (buttons[k].dataset.pinyin === q.correct) {
        buttons[k].classList.add("option-reveal");
      }
    }
    playFeedbackSfx(false);
  }

  /* 顯示「下一題」按鈕，等玩家點擊才前進（不再自動跳題） */
  var nextBtn3 = document.getElementById("mode3-next-btn");
  if (nextBtn3) nextBtn3.hidden = false;
}

/* 玩家點擊「下一題」：兔子前進一格、進入下一題（或結果畫面） */
function mode3Next() {
  if (!Mode3State.locked) return;
  var nextBtn3 = document.getElementById("mode3-next-btn");
  if (nextBtn3) nextBtn3.hidden = true;

  mode3SetRabbit(Mode3State.current + 1);
  Mode3State.current += 1;

  if (Mode3State.current >= Mode3State.total) {
    mode3ShowResult();
  } else {
    mode3RenderQuestion();
  }
}

/* 顯示結果畫面（同一個 screen 容器內切換內容）*/
function mode3ShowResult() {
  mode3ClearTransients();

  var playView = document.getElementById("mode3-play");
  var resultView = document.getElementById("mode3-result");
  if (playView) playView.hidden = true;
  if (resultView) resultView.hidden = false;

  var scoreEl = document.getElementById("mode3-score");
  var totalEl = document.getElementById("mode3-total");
  if (scoreEl) scoreEl.textContent = String(Mode3State.score);
  if (totalEl) totalEl.textContent = String(Mode3State.total);
}

/* 離開模式 3 回主頁：先清乾淨計時器與音檔，再切畫面 */
function mode3Exit() {
  mode3ClearTransients();
  showScreen("screen-home");
}

window.startMode3 = startMode3;
window.mode3PlayAudio = mode3PlayAudio;
window.mode3Next = mode3Next;
window.mode3Exit = mode3Exit;

/* =========================================================
   拼音總表（聲母 × 韻母矩陣）
   ========================================================= */

/* 目前選中的聲調（1-4）*/
var PinyinMatrixState = { tone: 1 };

/* 音檔資料夾。
   音節：<audioKey>_<聲調 1-4>.mp3
   聲母（本調呼讀音）：initial_<聲母>.mp3
   韻母（本調）：final_<韻母，ü→v>.mp3 */
var PINYIN_AUDIO_DIR = "assets/audio/pinyin-matrix/";

/* 聲母單獨發音時的「呼讀音」（語音合成 fallback 用；零聲母無音不可點）*/
var PINYIN_INITIAL_SOUND = {
  b: "bo", p: "po", m: "mo", f: "fo",
  d: "de", t: "te", n: "ne", l: "le",
  g: "ge", k: "ke", h: "he",
  j: "ji", q: "qi", x: "xi",
  zh: "zhi", ch: "chi", sh: "shi", r: "ri",
  z: "zi", c: "ci", s: "si",
};

/* 各主要母音的四聲調號 */
var PINYIN_TONE_MARKS = {
  a: ["ā", "á", "ǎ", "à"],
  e: ["ē", "é", "ě", "è"],
  i: ["ī", "í", "ǐ", "ì"],
  o: ["ō", "ó", "ǒ", "ò"],
  u: ["ū", "ú", "ǔ", "ù"],
  "ü": ["ǖ", "ǘ", "ǚ", "ǜ"],
};

/**
 * 把不帶聲調的拼寫加上聲調符號。
 * 標調規則：有 a 標 a；否則有 e 標 e；否則有 o 標 o；
 * 否則標最後出現的 i / u / ü（涵蓋 iu→u、ui→i）。
 */
function applyToneMark(base, tone) {
  if (!base || tone < 1 || tone > 4) return base || "";
  var pos = -1;
  var target = "";
  if (base.indexOf("a") !== -1) {
    target = "a";
    pos = base.indexOf("a");
  } else if (base.indexOf("e") !== -1) {
    target = "e";
    pos = base.indexOf("e");
  } else if (base.indexOf("o") !== -1) {
    target = "o";
    pos = base.indexOf("o");
  } else {
    var vowels = ["i", "u", "ü"];
    for (var k = 0; k < vowels.length; k++) {
      var idx = base.lastIndexOf(vowels[k]);
      if (idx > pos) {
        pos = idx;
        target = vowels[k];
      }
    }
  }
  if (pos === -1 || !PINYIN_TONE_MARKS[target]) return base;
  return base.slice(0, pos) + PINYIN_TONE_MARKS[target][tone - 1] + base.slice(pos + 1);
}

/**
 * 進入拼音總表：建立整個矩陣、綁定事件、預設第一聲，並切到 screen-pinyin。
 * 主頁「拼音表」按鈕呼叫這個。
 */
function renderPinyinMatrix() {
  var data = typeof window.pinyinMatrixData !== "undefined" ? window.pinyinMatrixData : null;
  var host = document.getElementById("pinyin-matrix");
  if (!host || !data) {
    console.warn("[pinyin] 找不到矩陣容器或資料（pinyin-matrix-data.js 未載入？）");
    showScreen("screen-pinyin");
    return;
  }

  /* 把韻母攤平，並標出每個分組的第一個韻母（畫粗分隔線用）*/
  var flatFinals = [];
  data.finalGroups.forEach(function (g, gi) {
    g.finals.forEach(function (f, fi) {
      flatFinals.push({ final: f, groupStart: gi > 0 && fi === 0 });
    });
  });

  var html =
    '<table><thead><tr><th scope="col" data-i18n="pinyinCorner">' +
    t("pinyinCorner") +
    "</th>";
  flatFinals.forEach(function (ff) {
    html +=
      '<th scope="col" class="hd-final' +
      (ff.groupStart ? " group-start" : "") +
      '"><button type="button" class="hd-btn pinyin-text" data-final="' +
      ff.final +
      '">' +
      ff.final +
      "</button></th>";
  });
  html += "</tr></thead><tbody>";

  data.initials.forEach(function (ini) {
    var rowHead =
      ini === "零聲母"
        ? '<th scope="row">零聲母</th>'
        : '<th scope="row"><button type="button" class="hd-btn" data-initial="' +
          ini +
          '">' +
          ini +
          "</button></th>";
    html += "<tr>" + rowHead;
    flatFinals.forEach(function (ff) {
      var gs = ff.groupStart ? " group-start" : "";
      var syl = data.syllables[ini + "_" + ff.final];
      if (!syl) {
        html += '<td class="cell-empty' + gs + '"></td>';
        return;
      }
      var toneBits = syl.tones
        .map(function (t) {
          return t ? "1" : "0";
        })
        .join("");
      html +=
        '<td class="cell-td' +
        gs +
        '"><button type="button" class="cell-syllable pinyin-text" data-base="' +
        syl.base +
        '" data-tones="' +
        toneBits +
        '" data-audiokey="' +
        syl.audioKey +
        '"></button></td>';
    });
    html += "</tr>";
  });
  html += "</tbody></table>";
  host.innerHTML = html;

  /* 點擊（事件委派）：
     - 格子 → 播放「該音節 + 目前選中聲調」
     - 聲母 / 韻母表頭 → 播放本調發音，不受聲調頁籤影響 */
  host.onclick = function (e) {
    var t = e.target;
    if (!t || !t.closest) return;

    var cell = t.closest(".cell-syllable");
    if (cell) {
      if (cell.disabled || cell.classList.contains("is-disabled")) return;
      playAudio(
        PINYIN_AUDIO_DIR + cell.dataset.audiokey + "_" + PinyinMatrixState.tone + ".mp3",
        cell.textContent
      );
      return;
    }

    var hd = t.closest(".hd-btn");
    if (!hd) return;
    if (hd.dataset.initial) {
      var ini = hd.dataset.initial;
      playAudio(
        PINYIN_AUDIO_DIR + "initial_" + ini + ".mp3",
        PINYIN_INITIAL_SOUND[ini] || ini
      );
    } else if (hd.dataset.final) {
      var fin = hd.dataset.final;
      playAudio(
        PINYIN_AUDIO_DIR + "final_" + fin.replace(/ü/g, "v") + ".mp3",
        fin
      );
    }
  };

  /* 聲調按鈕：只更新格子文字與可點狀態，不整個重建 */
  var toneBtns = document.querySelectorAll("#screen-pinyin .tone-btn");
  toneBtns.forEach(function (btn) {
    btn.onclick = function () {
      var t = parseInt(btn.getAttribute("data-tone"), 10);
      if (!t || t === PinyinMatrixState.tone) return;
      PinyinMatrixState.tone = t;
      updatePinyinToneButtons();
      updateMatrixTones();
    };
  });

  PinyinMatrixState.tone = 1;
  updatePinyinToneButtons();
  updateMatrixTones();
  showScreen("screen-pinyin");
}

/* 聲調按鈕的選中狀態 */
function updatePinyinToneButtons() {
  var btns = document.querySelectorAll("#screen-pinyin .tone-btn");
  btns.forEach(function (btn) {
    var active = parseInt(btn.getAttribute("data-tone"), 10) === PinyinMatrixState.tone;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

/* 依目前聲調更新每個格子的文字與可點擊狀態（不重建 DOM）*/
function updateMatrixTones() {
  var tone = PinyinMatrixState.tone;
  var cells = document.querySelectorAll("#pinyin-matrix .cell-syllable");
  cells.forEach(function (el) {
    el.textContent = applyToneMark(el.dataset.base, tone);
    var ok = el.dataset.tones.charAt(tone - 1) === "1";
    el.classList.toggle("is-disabled", !ok);
    el.disabled = !ok;
    el.setAttribute("aria-disabled", ok ? "false" : "true");
  });
}

window.renderPinyinMatrix = renderPinyinMatrix;

/* 初始畫面 */
document.addEventListener("DOMContentLoaded", function () {
  loadSettings(); // 讀 localStorage、套用語言、同步設定頁 UI
  checkRabbitSprite();
  showScreen(DEFAULT_SCREEN);
});
