// This function positions the based on window size
function MobileChildNav(){
    var $windowWidth = $(window).width();
    if ($windowWidth < 992) {
        $('.toggle__btn').unbind('click').click(function(){
            var toggle_btn = $(this);
            $(toggle_btn).siblings().children('#main__nav').slideToggle();
            $(toggle_btn).siblings().children('#main__nav').find('.show_child').removeAttr("style");
            $(toggle_btn).siblings().children('#main__nav').find('.show_child').removeClass('show_child');
        });

        $('.navbar__nav > li > a').unbind('click').click(function () {
            var toggle_child = $(this);
            $(toggle_child).siblings('ul').toggleClass('show_child');
            $(toggle_child).siblings('ul').slideToggle("slow","swing", function(){
                //What to do on toggle compelte...
            });
        });
    }
    else {
        $('#main__nav').removeAttr("style");
        $('#main__nav li ul').removeAttr("style");
        $( '.navbar__nav > li > a' ).unbind("click");
    }
}
// End

function modalbox() {
    $('[data-modal-id]').click(function(e){
        e.preventDefault();
        var modaltrigger = $(this).attr('data-modal-id');

        if($('#'+modaltrigger).hasClass('show')){
        } else {
            $('#'+modaltrigger).addClass('show');
        }

        return false;
    });

}

$(document).ready(function() {
    /* ========== Fixed Header ========== */
    $(window).scroll(function() {
        //var scroll = $(window).scrollTop();
        if ($(window).scrollTop() >= 1) {
            $('.site__header').addClass('fixed');
        } else {
            $('.site__header').removeClass('fixed');
        }
    }).scroll();
    /* ========== Fixed Header ========== */

    // If need open first accordian
    $('.accordian_first_open li:first-child').children('.accordian__inner').show();
    $('.accordian_first_open li:first-child').children('.accordian__trigger').addClass('active__accordian');

    // Accordian
    $('.accordian__trigger').click(function() {
        var fire = $(this);
        //console.log(fire);

        if($(fire).next().hasClass('show__accordian')) {
            $(fire).parent().children('span').removeClass('active__accordian');
            $(fire).next().removeClass('show__accordian');
            $(fire).next().slideUp();
        } else {
            $(fire).parent().parent().find('li .accordian__inner').removeClass('show__accordian');
            $(fire).parent().parent().find('li .accordian__inner').slideUp();

            $(fire).parent().siblings().find('.accordian__trigger').removeClass('active__accordian');
            $(fire).parent().children('span').addClass('active__accordian');

            $(fire).next().find('span.accordian__trigger').addClass('subtrigger');
            $(fire).next().find('.accordian__inner').addClass('subinner');
            $(fire).next().addClass('show__accordian');
            $(fire).next().slideDown(); 
        }
    });
    // End Accordian

    // Modal 
    modalbox();
    $('.closeme').click(function(){
        $(this).parents('.modal-box').removeClass('show');
        return false;
    });

    $(function() {
        $(document).on('click', function(e) {
            if($('.modal-box').hasClass('show')){
        } else {
            $('.modal-box').removeClass('show')
        }
        });
    });
    // End Modal

    // Tab
    $('.tabtrigger').parent().eq(0).addClass('active');
    $('.tab-data').eq(0).addClass('in');
    $('.tabtrigger').click(function(e){
        e.preventDefault();
        var listtab = $(this);
        //alert('hello');

        $(listtab).parent().siblings('li').removeClass('active');
        $(listtab).parent('li').addClass('active');
    });

    $('[aria-controls]').click(function(e) {
        e.preventDefault();
        var trigger = $(this).attr("aria-controls");
        //alert(trigger);

            if($('#'+trigger).hasClass('in')){
            }else {
                $('#'+trigger).parent().find('.tab-data').siblings().removeClass('in');
                $('#'+trigger).addClass('in');
            }
    }); 
    // End Tab

    // Tabs With Accordian
    $(".tab_content").hide();
    $(".tab_content:first").show();

    $(".tab_title_val").each( function () {
        var data_link = $(this).attr("aria-controls");

        var tabTitleValue = $(this).text();

        $('.tab_content').each(function() {
            if (data_link === this.id) {
               $( "<h4" + " class=" + 'device_title' + " aria-controls=" + data_link + ">" + tabTitleValue + "</h4>").insertBefore(this);
            }
         });

    });

    /* Desktop Mode */
    $("ul.tabs li").click(function() {
        $(".tab_content").hide();
        var activeTab = $(this).attr("aria-controls"); 
        $("#"+activeTab).fadeIn();      
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".device_title").removeClass("device_active");
        $(".device_title[aria-controls^='"+activeTab+"']").addClass("device_active");
    });

    /* Responsive Mode */
    

    $(".device_title").click(function() {

        $(".tab_content").slideUp();
        var device_activeTab = $(this).attr("aria-controls"); 
        $("#"+device_activeTab).slideDown();
        $(".device_title").removeClass("device_active");
        $(this).addClass("device_active");
        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[aria-controls^='"+device_activeTab+"']").addClass("active");
    });
    
    $('ul.tabs li').last().addClass("tab_last");
    // End Tabs With Accordian

    $('.home__banner').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1, 
        responsive: [
            {
            breakpoint: 641,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });


    $('.biological-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1, 
        responsive: [
            {
            breakpoint: 641,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    AOS.init({
        once: true
    });
    // AOS.init();
});

$(window).resize(function () {
    MobileChildNav();//run on every window resize
}).resize();

