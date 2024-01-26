document.addEventListener("DOMContentLoaded", () => {
    const hiButton = document.getElementById("hiButton");
    hiButton.addEventListener("click", () => {
        const testParagraph = document.getElementById("testParagraph");
        toggleDisplay(testParagraph);
    })
})

function toggleDisplay(element) {
    const display = element.style.display;
    if (display == "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}