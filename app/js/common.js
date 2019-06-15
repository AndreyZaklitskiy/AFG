$(function() {

	// Custom JS
    $('.toggle-mnu').on('click', function () {
        $(this).toggleClass('is-active');
        $('.main-mnu').slideToggle();
    });

});
