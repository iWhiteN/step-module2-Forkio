
;(function () {

    // Close mobile menu, click on out section
    $(document).on("touchend", e => {
		const btn = $("#btnMobile");
		if (!btn.is(e.target) && btn.has(e.target).length === 0) {
			$(".menu__items--mobile-active").removeClass('menu__items--mobile-active')
		}
	});

    // Mobile Menu
    $("#btnMobile").on("touchend", e => {
        $('.menu__item--mobile-active').toggleClass('menu__item--mobile-active');
        $(".menu__items").toggleClass('menu__items--mobile-active');
    });

    $(".menu__item").on("touchend", e => {
        $('.menu__item--mobile-active').toggleClass('menu__item--mobile-active');
        $(e.target).toggleClass('menu__item--mobile-active');
        $(".menu__items").toggleClass('menu__items--mobile-active');
        return false
    });

})();
