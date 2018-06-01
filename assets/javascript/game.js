var words = [
    "fairway",
    "gardner",
    "lakequivira",
    "lenexa",
    "merriam",
    "mission",
    "missionhills",
    "olathe",
    "overlandpark",
    "prairievillage",
    "roelandpark",
    "shawnee",
    "westwood"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
};
var remainingLetters = word.length;
console.log(word);
console.log(answerArray);
function setgamescreen() {
    document.getElementById("gameBox").innerHTML = "";
    var node = document.createElement("div");
    var gamenode = document.createTextNode(answerArray.join(" "));
    node.appendChild(gamenode);
    document.getElementById("gameBox").appendChild(node);
}
if (remainingLetters > 0) {
    setgamescreen();
    document.onkeyup = function(event) {
    
        var guess = event.key.toLowerCase();
        console.log(guess);
        console.log(remainingLetters);
        if (guess === "a" || guess === "b" || guess === "c" || guess === "d" || guess === "e" || guess === "f" || guess === "g" || guess === "h" || guess === "i" || guess === "j" || guess === "k" || guess === "l" || guess === "m" || guess === "n" || guess === "o" || guess === "p" || guess === "q" || guess === "r" || guess === "s" || guess === "t" || guess === "u" || guess === "v" || guess === "w" || guess === "x" || guess === "y" || guess === "z") {
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }        
        setgamescreen();
    }
}