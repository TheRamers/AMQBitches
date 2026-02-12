// ==UserScript==
// @name         AMQ QOL + fuck daytona
// @namespace    https://github.com/TheRamers/AMQBitches
// @version      0.6
// @author       Bartolominho
// @description  Replace short anime names with full titles and select first dropdown answer when Enter is pressed.
// @description  Integration of Mxkyuki DAYT WHY(Short Names)+Einlar Enter DropD with some changes.
// @description  And made so it doesn't select dropdown when you fully type a name manually for noDD rooms or just for fun :)
// @match        https://*.animemusicquiz.com/*
// @require      https://raw.githubusercontent.com/TheRamers/AMQBitches/refs/heads/main/lib/shortcuts.js
// ==/UserScript==

let inputBox = document.getElementById('qpAnswerInput');

function setAnswer(text) {
	quiz.answerInput.setNewAnswer(text);
	quiz.answerInput.typingInput.autoCompleteController.awesomepleteInstance.close();
}

function inputEvent(payload) {
	let dropdown = quiz.answerInput.typingInput.autoCompleteController.awesomepleteInstance;
	let inputText = inputBox.value.toLowerCase();
	let shortcutText = replace[inputText];

	/* prefer shortcuts if available */
	if (shortcutText) {
		setAnswer(shortcutText);
		return;
	}

	/* skip on empty text or invalid keypress */
	if (inputText == '' || payload.key != 'Enter')
		return;

	/* skip on manual selection or unopened dropdown */
	if (dropdown.selected || !dropdown.isOpened)
		return;

	/* get first dropdown and set as the answer*/
	let firstDrop = dropdown.suggestions[0].value;

	if (inputText != firstDrop.toLowerCase())
		setAnswer(firstDrop);
}

inputBox.addEventListener('keydown', inputEvent);
