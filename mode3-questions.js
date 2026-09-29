/* =========================================================
   拼音花園 · 遊戲模式 3「聽音選拼音 — 詞語版」題庫
   ---------------------------------------------------------
   每題一個物件，欄位：
     audio   {string}   音檔路徑，相對 index.html。
     correct {string}   正確答案：與音檔發音完全相符的整串拼音詞語（含聲調符號）。
     options {string[]}  4 個完整拼音詞語（一定包含 correct）。
                        顯示時 app.js 會再隨機打散順序。

   本題庫由 COCT 核心詞彙表（第 1-3* 級）中的 773 個雙字詞
   自動產生干擾項：每題 3 個干擾選項分別修改一個音節的聲調、
   聲母（常見混淆對，如 n/l、zh/z、f/h 等）、韻母（常見混淆對，
   如 an/ang、in/ing 等），確保每個干擾項與正解只有一處不同。
   一回合固定取 10 題（MODE3_TOTAL），題目順序每回合會被打散。
   ========================================================= */

const mode3Questions = [
  // 阿姨
  {
    audio: "assets/audio/mode3/a1yi2.mp3",
    correct: "āyí",
    options: ["áyí", "āyí", "ēyí", "ǎyí"],
  },
  // 安全
  {
    audio: "assets/audio/mode3/an1quan2.mp3",
    correct: "ānquán",
    options: ["ānquán", "ǎnquán", "ānjuán", "āngquán"],
  },
  // 爸爸
  {
    audio: "assets/audio/mode3/ba4ba5.mp3",
    correct: "bàba",
    options: ["bǎba", "bàba", "pàba", "bèba"],
  },
  // 班次
  {
    audio: "assets/audio/mode3/ban1ci4.mp3",
    correct: "bāncì",
    options: ["bàncì", "pāncì", "bāngcì", "bāncì"],
  },
  // 辦法
  {
    audio: "assets/audio/mode3/ban4fa3.mp3",
    correct: "bànfǎ",
    options: ["bànfǎ", "bánfǎ", "pànfǎ", "bàngfǎ"],
  },
  // 包子
  {
    audio: "assets/audio/mode3/bao1zi5.mp3",
    correct: "bāozi",
    options: ["bǎozi", "pāozi", "bōuzi", "bāozi"],
  },
  // 巴士
  {
    audio: "assets/audio/mode3/ba1shi4.mp3",
    correct: "bāshì",
    options: ["bāshì", "báshì", "pāshì", "bēshì"],
  },
  // 報告
  {
    audio: "assets/audio/mode3/bao4gao4.mp3",
    correct: "bàogào",
    options: ["bǎogào", "bàogào", "pàogào", "bòugào"],
  },
  // 吃飯
  {
    audio: "assets/audio/mode3/chi1fan4.mp3",
    correct: "chīfàn",
    options: ["chìfàn", "cīfàn", "chīfàn", "chiēfàn"],
  },
  // 半夜
  {
    audio: "assets/audio/mode3/ban4ye4.mp3",
    correct: "bànyè",
    options: ["bǎnyè", "bànyè", "pànyè", "bàngyè"],
  },
  // 幫忙
  {
    audio: "assets/audio/mode3/bang1mang2.mp3",
    correct: "bāngmáng",
    options: ["bāngmáng", "bángmáng", "pāngmáng", "bānmáng"],
  },
  // 杯子
  {
    audio: "assets/audio/mode3/bei1zi5.mp3",
    correct: "bēizi",
    options: ["béizi", "pēizi", "buīzi", "bēizi"],
  },
  // 白天
  {
    audio: "assets/audio/mode3/bai2tian1.mp3",
    correct: "báitiān",
    options: ["bāitiān", "báitiān", "páitiān", "báitiāng"],
  },
  // 必須
  {
    audio: "assets/audio/mode3/bi4xu1.mp3",
    correct: "bìxū",
    options: ["bíxū", "pìxū", "bìxū", "bièxū"],
  },
  // 大家
  {
    audio: "assets/audio/mode3/da4jia1.mp3",
    correct: "dàjiā",
    options: ["dàjiā", "dājiā", "tàjiā", "dèjiā"],
  },
  // 包括
  {
    audio: "assets/audio/mode3/bao1gua1.mp3",
    correct: "bāoguā",
    options: ["báoguā", "pāoguā", "bōuguā", "bāoguā"],
  },
  // 幫助
  {
    audio: "assets/audio/mode3/bang1zhu4.mp3",
    correct: "bāngzhù",
    options: ["bǎngzhù", "pāngzhù", "bānzhù", "bāngzhù"],
  },
  // 鼻子
  {
    audio: "assets/audio/mode3/bi2zi5.mp3",
    correct: "bízi",
    options: ["bízi", "bǐzi", "pízi", "biézi"],
  },
  // 搬家
  {
    audio: "assets/audio/mode3/ban1jia1.mp3",
    correct: "bānjiā",
    options: ["bānjiā", "bànjiā", "pānjiā", "bāngjiā"],
  },
  // 畢業
  {
    audio: "assets/audio/mode3/bi4ye4.mp3",
    correct: "bìyè",
    options: ["bǐyè", "bìyè", "pìyè", "bièyè"],
  },
  // 大學
  {
    audio: "assets/audio/mode3/da4xue2.mp3",
    correct: "dàxué",
    options: ["dǎxué", "tàxué", "dàxué", "dèxué"],
  },
  // 保護
  {
    audio: "assets/audio/mode3/bao3hu4.mp3",
    correct: "bǎohù",
    options: ["bǎohù", "bāohù", "pǎohù", "bǒuhù"],
  },
  // 本來
  {
    audio: "assets/audio/mode3/ben3lai2.mp3",
    correct: "běnlái",
    options: ["bēnlái", "pěnlái", "běnlái", "běnglái"],
  },
  // 不錯
  {
    audio: "assets/audio/mode3/bu2cuo4.mp3",
    correct: "búcuò",
    options: ["bǔcuò", "púcuò", "bóucuò", "búcuò"],
  },
  // 棒球
  {
    audio: "assets/audio/mode3/bang4qiu2.mp3",
    correct: "bàngqiú",
    options: ["bāngqiú", "pàngqiú", "bànqiú", "bàngqiú"],
  },
  // 便當
  {
    audio: "assets/audio/mode3/bian4dang1.mp3",
    correct: "biàndāng",
    options: ["biándāng", "biàndāng", "piàndāng", "biàngdāng"],
  },
  // 弟弟
  {
    audio: "assets/audio/mode3/di4di5.mp3",
    correct: "dìdi",
    options: ["dídi", "tìdi", "dìdi", "dièdi"],
  },
  // 鼻水
  {
    audio: "assets/audio/mode3/bi2shui3.mp3",
    correct: "bíshuǐ",
    options: ["bìshuǐ", "píshuǐ", "bíshuǐ", "biéshuǐ"],
  },
  // 比較
  {
    audio: "assets/audio/mode3/bi3jiao4.mp3",
    correct: "bǐjiào",
    options: ["bìjiào", "pǐjiào", "biějiào", "bǐjiào"],
  },
  // 餐廳
  {
    audio: "assets/audio/mode3/can1ting1.mp3",
    correct: "cāntīng",
    options: ["cǎntīng", "chāntīng", "cāntīng", "cāngtīng"],
  },
  // 報紙
  {
    audio: "assets/audio/mode3/bao4zhi3.mp3",
    correct: "bàozhǐ",
    options: ["bàozhǐ", "báozhǐ", "pàozhǐ", "bòuzhǐ"],
  },
  // 餅乾
  {
    audio: "assets/audio/mode3/bing3gan1.mp3",
    correct: "bǐnggān",
    options: ["bínggān", "pǐnggān", "bǐnggān", "bǐngān"],
  },
  // 電話
  {
    audio: "assets/audio/mode3/dian4hua4.mp3",
    correct: "diànhuà",
    options: ["diánhuà", "tiànhuà", "diànghuà", "diànhuà"],
  },
  // 標準
  {
    audio: "assets/audio/mode3/biao1zhun3.mp3",
    correct: "biāozhǔn",
    options: ["biǎozhǔn", "piāozhǔn", "biáozhǔn", "biāozhǔn"],
  },
  // 比賽
  {
    audio: "assets/audio/mode3/bi3sai4.mp3",
    correct: "bǐsài",
    options: ["bísài", "pǐsài", "bǐsài", "biěsài"],
  },
  // 常常
  {
    audio: "assets/audio/mode3/chang2chang2.mp3",
    correct: "chángcháng",
    options: ["chāngcháng", "cángcháng", "chángcháng", "cháncháng"],
  },
  // 背包
  {
    audio: "assets/audio/mode3/bei1bao1.mp3",
    correct: "bēibāo",
    options: ["bēibāo", "bèibāo", "pēibāo", "buībāo"],
  },
  // 不必
  {
    audio: "assets/audio/mode3/bu2bi4.mp3",
    correct: "búbì",
    options: ["bùbì", "púbì", "búbì", "bóubì"],
  },
  // 東西
  {
    audio: "assets/audio/mode3/dong1xi5.mp3",
    correct: "dōngxi",
    options: ["dòngxi", "dōngxi", "tōngxi", "dōngxie"],
  },
  // 伯父
  {
    audio: "assets/audio/mode3/bo2fu4.mp3",
    correct: "bófù",
    options: ["bōfù", "pófù", "béfù", "bófù"],
  },
  // 別人
  {
    audio: "assets/audio/mode3/bie2ren2.mp3",
    correct: "biérén",
    options: ["biěrén", "biérén", "piérén", "büérén"],
  },
  // 唱歌
  {
    audio: "assets/audio/mode3/chang4ge1.mp3",
    correct: "chànggē",
    options: ["chànggē", "chānggē", "cànggē", "chàngē"],
  },
  // 北部
  {
    audio: "assets/audio/mode3/bei3bu4.mp3",
    correct: "běibù",
    options: ["běibù", "béibù", "pěibù", "buǐbù"],
  },
  // 不但
  {
    audio: "assets/audio/mode3/bu2dan4.mp3",
    correct: "búdàn",
    options: ["búdàn", "būdàn", "púdàn", "bóudàn"],
  },
  // 多少
  {
    audio: "assets/audio/mode3/duo1shao3.mp3",
    correct: "duōshǎo",
    options: ["duóshǎo", "tuōshǎo", "duōshǒu", "duōshǎo"],
  },
  // 伯母
  {
    audio: "assets/audio/mode3/bo2mu3.mp3",
    correct: "bómǔ",
    options: ["bōmǔ", "pómǔ", "bémǔ", "bómǔ"],
  },
  // 病人
  {
    audio: "assets/audio/mode3/bing4ren2.mp3",
    correct: "bìngrén",
    options: ["bīngrén", "bìngrén", "pìngrén", "bìnrén"],
  },
  // 車子
  {
    audio: "assets/audio/mode3/che1zi5.mp3",
    correct: "chēzi",
    options: ["chězi", "chēzi", "cēzi", "chōzi"],
  },
  // 本子
  {
    audio: "assets/audio/mode3/ben3zi5.mp3",
    correct: "běnzi",
    options: ["běnzi", "bènzi", "pěnzi", "běngzi"],
  },
  // 不用
  {
    audio: "assets/audio/mode3/bu2yong4.mp3",
    correct: "búyòng",
    options: ["búyòng", "bùyòng", "púyòng", "bóuyòng"],
  },
  // 兒子
  {
    audio: "assets/audio/mode3/er2zi5.mp3",
    correct: "érzi",
    options: ["ěrzi", "érzhi", "érzie", "érzi"],
  },
  // 不管
  {
    audio: "assets/audio/mode3/bu4guan3.mp3",
    correct: "bùguǎn",
    options: ["búguǎn", "pùguǎn", "bòuguǎn", "bùguǎn"],
  },
  // 不過
  {
    audio: "assets/audio/mode3/bu2guo4.mp3",
    correct: "búguò",
    options: ["bǔguò", "búguò", "púguò", "bóuguò"],
  },
  // 地方
  {
    audio: "assets/audio/mode3/di4fang1.mp3",
    correct: "dìfāng",
    options: ["dīfāng", "tìfāng", "dìfāng", "dièfāng"],
  },
  // 比方
  {
    audio: "assets/audio/mode3/bi3fang1.mp3",
    correct: "bǐfāng",
    options: ["bìfāng", "bǐfāng", "pǐfāng", "biěfāng"],
  },
  // 不同
  {
    audio: "assets/audio/mode3/bu4tong2.mp3",
    correct: "bùtóng",
    options: ["bǔtóng", "bùtóng", "pùtóng", "bòutóng"],
  },
  // 法國
  {
    audio: "assets/audio/mode3/fa3guo2.mp3",
    correct: "fǎguó",
    options: ["fàguó", "fǎguó", "hǎguó", "fěguó"],
  },
  // 參觀
  {
    audio: "assets/audio/mode3/can1guan1.mp3",
    correct: "cānguān",
    options: ["cānguān", "cǎnguān", "chānguān", "cāngguān"],
  },
  // 部分
  {
    audio: "assets/audio/mode3/bu4fen4.mp3",
    correct: "bùfèn",
    options: ["būfèn", "pùfèn", "bùfèn", "bòufèn"],
  },
  // 電腦
  {
    audio: "assets/audio/mode3/dian4nao3.mp3",
    correct: "diànnǎo",
    options: ["diánnǎo", "tiànnǎo", "diànnǎo", "diàngnǎo"],
  },
  // 別的
  {
    audio: "assets/audio/mode3/bie2de5.mp3",
    correct: "biéde",
    options: ["biède", "piéde", "biéde", "büéde"],
  },
  // 草莓
  {
    audio: "assets/audio/mode3/cao3mei2.mp3",
    correct: "cǎoméi",
    options: ["cāoméi", "cǎoméi", "chǎoméi", "cǒuméi"],
  },
  // 哥哥
  {
    audio: "assets/audio/mode3/ge1ge5.mp3",
    correct: "gēge",
    options: ["gēge", "gége", "kēge", "gōge"],
  },
  // 餐桌
  {
    audio: "assets/audio/mode3/can1zhuo1.mp3",
    correct: "cānzhuō",
    options: ["cǎnzhuō", "chānzhuō", "cānzhuō", "cāngzhuō"],
  },
  // 參加
  {
    audio: "assets/audio/mode3/can1jia1.mp3",
    correct: "cānjiā",
    options: ["cánjiā", "cānjiā", "chānjiā", "cāngjiā"],
  },
  // 電視
  {
    audio: "assets/audio/mode3/dian4shi4.mp3",
    correct: "diànshì",
    options: ["diánshì", "tiànshì", "diànshì", "diàngshì"],
  },
  // 冰塊
  {
    audio: "assets/audio/mode3/bing1kuai4.mp3",
    correct: "bīngkuài",
    options: ["bǐngkuài", "pīngkuài", "bīnkuài", "bīngkuài"],
  },
  // 廁所
  {
    audio: "assets/audio/mode3/ce4suo3.mp3",
    correct: "cèsuǒ",
    options: ["cěsuǒ", "chèsuǒ", "còsuǒ", "cèsuǒ"],
  },
  // 工作
  {
    audio: "assets/audio/mode3/gong1zuo4.mp3",
    correct: "gōngzuò",
    options: ["gǒngzuò", "kōngzuò", "gōngzuó", "gōngzuò"],
  },
  // 程度
  {
    audio: "assets/audio/mode3/cheng2du4.mp3",
    correct: "chéngdù",
    options: ["chěngdù", "chéngdù", "céngdù", "chéndù"],
  },
  // 成績
  {
    audio: "assets/audio/mode3/cheng2ji1.mp3",
    correct: "chéngjī",
    options: ["chéngjī", "chèngjī", "céngjī", "chénjī"],
  },
  // 電影
  {
    audio: "assets/audio/mode3/dian4ying3.mp3",
    correct: "diànyǐng",
    options: ["diányǐng", "tiànyǐng", "diànyǐng", "diàngyǐng"],
  },
  // 冰箱
  {
    audio: "assets/audio/mode3/bing1xiang1.mp3",
    correct: "bīngxiāng",
    options: ["bíngxiāng", "bīngxiāng", "pīngxiāng", "bīnxiāng"],
  },
  // 城市
  {
    audio: "assets/audio/mode3/cheng2shi4.mp3",
    correct: "chéngshì",
    options: ["chěngshì", "céngshì", "chéngshì", "chénshì"],
  },
  // 孩子
  {
    audio: "assets/audio/mode3/hai2zi5.mp3",
    correct: "háizi",
    options: ["hǎizi", "fáizi", "háizie", "háizi"],
  },
  // 成功
  {
    audio: "assets/audio/mode3/cheng2gong1.mp3",
    correct: "chénggōng",
    options: ["chěnggōng", "cénggōng", "chéngōng", "chénggōng"],
  },
  // 春天
  {
    audio: "assets/audio/mode3/chun1tian1.mp3",
    correct: "chūntiān",
    options: ["chùntiān", "chūntiān", "cūntiān", "chūntiāng"],
  },
  // 多久
  {
    audio: "assets/audio/mode3/duo1jiu3.mp3",
    correct: "duōjiǔ",
    options: ["duòjiǔ", "tuōjiǔ", "duōjiū", "duōjiǔ"],
  },
  // 伯伯
  {
    audio: "assets/audio/mode3/bo2bo5.mp3",
    correct: "bóbo",
    options: ["bōbo", "bóbo", "póbo", "bébo"],
  },
  // 遲到
  {
    audio: "assets/audio/mode3/chi2dao4.mp3",
    correct: "chídào",
    options: ["chǐdào", "chídào", "cídào", "chiédào"],
  },
  // 出生
  {
    audio: "assets/audio/mode3/chu1sheng1.mp3",
    correct: "chūshēng",
    options: ["chūshēng", "chúshēng", "cūshēng", "chōushēng"],
  },
  // 大人
  {
    audio: "assets/audio/mode3/da4ren2.mp3",
    correct: "dàrén",
    options: ["dārén", "dàrén", "tàrén", "dèrén"],
  },
  // 耳朵
  {
    audio: "assets/audio/mode3/er3duo5.mp3",
    correct: "ěrduo",
    options: ["ērduo", "ěrduo", "ěrtuo", "érduo"],
  },
  // 菜單
  {
    audio: "assets/audio/mode3/cai4dan1.mp3",
    correct: "càidān",
    options: ["càidān", "cǎidān", "chàidān", "càidāng"],
  },
  // 出國
  {
    audio: "assets/audio/mode3/chu1guo2.mp3",
    correct: "chūguó",
    options: ["chǔguó", "chūguó", "cūguó", "chōuguó"],
  },
  // 今年
  {
    audio: "assets/audio/mode3/jin1nian2.mp3",
    correct: "jīnnián",
    options: ["jìnnián", "qīnnián", "jīngnián", "jīnnián"],
  },
  // 除了
  {
    audio: "assets/audio/mode3/chu2le5.mp3",
    correct: "chúle",
    options: ["chūle", "chúle", "cúle", "chóule"],
  },
  // 但是
  {
    audio: "assets/audio/mode3/dan4shi4.mp3",
    correct: "dànshì",
    options: ["dǎnshì", "tànshì", "dànshì", "dàngshì"],
  },
  // 方便
  {
    audio: "assets/audio/mode3/fang1bian4.mp3",
    correct: "fāngbiàn",
    options: ["fàngbiàn", "hāngbiàn", "fānbiàn", "fāngbiàn"],
  },
  // 叉子
  {
    audio: "assets/audio/mode3/cha1zi5.mp3",
    correct: "chāzi",
    options: ["chǎzi", "chāzi", "cāzi", "chēzi"],
  },
  // 出口
  {
    audio: "assets/audio/mode3/chu1kou3.mp3",
    correct: "chūkǒu",
    options: ["chùkǒu", "cūkǒu", "chōukǒu", "chūkǒu"],
  },
  // 今天
  {
    audio: "assets/audio/mode3/jin1tian1.mp3",
    correct: "jīntiān",
    options: ["jíntiān", "jīntiān", "qīntiān", "jīngtiān"],
  },
  // 春季
  {
    audio: "assets/audio/mode3/chun1ji4.mp3",
    correct: "chūnjì",
    options: ["chúnjì", "cūnjì", "chūnjiè", "chūnjì"],
  },
  // 當然
  {
    audio: "assets/audio/mode3/dang1ran2.mp3",
    correct: "dāngrán",
    options: ["dāngrán", "dángrán", "tāngrán", "dānrán"],
  },
  // 房間
  {
    audio: "assets/audio/mode3/fang2jian1.mp3",
    correct: "fángjiān",
    options: ["fángjiān", "fǎngjiān", "hángjiān", "fánjiān"],
  },
  // 茶館
  {
    audio: "assets/audio/mode3/cha2guan3.mp3",
    correct: "cháguǎn",
    options: ["chǎguǎn", "cáguǎn", "chéguǎn", "cháguǎn"],
  },
  // 出門
  {
    audio: "assets/audio/mode3/chu1men2.mp3",
    correct: "chūmén",
    options: ["chùmén", "chūmén", "cūmén", "chōumén"],
  },
  // 咖啡
  {
    audio: "assets/audio/mode3/ka1fei1.mp3",
    correct: "kāfēi",
    options: ["kǎfēi", "gāfēi", "kēfēi", "kāfēi"],
  },
  // 春假
  {
    audio: "assets/audio/mode3/chun1jia4.mp3",
    correct: "chūnjià",
    options: ["chúnjià", "cūnjià", "chǔnjià", "chūnjià"],
  },
  // 德國
  {
    audio: "assets/audio/mode3/de2guo2.mp3",
    correct: "déguó",
    options: ["děguó", "déguó", "téguó", "dóguó"],
  },
  // 房子
  {
    audio: "assets/audio/mode3/fang2zi5.mp3",
    correct: "fángzi",
    options: ["fàngzi", "hángzi", "fángzi", "fánzi"],
  },
  // 超商
  {
    audio: "assets/audio/mode3/chao1shang1.mp3",
    correct: "chāoshāng",
    options: ["chàoshāng", "chāoshāng", "cāoshāng", "chōushāng"],
  },
  // 廚房
  {
    audio: "assets/audio/mode3/chu2fang2.mp3",
    correct: "chúfáng",
    options: ["chúfáng", "chǔfáng", "cúfáng", "chóufáng"],
  },
  // 可能
  {
    audio: "assets/audio/mode3/ke3neng2.mp3",
    correct: "kěnéng",
    options: ["kēnéng", "gěnéng", "kǒnéng", "kěnéng"],
  },
  // 除夕
  {
    audio: "assets/audio/mode3/chu2xi4.mp3",
    correct: "chúxì",
    options: ["chǔxì", "cúxì", "chóuxì", "chúxì"],
  },
  // 第一
  {
    audio: "assets/audio/mode3/di4yi1.mp3",
    correct: "dìyī",
    options: ["díyī", "tìyī", "dièyī", "dìyī"],
  },
  // 非常
  {
    audio: "assets/audio/mode3/fei1chang2.mp3",
    correct: "fēicháng",
    options: ["féicháng", "hēicháng", "fēicháng", "fuīcháng"],
  },
  // 超市
  {
    audio: "assets/audio/mode3/chao1shi4.mp3",
    correct: "chāoshì",
    options: ["cháoshì", "cāoshì", "chōushì", "chāoshì"],
  },
  // 傳統
  {
    audio: "assets/audio/mode3/chuan2tong3.mp3",
    correct: "chuántǒng",
    options: ["chuántǒng", "chuàntǒng", "cuántǒng", "chuángtǒng"],
  },
  // 可以
  {
    audio: "assets/audio/mode3/ke3yi3.mp3",
    correct: "kěyǐ",
    options: ["kēyǐ", "gěyǐ", "kěyǐ", "kǒyǐ"],
  },
  // 從來
  {
    audio: "assets/audio/mode3/cong2lai2.mp3",
    correct: "cónglái",
    options: ["cónglái", "cònglái", "chónglái", "cōnglái"],
  },
  // 冬天
  {
    audio: "assets/audio/mode3/dong1tian1.mp3",
    correct: "dōngtiān",
    options: ["dóngtiān", "tōngtiān", "dōngtiāng", "dōngtiān"],
  },
  // 飛機
  {
    audio: "assets/audio/mode3/fei1ji1.mp3",
    correct: "fēijī",
    options: ["féijī", "hēijī", "fēijī", "fuījī"],
  },
  // 車站
  {
    audio: "assets/audio/mode3/che1zhan4.mp3",
    correct: "chēzhàn",
    options: ["chézhàn", "cēzhàn", "chēzhàn", "chōzhàn"],
  },
  // 春節
  {
    audio: "assets/audio/mode3/chun1jie2.mp3",
    correct: "chūnjié",
    options: ["chúnjié", "cūnjié", "chūnjüé", "chūnjié"],
  },
  // 老師
  {
    audio: "assets/audio/mode3/lao3shi1.mp3",
    correct: "lǎoshī",
    options: ["làoshī", "nǎoshī", "lǎoshī", "lǒushī"],
  },
  // 答案
  {
    audio: "assets/audio/mode3/da2an4.mp3",
    correct: "dáàn",
    options: ["dààn", "táàn", "dáàn", "déàn"],
  },
  // 發現
  {
    audio: "assets/audio/mode3/fa1xian4.mp3",
    correct: "fāxiàn",
    options: ["fǎxiàn", "hāxiàn", "fāxiàn", "fēxiàn"],
  },
  // 分鐘
  {
    audio: "assets/audio/mode3/fen1zhong1.mp3",
    correct: "fēnzhōng",
    options: ["fēnzhōng", "fénzhōng", "hēnzhōng", "fēngzhōng"],
  },
  // 窗戶
  {
    audio: "assets/audio/mode3/chuang1hu4.mp3",
    correct: "chuānghù",
    options: ["chuánghù", "cuānghù", "chuānghù", "chuānhù"],
  },
  // 打工
  {
    audio: "assets/audio/mode3/da3gong1.mp3",
    correct: "dǎgōng",
    options: ["dāgōng", "tǎgōng", "dǎgōng", "děgōng"],
  },
  // 沒有
  {
    audio: "assets/audio/mode3/mei2you3.mp3",
    correct: "méiyǒu",
    options: ["mēiyǒu", "muíyǒu", "méiyǒu", "méiyōu"],
  },
  // 大陸
  {
    audio: "assets/audio/mode3/da4lu4.mp3",
    correct: "dàlù",
    options: ["dālù", "tàlù", "dàlù", "dèlù"],
  },
  // 方法
  {
    audio: "assets/audio/mode3/fang1fa3.mp3",
    correct: "fāngfǎ",
    options: ["fàngfǎ", "hāngfǎ", "fānfǎ", "fāngfǎ"],
  },
  // 附近
  {
    audio: "assets/audio/mode3/fu4jin4.mp3",
    correct: "fùjìn",
    options: ["fǔjìn", "hùjìn", "fùjìn", "fòujìn"],
  },
  // 窗子
  {
    audio: "assets/audio/mode3/chuang1zi5.mp3",
    correct: "chuāngzi",
    options: ["chuǎngzi", "cuāngzi", "chuāngzi", "chuānzi"],
  },
  // 打折
  {
    audio: "assets/audio/mode3/da3zhe2.mp3",
    correct: "dǎzhé",
    options: ["dāzhé", "tǎzhé", "dǎzhé", "dězhé"],
  },
  // 美國
  {
    audio: "assets/audio/mode3/mei3guo2.mp3",
    correct: "měiguó",
    options: ["méiguó", "měiguó", "měikuó", "muǐguó"],
  },
  // 帶來
  {
    audio: "assets/audio/mode3/dai4lai2.mp3",
    correct: "dàilái",
    options: ["dǎilái", "tàilái", "dāilái", "dàilái"],
  },
  // 乾淨
  {
    audio: "assets/audio/mode3/gan1jing4.mp3",
    correct: "gānjìng",
    options: ["gǎnjìng", "kānjìng", "gāngjìng", "gānjìng"],
  },
  // 感冒
  {
    audio: "assets/audio/mode3/gan3mao4.mp3",
    correct: "gǎnmào",
    options: ["gānmào", "kǎnmào", "gǎngmào", "gǎnmào"],
  },
  // 聰明
  {
    audio: "assets/audio/mode3/cong1ming2.mp3",
    correct: "cōngmíng",
    options: ["cǒngmíng", "chōngmíng", "cōngmíng", "cōngmín"],
  },
  // 大概
  {
    audio: "assets/audio/mode3/da4gai4.mp3",
    correct: "dàgài",
    options: ["dágài", "tàgài", "dègài", "dàgài"],
  },
  // 妹妹
  {
    audio: "assets/audio/mode3/mei4mei5.mp3",
    correct: "mèimei",
    options: ["méimei", "mèimei", "muìmei", "mèimēi"],
  },
  // 擔心
  {
    audio: "assets/audio/mode3/dan1xin1.mp3",
    correct: "dānxīn",
    options: ["dánxīn", "dānxīn", "tānxīn", "dāngxīn"],
  },
  // 剛剛
  {
    audio: "assets/audio/mode3/gang1gang1.mp3",
    correct: "gānggāng",
    options: ["gánggāng", "kānggāng", "gāngāng", "gānggāng"],
  },
  // 告訴
  {
    audio: "assets/audio/mode3/gao4su4.mp3",
    correct: "gàosù",
    options: ["gàosù", "gǎosù", "kàosù", "gòusù"],
  },
  // 從前
  {
    audio: "assets/audio/mode3/cong2qian2.mp3",
    correct: "cóngqián",
    options: ["cōngqián", "cóngqián", "chóngqián", "cóngqiáng"],
  },
  // 到處
  {
    audio: "assets/audio/mode3/dao4chu4.mp3",
    correct: "dàochù",
    options: ["dàochù", "dāochù", "tàochù", "dòuchù"],
  },
  // 明天
  {
    audio: "assets/audio/mode3/ming2tian1.mp3",
    correct: "míngtiān",
    options: ["mìngtiān", "míngdiān", "míntiān", "míngtiān"],
  },
  // 當時
  {
    audio: "assets/audio/mode3/dang1shi2.mp3",
    correct: "dāngshí",
    options: ["dāngshí", "dǎngshí", "tāngshí", "dānshí"],
  },
  // 高興
  {
    audio: "assets/audio/mode3/gao1xing4.mp3",
    correct: "gāoxìng",
    options: ["gàoxìng", "gāoxìng", "kāoxìng", "gōuxìng"],
  },
  // 公車
  {
    audio: "assets/audio/mode3/gong1che1.mp3",
    correct: "gōngchē",
    options: ["gòngchē", "kōngchē", "gōngchō", "gōngchē"],
  },
  // 打算
  {
    audio: "assets/audio/mode3/da3suan4.mp3",
    correct: "dǎsuàn",
    options: ["dǎsuàn", "dàsuàn", "tǎsuàn", "děsuàn"],
  },
  // 底下
  {
    audio: "assets/audio/mode3/di3xia4.mp3",
    correct: "dǐxià",
    options: ["dǐxià", "dīxià", "tǐxià", "diěxià"],
  },
  // 名字（輕聲）
  {
    audio: "assets/audio/mode3/ming2zi5.mp3",
    correct: "míngzi",
    options: ["míngzì", "míngzhi", "mínzi", "míngzi"],
  },
  // 當中
  {
    audio: "assets/audio/mode3/dang1zhong1.mp3",
    correct: "dāngzhōng",
    options: ["dàngzhōng", "tāngzhōng", "dāngzhōng", "dānzhōng"],
  },
  // 高中
  {
    audio: "assets/audio/mode3/gao1zhong1.mp3",
    correct: "gāozhōng",
    options: ["gāozhōng", "gáozhōng", "kāozhōng", "gōuzhōng"],
  },
  // 功課
  {
    audio: "assets/audio/mode3/gong1ke4.mp3",
    correct: "gōngkè",
    options: ["gǒngkè", "kōngkè", "gōngkè", "gōngkò"],
  },
  // 大樓
  {
    audio: "assets/audio/mode3/da4lou2.mp3",
    correct: "dàlóu",
    options: ["dǎlóu", "dàlóu", "tàlóu", "dèlóu"],
  },
  // 地鐵
  {
    audio: "assets/audio/mode3/di4tie3.mp3",
    correct: "dìtiě",
    options: ["dìtiě", "dítiě", "tìtiě", "diètiě"],
  },
  // 哪裡
  {
    audio: "assets/audio/mode3/na3li3.mp3",
    correct: "nǎlǐ",
    options: ["nālǐ", "lǎlǐ", "nǎlǐ", "nělǐ"],
  },
  // 得到
  {
    audio: "assets/audio/mode3/de2dao4.mp3",
    correct: "dédào",
    options: ["dēdào", "tédào", "dédào", "dódào"],
  },
  // 公司
  {
    audio: "assets/audio/mode3/gong1si1.mp3",
    correct: "gōngsī",
    options: ["góngsī", "gōngsī", "kōngsī", "gōngsiē"],
  },
  // 公園
  {
    audio: "assets/audio/mode3/gong1yuan2.mp3",
    correct: "gōngyuán",
    options: ["gòngyuán", "kōngyuán", "gōngyuán", "gōngyuān"],
  },
  // 大門
  {
    audio: "assets/audio/mode3/da4men2.mp3",
    correct: "dàmén",
    options: ["dámén", "tàmén", "dàmén", "dèmén"],
  },
  // 店員
  {
    audio: "assets/audio/mode3/dian4yuan2.mp3",
    correct: "diànyuán",
    options: ["diǎnyuán", "tiànyuán", "diànyuán", "diàngyuán"],
  },
  // 那裡
  {
    audio: "assets/audio/mode3/na4li3.mp3",
    correct: "nàlǐ",
    options: ["nālǐ", "nàlǐ", "làlǐ", "nèlǐ"],
  },
  // 等到
  {
    audio: "assets/audio/mode3/deng3dao4.mp3",
    correct: "děngdào",
    options: ["dèngdào", "těngdào", "děngdào", "děndào"],
  },
  // 故事
  {
    audio: "assets/audio/mode3/gu4shi4.mp3",
    correct: "gùshì",
    options: ["gǔshì", "kùshì", "gùshì", "gòushì"],
  },
  // 國家
  {
    audio: "assets/audio/mode3/guo2jia1.mp3",
    correct: "guójiā",
    options: ["guòjiā", "guójiā", "kuójiā", "guōjiā"],
  },
  // 大衣
  {
    audio: "assets/audio/mode3/da4yi1.mp3",
    correct: "dàyī",
    options: ["dáyī", "tàyī", "dàyī", "dèyī"],
  },
  // 訂位
  {
    audio: "assets/audio/mode3/ding4wei4.mp3",
    correct: "dìngwèi",
    options: ["díngwèi", "tìngwèi", "dìnwèi", "dìngwèi"],
  },
  // 你們
  {
    audio: "assets/audio/mode3/ni3men5.mp3",
    correct: "nǐmen",
    options: ["nīmen", "lǐmen", "niěmen", "nǐmen"],
  },
  // 等等
  {
    audio: "assets/audio/mode3/deng3deng3.mp3",
    correct: "děngděng",
    options: ["děngděng", "dèngděng", "těngděng", "děnděng"],
  },
  // 好像
  {
    audio: "assets/audio/mode3/hao3xiang4.mp3",
    correct: "hǎoxiàng",
    options: ["hǎoxiàng", "háoxiàng", "fǎoxiàng", "hǒuxiàng"],
  },
  // 還是
  {
    audio: "assets/audio/mode3/hai2shi4.mp3",
    correct: "háishì",
    options: ["hàishì", "fáishì", "háishì", "háishiè"],
  },
  // 袋子
  {
    audio: "assets/audio/mode3/dai4zi5.mp3",
    correct: "dàizi",
    options: ["dàizi", "dǎizi", "tàizi", "dàizie"],
  },
  // 豆腐
  {
    audio: "assets/audio/mode3/dou4fu3.mp3",
    correct: "dòufǔ",
    options: ["dǒufǔ", "tòufǔ", "dòufǔ", "dàofǔ"],
  },
  // 朋友
  {
    audio: "assets/audio/mode3/peng2you3.mp3",
    correct: "péngyǒu",
    options: ["pěngyǒu", "péngyǒu", "béngyǒu", "pényǒu"],
  },
  // 低頭
  {
    audio: "assets/audio/mode3/di1tou2.mp3",
    correct: "dītóu",
    options: ["dītóu", "dǐtóu", "tītóu", "diētóu"],
  },
  // 後來
  {
    audio: "assets/audio/mode3/hou4lai2.mp3",
    correct: "hòulái",
    options: ["hóulái", "hòulái", "fòulái", "hàolái"],
  },
  // 後年
  {
    audio: "assets/audio/mode3/hou4nian2.mp3",
    correct: "hòunián",
    options: ["hòunián", "hóunián", "fòunián", "hàonián"],
  },
  // 蛋糕
  {
    audio: "assets/audio/mode3/dan4gao1.mp3",
    correct: "dàngāo",
    options: ["dǎngāo", "tàngāo", "dànggāo", "dàngāo"],
  },
  // 豆漿
  {
    audio: "assets/audio/mode3/dou4jiang1.mp3",
    correct: "dòujiāng",
    options: ["dǒujiāng", "tòujiāng", "dàojiāng", "dòujiāng"],
  },
  // 請問
  {
    audio: "assets/audio/mode3/qing3wen4.mp3",
    correct: "qǐngwèn",
    options: ["qíngwèn", "jǐngwèn", "qǐngwèn", "qǐnwèn"],
  },
  // 地點
  {
    audio: "assets/audio/mode3/di4dian3.mp3",
    correct: "dìdiǎn",
    options: ["dǐdiǎn", "tìdiǎn", "dièdiǎn", "dìdiǎn"],
  },
  // 歡迎
  {
    audio: "assets/audio/mode3/huan1ying2.mp3",
    correct: "huānyíng",
    options: ["huānyíng", "huànyíng", "fuānyíng", "huāngyíng"],
  },
  // 後天
  {
    audio: "assets/audio/mode3/hou4tian1.mp3",
    correct: "hòutiān",
    options: ["hóutiān", "fòutiān", "hàotiān", "hòutiān"],
  },
  // 刀子
  {
    audio: "assets/audio/mode3/dao1zi5.mp3",
    correct: "dāozi",
    options: ["dāozi", "dǎozi", "tāozi", "dōuzi"],
  },
  // 讀書
  {
    audio: "assets/audio/mode3/du2shu1.mp3",
    correct: "dúshū",
    options: ["dúshū", "dùshū", "túshū", "dóushū"],
  },
  // 去年
  {
    audio: "assets/audio/mode3/qu4nian2.mp3",
    correct: "qùnián",
    options: ["qūnián", "jùnián", "qòunián", "qùnián"],
  },
  // 東方
  {
    audio: "assets/audio/mode3/dong1fang1.mp3",
    correct: "dōngfāng",
    options: ["dóngfāng", "tōngfāng", "dōngfāng", "dōngfān"],
  },
  // 回到
  {
    audio: "assets/audio/mode3/hui2dao4.mp3",
    correct: "huídào",
    options: ["huīdào", "fuídào", "huídào", "héidào"],
  },
  // 火車
  {
    audio: "assets/audio/mode3/huo3che1.mp3",
    correct: "huǒchē",
    options: ["huōchē", "fuǒchē", "huǒchō", "huǒchē"],
  },
  // 德文
  {
    audio: "assets/audio/mode3/de2wen2.mp3",
    correct: "déwén",
    options: ["dèwén", "téwén", "déwén", "dówén"],
  },
  // 而且
  {
    audio: "assets/audio/mode3/er2qie3.mp3",
    correct: "érqiě",
    options: ["ěrqiě", "érjiě", "érqüě", "érqiě"],
  },
  // 日本
  {
    audio: "assets/audio/mode3/ri4ben3.mp3",
    correct: "rìběn",
    options: ["ríběn", "lìběn", "rièběn", "rìběn"],
  },
  // 豆子
  {
    audio: "assets/audio/mode3/dou4zi5.mp3",
    correct: "dòuzi",
    options: ["dòuzi", "dóuzi", "tòuzi", "dàozi"],
  },
  // 活動
  {
    audio: "assets/audio/mode3/huo2dong4.mp3",
    correct: "huódòng",
    options: ["huódòng", "huòdòng", "fuódòng", "huódóng"],
  },
  // 家人
  {
    audio: "assets/audio/mode3/jia1ren2.mp3",
    correct: "jiārén",
    options: ["jiārén", "jiàrén", "qiārén", "jiāréng"],
  },
  // 地圖
  {
    audio: "assets/audio/mode3/di4tu2.mp3",
    correct: "dìtú",
    options: ["dìtú", "dītú", "tìtú", "diètú"],
  },
  // 耳機
  {
    audio: "assets/audio/mode3/er3ji1.mp3",
    correct: "ěrjī",
    options: ["érjī", "ěrqī", "ěrjiē", "ěrjī"],
  },
  // 容易
  {
    audio: "assets/audio/mode3/rong2yi4.mp3",
    correct: "róngyì",
    options: ["rǒngyì", "lóngyì", "róngyì", "róngyī"],
  },
  // 多麼
  {
    audio: "assets/audio/mode3/duo1me5.mp3",
    correct: "duōme",
    options: ["duóme", "tuōme", "duōmo", "duōme"],
  },
  // 或是
  {
    audio: "assets/audio/mode3/huo4shi4.mp3",
    correct: "huòshì",
    options: ["huǒshì", "fuòshì", "huòshì", "huòshiè"],
  },
  // 教室
  {
    audio: "assets/audio/mode3/jiao4shi4.mp3",
    correct: "jiàoshì",
    options: ["jiāoshì", "qiàoshì", "jiàoshiè", "jiàoshì"],
  },
  // 地址
  {
    audio: "assets/audio/mode3/di4zhi3.mp3",
    correct: "dìzhǐ",
    options: ["dǐzhǐ", "tìzhǐ", "dièzhǐ", "dìzhǐ"],
  },
  // 發生
  {
    audio: "assets/audio/mode3/fa1sheng1.mp3",
    correct: "fāshēng",
    options: ["fàshēng", "fāshēng", "hāshēng", "fēshēng"],
  },
  // 上午
  {
    audio: "assets/audio/mode3/shang4wu3.mp3",
    correct: "shàngwǔ",
    options: ["shāngwǔ", "sàngwǔ", "shàngwǔ", "shànwǔ"],
  },
  // 發燒
  {
    audio: "assets/audio/mode3/fa1shao1.mp3",
    correct: "fāshāo",
    options: ["fáshāo", "hāshāo", "fāshāo", "fēshāo"],
  },
  // 機會
  {
    audio: "assets/audio/mode3/ji1hui4.mp3",
    correct: "jīhuì",
    options: ["jíhuì", "jīhuì", "qīhuì", "jiēhuì"],
  },
  // 介紹
  {
    audio: "assets/audio/mode3/jie4shao4.mp3",
    correct: "jièshào",
    options: ["jièshào", "jiéshào", "qièshào", "jüèshào"],
  },
  // 點心
  {
    audio: "assets/audio/mode3/dian3xin1.mp3",
    correct: "diǎnxīn",
    options: ["diánxīn", "tiǎnxīn", "diǎngxīn", "diǎnxīn"],
  },
  // 番茄
  {
    audio: "assets/audio/mode3/fan1qie2.mp3",
    correct: "fānqié",
    options: ["fánqié", "hānqié", "fāngqié", "fānqié"],
  },
  // 什麼
  {
    audio: "assets/audio/mode3/shen2me5.mp3",
    correct: "shénme",
    options: ["shěnme", "sénme", "shéngme", "shénme"],
  },
  // 法律
  {
    audio: "assets/audio/mode3/fa3lv4.mp3",
    correct: "fǎlǜ",
    options: ["fálǜ", "hǎlǜ", "fǎlǜ", "fělǜ"],
  },
  // 記得
  {
    audio: "assets/audio/mode3/ji4de5.mp3",
    correct: "jìde",
    options: ["jíde", "qìde", "jìde", "jiède"],
  },
  // 句子
  {
    audio: "assets/audio/mode3/ju4zi5.mp3",
    correct: "jùzi",
    options: ["jūzi", "jùzi", "qùzi", "jòuzi"],
  },
  // 電梯
  {
    audio: "assets/audio/mode3/dian4ti1.mp3",
    correct: "diàntī",
    options: ["diǎntī", "tiàntī", "diàntī", "diàngtī"],
  },
  // 放假
  {
    audio: "assets/audio/mode3/fang4jia4.mp3",
    correct: "fàngjià",
    options: ["fángjià", "hàngjià", "fànjià", "fàngjià"],
  },
  // 時候
  {
    audio: "assets/audio/mode3/shi2hou4.mp3",
    correct: "shíhòu",
    options: ["shìhòu", "síhòu", "shiéhòu", "shíhòu"],
  },
  // 方面
  {
    audio: "assets/audio/mode3/fang1mian4.mp3",
    correct: "fāngmiàn",
    options: ["fāngmiàn", "fángmiàn", "hāngmiàn", "fānmiàn"],
  },
  // 計畫
  {
    audio: "assets/audio/mode3/ji4hua4.mp3",
    correct: "jìhuà",
    options: ["jíhuà", "qìhuà", "jièhuà", "jìhuà"],
  },
  // 覺得
  {
    audio: "assets/audio/mode3/jue2de5.mp3",
    correct: "juéde",
    options: ["juède", "juéde", "quéde", "juédo"],
  },
  // 肚子
  {
    audio: "assets/audio/mode3/du4zi5.mp3",
    correct: "dùzi",
    options: ["dūzi", "tùzi", "dùzi", "dòuzi"],
  },
  // 肥皂
  {
    audio: "assets/audio/mode3/fei2zao4.mp3",
    correct: "féizào",
    options: ["fèizào", "héizào", "féizào", "fuízào"],
  },
  // 時間
  {
    audio: "assets/audio/mode3/shi2jian1.mp3",
    correct: "shíjiān",
    options: ["shìjiān", "síjiān", "shíjiān", "shiéjiān"],
  },
  // 方向
  {
    audio: "assets/audio/mode3/fang1xiang4.mp3",
    correct: "fāngxiàng",
    options: ["fǎngxiàng", "hāngxiàng", "fānxiàng", "fāngxiàng"],
  },
  // 家庭
  {
    audio: "assets/audio/mode3/jia1ting2.mp3",
    correct: "jiātíng",
    options: ["jiātíng", "jiàtíng", "qiātíng", "jiātín"],
  },
  // 開車
  {
    audio: "assets/audio/mode3/kai1che1.mp3",
    correct: "kāichē",
    options: ["kàichē", "gāichē", "kāichō", "kāichē"],
  },
  // 對面
  {
    audio: "assets/audio/mode3/dui4mian4.mp3",
    correct: "duìmiàn",
    options: ["duīmiàn", "tuìmiàn", "dèimiàn", "duìmiàn"],
  },
  // 鳳梨
  {
    audio: "assets/audio/mode3/feng4li2.mp3",
    correct: "fènglí",
    options: ["fēnglí", "hènglí", "fènglí", "fènlí"],
  },
  // 手機
  {
    audio: "assets/audio/mode3/shou3ji1.mp3",
    correct: "shǒujī",
    options: ["shóujī", "sǒujī", "shǒujī", "shǎojī"],
  },
  // 房屋
  {
    audio: "assets/audio/mode3/fang2wu1.mp3",
    correct: "fángwū",
    options: ["fàngwū", "fángwū", "hángwū", "fánwū"],
  },
  // 簡單
  {
    audio: "assets/audio/mode3/jian3dan1.mp3",
    correct: "jiǎndān",
    options: ["jiāndān", "jiǎndān", "qiǎndān", "jiǎngdān"],
  },
  // 看病
  {
    audio: "assets/audio/mode3/kan4bing4.mp3",
    correct: "kànbìng",
    options: ["kǎnbìng", "gànbìng", "kànbìng", "kàngbìng"],
  },
  // 法文
  {
    audio: "assets/audio/mode3/fa3wen2.mp3",
    correct: "fǎwén",
    options: ["fáwén", "hǎwén", "fěwén", "fǎwén"],
  },
  // 服務
  {
    audio: "assets/audio/mode3/fu2wu4.mp3",
    correct: "fúwù",
    options: ["fǔwù", "húwù", "fóuwù", "fúwù"],
  },
  // 睡覺
  {
    audio: "assets/audio/mode3/shui4jiao4.mp3",
    correct: "shuìjiào",
    options: ["shuǐjiào", "suìjiào", "shèijiào", "shuìjiào"],
  },
  // 放心
  {
    audio: "assets/audio/mode3/fang4xin1.mp3",
    correct: "fàngxīn",
    options: ["fāngxīn", "fàngxīn", "hàngxīn", "fànxīn"],
  },
  // 健康
  {
    audio: "assets/audio/mode3/jian4kang1.mp3",
    correct: "jiànkāng",
    options: ["jiǎnkāng", "qiànkāng", "jiànkāng", "jiàngkāng"],
  },
  // 看到
  {
    audio: "assets/audio/mode3/kan4dao4.mp3",
    correct: "kàndào",
    options: ["kàndào", "kǎndào", "gàndào", "kàngdào"],
  },
  // 飯店
  {
    audio: "assets/audio/mode3/fan4dian4.mp3",
    correct: "fàndiàn",
    options: ["fàndiàn", "fāndiàn", "hàndiàn", "fàngdiàn"],
  },
  // 父母
  {
    audio: "assets/audio/mode3/fu4mu3.mp3",
    correct: "fùmǔ",
    options: ["fúmǔ", "fùmǔ", "hùmǔ", "fòumǔ"],
  },
  // 他們
  {
    audio: "assets/audio/mode3/ta1men5.mp3",
    correct: "tāmen",
    options: ["tāmen", "tǎmen", "dāmen", "tēmen"],
  },
  // 非洲
  {
    audio: "assets/audio/mode3/fei1zhou1.mp3",
    correct: "fēizhōu",
    options: ["fèizhōu", "fēizhōu", "hēizhōu", "fuīzhōu"],
  },
  // 緊張
  {
    audio: "assets/audio/mode3/jin3zhang1.mp3",
    correct: "jǐnzhāng",
    options: ["jīnzhāng", "qǐnzhāng", "jǐnzhāng", "jǐngzhāng"],
  },
  // 看見
  {
    audio: "assets/audio/mode3/kan4jian4.mp3",
    correct: "kànjiàn",
    options: ["kànjiàn", "kānjiàn", "gànjiàn", "kàngjiàn"],
  },
  // 飯廳
  {
    audio: "assets/audio/mode3/fan4ting1.mp3",
    correct: "fàntīng",
    options: ["fāntīng", "hàntīng", "fàngtīng", "fàntīng"],
  },
  // 父親
  {
    audio: "assets/audio/mode3/fu4qin1.mp3",
    correct: "fùqīn",
    options: ["fùqīn", "fúqīn", "hùqīn", "fòuqīn"],
  },
  // 臺灣
  {
    audio: "assets/audio/mode3/tai2wan1.mp3",
    correct: "táiwān",
    options: ["táiwān", "tàiwān", "dáiwān", "táiwán"],
  },
  // 感覺
  {
    audio: "assets/audio/mode3/gan3jue2.mp3",
    correct: "gǎnjué",
    options: ["gǎnjué", "gànjué", "kǎnjué", "gǎngjué"],
  },
  // 進步
  {
    audio: "assets/audio/mode3/jin4bu4.mp3",
    correct: "jìnbù",
    options: ["jǐnbù", "jìnbù", "qìnbù", "jìngbù"],
  },
  // 考試
  {
    audio: "assets/audio/mode3/kao3shi4.mp3",
    correct: "kǎoshì",
    options: ["kàoshì", "kǎoshì", "gǎoshì", "kǒushì"],
  },
  // 房東
  {
    audio: "assets/audio/mode3/fang2dong1.mp3",
    correct: "fángdōng",
    options: ["fǎngdōng", "hángdōng", "fándōng", "fángdōng"],
  },
  // 趕快
  {
    audio: "assets/audio/mode3/gan3kuai4.mp3",
    correct: "gǎnkuài",
    options: ["gānkuài", "kǎnkuài", "gǎnkuài", "gǎngkuài"],
  },
  // 太太
  {
    audio: "assets/audio/mode3/tai4tai5.mp3",
    correct: "tàitai",
    options: ["tàitai", "tǎitai", "dàitai", "tàitái"],
  },
  // 剛好
  {
    audio: "assets/audio/mode3/gang1hao3.mp3",
    correct: "gānghǎo",
    options: ["gànghǎo", "gānghǎo", "kānghǎo", "gānhǎo"],
  },
  // 經過
  {
    audio: "assets/audio/mode3/jing1guo4.mp3",
    correct: "jīngguò",
    options: ["jìngguò", "qīngguò", "jīnguò", "jīngguò"],
  },
  // 可是
  {
    audio: "assets/audio/mode3/ke3shi4.mp3",
    correct: "kěshì",
    options: ["késhì", "gěshì", "kǒshì", "kěshì"],
  },
  // 房租
  {
    audio: "assets/audio/mode3/fang2zu1.mp3",
    correct: "fángzū",
    options: ["fángzū", "fāngzū", "hángzū", "fánzū"],
  },
  // 剛才
  {
    audio: "assets/audio/mode3/gang1cai2.mp3",
    correct: "gāngcái",
    options: ["gángcái", "kāngcái", "gāncái", "gāngcái"],
  },
  // 同學
  {
    audio: "assets/audio/mode3/tong2xue2.mp3",
    correct: "tóngxué",
    options: ["tōngxué", "dóngxué", "tóngxuè", "tóngxué"],
  },
  // 高級
  {
    audio: "assets/audio/mode3/gao1ji2.mp3",
    correct: "gāojí",
    options: ["gāojí", "gàojí", "kāojí", "gōují"],
  },
  // 經驗
  {
    audio: "assets/audio/mode3/jing1yan4.mp3",
    correct: "jīngyàn",
    options: ["jǐngyàn", "qīngyàn", "jīngyàn", "jīnyàn"],
  },
  // 空氣
  {
    audio: "assets/audio/mode3/kong1qi4.mp3",
    correct: "kōngqì",
    options: ["kóngqì", "gōngqì", "kōngqì", "kōngqiè"],
  },
  // 風景
  {
    audio: "assets/audio/mode3/feng1jing3.mp3",
    correct: "fēngjǐng",
    options: ["fěngjǐng", "hēngjǐng", "fēnjǐng", "fēngjǐng"],
  },
  // 關係
  {
    audio: "assets/audio/mode3/guan1xi4.mp3",
    correct: "guānxì",
    options: ["guǎnxì", "guānxì", "kuānxì", "guāngxì"],
  },
  // 晚安
  {
    audio: "assets/audio/mode3/wan3an1.mp3",
    correct: "wǎnān",
    options: ["wánān", "wǎnāng", "wǎnán", "wǎnān"],
  },
  // 公路
  {
    audio: "assets/audio/mode3/gong1lu4.mp3",
    correct: "gōnglù",
    options: ["gǒnglù", "kōnglù", "gōnglòu", "gōnglù"],
  },
  // 決定
  {
    audio: "assets/audio/mode3/jue2ding4.mp3",
    correct: "juédìng",
    options: ["juèdìng", "quédìng", "juédìng", "juédìn"],
  },
  // 快樂
  {
    audio: "assets/audio/mode3/kuai4le4.mp3",
    correct: "kuàilè",
    options: ["kuāilè", "guàilè", "kuàilè", "kuàilò"],
  },
  // 果汁
  {
    audio: "assets/audio/mode3/guo3zhi1.mp3",
    correct: "guǒzhī",
    options: ["guózhī", "guǒzhī", "kuǒzhī", "guǒzhiē"],
  },
  // 關心
  {
    audio: "assets/audio/mode3/guan1xin1.mp3",
    correct: "guānxīn",
    options: ["guánxīn", "kuānxīn", "guāngxīn", "guānxīn"],
  },
  // 晚上
  {
    audio: "assets/audio/mode3/wan3shang4.mp3",
    correct: "wǎnshàng",
    options: ["wánshàng", "wǎnsàng", "wǎnshàng", "wǎnshàn"],
  },
  // 工人
  {
    audio: "assets/audio/mode3/gong1ren2.mp3",
    correct: "gōngrén",
    options: ["góngrén", "kōngrén", "gōngréng", "gōngrén"],
  },
  // 開始
  {
    audio: "assets/audio/mode3/kai1shi3.mp3",
    correct: "kāishǐ",
    options: ["káishǐ", "kāishǐ", "gāishǐ", "kāishiě"],
  },
  // 筷子
  {
    audio: "assets/audio/mode3/kuai4zi5.mp3",
    correct: "kuàizi",
    options: ["kuǎizi", "guàizi", "kuàizie", "kuàizi"],
  },
  // 過年
  {
    audio: "assets/audio/mode3/guo4nian2.mp3",
    correct: "guònián",
    options: ["guònián", "guōnián", "kuònián", "guòniáng"],
  },
  // 逛街
  {
    audio: "assets/audio/mode3/guang4jie1.mp3",
    correct: "guàngjiē",
    options: ["guǎngjiē", "kuàngjiē", "guànjiē", "guàngjiē"],
  },
  // 問題
  {
    audio: "assets/audio/mode3/wen4ti2.mp3",
    correct: "wèntí",
    options: ["wèntí", "wéntí", "wèndí", "wèntié"],
  },
  // 姑姑
  {
    audio: "assets/audio/mode3/gu1gu5.mp3",
    correct: "gūgu",
    options: ["gúgu", "kūgu", "gōugu", "gūgu"],
  },
  // 可愛
  {
    audio: "assets/audio/mode3/ke3ai4.mp3",
    correct: "kěài",
    options: ["kěài", "kēài", "gěài", "kǒài"],
  },
  // 裡面
  {
    audio: "assets/audio/mode3/li3mian4.mp3",
    correct: "lǐmiàn",
    options: ["līmiàn", "nǐmiàn", "liěmiàn", "lǐmiàn"],
  },
  // 漢堡
  {
    audio: "assets/audio/mode3/han4bao3.mp3",
    correct: "hànbǎo",
    options: ["hànbǎo", "hānbǎo", "fànbǎo", "hàngbǎo"],
  },
  // 還好
  {
    audio: "assets/audio/mode3/hai2hao3.mp3",
    correct: "háihǎo",
    options: ["hǎihǎo", "háihǎo", "fáihǎo", "háihǒu"],
  },
  // 我們
  {
    audio: "assets/audio/mode3/wo3men5.mp3",
    correct: "wǒmen",
    options: ["wǒmen", "wómen", "wǒmeng", "wǒmèn"],
  },
  // 姑媽
  {
    audio: "assets/audio/mode3/gu1ma1.mp3",
    correct: "gūmā",
    options: ["gúmā", "kūmā", "gūmā", "gōumā"],
  },
  // 客人
  {
    audio: "assets/audio/mode3/ke4ren2.mp3",
    correct: "kèrén",
    options: ["kěrén", "kèrén", "gèrén", "kòrén"],
  },
  // 媽媽
  {
    audio: "assets/audio/mode3/ma1ma5.mp3",
    correct: "māma",
    options: ["mǎma", "mēma", "màma", "māma"],
  },
  // 號碼
  {
    audio: "assets/audio/mode3/hao4ma3.mp3",
    correct: "hàomǎ",
    options: ["hāomǎ", "fàomǎ", "hòumǎ", "hàomǎ"],
  },
  // 海鮮
  {
    audio: "assets/audio/mode3/hai3xian1.mp3",
    correct: "hǎixiān",
    options: ["hāixiān", "fǎixiān", "hǎixiān", "hǎixiāng"],
  },
  // 喜歡
  {
    audio: "assets/audio/mode3/xi3huan1.mp3",
    correct: "xǐhuān",
    options: ["xìhuān", "shǐhuān", "xǐhuān", "xiěhuān"],
  },
  // 櫃子
  {
    audio: "assets/audio/mode3/gui4zi5.mp3",
    correct: "guìzi",
    options: ["guīzi", "guìzi", "kuìzi", "gèizi"],
  },
  // 老闆
  {
    audio: "assets/audio/mode3/lao3ban3.mp3",
    correct: "lǎobǎn",
    options: ["láobǎn", "nǎobǎn", "lǎobǎn", "lǒubǎn"],
  },
  // 馬上
  {
    audio: "assets/audio/mode3/ma3shang4.mp3",
    correct: "mǎshàng",
    options: ["mǎshàng", "màshàng", "mǎsàng", "měshàng"],
  },
  // 盒子
  {
    audio: "assets/audio/mode3/he2zi5.mp3",
    correct: "hézi",
    options: ["hězi", "fézi", "hózi", "hézi"],
  },
  // 寒假
  {
    audio: "assets/audio/mode3/han2jia4.mp3",
    correct: "hánjià",
    options: ["hānjià", "fánjià", "hánjià", "hángjià"],
  },
  // 下午
  {
    audio: "assets/audio/mode3/xia4wu3.mp3",
    correct: "xiàwǔ",
    options: ["xiàwǔ", "xiǎwǔ", "shiàwǔ", "xiàwú"],
  },
  // 國小
  {
    audio: "assets/audio/mode3/guo2xiao3.mp3",
    correct: "guóxiǎo",
    options: ["guǒxiǎo", "guóxiǎo", "kuóxiǎo", "guōxiǎo"],
  },
  // 老人
  {
    audio: "assets/audio/mode3/lao3ren2.mp3",
    correct: "lǎorén",
    options: ["láorén", "lǎorén", "nǎorén", "lǒurén"],
  },
  // 門口
  {
    audio: "assets/audio/mode3/men2kou3.mp3",
    correct: "ménkǒu",
    options: ["ménkǒu", "měnkǒu", "méngǒu", "méngkǒu"],
  },
  // 紅茶
  {
    audio: "assets/audio/mode3/hong2cha2.mp3",
    correct: "hóngchá",
    options: ["hòngchá", "hóngchá", "fóngchá", "hóngché"],
  },
  // 漢字
  {
    audio: "assets/audio/mode3/han4zi4.mp3",
    correct: "hànzì",
    options: ["hǎnzì", "fànzì", "hànzì", "hàngzì"],
  },
  // 先生
  {
    audio: "assets/audio/mode3/xian1sheng1.mp3",
    correct: "xiānshēng",
    options: ["xiánshēng", "shiānshēng", "xiāngshēng", "xiānshēng"],
  },
  // 害怕
  {
    audio: "assets/audio/mode3/hai4pa4.mp3",
    correct: "hàipà",
    options: ["hàipà", "hāipà", "fàipà", "hàipè"],
  },
  // 離開
  {
    audio: "assets/audio/mode3/li2kai1.mp3",
    correct: "líkāi",
    options: ["líkāi", "lǐkāi", "níkāi", "liékāi"],
  },
  // 麵包
  {
    audio: "assets/audio/mode3/mian4bao1.mp3",
    correct: "miànbāo",
    options: ["miánbāo", "miànpāo", "miàngbāo", "miànbāo"],
  },
  // 護士
  {
    audio: "assets/audio/mode3/hu4shi4.mp3",
    correct: "hùshì",
    options: ["hǔshì", "fùshì", "hùshì", "hòushì"],
  },
  // 好處
  {
    audio: "assets/audio/mode3/hao3chu4.mp3",
    correct: "hǎochù",
    options: ["hǎochù", "háochù", "fǎochù", "hǒuchù"],
  },
  // 現在
  {
    audio: "assets/audio/mode3/xian4zai4.mp3",
    correct: "xiànzài",
    options: ["xiànzài", "xiānzài", "shiànzài", "xiàngzài"],
  },
  // 韓國
  {
    audio: "assets/audio/mode3/han2guo2.mp3",
    correct: "hánguó",
    options: ["hànguó", "fánguó", "hángguó", "hánguó"],
  },
  // 練習
  {
    audio: "assets/audio/mode3/lian4xi2.mp3",
    correct: "liànxí",
    options: ["liánxí", "niànxí", "liàngxí", "liànxí"],
  },
  // 明年
  {
    audio: "assets/audio/mode3/ming2nian2.mp3",
    correct: "míngnián",
    options: ["mìngnián", "mínglián", "míngnián", "mínnián"],
  },
  // 火腿
  {
    audio: "assets/audio/mode3/huo3tui3.mp3",
    correct: "huǒtuǐ",
    options: ["huótuǐ", "fuǒtuǐ", "huǒtuǐ", "huǒtěi"],
  },
  // 黑板
  {
    audio: "assets/audio/mode3/hei1ban3.mp3",
    correct: "hēibǎn",
    options: ["hěibǎn", "fēibǎn", "hēibǎn", "huībǎn"],
  },
  // 小孩
  {
    audio: "assets/audio/mode3/xiao3hai2.mp3",
    correct: "xiǎohái",
    options: ["xiàohái", "shiǎohái", "xiǎohái", "xiǎohài"],
  },
  // 合適
  {
    audio: "assets/audio/mode3/he2shi4.mp3",
    correct: "héshì",
    options: ["héshì", "hèshì", "féshì", "hóshì"],
  },
  // 聊天
  {
    audio: "assets/audio/mode3/liao2tian1.mp3",
    correct: "liáotiān",
    options: ["liáotiān", "liǎotiān", "niáotiān", "liáotiāng"],
  },
  // 牛奶
  {
    audio: "assets/audio/mode3/niu2nai3.mp3",
    correct: "niúnǎi",
    options: ["niúnǎi", "niùnǎi", "liúnǎi", "niúnāi"],
  },
  // 機場
  {
    audio: "assets/audio/mode3/ji1chang3.mp3",
    correct: "jīchǎng",
    options: ["jīchǎng", "jǐchǎng", "qīchǎng", "jiēchǎng"],
  },
  // 華語
  {
    audio: "assets/audio/mode3/hua2yu3.mp3",
    correct: "huáyǔ",
    options: ["huāyǔ", "fuáyǔ", "huáyǔ", "huáyú"],
  },
  // 小姐
  {
    audio: "assets/audio/mode3/xiao3jie3.mp3",
    correct: "xiǎojiě",
    options: ["xiáojiě", "shiǎojiě", "xiǎojiě", "xiǎojüě"],
  },
  // 合作
  {
    audio: "assets/audio/mode3/he2zuo4.mp3",
    correct: "hézuò",
    options: ["hězuò", "hézuò", "fézuò", "hózuò"],
  },
  // 旅行
  {
    audio: "assets/audio/mode3/lv3xing2.mp3",
    correct: "lǚxíng",
    options: ["lǜxíng", "nǚxíng", "lǚxín", "lǚxíng"],
  },
  // 旁邊
  {
    audio: "assets/audio/mode3/pang2bian1.mp3",
    correct: "pángbiān",
    options: ["pàngbiān", "pángbiān", "bángbiān", "pánbiān"],
  },
  // 加油
  {
    audio: "assets/audio/mode3/jia1you2.mp3",
    correct: "jiāyóu",
    options: ["jiǎyóu", "jiāyóu", "qiāyóu", "jiáyóu"],
  },
  // 壞處
  {
    audio: "assets/audio/mode3/huai4chu4.mp3",
    correct: "huàichù",
    options: ["huáichù", "fuàichù", "huàichòu", "huàichù"],
  },
  // 小時
  {
    audio: "assets/audio/mode3/xiao3shi2.mp3",
    correct: "xiǎoshí",
    options: ["xiàoshí", "shiǎoshí", "xiǎoshí", "xiǎoshié"],
  },
  // 畫家
  {
    audio: "assets/audio/mode3/hua4jia1.mp3",
    correct: "huàjiā",
    options: ["huàjiā", "huājiā", "fuàjiā", "huàjià"],
  },
  // 那麼
  {
    audio: "assets/audio/mode3/na4me5.mp3",
    correct: "nàme",
    options: ["nǎme", "nàme", "làme", "nème"],
  },
  // 便宜
  {
    audio: "assets/audio/mode3/pian2yi2.mp3",
    correct: "piányí",
    options: ["piānyí", "piányí", "biányí", "piángyí"],
  },
  // 見面
  {
    audio: "assets/audio/mode3/jian4mian4.mp3",
    correct: "jiànmiàn",
    options: ["jiānmiàn", "jiànmiàn", "qiànmiàn", "jiàngmiàn"],
  },
  // 環境
  {
    audio: "assets/audio/mode3/huan2jing4.mp3",
    correct: "huánjìng",
    options: ["huànjìng", "fuánjìng", "huánjìng", "huángjìng"],
  },
  // 謝謝
  {
    audio: "assets/audio/mode3/xie4xie5.mp3",
    correct: "xièxie",
    options: ["xiéxie", "xièxie", "shièxie", "xüèxie"],
  },
  // 環保
  {
    audio: "assets/audio/mode3/huan2bao3.mp3",
    correct: "huánbǎo",
    options: ["huànbǎo", "huánbǎo", "fuánbǎo", "huángbǎo"],
  },
  // 能力
  {
    audio: "assets/audio/mode3/neng2li4.mp3",
    correct: "nénglì",
    options: ["nènglì", "nénglì", "lénglì", "nénlì"],
  },
  // 漂亮
  {
    audio: "assets/audio/mode3/piao4liang4.mp3",
    correct: "piàoliàng",
    options: ["piǎoliàng", "piàoliàng", "biàoliàng", "piàoliàn"],
  },
  // 餃子
  {
    audio: "assets/audio/mode3/jiao3zi5.mp3",
    correct: "jiǎozi",
    options: ["jiāozi", "jiǎozi", "qiǎozi", "jiǎozie"],
  },
  // 回答
  {
    audio: "assets/audio/mode3/hui2da2.mp3",
    correct: "huídá",
    options: ["huìdá", "fuídá", "huídá", "héidá"],
  },
  // 姓名
  {
    audio: "assets/audio/mode3/xing4ming2.mp3",
    correct: "xìngmíng",
    options: ["xīngmíng", "shìngmíng", "xìnmíng", "xìngmíng"],
  },
  // 加班
  {
    audio: "assets/audio/mode3/jia1ban1.mp3",
    correct: "jiābān",
    options: ["jiǎbān", "qiābān", "jiābān", "jiābāng"],
  },
  // 年輕
  {
    audio: "assets/audio/mode3/nian2qing1.mp3",
    correct: "niánqīng",
    options: ["niànqīng", "niánqīng", "liánqīng", "niángqīng"],
  },
  // 起床
  {
    audio: "assets/audio/mode3/qi3chuang2.mp3",
    correct: "qǐchuáng",
    options: ["qǐchuáng", "qìchuáng", "jǐchuáng", "qiěchuáng"],
  },
  // 開學
  {
    audio: "assets/audio/mode3/kai1xue2.mp3",
    correct: "kāixué",
    options: ["kàixué", "kāixué", "gāixué", "kǎixué"],
  },
  // 回信
  {
    audio: "assets/audio/mode3/hui2xin4.mp3",
    correct: "huíxìn",
    options: ["huíxìn", "huìxìn", "fuíxìn", "héixìn"],
  },
  // 學生
  {
    audio: "assets/audio/mode3/xue2sheng1.mp3",
    correct: "xuéshēng",
    options: ["xuèshēng", "shuéshēng", "xuéshēng", "xuéshēn"],
  },
  // 家具
  {
    audio: "assets/audio/mode3/jia1ju4.mp3",
    correct: "jiājù",
    options: ["jiājù", "jiǎjù", "qiājù", "jiājòu"],
  },
  // 努力
  {
    audio: "assets/audio/mode3/nu3li4.mp3",
    correct: "nǔlì",
    options: ["nǔlì", "núlì", "lǔlì", "nǒulì"],
  },
  // 起來
  {
    audio: "assets/audio/mode3/qi3lai2.mp3",
    correct: "qǐlái",
    options: ["qìlái", "jǐlái", "qǐlái", "qiělái"],
  },
  // 可樂
  {
    audio: "assets/audio/mode3/ke3le4.mp3",
    correct: "kělè",
    options: ["kèlè", "kělè", "gělè", "kǒlè"],
  },
  // 或者
  {
    audio: "assets/audio/mode3/huo4zhe3.mp3",
    correct: "huòzhě",
    options: ["huózhě", "fuòzhě", "huòzhě", "huòzhǒ"],
  },
  // 學校
  {
    audio: "assets/audio/mode3/xue2xiao4.mp3",
    correct: "xuéxiào",
    options: ["xuèxiào", "shuéxiào", "xuéxiāo", "xuéxiào"],
  },
  // 假日
  {
    audio: "assets/audio/mode3/jia4ri4.mp3",
    correct: "jiàrì",
    options: ["jiārì", "qiàrì", "jiàriè", "jiàrì"],
  },
  // 平常
  {
    audio: "assets/audio/mode3/ping2chang2.mp3",
    correct: "píngcháng",
    options: ["pìngcháng", "bíngcháng", "píncháng", "píngcháng"],
  },
  // 前面
  {
    audio: "assets/audio/mode3/qian2mian4.mp3",
    correct: "qiánmiàn",
    options: ["qiánmiàn", "qiǎnmiàn", "jiánmiàn", "qiángmiàn"],
  },
  // 課本
  {
    audio: "assets/audio/mode3/ke4ben3.mp3",
    correct: "kèběn",
    options: ["kēběn", "kèběn", "gèběn", "kòběn"],
  },
  // 機車
  {
    audio: "assets/audio/mode3/ji1che1.mp3",
    correct: "jīchē",
    options: ["jìchē", "qīchē", "jiēchē", "jīchē"],
  },
  // 醫生
  {
    audio: "assets/audio/mode3/yi1sheng1.mp3",
    correct: "yīshēng",
    options: ["yīshēng", "yìshēng", "yīsēng", "yīshēn"],
  },
  // 建議
  {
    audio: "assets/audio/mode3/jian4yi4.mp3",
    correct: "jiànyì",
    options: ["jiǎnyì", "qiànyì", "jiàngyì", "jiànyì"],
  },
  // 奇怪
  {
    audio: "assets/audio/mode3/qi2guai4.mp3",
    correct: "qíguài",
    options: ["qìguài", "jíguài", "qiéguài", "qíguài"],
  },
  // 前年
  {
    audio: "assets/audio/mode3/qian2nian2.mp3",
    correct: "qiánnián",
    options: ["qiǎnnián", "jiánnián", "qiánnián", "qiángnián"],
  },
  // 客氣
  {
    audio: "assets/audio/mode3/ke4qi4.mp3",
    correct: "kèqì",
    options: ["kēqì", "kèqì", "gèqì", "kòqì"],
  },
  // 季節
  {
    audio: "assets/audio/mode3/ji4jie2.mp3",
    correct: "jìjié",
    options: ["jìjié", "jījié", "qìjié", "jièjié"],
  },
  // 醫師
  {
    audio: "assets/audio/mode3/yi1shi1.mp3",
    correct: "yīshī",
    options: ["yǐshī", "yīsī", "yīshī", "yīshiē"],
  },
  // 教書
  {
    audio: "assets/audio/mode3/jiao1shu1.mp3",
    correct: "jiāoshū",
    options: ["jiàoshū", "qiāoshū", "jiāoshū", "jiāoshōu"],
  },
  // 其他
  {
    audio: "assets/audio/mode3/qi2ta1.mp3",
    correct: "qítā",
    options: ["qìtā", "jítā", "qiétā", "qítā"],
  },
  // 前天
  {
    audio: "assets/audio/mode3/qian2tian1.mp3",
    correct: "qiántiān",
    options: ["qiāntiān", "jiántiān", "qiántiān", "qiángtiān"],
  },
  // 客廳
  {
    audio: "assets/audio/mode3/ke4ting1.mp3",
    correct: "kètīng",
    options: ["kětīng", "kètīng", "gètīng", "kòtīng"],
  },
  // 加上
  {
    audio: "assets/audio/mode3/jia1shang4.mp3",
    correct: "jiāshàng",
    options: ["jiǎshàng", "qiāshàng", "jiāshàn", "jiāshàng"],
  },
  // 一月
  {
    audio: "assets/audio/mode3/yi1yue4.mp3",
    correct: "yīyuè",
    options: ["yìyuè", "yīyuē", "yíyuè", "yīyuè"],
  },
  // 教授
  {
    audio: "assets/audio/mode3/jiao4shou4.mp3",
    correct: "jiàoshòu",
    options: ["jiàoshòu", "jiáoshòu", "qiàoshòu", "jiàoshào"],
  },
  // 汽車
  {
    audio: "assets/audio/mode3/qi4che1.mp3",
    correct: "qìchē",
    options: ["qìchē", "qǐchē", "jìchē", "qièchē"],
  },
  // 然後
  {
    audio: "assets/audio/mode3/ran2hou4.mp3",
    correct: "ránhòu",
    options: ["rānhòu", "ránhòu", "lánhòu", "ránghòu"],
  },
  // 褲子
  {
    audio: "assets/audio/mode3/ku4zi5.mp3",
    correct: "kùzi",
    options: ["kùzi", "kūzi", "gùzi", "kòuzi"],
  },
  // 簡訊
  {
    audio: "assets/audio/mode3/jian3xun4.mp3",
    correct: "jiǎnxùn",
    options: ["jiánxùn", "qiǎnxùn", "jiǎngxùn", "jiǎnxùn"],
  },
  // 一起
  {
    audio: "assets/audio/mode3/yi4qi3.mp3",
    correct: "yìqǐ",
    options: ["yìqǐ", "yǐqǐ", "yìjǐ", "yìqiě"],
  },
  // 叫做
  {
    audio: "assets/audio/mode3/jiao4zuo4.mp3",
    correct: "jiàozuò",
    options: ["jiǎozuò", "jiàozuò", "qiàozuò", "jiàozuǒ"],
  },
  // 清楚
  {
    audio: "assets/audio/mode3/qing1chu3.mp3",
    correct: "qīngchǔ",
    options: ["qìngchǔ", "jīngchǔ", "qīngchǔ", "qīnchǔ"],
  },
  // 上課
  {
    audio: "assets/audio/mode3/shang4ke4.mp3",
    correct: "shàngkè",
    options: ["shángkè", "sàngkè", "shànkè", "shàngkè"],
  },
  // 籃球
  {
    audio: "assets/audio/mode3/lan2qiu2.mp3",
    correct: "lánqiú",
    options: ["lǎnqiú", "nánqiú", "lánqiú", "lángqiú"],
  },
  // 交通
  {
    audio: "assets/audio/mode3/jiao1tong1.mp3",
    correct: "jiāotōng",
    options: ["jiáotōng", "jiāotōng", "qiāotōng", "jiǎotōng"],
  },
  // 英國
  {
    audio: "assets/audio/mode3/ying1guo2.mp3",
    correct: "yīngguó",
    options: ["yìngguó", "yīngguó", "yīngkuó", "yīngguō"],
  },
  // 接著
  {
    audio: "assets/audio/mode3/jie1zhe5.mp3",
    correct: "jiēzhe",
    options: ["jiézhe", "qiēzhe", "jiēzhe", "jüēzhe"],
  },
  // 全部
  {
    audio: "assets/audio/mode3/quan2bu4.mp3",
    correct: "quánbù",
    options: ["quánbù", "quānbù", "juánbù", "quángbù"],
  },
  // 身體
  {
    audio: "assets/audio/mode3/shen1ti3.mp3",
    correct: "shēntǐ",
    options: ["shèntǐ", "shēntǐ", "sēntǐ", "shēngtǐ"],
  },
  // 冷氣
  {
    audio: "assets/audio/mode3/leng3qi4.mp3",
    correct: "lěngqì",
    options: ["léngqì", "něngqì", "lěnqì", "lěngqì"],
  },
  // 教育
  {
    audio: "assets/audio/mode3/jiao4yu4.mp3",
    correct: "jiàoyù",
    options: ["jiǎoyù", "qiàoyù", "jiàoyù", "jiàoyǔ"],
  },
  // 英文
  {
    audio: "assets/audio/mode3/ying1wen2.mp3",
    correct: "yīngwén",
    options: ["yíngwén", "yǐngwén", "yīngwèn", "yīngwén"],
  },
  // 結果
  {
    audio: "assets/audio/mode3/jie2guo3.mp3",
    correct: "jiéguǒ",
    options: ["jiéguǒ", "jièguǒ", "qiéguǒ", "jüéguǒ"],
  },
  // 認識
  {
    audio: "assets/audio/mode3/ren4shi4.mp3",
    correct: "rènshì",
    options: ["rénshì", "lènshì", "rèngshì", "rènshì"],
  },
  // 生病
  {
    audio: "assets/audio/mode3/sheng1bing4.mp3",
    correct: "shēngbìng",
    options: ["shěngbìng", "sēngbìng", "shēnbìng", "shēngbìng"],
  },
  // 禮拜
  {
    audio: "assets/audio/mode3/li3bai4.mp3",
    correct: "lǐbài",
    options: ["lībài", "lǐbài", "nǐbài", "liěbài"],
  },
  // 結婚
  {
    audio: "assets/audio/mode3/jie2hun1.mp3",
    correct: "jiéhūn",
    options: ["jiéhūn", "jiēhūn", "qiéhūn", "jüéhūn"],
  },
  // 再見
  {
    audio: "assets/audio/mode3/zai4jian4.mp3",
    correct: "zàijiàn",
    options: ["zàijiàn", "záijiàn", "zhàijiàn", "zàijiàng"],
  },
  // 節日
  {
    audio: "assets/audio/mode3/jie2ri4.mp3",
    correct: "jiérì",
    options: ["jiérì", "jiērì", "qiérì", "jüérì"],
  },
  // 認為
  {
    audio: "assets/audio/mode3/ren4wei2.mp3",
    correct: "rènwéi",
    options: ["rěnwéi", "rènwéi", "lènwéi", "rèngwéi"],
  },
  // 生日
  {
    audio: "assets/audio/mode3/sheng1ri4.mp3",
    correct: "shēngrì",
    options: ["shěngrì", "sēngrì", "shēnrì", "shēngrì"],
  },
  // 樓上
  {
    audio: "assets/audio/mode3/lou2shang4.mp3",
    correct: "lóushàng",
    options: ["lǒushàng", "nóushàng", "láoshàng", "lóushàng"],
  },
  // 捷運
  {
    audio: "assets/audio/mode3/jie2yun4.mp3",
    correct: "jiéyùn",
    options: ["jièyùn", "qiéyùn", "jüéyùn", "jiéyùn"],
  },
  // 早安
  {
    audio: "assets/audio/mode3/zao3an1.mp3",
    correct: "zǎoān",
    options: ["zāoān", "zhǎoān", "zǒuān", "zǎoān"],
  },
  // 結束
  {
    audio: "assets/audio/mode3/jie2shu4.mp3",
    correct: "jiéshù",
    options: ["jièshù", "qiéshù", "jüéshù", "jiéshù"],
  },
  // 如果
  {
    audio: "assets/audio/mode3/ru2guo3.mp3",
    correct: "rúguǒ",
    options: ["rūguǒ", "lúguǒ", "róuguǒ", "rúguǒ"],
  },
  // 舒服
  {
    audio: "assets/audio/mode3/shu1fu5.mp3",
    correct: "shūfu",
    options: ["shúfu", "sūfu", "shōufu", "shūfu"],
  },
  // 樓梯
  {
    audio: "assets/audio/mode3/lou2ti1.mp3",
    correct: "lóutī",
    options: ["lóutī", "lòutī", "nóutī", "láotī"],
  },
  // 早上
  {
    audio: "assets/audio/mode3/zao3shang4.mp3",
    correct: "zǎoshàng",
    options: ["zàoshàng", "zǎoshàng", "zhǎoshàng", "zǒushàng"],
  },
  // 金色
  {
    audio: "assets/audio/mode3/jin1se4.mp3",
    correct: "jīnsè",
    options: ["jìnsè", "jīnsè", "qīnsè", "jīngsè"],
  },
  // 聲音
  {
    audio: "assets/audio/mode3/sheng1yin1.mp3",
    correct: "shēngyīn",
    options: ["shéngyīn", "sēngyīn", "shēnyīn", "shēngyīn"],
  },
  // 水果
  {
    audio: "assets/audio/mode3/shui3guo3.mp3",
    correct: "shuǐguǒ",
    options: ["shuíguǒ", "suǐguǒ", "shěiguǒ", "shuǐguǒ"],
  },
  // 樓下
  {
    audio: "assets/audio/mode3/lou2xia4.mp3",
    correct: "lóuxià",
    options: ["lōuxià", "lóuxià", "nóuxià", "láoxià"],
  },
  // 開心
  {
    audio: "assets/audio/mode3/kai1xin1.mp3",
    correct: "kāixīn",
    options: ["káixīn", "gāixīn", "kāixīn", "kāixīng"],
  },
  // 怎麼
  {
    audio: "assets/audio/mode3/zen3me5.mp3",
    correct: "zěnme",
    options: ["zènme", "zhěnme", "zěnme", "zěngme"],
  },
  // 經常
  {
    audio: "assets/audio/mode3/jing1chang2.mp3",
    correct: "jīngcháng",
    options: ["jǐngcháng", "qīngcháng", "jīngcháng", "jīncháng"],
  },
  // 市場
  {
    audio: "assets/audio/mode3/shi4chang3.mp3",
    correct: "shìchǎng",
    options: ["shìchǎng", "shǐchǎng", "sìchǎng", "shièchǎng"],
  },
  // 說話
  {
    audio: "assets/audio/mode3/shuo1hua4.mp3",
    correct: "shuōhuà",
    options: ["shuǒhuà", "suōhuà", "shuōhuà", "shuòhuà"],
  },
  // 路口
  {
    audio: "assets/audio/mode3/lu4kou3.mp3",
    correct: "lùkǒu",
    options: ["lūkǒu", "nùkǒu", "lòukǒu", "lùkǒu"],
  },
  // 可怕
  {
    audio: "assets/audio/mode3/ke3pa4.mp3",
    correct: "kěpà",
    options: ["képà", "kěpà", "gěpà", "kǒpà"],
  },
  // 這裡
  {
    audio: "assets/audio/mode3/zhe4li3.mp3",
    correct: "zhèlǐ",
    options: ["zhělǐ", "zèlǐ", "zhòlǐ", "zhèlǐ"],
  },
  // 精神
  {
    audio: "assets/audio/mode3/jing1shen2.mp3",
    correct: "jīngshén",
    options: ["jìngshén", "qīngshén", "jīnshén", "jīngshén"],
  },
  // 世界
  {
    audio: "assets/audio/mode3/shi4jie4.mp3",
    correct: "shìjiè",
    options: ["shìjiè", "shījiè", "sìjiè", "shièjiè"],
  },
  // 所以
  {
    audio: "assets/audio/mode3/suo3yi3.mp3",
    correct: "suǒyǐ",
    options: ["suòyǐ", "shuǒyǐ", "suǒyǐ", "suǒyī"],
  },
  // 旅館
  {
    audio: "assets/audio/mode3/lv3guan3.mp3",
    correct: "lǚguǎn",
    options: ["lǚguǎn", "lǜguǎn", "nǚguǎn", "lǚguǎng"],
  },
  // 客滿
  {
    audio: "assets/audio/mode3/ke4man3.mp3",
    correct: "kèmǎn",
    options: ["kémǎn", "kèmǎn", "gèmǎn", "kòmǎn"],
  },
  // 知道
  {
    audio: "assets/audio/mode3/zhi1dao4.mp3",
    correct: "zhīdào",
    options: ["zhídào", "zīdào", "zhīdào", "zhiēdào"],
  },
  // 開會
  {
    audio: "assets/audio/mode3/kai1hui4.mp3",
    correct: "kāihuì",
    options: ["káihuì", "gāihuì", "kāihuì", "kāihèi"],
  },
  // 事情
  {
    audio: "assets/audio/mode3/shi4qing2.mp3",
    correct: "shìqíng",
    options: ["shǐqíng", "sìqíng", "shìqíng", "shièqíng"],
  },
  // 天氣
  {
    audio: "assets/audio/mode3/tian1qi4.mp3",
    correct: "tiānqì",
    options: ["tiǎnqì", "diānqì", "tiāngqì", "tiānqì"],
  },
  // 麻煩
  {
    audio: "assets/audio/mode3/ma2fan2.mp3",
    correct: "máfán",
    options: ["māfán", "máhán", "méfán", "máfán"],
  },
  // 口袋
  {
    audio: "assets/audio/mode3/kou3dai4.mp3",
    correct: "kǒudài",
    options: ["kǒudài", "kōudài", "gǒudài", "kǎodài"],
  },
  // 中國
  {
    audio: "assets/audio/mode3/zhong1guo2.mp3",
    correct: "zhōngguó",
    options: ["zhǒngguó", "zhōngguó", "zōngguó", "zhóngguó"],
  },
  // 看法
  {
    audio: "assets/audio/mode3/kan4fa3.mp3",
    correct: "kànfǎ",
    options: ["kànfǎ", "kānfǎ", "gànfǎ", "kàngfǎ"],
  },
  // 雖然
  {
    audio: "assets/audio/mode3/sui1ran2.mp3",
    correct: "suīrán",
    options: ["suìrán", "shuīrán", "suīrán", "sēirán"],
  },
  // 跳舞
  {
    audio: "assets/audio/mode3/tiao4wu3.mp3",
    correct: "tiàowǔ",
    options: ["tiáowǔ", "diàowǔ", "tiàowǔ", "tiàowū"],
  },
  // 馬路
  {
    audio: "assets/audio/mode3/ma3lu4.mp3",
    correct: "mǎlù",
    options: ["màlù", "mǎlù", "mǎnù", "mělù"],
  },
  // 中文
  {
    audio: "assets/audio/mode3/zhong1wen2.mp3",
    correct: "zhōngwén",
    options: ["zhōngwén", "zhóngwén", "zōngwén", "zhōngwèn"],
  },
  // 咳嗽
  {
    audio: "assets/audio/mode3/ke2sou4.mp3",
    correct: "késòu",
    options: ["kěsòu", "gésòu", "késòu", "kósòu"],
  },
  // 所有
  {
    audio: "assets/audio/mode3/suo3you3.mp3",
    correct: "suǒyǒu",
    options: ["suǒyǒu", "suòyǒu", "shuǒyǒu", "suǒyóu"],
  },
  // 聽見
  {
    audio: "assets/audio/mode3/ting1jian4.mp3",
    correct: "tīngjiàn",
    options: ["tīngjiàn", "tǐngjiàn", "dīngjiàn", "tīnjiàn"],
  },
  // 饅頭
  {
    audio: "assets/audio/mode3/man2tou5.mp3",
    correct: "mántou",
    options: ["màntou", "mántou", "mándou", "mángtou"],
  },
  // 禮物
  {
    audio: "assets/audio/mode3/li3wu4.mp3",
    correct: "lǐwù",
    options: ["līwù", "lǐwù", "nǐwù", "liěwù"],
  },
  // 中午
  {
    audio: "assets/audio/mode3/zhong1wu3.mp3",
    correct: "zhōngwǔ",
    options: ["zhóngwǔ", "zhōngwǔ", "zōngwǔ", "zhòngwǔ"],
  },
  // 特別
  {
    audio: "assets/audio/mode3/te4bie2.mp3",
    correct: "tèbié",
    options: ["tébié", "dèbié", "tèbié", "tòbié"],
  },
  // 外國
  {
    audio: "assets/audio/mode3/wai4guo2.mp3",
    correct: "wàiguó",
    options: ["wāiguó", "wàikuó", "wàiguó", "wǎiguó"],
  },
  // 慢跑
  {
    audio: "assets/audio/mode3/man4pao3.mp3",
    correct: "mànpǎo",
    options: ["mànpǎo", "mǎnpǎo", "mànbǎo", "màngpǎo"],
  },
  // 立刻
  {
    audio: "assets/audio/mode3/li4ke4.mp3",
    correct: "lìkè",
    options: ["lìkè", "lǐkè", "nìkè", "lièkè"],
  },
  // 昨天
  {
    audio: "assets/audio/mode3/zuo2tian1.mp3",
    correct: "zuótiān",
    options: ["zuōtiān", "zuótiān", "zhuótiān", "zuótiāng"],
  },
  // 困難
  {
    audio: "assets/audio/mode3/kun4nan2.mp3",
    correct: "kùnnán",
    options: ["kǔnnán", "kùnnán", "gùnnán", "kùnnáng"],
  },
  // 聽到
  {
    audio: "assets/audio/mode3/ting1dao4.mp3",
    correct: "tīngdào",
    options: ["tìngdào", "tīngdào", "dīngdào", "tīndào"],
  },
  // 外頭
  {
    audio: "assets/audio/mode3/wai4tou5.mp3",
    correct: "wàitou",
    options: ["wàitou", "wǎitou", "wàidou", "wàitao"],
  },
  // 帽子
  {
    audio: "assets/audio/mode3/mao4zi5.mp3",
    correct: "màozi",
    options: ["mǎozi", "màozhi", "mòuzi", "màozi"],
  },
  // 歷史
  {
    audio: "assets/audio/mode3/li4shi3.mp3",
    correct: "lìshǐ",
    options: ["lǐshǐ", "nìshǐ", "lièshǐ", "lìshǐ"],
  },
  // 籃子
  {
    audio: "assets/audio/mode3/lan2zi5.mp3",
    correct: "lánzi",
    options: ["lǎnzi", "nánzi", "lánzi", "lángzi"],
  },
  // 聽說
  {
    audio: "assets/audio/mode3/ting1shuo1.mp3",
    correct: "tīngshuō",
    options: ["tīngshuō", "tìngshuō", "dīngshuō", "tīnshuō"],
  },
  // 晚餐
  {
    audio: "assets/audio/mode3/wan3can1.mp3",
    correct: "wǎncān",
    options: ["wáncān", "wǎncān", "wǎnchān", "wǎncāng"],
  },
  // 門票
  {
    audio: "assets/audio/mode3/men2piao4.mp3",
    correct: "ménpiào",
    options: ["ménpiào", "mènpiào", "ménbiào", "méngpiào"],
  },
  // 例子
  {
    audio: "assets/audio/mode3/li4zi5.mp3",
    correct: "lìzi",
    options: ["līzi", "nìzi", "lìzi", "lièzi"],
  },
  // 禮貌
  {
    audio: "assets/audio/mode3/li3mao4.mp3",
    correct: "lǐmào",
    options: ["lìmào", "nǐmào", "liěmào", "lǐmào"],
  },
  // 網路
  {
    audio: "assets/audio/mode3/wang3lu4.mp3",
    correct: "wǎnglù",
    options: ["wānglù", "wǎngnù", "wǎnglòu", "wǎnglù"],
  },
  // 晚飯
  {
    audio: "assets/audio/mode3/wan3fan4.mp3",
    correct: "wǎnfàn",
    options: ["wānfàn", "wǎnfàn", "wǎnhàn", "wǎnfàng"],
  },
  // 奶茶
  {
    audio: "assets/audio/mode3/nai3cha2.mp3",
    correct: "nǎichá",
    options: ["nǎichá", "nàichá", "lǎichá", "nǎiché"],
  },
  // 涼快
  {
    audio: "assets/audio/mode3/liang2kuai4.mp3",
    correct: "liángkuài",
    options: ["liàngkuài", "liángkuài", "niángkuài", "liánkuài"],
  },
  // 例如
  {
    audio: "assets/audio/mode3/li4ru2.mp3",
    correct: "lìrú",
    options: ["lǐrú", "nìrú", "lièrú", "lìrú"],
  },
  // 味道
  {
    audio: "assets/audio/mode3/wei4dao4.mp3",
    correct: "wèidào",
    options: ["wēidào", "wèitào", "wèidào", "wèidòu"],
  },
  // 午餐
  {
    audio: "assets/audio/mode3/wu3can1.mp3",
    correct: "wǔcān",
    options: ["wùcān", "wǔcān", "wǔchān", "wǔcāng"],
  },
  // 奶奶
  {
    audio: "assets/audio/mode3/nai3nai5.mp3",
    correct: "nǎinai",
    options: ["nǎinai", "nàinai", "lǎinai", "náinai"],
  },
  // 鄰居
  {
    audio: "assets/audio/mode3/lin2ju1.mp3",
    correct: "línjū",
    options: ["línjū", "lǐnjū", "nínjū", "língjū"],
  },
  // 利用
  {
    audio: "assets/audio/mode3/li4yong4.mp3",
    correct: "lìyòng",
    options: ["lǐyòng", "nìyòng", "lìyòng", "lièyòng"],
  },
  // 文化
  {
    audio: "assets/audio/mode3/wen2hua4.mp3",
    correct: "wénhuà",
    options: ["wénhuà", "wènhuà", "wénfuà", "wěnhuà"],
  },
  // 午飯
  {
    audio: "assets/audio/mode3/wu3fan4.mp3",
    correct: "wǔfàn",
    options: ["wǔfàn", "wùfàn", "wǔhàn", "wǔfàng"],
  },
  // 難過
  {
    audio: "assets/audio/mode3/nan2guo4.mp3",
    correct: "nánguò",
    options: ["nānguò", "lánguò", "nánguò", "nángguò"],
  },
  // 零錢
  {
    audio: "assets/audio/mode3/ling2qian2.mp3",
    correct: "língqián",
    options: ["lìngqián", "níngqián", "línqián", "língqián"],
  },
  // 臉色
  {
    audio: "assets/audio/mode3/lian3se4.mp3",
    correct: "liǎnsè",
    options: ["liánsè", "niǎnsè", "liǎnsè", "liǎngsè"],
  },
  // 屋子
  {
    audio: "assets/audio/mode3/wu1zi5.mp3",
    correct: "wūzi",
    options: ["wǔzi", "wūzi", "wūzhi", "wūzie"],
  },
  // 下課
  {
    audio: "assets/audio/mode3/xia4ke4.mp3",
    correct: "xiàkè",
    options: ["xiákè", "shiàkè", "xiàkè", "xiàkò"],
  },
  // 男生
  {
    audio: "assets/audio/mode3/nan2sheng1.mp3",
    correct: "nánshēng",
    options: ["nánshēng", "nānshēng", "lánshēng", "nángshēng"],
  },
  // 另外
  {
    audio: "assets/audio/mode3/ling4wai4.mp3",
    correct: "lìngwài",
    options: ["lǐngwài", "nìngwài", "lìngwài", "lìnwài"],
  },
  // 了解
  {
    audio: "assets/audio/mode3/liao3jie3.mp3",
    correct: "liǎojiě",
    options: ["liàojiě", "liǎojiě", "niǎojiě", "liǎojüě"],
  },
  // 希望
  {
    audio: "assets/audio/mode3/xi1wang4.mp3",
    correct: "xīwàng",
    options: ["xíwàng", "xīwàng", "shīwàng", "xiēwàng"],
  },
  // 下雨
  {
    audio: "assets/audio/mode3/xia4yu3.mp3",
    correct: "xiàyǔ",
    options: ["xiàyǔ", "xiǎyǔ", "shiàyǔ", "xiāyǔ"],
  },
  // 年級
  {
    audio: "assets/audio/mode3/nian2ji2.mp3",
    correct: "niánjí",
    options: ["niǎnjí", "niánjí", "liánjí", "niángjí"],
  },
  // 流汗
  {
    audio: "assets/audio/mode3/liu2han4.mp3",
    correct: "liúhàn",
    options: ["liǔhàn", "liúhàn", "niúhàn", "liúhàng"],
  },
  // 留下
  {
    audio: "assets/audio/mode3/liu2xia4.mp3",
    correct: "liúxià",
    options: ["liùxià", "liúxià", "niúxià", "liúxiá"],
  },
  // 習慣
  {
    audio: "assets/audio/mode3/xi2guan4.mp3",
    correct: "xíguàn",
    options: ["xìguàn", "shíguàn", "xíguàn", "xiéguàn"],
  },
  // 小吃
  {
    audio: "assets/audio/mode3/xiao3chi1.mp3",
    correct: "xiǎochī",
    options: ["xiáochī", "shiǎochī", "xiǎochī", "xiǎochiē"],
  },
  // 念書
  {
    audio: "assets/audio/mode3/nian4shu1.mp3",
    correct: "niànshū",
    options: ["niǎnshū", "liànshū", "niànshū", "niàngshū"],
  },
  // 流行
  {
    audio: "assets/audio/mode3/liu2xing2.mp3",
    correct: "liúxíng",
    options: ["liūxíng", "liúxíng", "niúxíng", "liúxín"],
  },
  // 美麗
  {
    audio: "assets/audio/mode3/mei3li4.mp3",
    correct: "měilì",
    options: ["mēilì", "měinì", "muǐlì", "měilì"],
  },
  // 夏天
  {
    audio: "assets/audio/mode3/xia4tian1.mp3",
    correct: "xiàtiān",
    options: ["xiátiān", "xiàtiān", "shiàtiān", "xiàtiāng"],
  },
  // 鞋子
  {
    audio: "assets/audio/mode3/xie2zi5.mp3",
    correct: "xiézi",
    options: ["xiēzi", "xiézi", "shiézi", "xüézi"],
  },
  // 女生
  {
    audio: "assets/audio/mode3/nv3sheng1.mp3",
    correct: "nǚshēng",
    options: ["nǚshēng", "nǖshēng", "lǚshēng", "nǚshēn"],
  },
  // 芒果
  {
    audio: "assets/audio/mode3/mang2guo3.mp3",
    correct: "mángguǒ",
    options: ["mǎngguǒ", "mángguǒ", "mángkuǒ", "mánguǒ"],
  },
  // 美洲
  {
    audio: "assets/audio/mode3/mei3zhou1.mp3",
    correct: "měizhōu",
    options: ["mēizhōu", "měizōu", "měizhōu", "muǐzhōu"],
  },
  // 相信
  {
    audio: "assets/audio/mode3/xiang1xin4.mp3",
    correct: "xiāngxìn",
    options: ["xiàngxìn", "xiāngxìn", "shiāngxìn", "xiānxìn"],
  },
  // 盤子
  {
    audio: "assets/audio/mode3/pan2zi5.mp3",
    correct: "pánzi",
    options: ["pānzi", "pánzi", "bánzi", "pángzi"],
  },
  // 毛巾
  {
    audio: "assets/audio/mode3/mao2jin1.mp3",
    correct: "máojīn",
    options: ["mǎojīn", "máoqīn", "máojīn", "móujīn"],
  },
  // 母語
  {
    audio: "assets/audio/mode3/mu3yu3.mp3",
    correct: "mǔyǔ",
    options: ["múyǔ", "mǒuyǔ", "mǔyǔ", "mǔyū"],
  },
  // 想法
  {
    audio: "assets/audio/mode3/xiang3fa3.mp3",
    correct: "xiǎngfǎ",
    options: ["xiǎngfǎ", "xiángfǎ", "shiǎngfǎ", "xiǎnfǎ"],
  },
  // 跑步
  {
    audio: "assets/audio/mode3/pao3bu4.mp3",
    correct: "pǎobù",
    options: ["pāobù", "pǎobù", "bǎobù", "pǒubù"],
  },
  // 毛衣
  {
    audio: "assets/audio/mode3/mao2yi1.mp3",
    correct: "máoyī",
    options: ["mǎoyī", "móuyī", "máoyī", "máoyí"],
  },
  // 目的
  {
    audio: "assets/audio/mode3/mu4di4.mp3",
    correct: "mùdì",
    options: ["mūdì", "mùtì", "mùdì", "mòudì"],
  },
  // 相片
  {
    audio: "assets/audio/mode3/xiang4pian4.mp3",
    correct: "xiàngpiàn",
    options: ["xiángpiàn", "shiàngpiàn", "xiànpiàn", "xiàngpiàn"],
  },
  // 眼睛
  {
    audio: "assets/audio/mode3/yan3jing1.mp3",
    correct: "yǎnjīng",
    options: ["yánjīng", "yǎnjīng", "yǎnqīng", "yǎnjīn"],
  },
  // 皮包
  {
    audio: "assets/audio/mode3/pi2bao1.mp3",
    correct: "píbāo",
    options: ["pǐbāo", "bíbāo", "píbāo", "piébāo"],
  },
  // 母親
  {
    audio: "assets/audio/mode3/mu3qin1.mp3",
    correct: "mǔqīn",
    options: ["múqīn", "mǔjīn", "mǒuqīn", "mǔqīn"],
  },
  // 木瓜
  {
    audio: "assets/audio/mode3/mu4gua1.mp3",
    correct: "mùguā",
    options: ["mùguā", "mǔguā", "mùkuā", "mòuguā"],
  },
  // 那樣
  {
    audio: "assets/audio/mode3/na4yang4.mp3",
    correct: "nàyàng",
    options: ["nāyàng", "nàyàng", "làyàng", "nèyàng"],
  },
  // 鬧鐘
  {
    audio: "assets/audio/mode3/nao4zhong1.mp3",
    correct: "nàozhōng",
    options: ["nāozhōng", "nàozhōng", "làozhōng", "nòuzhōng"],
  },
  // 年紀
  {
    audio: "assets/audio/mode3/nian2ji4.mp3",
    correct: "niánjì",
    options: ["niànjì", "niánjì", "liánjì", "niángjì"],
  },
  // 牛排
  {
    audio: "assets/audio/mode3/niu2pai2.mp3",
    correct: "niúpái",
    options: ["niùpái", "liúpái", "niúpāi", "niúpái"],
  },
];

/* 一回合的題數 */
const MODE3_TOTAL = 10;

if (typeof window !== "undefined") {
  window.mode3Questions = mode3Questions;
  window.MODE3_TOTAL = MODE3_TOTAL;
}
