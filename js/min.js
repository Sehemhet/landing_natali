// BURGER MENU
function burgerMenu() {
    var header = document.querySelector('header');
    var burger = document.querySelector('.burger');

    if (header) {
        header.classList.toggle('burger_menu');

        setTimeout(function() {
            // Этот код выполнится через одну секунду
            if (header.classList.contains('burger_menu')) {
                burger.classList.add('burger_cross');
            } else {
                burger.classList.remove('burger_cross');
            }
        }, 500);
    }
}


// Обработчик изменения размера окна
window.addEventListener('resize', function() {
    var header = document.querySelector('header');

    if (window.innerWidth > 1280 && header && header.classList.contains('burger_menu')) {
        header.classList.remove('burger_menu');
    }
});
// Обработчик клика на элементы меню
document.querySelectorAll('.burger_nav a').forEach(item => {
    item.addEventListener('click', burgerMenu);
});

// добавление тени к навигации при скроле
window.addEventListener('scroll', function() {
  if (pageYOffset > 255) {
    document.querySelector('header').classList.add('activate_under_shadow')
  } else {
    document.querySelector('header').classList.remove('activate_under_shadow')
  }
});


//активация анимационных элементов
function animActiv(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('anim_active');
    } else {
    change.target.classList.remove('anim_active');
    }
  });
};
let animOpt = { threshold: [0.01] };
let animAct = new IntersectionObserver(animActiv, animOpt);
let animItems = document.querySelectorAll('.anim_left,.anim_right,.anim_scale');
for (let el of animItems) {
  animAct.observe(el);
};


