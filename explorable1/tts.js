function readText() {
    const input = document.getElementById('fileInput');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            speak(text);
        };
        reader.readAsText(input.files[0]);
    }
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}