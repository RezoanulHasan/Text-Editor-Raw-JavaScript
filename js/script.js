// Array to store text history for undo and redo
let textHistory = [];
let currentPosition = -1;

// Function to save the current text in history
function saveHistory() {
    textHistory.push(document.getElementById('text').value);
    currentPosition++;
}

// Function to undo changes
function undo() {
    if (currentPosition > 0) {
        currentPosition--;
        document.getElementById('text').value = textHistory[currentPosition];
        updateWordAndSentenceCount();
    }
}

// Function to redo changes
function redo() {
    if (currentPosition < textHistory.length - 1) {
        currentPosition++;
        document.getElementById('text').value = textHistory[currentPosition];
        updateWordAndSentenceCount();
    }
}

// Function to clear text
function clearText() {
    document.getElementById('text').value = '';
    updateWordAndSentenceCount();
}

// Function to copy text to clipboard
function copyText() {
    document.getElementById('text').select();
    document.execCommand('copy');
}

// Function to cut selected text
function cutText() {
    document.getElementById('text').select();
    document.execCommand('cut');
    updateWordAndSentenceCount();
}

// Function to paste text from clipboard
function pasteText() {
    document.getElementById('text').select();
    document.execCommand('paste');
    updateWordAndSentenceCount();
}

// Function to update word and sentence count
function updateWordAndSentenceCount() {
    const text = document.getElementById('text').value;
    const words = text.split(/\s+/).filter(word => word !== '');
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence !== '');
    document.getElementById('wordCount').innerText = words.length;
    document.getElementById('sentenceCount').innerText = sentences.length;
}

// Event listener for text input to update word and sentence count
document.getElementById('text').addEventListener('input', function () {
    saveHistory();
    updateWordAndSentenceCount();
});
// Function to toggle bold
function toggleBold() {
    const textField = document.getElementById('text');
    const currentWeight = window.getComputedStyle(textField).fontWeight;

    textField.style.fontWeight = currentWeight === 'bold' ? 'normal' : 'bold';
}

// Function to toggle italic
function toggleItalic() {
    const textField = document.getElementById('text');
    const currentStyle = window.getComputedStyle(textField).fontStyle;

    textField.style.fontStyle = currentStyle === 'italic' ? 'normal' : 'italic';
}

// Function to toggle underline
function toggleUnderline() {
    const textField = document.getElementById('text');
    const currentDecoration = window.getComputedStyle(textField).textDecoration;

    textField.style.textDecoration = currentDecoration === 'underline' ? 'normal' : 'underline';
}



// Function to left ,right and center align
function leftAlign(){
    const textField = document.getElementById('text');

    textField.style.textAlign = 'left';
}
function centerAlign(){
    const textField = document.getElementById('text');

    textField.style.textAlign = 'center';
}
function rightAlign(){
    const textField = document.getElementById('text');

    textField.style.textAlign = 'right';
}
function textTransform(){
    const textField = document.getElementById('text');

    textField.style.textTransform = 'uppercase';
}





// Event listeners for undo and redo buttons
document.getElementById('undoBtn').addEventListener('click', undo);
document.getElementById('redoBtn').addEventListener('click', redo);

// Event listeners for clear, copy, cut, and paste buttons
document.getElementById('clearBtn').addEventListener('click', clearText);
document.getElementById('copyBtn').addEventListener('click', copyText);
document.getElementById('cutBtn').addEventListener('click', cutText);
document.getElementById('pasteBtn').addEventListener('click', pasteText);
// Event listener for font size change
document.getElementById('fontSize').addEventListener('change', function (e) {
    const fontSizeValue = parseInt(e.target.value);
    const textField = document.getElementById('text');
    textField.style.fontSize = fontSizeValue + 'px';
});

// Event listener for text color change
document.getElementById('color').addEventListener('input', function (e) {
    const textField = document.getElementById('text');
    textField.style.color = e.target.value;
});