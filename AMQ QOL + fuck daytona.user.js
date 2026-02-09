// ==UserScript==
// @name         AMQ QOL + fuck daytona
// @namespace    https://github.com/TheRamers/AMQBitches
// @version      0.5
// @author       Bartolominho
// @description  Replace short anime names with full titles and select first dropdown answer when Enter is pressed.
// @description  Integration of Mxkyuki DAYT WHY(Short Names)+Einlar Enter DropD with some changes.
// @description  And made so it doesn't select dropdown when you fully type a name manually for noDD rooms or just for fun :)
// @match        https://*.animemusicquiz.com/*
// @require      https://raw.githubusercontent.com/TheRamers/AMQBitches/refs/heads/main/lib/shortcuts.js
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

// const replace = GM_getValue('atalhos');

function replaceTitle(answer) {
    let lowerAnswer = answer.toLowerCase();
    let fullTitle = replace[lowerAnswer];

    if (fullTitle) {
        quiz.answerInput.setNewAnswer(fullTitle);
        quiz.answerInput.submitAnswer();
        quiz.answerInput.activeInputController.autoCompleteController.awesomepleteInstance.close(); // Hide dropdown on submit
        return true;
    }
    return false;
}

const getSuggestions = (search) => {
    const regex = new RegExp(createAnimeSearchRegexQuery(search), "i");
    const filteredList = quiz.answerInput.typingInput.autoCompleteController.list.filter(anime => regex.test(anime));
    filteredList.sort((a, b) => a.length - b.length || a.localeCompare(b));
    return filteredList[0] || "";
};

const isValidAnime = (animeName) => {
    return quiz.answerInput.typingInput.autoCompleteController.list.some(anime => anime.toLowerCase() === animeName.toLowerCase());
};

function bindAnswerInputEvent() {
    const $input = $("#qpAnswerInput");

    if ($input.length > 0) {
        $input.on("keydown", function (event) {
            if (event.which === 13) { // Enter key
                const val = $(this).val();

                // Check if the user has selected an item from the dropdown (skip logic if selected)
                if (
                    quiz.answerInput.typingInput.autoCompleteController.awesomepleteInstance.selected
                ) return;

                if (val) {
                    const replaced = replaceTitle(val);
                    if (!replaced) {
                        const firstSuggestion = getSuggestions(val);
                        const isFirstSuggestionMatch = firstSuggestion.toLowerCase() === val.toLowerCase();
                        const highlighted = quiz.answerInput.typingInput.autoCompleteController.awesomepleteInstance.$ul.children("li").filter('[aria-selected="true"]').text();

                        if (isFirstSuggestionMatch || highlighted === val) {
                            console.log("Typed answer matches the first dropdown suggestion or manually selected. Skipping dropdown logic.");
                            quiz.answerInput.setNewAnswer(val);
                            quiz.answerInput.submitAnswer();
                        } else if (firstSuggestion) {
                            $(this).val(firstSuggestion);
                            quiz.answerInput.submitAnswer();
                        }
                        quiz.answerInput.activeInputController.autoCompleteController.awesomepleteInstance.close(); // Hide dropdown on submit
                    }
                }
            }
        });
    } else {
        setTimeout(bindAnswerInputEvent, 500);
    }
}

let loadInterval = setInterval(() => {
    if ($("#loadingScreen").hasClass("hidden")) {
        clearInterval(loadInterval);
        bindAnswerInputEvent();
    }
}, 500);
