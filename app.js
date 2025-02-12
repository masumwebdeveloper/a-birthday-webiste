function startSurprise() {
    let song = document.getElementById("birthdaySong");
    let bomb = document.getElementById("bomb");
    let explosion = document.getElementById("explosion");
    let surpriseBox = document.getElementById("surpriseBox");

    // Pehle "Happy Birthday Ashifa!" bolega
    let msg = new SpeechSynthesisUtterance("Happy Birthday Ashifa!");
    msg.lang = "en-US"; // English accent
    msg.rate = 0.9; // Normal speed

    // Jab speech khatam ho, tab song play hoga
    msg.onend = function () {
        song.play();
    };

    // Speak the message
    speechSynthesis.speak(msg);

    // Show the bomb
    bomb.classList.remove("hidden");

    // Move the bomb and then explode
    setTimeout(() => {
        bomb.classList.add("hidden"); // Hide bomb
        explosion.classList.remove("hidden"); // Show explosion
        explosion.style.animation = "explode 0.8s forwards"; // Play explosion animation

        // Show surprise box after explosion
        setTimeout(() => {
            explosion.classList.add("hidden");
            surpriseBox.classList.remove("hidden");
        }, 1000);

    }, 2000);
}