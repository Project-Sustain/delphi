document.getElementById('nav-menu-button').addEventListener('click', openNav);
document.getElementById('nav-close-button').addEventListener('click', closeNav);

function openNav() {
  document.getElementById("sidebar-id").style.width = "52vw";
  document.getElementById("sidebar-id").style.transition = "0.7s";
  document.getElementById("main").style.opacity = "0";
}

export function closeNav() {
  document.getElementById("sidebar-id").style.width = "0";
  document.getElementById("sidebar-id").style.transition = "0.7s";
  document.getElementById("main").style.opacity = "1";
}
