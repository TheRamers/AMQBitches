// ==UserScript==
// @name         Amq Bitches
// @namespace    Daijobi + Bartolominho
// @version      1.01
// @description  AutoSend Bitches to the Chat
// @author       TheRamers & Bartolominho
// @match        https://animemusicquiz.com/*
// @require      https://github.com/joske2865/AMQ-Scripts/raw/master/common/amqScriptInfo.js
// @require      https://github.com/joske2865/AMQ-Scripts/raw/master/common/amqWindows.js
// @downloadURL  https://github.com/TheRamers/AMQBitches/raw/main/AmqBitches.js
// @updateURL    https://github.com/TheRamers/AMQBitches/raw/main/AmqBitches.js
// ==/UserScript==

if (document.getElementById("loginPage")) return;

let loadInterval = setInterval(() => {
    if (document.getElementById("loadingScreen").classList.contains("hidden")) {
        setup();
        clearInterval(loadInterval);
    }
}, 500);

function sendChatMessage(message) {
    gameChat.$chatInputField.val(message);
    gameChat.sendMessage();
}
    // Não Mexer Acima
const comandos = {
    // Strike Witches
    501: "MisatoFukuenSaekoChibaKaoriNazukaMiyukiSawashiroRieTanakaMieSonozakiSakuraNogawaChiwaSaitoAmiKoshimizuMaiKadowakiErikaNakai",
    miyafuji: "Misato Fukuen",
    sakamoto: "Saeko Chiba",
    lynne: "Kaori Nazuka",
    perrine: "Miyuki Sawashiro",
    minna: "Rie Tanaka",
    barkhorn: "Mie Sonozaki",
    erica: "Sakura Nogawa",
    lucchini: "Chiwa Saito",
    shirley: "Ami Koshimizu",
    sanya: "Mai Kadowaki",
    illu: "Erika Nakai",
    shizuka: "Aya Uchida",
    // Brave Witches
    502: "AiKakumaRieSuegaraRieMurakawaNatsumiTakamoriKayoIshidaYumiHaraHarukaTeruiMarinMizutaniHiromiIgarashiRinaSatou",
    hikari: "Ai Kakuma",
    takami: "Rie Suegara",
    kanoo: "Rie Murakawa",
    nipa: "Natsumi Takamori",
    grafin: "Kayo Ishida",
    sasha: "Yumi Hara",
    george: "Haruka Terui",
    sadako: "Marin Mizutani",
    paula: "Hiromi Igarashi",
    gundula: "Rina Satou",
    // Luminous Witches
    luminouswitches: "MisakiYuukiKanaKonakaRioMamesakiRinoYoshikitaRyouMamiyaMinakoHosokawaMaiNarumiAmiAimotoSayakaTsuzuki",
    mana: "Misaki Yuuki",
    maria: "Kana Konaka",
    jo: "Rio Mamesaki",
    sylvie: "Rino Yoshikita",
    aila: "Ryou Mamiya",
    inorin: "Minako Hosokawa",
    ginny: "Mai Narumi",
    milasha: "Ami Aimoto",
    ellie: "Sayaka Tsuzuki",
    gracie: "Mikako Komatsu",
    // Adicionar Mais Putas
};
    // Não Mexer Abaixo
function setup() {
    new Listener("game chat update", (payload) => {
        payload.messages.forEach((message) => {
            if (message.sender === selfName && message.message.startsWith("/")) {
                let comando = message.message.slice(1).toLowerCase();
                if (comandos.hasOwnProperty(comando)) {
                    sendChatMessage(comandos[comando]);
                }
            }
        });
    }).bindListener();
}
