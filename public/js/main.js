$(document).ready(function() {
    if ($(window).scrollTop() > 0) {
        $('header').addClass('fix')
    } else {
        $('header').removeClass('fix')
    }

    $(document).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('fix')
        } else {
            $('header').removeClass('fix')
        }
    })

    var about_num = 0
    var width = 1361
    $('.about .items_nav a').click(function() {
        if ($(window).width() < 1051) {
            width = width - $(this).width() - 8 - 12 - 52
            $('.about .items_nav').css('width', width + 'px')
        }
        about_num = about_num + 1
        var id = $(this).data('id')
        $(this).addClass('hide')
        $('.about .items .item.item_' + id).css('z-index', about_num)
        $('.about .items .item.item_' + id).addClass('active')
        return false
    })

    $('.about .items .item .close').click(function() {
        var id = $(this).data('id')
        $('.about .items .item.item_' + id).removeClass('active')
        $('.about .items_nav a[data-id=' + id + ']').removeClass('hide')
        return false
    })

    $('.interviews .grid').masonry({
        itemSelector: '.item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
    })

    interviews_id = 0
    $('.interviews .more').click(function() {
        interviews_id = interviews_id + 1
        $('.interviews .items_out .items .item[data-id=' + interviews_id + ']').removeClass('hide')
        $('.interviews .items_out .items').masonry({
            itemSelector: '.item',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true
        })
        if ($('.interviews .items_out .items .item.hide').length == 0) {
            $(this).css('display', 'none')
        }
        return false
    })

    $('.nft .slider').owlCarousel({
        loop: false,
        margin: 16,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2,
                loop: true
            },
            650: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    $('.favorz .grid').masonry({
        itemSelector: '.item',
        columnWidth: '.grid-sizer',
        gutter: 16,
        percentPosition: true
    })

    $('.favorz .more').click(function() {
        $('.favorz .items .item').removeClass('hide')
        $('.favorz .items').masonry({
            itemSelector: '.item',
            columnWidth: '.grid-sizer',
            gutter: 16,
            percentPosition: true
        })
        $(this).css('display', 'none')
        return false
    })

    $('header .mobile_nav a').click(function() {
        $('header').addClass('fix')
        if ($(window).scrollTop() == 0 && $(this).hasClass('active')) {
            $('header').removeClass('fix')
        }
        $(this).toggleClass('active')
        $('.mobile_nav_pop').toggleClass('active')
        return false
    })

    $('.favorz .items .item').click(function() {
        if ($('body').hasClass('page') == true) {
            var id = $(this).data('id')
            $('.pop_up_bg').addClass('active')
            $('.pop_party[data-id=' + id + ']').addClass('active')
            return false
        } else {
            $(location).attr('href', './page.html')
        }
    })

    $('header .right a, .wallet_pop_link').click(function() {
        $('.pop_up_bg').addClass('active')
        $('.pop_wallet').addClass('active')
        return false;
    })

    $('.interviews .items_out .items .item').click(function() {
        var id = $(this).data('pop')
        $('.pop_up_bg').addClass('active')
        $('.pop_interview[data-id=' + id + ']').addClass('active')
        return false
    })

    $('.nft .slider .item .img a').click(function() {
        var id = $(this).data('id')
        $('.pop_up_bg').addClass('active')
        $('.pop_nft[data-id=' + id + ']').addClass('active')
        return false
    })

    if ($('body').hasClass('page') == false) {
        $('header .nav ul li a, .mobile_nav_pop ul li a.nav_l').on('click', function() {
            $('.mobile_nav_pop').removeClass('active')
            $('header .mobile_nav a').removeClass('active')
            var el = $(this)
            var dest = el.attr('href')
            if (dest !== undefined && dest !== '') {
                $('html').animate({
                    scrollTop: $(dest).offset().top - 20
                }, 1000)
            }
            return false;
        });
    }
    $('.welcome .line').marquee({
        duration: 15000,
        gap: 0,
        delayBeforeStart: 0,
        startVisible: true,
        duplicated: true
    })
})