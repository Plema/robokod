$(document).ready(function(){
    $('#tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $(".container-photos").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        dots: !0,
        customPaging: function (a, b) {
            $(a.$slides[b]).data();
            return "<span></span>"
        },
        responsive: [{
            breakpoint: 9999,
            settings: 'unslick'
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })

    $('#faqs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    $(".slider-blocks").slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: !2,
        dots: !0,
        customPaging: function (a, b) {
            $(a.$slides[b]).data();
            return "<span></span>"
        },
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },{
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    })
})