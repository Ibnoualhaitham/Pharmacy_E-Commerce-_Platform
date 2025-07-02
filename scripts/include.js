// scripts/include.js
window.addEventListener("DOMContentLoaded", () => {
  includeHTML("navbar.html", "navbar");
  includeHTML("footer.html", "footer");
});

function includeHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error(`Error loading ${file}:`, error);
    });
}
