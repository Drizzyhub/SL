
function showModal(title, desc) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal').style.display = 'flex';
}
function hideModal() {
  document.getElementById('modal').style.display = 'none';
}
function toggleTheme() {
  document.body.classList.toggle('light-theme');
}
