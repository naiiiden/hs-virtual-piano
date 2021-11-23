document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        let audio = new Audio("audio/A.mp3");
        audio.play();
        console.log("The 'A' key is pressed");
    } else if (event.code == "KeyS") {
        let audio = new Audio("audio/S.mp3");
        audio.play();
        console.log("The 'S' key is pressed.");
    } else if (event.code == "KeyD") {
        let audio = new Audio("audio/D.mp3");
        audio.play();
        console.log("The 'D' key is pressed.");
    } else if (event.code == "KeyF") {
        let audio = new Audio("audio/F.mp3");
        audio.play();
        console.log("The 'F' key is pressed.");
    } else if (event.code == "KeyG") {
        let audio = new Audio("audio/G.mp3");
        audio.play();
        console.log("The 'G' key is pressed.");
    } else if (event.code == "KeyH") {
        let audio = new Audio("audio/H.mp3");
        audio.play();
        console.log("The 'H' key is pressed.");
    } else if (event.code == "KeyJ") {
        let audio = new Audio("audio/J.mp3");
        audio.play();
        console.log("The 'J' key is pressed.");
    } else if (event.code == "KeyW") {
        let audio = new Audio("audio/W.mp3");
        audio.play();
        console.log("The 'W' key is pressed.");
    } else if (event.code == "KeyE") {
        let audio = new Audio("audio/E.mp3");
        audio.play();
        console.log("The 'W' key is pressed.");
    } else if (event.code == "KeyT") {
        let audio = new Audio("audio/T.mp3");
        audio.play();
        console.log("The 'T' key is pressed.");
    } else if (event.code == "KeyY") {
        let audio = new Audio("audio/Y.mp3");
        audio.play();
        console.log("The 'Y' key is pressed.");
    } else if (event.code == "KeyU") {
        let audio = new Audio("audio/U.mp3");
        audio.play();
    } else {
        console.log("An unbound key was pressed.");
    }
});
