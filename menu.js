document.getElementById("hamburger-toggle").addEventListener("change", function() {
    const box = document.getElementById("mainLinks");
    if (this.checked) {
        box.style.display = "block";  // Show the box
    } else {
        box.style.display = "none";   // Hide the box
    }
});
