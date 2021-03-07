let button = document.querySelector("button");

function findMostFrequest(array) {
    let numberOfWordsInTheMessage = "";
    let theMostFrequentWord = "";
    array.reduce((arr, val) => {
        if (val in arr) {
            arr[val]++;
        } else {
            arr[val] = 1;
        }
        if (arr[val] > numberOfWordsInTheMessage) {
            numberOfWordsInTheMessage = arr[val];
            theMostFrequentWord = val;
        }
        return arr;
    }, {})
    document.getElementById("result").innerHTML = 'The most frequent word of this message is "' + theMostFrequentWord + '" \n The number of words in this message is ' + numberOfWordsInTheMessage + '.';
}

button.addEventListener("click", () => {
    let message = document.getElementById("message");
    message = message.value.toUpperCase();
    if (message.length < 20) {
        alert("The input message must be at least 20 characters long!")
    } else {
        let messageWords = message.split(" ");
        findMostFrequest(messageWords);
        let randomPhrase = new Array("A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey", "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore", "You are a wizard, Harry (c) Hagrid");
        let randomPicture = new Array("https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE", "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg", "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg");
        let randomNum = Math.floor(Math.random() * randomPhrase.length);
        document.getElementById("phrase").innerHTML = randomPhrase[randomNum];
        document.getElementById("picture").src = randomPicture[randomNum];
    }
});