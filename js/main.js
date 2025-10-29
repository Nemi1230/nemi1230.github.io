$(function () {
    $('.tab-btn').on('click', function () {
        let target = $(this).data('tab');

        console.log(target);

        $('.tab-btn.--active').removeClass('--active');
        $('.tab-content.--show').removeClass('--show');

        $(this).addClass('--active');
        $(`.tab-content[data-tab="${target}"]`).addClass('--show');
    });
});