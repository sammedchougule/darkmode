// Function to switch between modes
function toggleMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");

    // Save the user's preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Event listener for the toggle button
document.getElementById("mode-toggle").addEventListener("click", toggleMode);

// On page load, check the user's theme preference and apply it
window.onload = function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } // If no saved theme, the page defaults to light mode
};
