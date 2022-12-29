let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
};

// Prompt the student for their name.
let entry = prompt("Enter your name");

if (guestList[entry] != undefined) {
    console.log( `Hi! I'm ${entry}, and I'm from ${guestList[entry]}.` );
} else {
    console.log("Hi! I'm a guest.");
}