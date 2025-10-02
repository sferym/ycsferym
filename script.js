// Переключение страниц
function showPage(page) {
  window.location.href = page;
}

// Для домашки
function showDay(dayId) {
  document.getElementById("day-menu").style.display = "none";
  document.querySelectorAll("#homework .content-box").forEach(box => box.classList.add("hidden"));
  document.getElementById(dayId).classList.remove("hidden");
}

function backToMenu() {
  document.querySelectorAll("#homework .content-box").forEach(box => box.classList.add("hidden"));
  document.getElementById("day-menu").style.display = "block";
}
