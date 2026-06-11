async function translateText(){

    let text =
    document.getElementById("inputText").value;

    let source =
    document.getElementById("sourceLang").value;

    let target =
    document.getElementById("targetLang").value;

    let url =
    `https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;

    try{

        let response =
        await fetch(url);

        let data =
        await response.json();

        document.getElementById("outputText").value =
        data.responseData.translatedText;

    }

    catch(error){

        alert("Translation Failed");

    }

}
function copyText(){

    let text =
    document.getElementById("outputText");

    text.select();

    document.execCommand("copy");

    alert("Copied");
}
function speakText(){

    let text =
    document.getElementById("outputText").value;

    let speech =
    new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(speech);

}
inputText.addEventListener("input", () => {
    count.innerText =
    inputText.value.length + " Characters";
});