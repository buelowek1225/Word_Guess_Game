// list of unique geographic regions or locations
var geolocations = [
    {
        letters: ["m", "a", "c", "h", "u", "p", "i", "c", "c", "h", "u"],
        name: "machu picchu"
    },
    {
        Letters: ["a", "n", "d", "e", "s"],
        name: "andes"
    },
    {
        Letters: ["s", "a", "h", "a", "r", "a"],
        name: "sahara"
    },
    {
        Letters: ["p", "a", "c", "i", "f", "i", "c"],
        name: "pacific"
    },
    {
        Letters: ["p", "a", "t", "a", "g", "o", "n", "i", "a"],
        name: "patagonia"
    },
    {
        Letters: ["d", "e", "n", "m", "a", "r", "k"],
        name: "denmark"
    },
    {
        Letters: ["a", "m", "a", "z", "o", "n"],
        name: "amazon"
    },
    {
        Letters: ["c", "a", "s", "c", "a", "d", "e", "s"],
        name: "cascades"
    },
    {
        Letters: ["a", "l", "p", "s"],
        name: "alps"
    },
    {
        Letters: ["s", "i", "b", "e", "r", "i", "a"],
        name: "siberia"
    },
    {
        Letters: ["y", "a", "n", "g", "t", "z", "e"],
        name: "yangtze"
    },  
    {
        Letters: ["h", "i", "m", "a", "l", "a", "y", "a", "s"],
        name: "himalayas"
    }
]
// console.log(geolocations);

//Wrong Letter Array
var wrongletters = [];

//Guesses left
var guesses = 12;

//randomly pick a value from my array
var rand = Math.floor(Math.random() * geolocations.length);
// console.log(rand);
console.log(geolocations[rand])

//declaring a new varible for hangman word
var geoword = []

//console.log the name of each word
function listword (wordlist) {
    console.log(wordlist);
    //loop through word list
    for (let i = 0; i <wordlist.length; i++) {
        //console.log(geolocations.name)
        let word = wordlist[i]
        console.log(word.name)
    }
} 

//symbolize letters as undersore in the hangmanword feild
for (let i = 0; i < geolocations[rand].Letters.length; i++){
    geoword[i] = "_ ";
}
// console.log(geoword.join(""))

//converts '_, _, _' array to string
document.getElementById("test1").textContent = geoword.join("")


// key listener, waits for key to be pressed and then reports the key name
// in the document add an event listener for any key pressed, run this function(defined a), when you console.log it will print the event, Key is translating that key pressed to the value given by the keyboard
document.addEventListener("keydown", function(keyevent){
    var match = false;
    for (let i = 0; i < geolocations[rand].Letters.length; i++){
        if (geolocations[rand].Letters[i] === keyevent.key) {
            match = true;
            // console.log(keyevent.key);
            // assign keyevent.key to element in "geoword";
            geoword[i] = keyevent.key;
            // console.log(geoword.join(""));
        }
    }
    
    //converts '_, _, _' array to string
    document.getElementById("test1").textContent = geoword.join("")
    //make a var to set up array for wrong letters 

    if (match === false){
        console.log (keyevent.key)
        
    //Print keyevent under 'letters used', add element to array to keep all elements printed
        wrongletters.push(keyevent.key);
        // console.log (wrongletters)
        document.getElementById("test2").textContent = wrongletters
    //Decrease Guesses left by '1'
        if (guesses > 0 ) {
            guesses -= 1
        }
        if (guesses == 0 ) {
            document.getElementById("losemessage").textContent = "You Lose :( "
        }
        document.getElementById("test3").textContent = guesses
            
  
      
    }




})

