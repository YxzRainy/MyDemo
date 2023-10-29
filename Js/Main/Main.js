// function NoScrolling() {
//     $(document.body).css({
//         'overflow-x': 'hidden',
//         'overflow-y': 'hidden',
//     });
// }
// $(NoScrolling)




function Swipers() {
    var swiper = new Swiper('.swiper', {
        speed: 2000,
        mousewheel: true,
        autoplay: {
            delay: 10000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    })
}
$(Swipers)

var GuiZhou = $('.GuiZhou')

GuiZhou.animate(
    {
        opacity: '1',
    },
    3500
);
