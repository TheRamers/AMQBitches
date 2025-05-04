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
    Miyafuji: "Misato Fukuen",
    Sakamoto: "Saeko Chiba",
    Lynne: "Kaori Nazuka",
    Perrine: "Miyuki Sawashiro",
    Minna: "Rie Tanaka",
    Barkhorn: "Mie Sonozaki",
    Erica: "Sakura Nogawa",
    Lucchini: "Chiwa Saito",
    Shirley: "Ami Koshimizu",
    Sanya: "Mai Kadowaki",
    Illu: "Erika Nakai",
    Shizuka: "Aya Uchida",
    // Brave Witches
    502: "AiKakumaRieSuegaraRieMurakawaNatsumiTakamoriKayoIshidaYumiHaraHarukaTeruiMarinMizutaniHiromiIgarashiRinaSatou",
    Hikari: "Ai Kakuma",
    Takami: "Rie Suegara",
    Kanoo: "Rie Murakawa",
    Nipa: "Natsumi Takamori",
    Grafin: "Kayo Ishida",
    Sasha: "Yumi Hara",
    George: "Haruka Terui",
    Sadako: "Marin Mizutani",
    Paula: "Hiromi Igarashi",
    Gundula: "Rina Satou",
    // Luminous Witches
    LuminousWitches: "MisakiYuukiKanaKonakaRioMamesakiRinoYoshikitaRyouMamiyaMinakoHosokawaMaiNarumiAmiAimotoSayakaTsuzuki",
    Mana: "Misaki Yuuki",
    Maria: "Kana Konaka",
    Jo: "Rio Mamesaki",
    Sylvie: "Rino Yoshikita",
    Aila: "Ryou Mamiya",
    Inorin: "Minako Hosokawa",
    Ginny: "Mai Narumi",
    Milasha: "Ami Aimoto",
    Ellie: "Sayaka Tsuzuki",
    Gracie: "Mikako Komatsu",
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
