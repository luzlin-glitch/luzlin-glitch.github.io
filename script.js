$(function () {
    $('.album-item').on('click', function () {
        const images = String($(this).data('images') || '')
            .split(',')
            .map(item => item.trim())
            .filter(Boolean);

        $('#viewer-content').empty();

        images.forEach(function (src) {
            $('<img>').attr({ src: src, alt: 'Portfolio photo' }).appendTo('#viewer-content');
        });

        $('#photo-viewer').addClass('is-open');
    });

    $('#close-viewer, #photo-viewer').on('click', function (event) {
        if (event.target === this) {
            $('#photo-viewer').removeClass('is-open');
        }
    });

    $(document).on('keydown', function (event) {
        if (event.key === 'Escape') {
            $('#photo-viewer').removeClass('is-open');
        }
    });
});