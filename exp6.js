let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");
let fontSize = 16;

// Change heading text (onclick using addEventListener)
document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

// Change background color
document.getElementById("bgColorBtn").onclick = function () {
document.body.style.background ="linear-gradient(135deg, #83f1f9, #5799f5, #ac90ed)";
};

// Increase font size
document.getElementById("fontSizeBtn").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});

// Show/Hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Reset page
document.getElementsByClassName("resetBtn")[0].addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    document.body.style.background = "linear-gradient(135deg, #9eeaba, #73c4ed, #f9aff9)";
    input.value = "";
    fontSize = 16;
});