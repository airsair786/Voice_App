var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML = content;
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("text_box").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set(
    {
        width: 350,
        height: 250,
        image_format: 'png',
        png_quality: 90
    }
);

camera = document.getElementById("camera");