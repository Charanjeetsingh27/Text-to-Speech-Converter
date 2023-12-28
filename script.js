let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceselect = document.querySelector("select");

window.SpeechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceselect.options[i] = new option(voice.name, i)));
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelectvalue];
});

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});