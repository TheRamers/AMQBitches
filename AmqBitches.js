// ==UserScript==
// @name         Amq Bitches
// @namespace    Daijobi + Bartolominho
// @version      1
// @description  AutoSend Bitches to the Chat
// @author       TheRamers & Bartolominho
// @match        https://animemusicquiz.com/*
// @require      https://github.com/joske2865/AMQ-Scripts/raw/master/common/amqScriptInfo.js
// @require      https://github.com/joske2865/AMQ-Scripts/raw/master/common/amqWindows.js
// @downloadURL  https://github.com/TheRamers/AMQ-Bitches/raw/main/Amq%20Bitches.js
// @updateURL    https://github.com/TheRamers/AMQ-Bitches/raw/main/Amq%20Bitches.js
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
    
    502: "AiKakumaRieSuegaraRiMurakawaNatsumiTakamoriKayoIshidaYumiHaraHarukaTeruiMarinMizutaniHiromiIgarashiRinaSatou",
    502ova: "AiKakumaMaiKadowakiAyuruOhashi",
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
