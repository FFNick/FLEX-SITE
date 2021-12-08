// ЧЕКБОКС

$(document).ready(function() {

    $.each($('checkbox'), function(index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active')
        }
    });
    $(document).on('click', '.checkbox', function(event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);

        }
        $(this).toggleClass('active');


        return false;

    });
});

// ЧЕКБОКС ЗАКОНЧЕН

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!УЧАСТОК СЛАЙДЕРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

$('.sl').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('.swich'),
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                fade: true,
            }
        },

    ]

});


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!СЛАЙДЕР ЗАКОНЧЕН!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


// ПРОКРУТКА ПРИ КЛИКЕ 

// собираем массив объектов у которых есть атрибут data goto(есть объекты с этим же классом но без goto, их не берём)
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// проверяем их наличие 
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        // вешаем на menuLink событие click и начинаем функцию
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    // создаём константу menuLink и получаем объект на который кликнули(сама ссылка)
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        // создаём условие: проверяем заполнен ли этот дата отребут и проверить существует ли объект на который ссылается этот data  отребут 
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            // получаем в константу сам объект
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            // затем высчитываем положение этого объекта с учётом высоты шапки
            // создаём константу и с помощью встроенной функции  getBoundingClientRect получаем его местоположения в пикселях, так же добавляем количество прокрученных пикселей pageYOffset и отнимаем высоту шапки
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            // добавляем сокрытие меню при клике на пункт
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');

            }

            // обращаемся к окну браузера и задаём функцию, которая и занимается прокруткой
            window.scrollTo({
                // указываем что оно должно прокрутиться СВЕРХУ, а в значение задаём константу, которая высчитывает положение секции
                top: gotoBlockValue,
                // прокрутка будет пловной
                behavior: "smooth"
            });
            // отрубаем фукционирование ссылки, чтобы она не уходила в href, а просто выполняла прокрутку
            e.preventDefault();
        }
    }
}



// СКРИПТЫ ДЛЯ БУРГЕРА
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

// проверка на наличие
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');

    });
}

// СКРИПТЫ ДЛЯ ТЁМНОЙ ТЕМЫ

let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "CSS/style.css") {
        theme.href = "CSS/dark.css";
    } else {
        theme.href = "CSS/style.css";
    }
}