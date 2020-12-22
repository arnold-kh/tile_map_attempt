// let id01 = document.getElementById("id01");
// id01.innerText = "THIS IS NEW HEAD FROM TILE.JS";
// id01.style.color = "red"
//
// let p1 = document.getElementsByTagName("p")[0]
// p1.innerText = "привет"
//
//
// function myFunction(a, b) {
//     return a * b;
// }
//
// console.log(myFunction(4, 3))
//
// document.write(myFunction(4, 3))
// // alert("Hello")


let tiles = [
    {name: 'Спб', row: 0, col: 0},
    {name: 'Мур', row: 0, col: 4},
    {name: 'Мск', row: 1, col: 0},
    {name: 'Кар', row: 1, col: 3, attacks: 3, prevented: 2},
    {name: 'Нен', row: 1, col: 9},
    {name: 'Чук', row: 1, col: 16},
    {name: 'Кам', row: 1, col: 17, text: '0 shootings'},
    {name: 'Лен', row: 2, col: 2},
    {name: 'Новг', row: 2, col: 3},
    {name: 'Воло', row: 2, col: 4},
    {name: 'Арх', row: 2, col: 8},
    {name: 'Коми', row: 2, col: 9},
    {name: 'Ямал', row: 2, col: 10},
    {name: 'Крас', row: 2, col: 13},
    {name: 'Саха', row: 2, col: 15},
    {name: 'Маг', row: 2, col: 16},
    {name: 'Кали', row: 3, col: 0},
    {name: 'Пск', row: 3, col: 2},
    {name: 'Твер', row: 3, col: 3},
    {name: 'Яро', row: 3, col: 4},
    {name: 'Ива', row: 3, col: 5},
    {name: 'Кос', row: 3, col: 6},
    {name: 'Мари', row: 3, col: 7},
    {name: 'Кир', row: 3, col: 8},
    {name: 'Пер', row: 3, col: 9},
    {name: 'Хан', row: 3, col: 10},
    {name: 'Тюм', row: 3, col: 11},
    {name: 'Том', row: 3, col: 12},
    {name: 'Кем', row: 3, col: 13},
    {name: 'Ирк', row: 3, col: 14},
    {name: 'Амур', row: 3, col: 15},
    {name: 'Хаб', row: 3, col: 16},
    {name: 'Схлн', row: 3, col: 18},
    {name: 'Смол', row: 4, col: 2},
    {name: 'Калу', row: 4, col: 3},
    {name: 'Мос', row: 4, col: 4},
    {name: 'Вла', row: 4, col: 5},
    {name: 'Ниж', row: 4, col: 6},
    {name: 'Чув', row: 4, col: 7},
    {name: 'Тат', row: 4, col: 8},
    {name: 'Удм', row: 4, col: 9},
    {name: 'Свер', row: 4, col: 10},
    {name: 'Кург', row: 4, col: 11},
    {name: 'Ново', row: 4, col: 12},
    {name: 'Хак', row: 4, col: 13},
    {name: 'Бур', row: 4, col: 14},
    {name: 'Евр', row: 4, col: 15},
    {name: 'Бря', row: 5, col: 2},
    {name: 'Орёл', row: 5, col: 3},
    {name: 'Тул', row: 5, col: 4},
    {name: 'Ряз', row: 5, col: 5},
    {name: 'Мор', row: 5, col: 6},
    {name: 'Уль', row: 5, col: 7},
    {name: 'Сам', row: 5, col: 8},
    {name: 'Бшк', row: 5, col: 9},
    {name: 'Чел', row: 5, col: 10},
    {name: 'Омск', row: 5, col: 11},
    {name: 'Ал к.', row: 5, col: 12},
    {name: 'Тыва', row: 5, col: 13},
    {name: 'Заб', row: 5, col: 14},
    {name: 'При', row: 5, col: 16},
    {name: 'Курск', row: 6, col: 3},
    {name: 'Лип', row: 6, col: 4},
    {name: 'Там', row: 6, col: 5},
    {name: 'Пен', row: 6, col: 6},
    {name: 'Сар', row: 6, col: 7},
    {name: 'Орен', row: 6, col: 8},
    {name: 'Алт', row: 6, col: 12},
    {name: 'Бел', row: 7, col: 4},
    {name: 'Вор', row: 7, col: 5},
    {name: 'Волг', row: 7, col: 6},
    {name: 'Сев', row: 8, col: 0},
    {name: 'Крым', row: 8, col: 2},
    {name: 'Адыг', row: 8, col: 3},
    {name: 'Крдр', row: 8, col: 4},
    {name: 'Рос', row: 8, col: 5},
    {name: 'Калм', row: 8, col: 6},
    {name: 'Аст', row: 8, col: 7},
    {name: 'Кара', row: 9, col: 4},
    {name: 'Став', row: 9, col: 5},
    {name: 'Чеч', row: 9, col: 6},
    {name: 'Даг', row: 9, col: 7},
    {name: 'Каб', row: 10, col: 4},
    {name: 'Осет', row: 10, col: 5},
    {name: 'Инг', row: 10, col: 6},
]


for (let tile of tiles) {
    const regionEl = $(".region_model").clone()
        .css('background-color', '#feebef')
        .css('top', (tile.row * 43) + 'px')
        .css("left", (tile.col * 43) + 'px')
        .on("click", function () {
            $(".popup-overlay, .popup-content").find(".popup__region-name").text(tile.name);
            $(".popup-overlay, .popup-content").find(".popup-text").text(tile.text);
            $(".popup-overlay, .popup-content").addClass("active");
            $(".popup-overlay, .popup-content").css("top", (tile.row * 43) + 'px')
            $(".popup-overlay, .popup-content").css("left", (tile.col * 43) + 'px')
            $(".close, .popup-overlay").removeClass("active")
        })
        .removeClass('region_model')
        .appendTo(".map");

    regionEl.find('.region__name')
        .text(tile.name);

    if (tile.attacks) {
        for (let i = 0; i < tile.attacks; i++) {
            let dotEl = regionEl.find(".region__dot.region__dot_attack.model")
                .clone()
                .removeClass('model');
            regionEl.find('.region__dots')
                .append(dotEl);
        }
    }

    $(".close, .popup-overlay").on("click", function () {
        $(".popup-overlay, .popup-content").removeClass("active");
    });


    //как прикрепить к элементу
    //127 for loop let i=0 i<tile.attacks
}


// .on('click', '', '', () => {
//     // let $popup = $('.popup');
//     // $popup.find('.popup__region-name').text(tile.name);
//     // $popup.show();
// })
// .click - как вызывать функцию при клике
// .show() - показать эдемент
// display: none - прячет элемент
// .hide()
//


// $(".open").on("click", function() {
//     $(".popup-overlay, .popup-content").addClass("active");
// });
//
//

