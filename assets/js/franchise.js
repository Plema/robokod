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
        arrows: true,
        dots: false,
        infinite: true,
        variableWidth: true,
        centerMode: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
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
                slidesToScroll: 1,
                centerMode: false
            }
        }]
    })
    $('.choose-format h4 ').matchHeight({
        byRow: true,
    });
    
    $('.slider .block ').matchHeight({
            byRow: true,
        });
        
    $('.header-franchise a').click(function(event){
        $('.header-franchise-popup').addClass('open-popup')
    });
    $('.advantage .button').click(function(event){
        $('.advantage-popup').addClass('open-popup')
    });

    $('.faq .button').click(function(event){
        $('.faq-popup').addClass('open-popup')
    });


    $( ".close" ).click(function(event) {
        $('.popup').removeClass('open-popup');
    });
})
