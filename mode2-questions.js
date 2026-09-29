/* =========================================================
   拼音花園 · 遊戲模式 2「聲調大考驗」題庫
   ---------------------------------------------------------
   每題一個物件，欄位：
     audio   {string}   音檔路徑，相對 index.html。
                        題目都是「單音節」，跟拼音總表的音節格子是同一種
                        音檔，所以直接共用 assets/audio/pinyin-matrix/ 資料夾，
                        不另外設 assets/audio/mode2/。
                        命名慣例：<audioKey>_<聲調數字>.mp3（ü 一律轉 v），
                        跟 pinyin-matrix-data.js 裡每個音節的 audioKey 完全對應
                        （例：ma_2.mp3 = má）。只要哪個音節在拼音總表已經有
                        音檔，這裡就會自動可用。
                        （音檔不存在時，app.js 會自動改用瀏覽器語音合成唸出 correct）
     correct {string}   正確答案：與音檔聲調相符的拼寫（含聲調符號）。
     options {string[]}  同一個音節的 4 個聲調拼寫（一聲→四聲），
                        一定包含 correct。顯示時 app.js 會再隨機打散順序。

   設計原則：
     - 涵蓋單母音（a / ei / …）與複合韻母（ai, ao, ou, an, en, ang, eng）。
     - 正解聲調分布盡量平均：本題庫為 1聲x2、2聲x3、3聲x2、4聲x3。
   一回合固定取 10 題（MODE2_TOTAL），題目順序每回合會被打散。
   ========================================================= */

const mode2Questions = [
  // 1. 單母音 a：二聲
  { audio: "assets/audio/pinyin-matrix/ma_2.mp3",   correct: "má",   options: ["mā", "má", "mǎ", "mà"] },

  // 2. 複合韻母 ai：二聲
  { audio: "assets/audio/pinyin-matrix/bai_2.mp3",  correct: "bái",  options: ["bāi", "bái", "bǎi", "bài"] },

  // 3. 複合韻母 ei：三聲
  { audio: "assets/audio/pinyin-matrix/bei_3.mp3",  correct: "běi",  options: ["bēi", "béi", "běi", "bèi"] },

  // 4. 複合韻母 ao：三聲
  { audio: "assets/audio/pinyin-matrix/hao_3.mp3",  correct: "hǎo",  options: ["hāo", "háo", "hǎo", "hào"] },

  // 5. 複合韻母 ou：四聲
  { audio: "assets/audio/pinyin-matrix/dou_4.mp3",  correct: "dòu",  options: ["dōu", "dóu", "dǒu", "dòu"] },

  // 6. 鼻韻母 an：一聲
  { audio: "assets/audio/pinyin-matrix/san_1.mp3",  correct: "sān",  options: ["sān", "sán", "sǎn", "sàn"] },

  // 7. 鼻韻母 en：二聲
  { audio: "assets/audio/pinyin-matrix/men_2.mp3",  correct: "mén",  options: ["mēn", "mén", "měn", "mèn"] },

  // 8. 鼻韻母 ang：四聲
  { audio: "assets/audio/pinyin-matrix/tang_4.mp3", correct: "tàng", options: ["tāng", "táng", "tǎng", "tàng"] },

  // 9. 鼻韻母 eng：一聲
  { audio: "assets/audio/pinyin-matrix/deng_1.mp3", correct: "dēng", options: ["dēng", "déng", "děng", "dèng"] },

  // 10. 單母音 u：四聲
  { audio: "assets/audio/pinyin-matrix/bu_4.mp3",   correct: "bù",   options: ["bū", "bú", "bǔ", "bù"] },
];

/* 一回合的題數 */
const MODE2_TOTAL = 10;

if (typeof window !== "undefined") {
  window.mode2Questions = mode2Questions;
  window.MODE2_TOTAL = MODE2_TOTAL;
}
