function navToggle() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

document.querySelectorAll("#mobile-menu .mobile-menu-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    setTimeout(() => {
      document.getElementById("mobile-menu").classList.remove("open");
    }, 200);
  });
});

document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobile-menu");
  const button = document.querySelector(".icon");

  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnButton = button.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    menu.classList.remove("open");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, null, targetId);
    }
  });
});
