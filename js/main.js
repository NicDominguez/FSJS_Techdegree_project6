
$(document).ready(function() {

    //change header section title when scrolling

    $('main').scroll(function (event) {
        // y = top position of window

        const y_pos = $(this).scrollTop() - 500;
        const header_title = $('#header-section-title');
        
        $('section').each(function() {
            let section_pos = $(this).position().top
            

            if ((y_pos) >= section_pos) {
                console.log('change triggered at' + y_pos)
                header_title.text($(this).prev().text())
            }

        });

    });



// Expand Header Navigation

    const header = $('header')
    const navBtn = $('#nav-menu-btn')
    const nav = $('nav')
    const navLink = $('nav').find('li')
    
    navBtn.click(function () {
        header.toggleClass('expanded-header')
        nav.toggle()
    });

    navLink.click(function () {
        if ($(window).width() < 1200) {
            header.toggleClass('expanded-header')
            nav.toggle()
        }

    })


















    
});