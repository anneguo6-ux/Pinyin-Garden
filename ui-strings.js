/* =========================================================
   拼音花園 · 介面文字對照表（i18n）
   ---------------------------------------------------------
   只放「介面用語」：按鈕、標題、選單、提示、aria-label。
   ★ 不放教學內容 ★：拼音、漢字、例句、題目、聲母/韻母字母、
     「零聲母」等一律維持原文，不翻譯。

   用法：需要隨語言變化的元素加上
     data-i18n="key"        → 置換 textContent
     data-i18n-aria="key"   → 置換 aria-label
   再由 app.js 的 applyLanguage(langCode) 統一套用。

   目前 zh / en 為正式版本；ja / vi / id 為初稿，待校對。
   缺 key 時 applyLanguage 會自動回退到 zh。
   ========================================================= */

const uiStrings = {
  /* --- 繁體中文（預設）--- */
  zh: {
    appTitle: "拼音樂園",
    startButton: "開始",
    navHome: "首頁",
    navSettings: "設定",
    homePinyinTable: "拼音表",
    homeMode1: "遊戲模式 1",
    homeMode2: "遊戲模式 2",
    homeMode3: "遊戲模式 3",
    backToHome: "返回主頁",
    playAgain: "再玩一次",
    pinyinTitle: "拼音總表",
    pinyinCorner: "聲＼韻",
    toneSelectGroup: "選擇聲調",
    tone1: "第一聲",
    tone2: "第二聲",
    tone3: "第三聲",
    tone4: "第四聲",
    matrixRegionLabel: "拼音聲母韻母矩陣",
    progressLabel: "答題進度",
    playPrompt: "播放題目讀音",
    replayPrompt: "重新播放讀音",
    nextQuestion: "下一題",
    settingsAudioSection: "音效設定",
    settingsSoundEffects: "音效",
    settingsMusic: "背景音樂",
    settingsSfxVolume: "音效音量",
    settingsBgmVolume: "背景音樂音量",
    settingsLanguage: "介面語言",
  },

  /* --- English --- */
  en: {
    appTitle: "Pinyin Playground",
    startButton: "Start",
    navHome: "Home",
    navSettings: "Settings",
    homePinyinTable: "Pinyin Table",
    homeMode1: "Mode 1",
    homeMode2: "Mode 2",
    homeMode3: "Mode 3",
    backToHome: "Back to Home",
    playAgain: "Play Again",
    pinyinTitle: "Pinyin Chart",
    pinyinCorner: "Init.＼Final",
    toneSelectGroup: "Select tone",
    tone1: "1st tone",
    tone2: "2nd tone",
    tone3: "3rd tone",
    tone4: "4th tone",
    matrixRegionLabel: "Pinyin initials and finals matrix",
    progressLabel: "Quiz progress",
    playPrompt: "Play the audio",
    replayPrompt: "Replay the audio",
    nextQuestion: "Next Question",
    settingsAudioSection: "Audio",
    settingsSoundEffects: "Sound Effects",
    settingsMusic: "Background Music",
    settingsSfxVolume: "Sound effects volume",
    settingsBgmVolume: "Background music volume",
    settingsLanguage: "Language",
  },

  /* --- 日本語（初稿，待校對）--- */
  ja: {
    appTitle: "ピンインひろば",
    startButton: "スタート",
    navHome: "ホーム",
    navSettings: "設定",
    homePinyinTable: "ピンイン表",
    homeMode1: "モード 1",
    homeMode2: "モード 2",
    homeMode3: "モード 3",
    backToHome: "ホームに戻る",
    playAgain: "もう一度",
    pinyinTitle: "ピンイン総表",
    pinyinCorner: "声母＼韻母",
    toneSelectGroup: "声調を選ぶ",
    tone1: "第一声",
    tone2: "第二声",
    tone3: "第三声",
    tone4: "第四声",
    matrixRegionLabel: "ピンイン 声母・韻母の一覧表",
    progressLabel: "進捗",
    playPrompt: "音声を再生",
    replayPrompt: "もう一度再生",
    nextQuestion: "次の問題",
    settingsAudioSection: "サウンド",
    settingsSoundEffects: "効果音",
    settingsMusic: "BGM",
    settingsSfxVolume: "効果音の音量",
    settingsBgmVolume: "BGM の音量",
    settingsLanguage: "表示言語",
  },

  /* --- Tiếng Việt（bản nháp, chờ hiệu đính）--- */
  vi: {
    appTitle: "Vườn Phát Âm",
    startButton: "Bắt đầu",
    navHome: "Trang chủ",
    navSettings: "Cài đặt",
    homePinyinTable: "Bảng Phát Âm",
    homeMode1: "Chế độ 1",
    homeMode2: "Chế độ 2",
    homeMode3: "Chế độ 3",
    backToHome: "Về Trang chủ",
    playAgain: "Chơi lại",
    pinyinTitle: "Bảng Phát Âm Tổng Hợp",
    pinyinCorner: "Phụ âm＼Vần",
    toneSelectGroup: "Chọn thanh điệu",
    tone1: "Thanh 1",
    tone2: "Thanh 2",
    tone3: "Thanh 3",
    tone4: "Thanh 4",
    matrixRegionLabel: "Bảng phụ âm và vần pinyin",
    progressLabel: "Tiến độ",
    playPrompt: "Phát âm thanh",
    replayPrompt: "Phát lại âm thanh",
    nextQuestion: "Câu Tiếp Theo",
    settingsAudioSection: "Âm thanh",
    settingsSoundEffects: "Hiệu ứng âm thanh",
    settingsMusic: "Nhạc nền",
    settingsSfxVolume: "Âm lượng hiệu ứng",
    settingsBgmVolume: "Âm lượng nhạc nền",
    settingsLanguage: "Ngôn ngữ",
  },

  /* --- Bahasa Indonesia（draf, menunggu koreksi）--- */
  id: {
    appTitle: "Taman Pinyin",
    startButton: "Mulai",
    navHome: "Beranda",
    navSettings: "Pengaturan",
    homePinyinTable: "Tabel Pinyin",
    homeMode1: "Mode 1",
    homeMode2: "Mode 2",
    homeMode3: "Mode 3",
    backToHome: "Kembali ke Beranda",
    playAgain: "Main Lagi",
    pinyinTitle: "Tabel Pinyin Lengkap",
    pinyinCorner: "Awal＼Akhir",
    toneSelectGroup: "Pilih nada",
    tone1: "Nada 1",
    tone2: "Nada 2",
    tone3: "Nada 3",
    tone4: "Nada 4",
    matrixRegionLabel: "Matriks awalan dan akhiran pinyin",
    progressLabel: "Kemajuan",
    playPrompt: "Putar audio",
    replayPrompt: "Putar ulang audio",
    nextQuestion: "Pertanyaan Berikutnya",
    settingsAudioSection: "Audio",
    settingsSoundEffects: "Efek Suara",
    settingsMusic: "Musik Latar",
    settingsSfxVolume: "Volume efek suara",
    settingsBgmVolume: "Volume musik latar",
    settingsLanguage: "Bahasa",
  },
};

/* 各語言對應的 <html lang> 值 */
const uiLangAttr = { zh: "zh-Hant", en: "en", ja: "ja", vi: "vi", id: "id" };

/* 語言選單顯示用的自稱名（永遠用該語言本身書寫，不翻譯）*/
const uiLanguageNames = [
  { code: "zh", name: "繁體中文" },
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "id", name: "Bahasa Indonesia" },
];

if (typeof window !== "undefined") {
  window.uiStrings = uiStrings;
  window.uiLangAttr = uiLangAttr;
  window.uiLanguageNames = uiLanguageNames;
}
