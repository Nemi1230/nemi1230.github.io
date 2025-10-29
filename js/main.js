$(function () {
    $('.tab-btn').on('click', function () {
        let target = $(this).data('tab');

        console.log(target);

        $('.tab-btn.--active').removeClass('--active');
        $('.tab-content.--show').removeClass('--show');

        $(this).addClass('--active');
        $(`.tab-content[data-tab="${target}"]`).addClass('--show');
    });

    $('.select-box .selected').on('click', function (e) {
        const parent = $(this).parent();
        parent.toggleClass('--open');
        e.stopPropagation();
    });

    $('.select-box .options li').on('click', function () {
        const parent = $(this).closest('select-box');
        parent.find('.selected').text($(this).text());
        parent.removeClass('--open');

        const type = $('#sortType .selected').text();
        const order = $('#sortOrder .selected').text();
    });

    $(document).on('click', function () {
        $('.select-box').removeClass('--open');
    });
});