const theme = getCookie('theme');
if(theme === 'dark') {
    $('.main-wrapper').removeClass('light');
    $('.main-wrapper').addClass('dark');
    $('.dark-mode-button').parent().addClass('active');
    $('.light-mode-button').parent().removeClass('active');
}

window.addEventListener('load', function () {
    $('.preloader__wrapper').css({
        display: 'none'
    });
});

$(document).ready(function () {
    const appWrapper = $('.main-wrapper');
    // console.log(switcherButton)


    const closeMenu = $('.close-menu-section');
    const mainRightSide = $('.main-right-side');
    const mainLeftSide = $('.main-left-side');
    const leftContent = $('.left-content');

    // Menu is open, show this html
    const openMenuHtml = `<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H18V2H0V0ZM6 7H18V9H6V7ZM0 14H18V16H0V14Z" fill="black"/>
    </svg>                            
    <span>MENU</span>`;

    // menu is closed, show this html
    const closeMenuHtml = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.99999 4.82167L10.125 0.696669L11.3033 1.875L7.17832 6L11.3033 10.125L10.125 11.3033L5.99999 7.17833L1.87499 11.3033L0.696655 10.125L4.82166 6L0.696655 1.875L1.87499 0.696669L5.99999 4.82167Z" fill="black"/>
    </svg>
    <span>CLOSE MENU</span>
    `

    if($(window).width() > 992)
    leftContent.css("max-width", leftContent.width() + "px")
    closeMenu.click(function () {
        mainRightSide.fadeToggle(300);
        if (!mainRightSide.hasClass('show')) {
            mainLeftSide.animate({ marginRight: '350px' }, 300);
            leftContent.addClass('ml-auto');
            leftContent.addClass('mr-auto')
            mainRightSide.addClass('show');
            // change text and icon
            $(closeMenu).html(closeMenuHtml);
        } else {
            mainLeftSide.animate({ marginRight: '0px' }, 300);
            leftContent.addClass('ml-auto');
            leftContent.addClass('mr-auto');
            mainRightSide.removeClass('show');
            $(closeMenu).html(openMenuHtml);
        }
    });

    const closeMenuInSmallScreens = $('.close-menu-small-screens');

    closeMenuInSmallScreens.click(function () {
        mainRightSide.animate({ width: 'toggle' }, 300);

        if (!mainRightSide.hasClass('show')) {
            mainRightSide.addClass('show');
            // change text and icon
            $(closeMenu).html(closeMenuHtml);
            $('body').addClass('hidden');
        } else {
            mainRightSide.removeClass('show');
            $(closeMenu).html(openMenuHtml);
            $('body').removeClass('hidden');
        }
    });


    const skillsMenu = $('.skills-right-sidebar');
    const skillsMenuToggler = $('.bottom-menu-opener');
    const skillMenuContainer = $('.skill-container');
    const skillMenuCloserBox = $('.skill-menu-closer-box');
    const skillMenuLeftSide = $('.skill-left-side');
    let bottomAccordion = 0;
    const skillAccordionMenu = $('.skill-accordion-features');

    skillsMenuToggler.on('click', function () {
        console.log('click');
        $('body').addClass('hidden');
        skillMenuContainer.fadeIn();
        skillsMenu.animate({ width: '300px' }, 300);
        skillsMenu.addClass('open');
        bottomAccordion = skillMenuCloserBox.height();
        console.log(bottomAccordion)
        skillAccordionMenu.css({
            bottom: bottomAccordion,
        });
        // skillAccordionMenu.children().first().css({
        //     height : 'calc(100% - '+ bottomAccordion +'px)'
        // })
    });



    skillMenuCloserBox.click(function (e) {
        if (skillAccordionMenu.hasClass('skills-show')) {
            skillAccordionMenu.removeClass('skills-show');
            skillAccordionMenu.animate({ width: 'toggle' }, 300);
        } else {
            skillMenuContainer.fadeOut(300);
            skillsMenu.animate({ width: '0px' }, 300);
            skillsMenu.removeClass('open');
            $('body').removeClass('hidden');
        }
        e.stopPropagation();
    })


    skillMenuLeftSide.click(function () {
        skillMenuContainer.fadeOut(300);
        skillsMenu.animate({ width: '0px' }, 300);
        skillsMenu.removeClass('open');
        $('body').removeClass('hidden');
    });


    $('.skill-item').click(function () {
        skillAccordionMenu.addClass('skills-show');
        skillAccordionMenu.animate({ width: 'toggle' }, 300);
    });




    // Accordion menu showing entries begin
    const accordion__header = $('.accordion__header');
    accordion__header.click(function () {
        const sibling = $(this).siblings().first();
        const all__accordion__body__elements = $('.accordion__body');
        for (let el of all__accordion__body__elements) {
            if ($(el).hasClass('active__accordion')) {
                $(el).slideUp();
            }
        }
        if (sibling.hasClass('active__accordion')) {
            sibling.removeClass('active__accordion');
            all__accordion__body__elements.slideUp();
            return;
        }
        all__accordion__body__elements.removeClass('active__accordion');
        sibling.addClass('active__accordion');
        sibling.slideToggle();
    });
    // Accordion menu showing entries end



    // About me accordions begin
    const work__accordion__header = $('.work__accordion__header');
    const work__accordion__bodies = $('.work__accordion__body');
    work__accordion__header.click(function () {

        const sibling = $(this).siblings().first();
        if (sibling.hasClass('active__accordion')) {
            sibling.removeClass('active__accordion');
            $(this).find('h2').removeClass('gradient-text');
            
            $(this).find("i.fa-arrow-down").removeClass('rotated');

            
            $(this).find("i.fa-arrow-down").removeClass('colorfull');

            work__accordion__bodies.slideUp();
            return;
        }
        work__accordion__header.find('h2').removeClass('gradient-text');
        work__accordion__header.find("i.fa-arrow-down").removeClass('rotated');
        work__accordion__header.find("i.fa-arrow-down").removeClass('colorfull');
        work__accordion__bodies.removeClass('active__accordion');

        work__accordion__bodies.slideUp();
        sibling.addClass('active__accordion');
        
        $(this).find("i.fa-arrow-down").addClass('rotated');
        $(this).find("i.fa-arrow-down").addClass('colorfull');
        $(this).find('h2').addClass('gradient-text');
        sibling.slideToggle()
    })
    // About me accordions end


    // Left side hover able content

    const category__tab = $('.category-tab');
    const hover__able__content = $('.hoverable__content');

    // category__tab.on('mouseover', function() {
    //     const display = hover__able__content.css('display');
    //     if(display !== 'block') hover__able__content.fadeIn(300);
    // }); 

    // category__tab.on('mouseout', function(e) {
    //     const display = hover__able__content.css('display');
    //     // if(display === 'none') {
    //         hover__able__content.fadeOut(300)
    //     // }
    // });

    category__tab.hover(function () {

        const display = hover__able__content.css('display');
        category__tab.removeClass('active');
        $(this).addClass('active');
        
        const content = $(this).find('.category__content').html();
        console.log(content);
        hover__able__content.find('.hoverable__dynamic__content').html(content);

        if (display !== 'block') hover__able__content.fadeIn(300);
    });

    $('.category-tabs').hover(() => { }, function () {
        hover__able__content.fadeOut(300);
    })

    // Left side hover able content


    // Theme switcher
    const darkThemeButton = $('.dark-mode-button');
    const lightThemeButton = $('.light-mode-button');
    const preloader__wrapper = $('.preloader__wrapper');
    darkThemeButton.on('click', function () {
        if (!appWrapper.hasClass('dark')) {
            // Switch theme to dark
            lightThemeButton.parent().removeClass('active');
            darkThemeButton.parent().addClass('active');

            preloader__wrapper.fadeIn()

            changeSVGColors("#fff");

            setTimeout(() => {
                preloader__wrapper.fadeOut()
                appWrapper.removeClass('light');
                appWrapper.addClass('dark');
            }, 1500);

            setCookie('theme', 'dark', 100);
        }
    });
    lightThemeButton.on('click', function () {
        if (!appWrapper.hasClass('light')) {
            // Switch theme to light
            darkThemeButton.parent().removeClass('active');
            lightThemeButton.parent().addClass('active');

            changeSVGColors('#000')

            preloader__wrapper.fadeIn()

            setTimeout(() => {
                preloader__wrapper.fadeOut();
                appWrapper.removeClass('dark');
                appWrapper.addClass('light');
            }, 1500);

            setCookie('theme', 'light',100)
        }
    });


    $(window).resize(function() {
        if($(this).width() > 1200 && !mainRightSide.hasClass('show')) {
            closeMenu.click();
        }
        document.querySelector('.main-left-side').style = ''
        document.querySelector('.left-content').style = '';
    });

    $('.scroll-down').click(function() {
        $("html, body").animate({ scrollTop: document.body.scrollHeight }, 300);
    });



    // BEGIN: Filter menu 
    const menuLink = $(".filter-item .filter-link");
    menuLink.on('click', function() {
        const refer = $(this).parent().find('.filter-hidden');
        refer.slideToggle();
    })
    // END: Filter menu

});

function changeSVGColors(color) {
    $('svg').attr('fill', color);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}