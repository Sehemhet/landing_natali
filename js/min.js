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
    document.querySelector('header').classList.add('header_back_active')
  } else {
    document.querySelector('header').classList.remove('header_back_active')
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



// Функция активации анимации
function activateAnimation(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            // Если элемент в зоне видимости, добавляем класс анимации
            if (change.target.classList.contains('anim_up_05s_target')) {
                change.target.classList.add('anim_up_05s');
            } else if (change.target.classList.contains('anim_up_10s_target')) {
                change.target.classList.add('anim_up_10s');
            } else if (change.target.classList.contains('anim_up_15s_target')) {
                change.target.classList.add('anim_up_15s');
            }
        } else {
            // Если элемент вышел из зоны видимости, удаляем класс анимации
            change.target.classList.remove('anim_up_05s', 'anim_up_10s', 'anim_up_15s');
        }
    });
};

// Настройки для IntersectionObserver
let animationOptions = { threshold: [0.01] };

// Создаем экземпляр IntersectionObserver
let animationObserver = new IntersectionObserver(activateAnimation, animationOptions);

// Отслеживаем элементы с нужными классами
let animationTargets = document.querySelectorAll('.anim_up_05s_target, .anim_up_10s_target, .anim_up_15s_target');
animationTargets.forEach(target => {
    animationObserver.observe(target);
});


window.addEventListener('resize', function() {
  // Можно вызвать функцию, которая обновит стили или просто перезагрузит страницу
  document.body.style.display = 'none';
  document.body.offsetHeight; // принудительный рефлоу
  document.body.style.display = '';
});
