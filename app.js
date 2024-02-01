let userInp = document.querySelector("#userText")
let listenBtn = document.querySelector(".listenBtn")
let pauseBtn = document.querySelector(".pauseBtn")
let voicesSelect = document.querySelector(".lang")

let msg = new SpeechSynthesisUtterance;

let voices = []

window.speechSynthesis.onvoiceschanged = (e) => {
    voices = window.speechSynthesis.getVoices()
    msg.voice = voices[0]

    voices.forEach((voice, index) => {
        voicesSelect.options[index] = new Option(voice.name, index)
    })
}

voicesSelect.addEventListener("change", (e) => {
    msg.voice = voices[voicesSelect.value]
    console.log(voicesSelect.value);
})


const listenVoice = (e) => {

    msg.text = userInp.value;
    window.speechSynthesis.speak(msg)
    console.log('funtion is still working', userInp.value);
   
}



listenBtn.addEventListener("click", listenVoice)