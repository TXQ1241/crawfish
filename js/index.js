$('.right-list li.unfold').hover(function () {
    $(this).children('.menu').show();
    $(this).addClass('mousemove');
}, function () {
    $(this).children('.menu').hide();
    $(this).removeClass('mousemove');
});

$('.right-list li.shopping-box').hover(function () {
    $(this).children('.shopping').show();
    $(this).addClass('mousemove');
}, function () {
    $(this).children('.shopping').hide();
    $(this).removeClass('mousemove');
});

$('.search ul li').on('click', function () {
    $(this).siblings('li').removeClass('clicked');
    $(this).addClass('clicked');
});

$('.header .nav ul li').on('click', function () {
    $(this).siblings('li').removeClass('clicked');
    $(this).addClass('clicked');
});

$('.header .bottom .shopping-box').hover(function () {
    $(this).children('.shopping').show();
}, function () {
    $(this).children('.shopping').hide();
});

$('.main-content .top .nav ul .nav-title').hover(function () {
    $(this).children('.nav-content').show();
}, function () {
    $(this).children('.nav-content').hide();
})