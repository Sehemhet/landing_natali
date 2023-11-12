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
  if (pageYOffset > 55) {
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
let animationOptions = {
    rootMargin: '200px 0px 200px 0px', // активируем анимацию раньше, когда элемент появляется в пределах 100px от зоны видимости
    threshold: [0.01]
};

// Создаем экземпляр IntersectionObserver
let animationObserver = new IntersectionObserver(activateAnimation, animationOptions);

// Отслеживаем элементы с нужными классами
let animationTargets = document.querySelectorAll('.anim_up_05s_target, .anim_up_10s_target, .anim_up_15s_target');
animationTargets.forEach(target => {
    animationObserver.observe(target);
});

let currentIndex = 0; // Глобальный индекс текущего обзора
function pagination1(step) {
  const sliderLine = document.querySelector('.review_slider .f'); // Предполагается, что это контейнер, который двигается
  const reviews = document.querySelectorAll('.review_slider .review');
  const reviewWidth = reviews[0].offsetWidth; // Предполагается, что все обзоры одинаковой ширины
    const margin = 10; // Суммарный размер маржинов для одного обзора (5px с каждой стороны)

  const reviewCount = reviews.length;

  currentIndex += step;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= reviewCount) {
    currentIndex = reviewCount - 1;
  }

  const offset = (reviewWidth + margin) * currentIndex;
  sliderLine.style.transform = `translateX(${-offset}px)`;
}


function toggleModuleDetail(moduleId) {
  var moduleElement = document.getElementById(moduleId);
  var detailElement = moduleElement.querySelector('.box');
  var linkElement = moduleElement.querySelector('.link');

  if (detailElement.style.display === 'flex') {
    detailElement.style.display = 'none';
    linkElement.classList.remove('fixed-link');
  } else {
    detailElement.style.display = 'flex';
    linkElement.classList.add('fixed-link');
    // Если вам нужно возвращать пользователя к началу элемента .link
    window.scrollTo(0, moduleElement.offsetTop - 50);
  }
}





//document.addEventListener('DOMContentLoaded', (event) => {
//  // Получаем все ссылки в навигационном меню
//  const menuLinks = document.querySelectorAll('nav li a');
//
//  // Функция для добавления или удаления активного класса
//  function toggleActiveClass(link, add) {
//    if (add) {
//      link.classList.add('active_menu');
//    } else {
//      link.classList.remove('active_menu');
//    }
//  }
//
//  // Наблюдатель, который будет вызывать callback при пересечении секций
//  const observer = new IntersectionObserver((entries, observer) => {
//    entries.forEach(entry => {
//      // Находим ссылку, соответствующую id секции
//      const link = document.querySelector(`nav li a[href="#${entry.target.id}"]`);
//      if (entry.isIntersecting && link) {
//        toggleActiveClass(link, true); // Добавляем класс, если секция в области видимости
//      } else {
//        toggleActiveClass(link, false); // Удаляем класс, если секция не в области видимости
//      }
//    });
//  }, { threshold: 0.5 }); // Настройка observer для активации, когда хотя бы 50% элемента видно
//
//  // Добавляем каждую секцию в наблюдение
//  document.querySelectorAll('section').forEach(section => {
//    observer.observe(section);
//  });
//});




