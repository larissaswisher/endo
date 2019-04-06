
// FKG - JS //

(function ($, viewport) {

    // video modal
    jQuery('a[data-video]').click(function () {
        var src = jQuery(this).data('video');
        var iframe = jQuery('#modal-video').find('iframe');
        //iframe.attr('src', src);
        iframe.attr('src', '');

        jQuery('#modal-video').on('shown.bs.modal', function (e) {
            var iframe = jQuery('#modal-video').find('iframe');
            iframe.attr('src', src+'?rel=0&showinfo=0&autoplay=1');
            var h = iframe.width() * 0.563;
            iframe.height(h);
        });
        jQuery('#modal-video').on('hidden.bs.modal', function (e) {
            var iframe = jQuery('#modal-video').find('iframe');
            iframe.attr('src', '');
        });
    });


    // video carousel
    jQuery('#testimonial-carousel').owlCarousel({
        items: 3,
        //singleItem: true,
        //autoPlay: true,
        pagination: false,
        navigation: true,
        //lazyLoad: true,
        slideSpeed: 2000
    });

})(jQuery);