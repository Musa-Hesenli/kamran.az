$(document).ready(function () {
    const appWrapper = $('.main-wrapper');
    // console.log(switcherButton)

    $('#switcher-tab').on('click', function () {
        console.log('Change theme')
        if (appWrapper.hasClass('dark')) {
            appWrapper.addClass('light');
            appWrapper.removeClass('dark');
        } else {
            appWrapper.addClass('dark');
            appWrapper.removeClass('light');
        }
    });

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



    closeMenu.click(function () {
        
        mainRightSide.fadeToggle(300);
        if (!mainRightSide.hasClass('show')) {
            mainLeftSide.animate({ marginRight: '350px' }, 300);
            leftContent.animate({ marginRight : '0px' }, 300);
            mainRightSide.addClass('show');
            // change text and icon
            $(closeMenu).html(closeMenuHtml);
        } else {
            mainLeftSide.animate({ marginRight: '0px' }, 300);
        
            leftContent.animate({ marginRight : '350px' }, 300);
            mainRightSide.removeClass('show');

            $(closeMenu).html(openMenuHtml)
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

    

});