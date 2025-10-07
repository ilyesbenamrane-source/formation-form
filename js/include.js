// js/include.js
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');

  includes.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch ${file}`);
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => {
        console.error(err);
        el.innerHTML = `<div style="color: red;">Error loading ${file}</div>`;
      });
  });
});
