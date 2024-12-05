function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "DEVELOPER",
    "security",
    "sheild" 
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }function showBlackScreen() {
    const overlay = document.createElement("div");
    overlay.id = "neon-overlay";
    overlay.innerHTML = `
        <div class="neon-text">Welcome to Neon Mode</div>
    `;
    document.body.appendChild(overlay);
    overlay.style.display = "flex";

    // Close the overlay when clicked
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        document.body.removeChild(overlay);
    });
}

}
window.onload = typeWriter
