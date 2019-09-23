
$(document).ready(function() {

//==========================================================
//     HEADER SECTION
//==========================================================

    //change header section title when scrolling
    $('main').scroll(function (event) {
        // y = top position of window
        const y_pos = $(window).scrollTop();
        const header_title = $('#header-section-title');

        
        $('section').each(function() {
            let section_pos = $(this).position().top

            if ((y_pos) >= section_pos) {
                /* console.log('change triggered at' + y_pos) */
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

//==========================================================
//     ABOUT SECTION
//==========================================================

    //Skill Category Switching 
    const pmCategory = $('#program-management-category')
    const wdCategory = $('#web-development-category')
    const hobCategory = $('#hobbies-category')

    const pmList = $('#program-management-skill-list')
    const wdList = $('#web-development-skill-list')
    const hobList = $('#hobbies-skill-list')

    const catDescription =$('#category-description').find('p')

    //Skill List Object Creation 
    const pmSkillList = {
        contracting: 60,
        leadership: 60,
        datamanagement: 70,
        communication: 70,
        projectmanagement: 80,
        organizationaldevelopment: 50
    }

    const wdSkillList = {
        uidesign: 30,
        html: 70,
        css: 70,
        sass: 50,
        javascript: 50,
        jquery: 40
    }

    const hobSkillList = {
        boardgaming: 70,
        reading: 80,
        mcutrivia: 90,
        goalkeeping: 60,
        traveling: 80,
        volleyball: 50
    }

     //Set Program Management Skill List on Page Load if Mobile and Tablet
    if ($(window).width() < 1200) {
        displayPercentages(pmList, pmSkillList)
        setSkillBarWidths(pmList, pmSkillList)
        setSkillBarWidthstoZero(wdList, wdSkillList)
        setSkillBarWidthstoZero(hobList, hobSkillList)
    }

    //Set all Skill Lists on Page Load if Desktop
    if ($(window).width() >= 1200) {
        hobList.show()
        wdList.show()
        displayPercentages(pmList, pmSkillList)
        setSkillBarWidths(pmList, pmSkillList)
        displayPercentages(wdList, wdSkillList)
        setSkillBarWidths(wdList, wdSkillList)
        displayPercentages(hobList, hobSkillList)
        setSkillBarWidths(hobList, hobSkillList)
    }

    //Click Events for Each Skill Category
    pmCategory.click(function () {
        if ($(window).width() < 1200) {
            pmList.show()
            wdList.hide()
            hobList.hide()

            catDescription.text(`
                My experience in program management comes primarily from my work with San Francisco Municipal Transportation Agency. I worked for the Human Resources team for eight years in regulatory compliance. Sounds invigorating, right? Yea not really, but  the experience did grant me valuable insight into the inner workings of the public sector and how programs are interwoven throughout the broader goals of a municipal agency. I learned many valuable skills from contracting to database management and I developed a desire to address many of the problems I have witnessed throughout my early career. Below I have listed several of the main skills I developed and how proficient I am at each.
            `)

            displayPercentages(pmList, pmSkillList)
            setSkillBarWidths(pmList, pmSkillList)
            setSkillBarWidthstoZero(wdList, wdSkillList)
            setSkillBarWidthstoZero(hobList, hobSkillList)
        }
    });

    wdCategory.click(function () {
        if ($(window).width() < 1200) {
            pmList.hide()
            wdList.show()
            hobList.hide()

            catDescription.text(`
            After working in the first ten years of my career in the private and public sector one thing I was always bothered by was that I knew my job could be easier. The small but numerous tasks that would take up a good part of my day could and in my view should be done by a machine. I was right on the cusp of understanding that automating my work was possible but I didn’t yet have the skills to do it. Now I am building those skills and starting in front end web development.  
            `)

            displayPercentages(wdList, wdSkillList)
            setSkillBarWidths(wdList, wdSkillList)
            setSkillBarWidthstoZero(pmList, pmSkillList)
            setSkillBarWidthstoZero(hobList, hobSkillList)
        }
    });

    hobCategory.click(function () {
        if ($(window).width() < 1200) {
            pmList.hide()
            wdList.hide()
            hobList.show()

            catDescription.text(`
            Life isn’t only about work so I try and round out my life with a variety of activities. I am a bit of a nerd when it comes to pop culture so I could go pretty deep into a character study of Darth Vader if you wanted me to. But anyway, I have been pretty active most of my life in both outdoor and more low key activities. Volleyball and Soccer were big parts of my life and I still try and play as much as possible. More recently, I have been reading more science fiction and graphic novels to keep my mind active. One important hobby to me is traveling . I am a firm believer that people grow by getting out and experiencing the world and other cultures. I am proud to have visited/lived in over 20 countries with another coming up next year.
            `)

            displayPercentages(hobList, hobSkillList)
            setSkillBarWidths(hobList, hobSkillList)
            setSkillBarWidthstoZero(pmList, pmSkillList)
            setSkillBarWidthstoZero(wdList, wdSkillList)
        }
    });



    // Showing Skill List Percentage
    function displayPercentages(array, obj) {
        array.children("li").each(function(index) {
            let keys = Object.keys(obj)
            $(this).find("span").html(obj[keys[index]] + "&#37")
        })
    }

    //Setting Skill Bar Widths
    function setSkillBarWidths(array, obj) {
        array.children("li").each(function(index) {
            let keys = Object.keys(obj)
            $(this).find("span").css("width", obj[keys[index]]/1.5 + "%")
        })
    }

    //Setting Skill Bar Widths to Zero
    function setSkillBarWidthstoZero(array, obj) {
        array.children("li").each(function (index) {
            let keys = Object.keys(obj)
            $(this).find("span").css("width", 10 + "%")
        })
    }

//==========================================================
//     PORTFOLIO SECTION
//==========================================================

    //==========================================================
    //     Portfolio Project Class Construction
    //==========================================================

    class PortfolioProject {
        constructor(title, image, website, respository, description, languages_used, language1, language1_description, language2, language2_description, language3, language3_description) {
            this.title = title;
            this.image = image;
            this.website = website;
            this.repository = respository;
            this.description = description;
            this.languages_used = languages_used;
            this.language1 = language1;
            this.language1_description = language1_description;
            this.language2 = language2;
            this.language2_description = language2_description;
            this.language3 = language3;
            this.language3_description = language3_description;
        }
    }

    const project2 = new PortfolioProject(
        `Responsive Layout`,
        `images/project2_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project2`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project2`,
        `As my first dive into responsive design this project represents my initial understanding of CSS and my first use of media queries. I added some personal touches such as using a google font for the first time and implementing css variables for colors. This is also where I was introduced to flexbox and its importance in responsive web design. Flexbox would become one of my primary tools for future projects.`,
        [`html-language`, `css-language`],
        `HTML`,
        `This was my first project to begin using semantic markup. The code is divided into the <header>, <main>, and <footer> tags with proper use of the <nav> and <div> tags where appropriate. I was also diligent in the use of alt tags for my images to assist with accessibility.`,
        `CSS`,
        `In this project I started to learn the importance of normalizing the css across browsers. This allowed me to better control the spacing and alignment through the use of both flexbox and traditional padding and margin properties. I learned how to make slight transform adjustments to images as to create a cropped effect.`,
        null,
        null
    )

    const project3 = new PortfolioProject(
        `Registration Form`,
        `images/project3_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project3`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project3`,
        `This project represents a potential site registration form with responsive design and back-end ready html. The project uses the most common input elements including radio buttons, checkboxes, select inputs, and text areas. Forms like this are common on site looking for customer interaction or feedback.`,
        [`html-language`, `css-language`],
        `HTML`,
        `The HTML in this project is all about proper use of attributes to identify the function of each element of the page. Each tag requires the “type”, “id”, and “name” attribute to match the input with the corresponding label. Correct use of the fieldset and legend tags properly organize the page elements.`,
        `CSS`,
        `The form is responsive with the use of flexbox and width properties. I also gave subtle animations to the focus state to highlight the user interaction on each input element. Using the placeholder pseudo selector also allowed me to style to placeholder text to match the page style.`,
        null,
        null
    )

    const project4 = new PortfolioProject(
        `Web Style Guide`,
        `images/project4_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project4`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project4`,
        `The Web Style Guide is a representation of what a front-end development team would use to establish the base styles of a website. It uses Sass to create a flexible code base that can change easily with any desired changes in styles. Variable, placeholders, and mixins give the multi-tiered file structure of the sass the ability to push any small changes from the variables partial up through to the final CSS stylesheet.`,
        [`css-language`, `sass-language`],
        `CSS`,
        `The css in this project used a class based grid system to establish element width. The grid system is full responsive with flex-box and the typography and picture elements with adjust place depending on window width. `,
        `Sass`,
        `Notable elements of the Sass code in the project are the us of mapping for theme color variables and place holders for for many of the common style properties. I also created several helper functions to make styling easier and heavily used variables and mixins to create a more flexible design.`,
        null,
        null


    )

    const project5 = new PortfolioProject(
        `Photo Gallery`,
        `images/project5_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project5`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project5`,
        `This project was my first introduction to jquery plugins. The photo gallery lightbox combination is a common instance on websites to display any type of photo content. The gallery is responsive and there is also an additional functioning search box. Captions are also included which are the basis for the search function.`,
        [`css-language`, `jquery-language`],
        `CSS`,
        `The CSS in this project is designed to work with the light gallery plug-in. Adjustments are made to the display of the photo to give the light box the proper width and align the additional elements such as the next and previous arrows and the captions. Subtle hover animations are also included to give the gallery a bit of interaction with the user.`,
        `JQuery`,
        `Implementation of the lightbox plug in required good understanding of the supplied documentation to know what options I wanted to include and how to resize the lightbox elements. The search functionality was especially challenging on this project as it required looping through the caption array and dynamically changing the gallery contents based on the text input.`,
        null,
        null
    )

    const project6 = new PortfolioProject(
        `Word Game`,
        `images/project6_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project6`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project6`,
        `This was a particularly fun project and a good representation of my starting point with vanilla JavaScript. It is an elegant version of the standard “hang-man” word game using my favorite theme you'll get from the potential answers. Each interaction is animated for the suer and the game is set to reset if the user would like to play again. Visually representing the keyboard and having it react to the status of the guesses was especially challenging.`,
        [`css-language`, `javascript-language`],
        `CSS`,
        `Highlight s in the CSS of this project include the use of variables for both colors and fonts as well as the inclusion of a keyframe animation. The overlay screens are positioned as fixed flexbox containers that change dynamically with the status of the game.`,
        `JS`,
        `This project required implementation of multiple click events and functions to check the status of both the guesses and the game. I originally struggled with understanding how the game would check if the chosen character was in the answer but after reviewing how my look was functioning nad how to select the characters in my array I was able to accurately display the chosen letters. One core theme I realised in this project was the need for many of the functions on a website to reset after their initial function and how difficult that reset can be to code.`,
        null,
        null
    )

    const project7 = new PortfolioProject(
        `WebApp Dashboard`,
        `images/project7_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project7`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project7`,
        `This project combined much of what I had learned so far at the time. The HTML required accurate and well organized semantic markup and the CSS uses a grid display with flex-box containers within the grid sections. The Javascript creates the functionality for the interactive notification icon and form elements. This was also my first use of the chart.js library to represent the fictional traffic data. Dashboards like these are useful across industries for better management of resources and understanding user tendencies.`,
        [`html-language`, `css-language`, `javascript-language`],
        `HTML`,
        `Many common html elements were sued in combination to form this page. The site includes form elements, responsive widget containers and semantic tags to better organize the content of each section.`,
        `CSS`,
        `The grid system in this project allows for a responsive design that also maintains proper proportions and order for each section giving a  professional style to the page. Within each section flexbox and traditional media queries provided the layout changes as the window resizes. I also made use of styling the inline svg images to better match the style of the page. `,
        `JS`,
        `The notable JavaScript functions were the use of the chart.js library and the introduction of the use of local storage into my projects. I created all the data in charts and the associated events to display the data. Use of local storage allowed me to save the settings data of the user and apply the correct settings after closing the browser.`
    )

    const project8 = new PortfolioProject(
        `Employee Directory`,
        `images/project8_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project8`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project8`,
        `This project represents a common employee directory for any potential business. The employee data is pulled from the randomuser.me api and converted from JSON to what is seen in the gallery. Working with an API provided its own set of challenges but I can easily see how beneficial they are when dealing with large quantities of outside data.`,
        [`css-language`, `javascript-language`],
        `CSS`,
        `The CSS in this project was a simple grid layout with flexbox cards within. The challenging aspect of the project was to properly position the custom lightbox function when the user clicked don the employee card. Animated cards when cycling between employees also proved to be a bit difficult.`,
        `JS`,
        `This was my first dive into pulling data from an API. Using the fetch command and understanding the use of promises was key to creating the proper functionality of this site. Switching between employees in lightbox view was also especially challenging. As a final touch I included the search function to filter the gallery by name. `,
        null,
        null
    )

    //==========================================================
    //     Create Array of All Available Project Objects
    //==========================================================

    let allProjects = []
    allProjects.push(
        project2,
        project3,
        project4,
        project5,
        project6,
        project7,
        project8
    )

    //==========================================================
    //     Portfolio Global Variables
    //==========================================================


    const languageList = $('#language-list').children()
    const bookContainer = $(`#book-container`)
    const dotContainer = $(`#dot-container`)

    //Variables to set project view
    const projectTitle = $(`#project-title`);
    const projectImage = $(`#project-image`);
    const projectWebsite = $(`#project-website`);
    const projectRepository = $(`#project-repository`);
    const projectDescription = $(`#project-description`);
    const projectLanguage1 = $(`#project-language1`);
    const projectLanguage1Description = $(`#language1-description`);
    const projectLanguage2 = $(`#project-language2`);
    const projectLanguage2Description = $(`#language2-description`);
    const projectLanguage3 = $(`#project-language3`);
    const projectLanguage3Description = $(`#language3-description`);

    let selectedLanguages = []
    let viewableProjects = []

    

    //==========================================================
    //     On Page Load Status
    //==========================================================
    languageList.each(function () {
        //adds selected class to all LI elements
        $(this).addClass("selected")

    })

    updateSelectedLanguages()
    updateViewableProjects()
    updatePageFlagsandDots()
    updateProjectView(viewableProjects[0])
    $(`.page-flag:first`).addClass(`active`)
    $(`.dot:first`).addClass(`active`)

    //==========================================================
    //     Events
    //==========================================================

    // Mark clicked languages as selected
    $(`.language-icon`).click(function () {
        let languageId = this.id

        //differentiate between all languages and single language selection
        if (languageId === "all-languages") {
            //loops of each lI in language list and adds selected class then pushes lI id to chosenLanguages array

            if ($(this).hasClass("selected")) {
                languageList.each(function () {
                    //removes selected class from all LIs
                    $(this).removeClass("selected")
                })
            } else {
                languageList.each(function () {
                    //adds selected class to all LI elements
                    $(this).addClass("selected")

                })
            }
        } else {
            $(this).toggleClass("selected");
        }
        updateSelectedLanguages()
        updateViewableProjects()
        updatePageFlagsandDots()
        if (viewableProjects.length >= 1) {
            updateProjectView(viewableProjects[0])
        }
        $(`.page-flag:first`).addClass(`active`)
        $(`.dot:first`).addClass(`active`)

    })

    // Cycle to next project on mobile view
    $(`#next-arrow`).click(function () {
        if (currentProjectIndex < viewableProjects.length - 1) {
            updateProjectView(viewableProjects[currentProjectIndex + 1])
            let nextDot = dotContainer.find(`.active`).next()
            $(`.dot`).each(function (index) {
                $(this).removeClass(`active`)
                nextDot.addClass(`active`)
            })
        }
    })

    // Cycle to previous project on mobile view
    $(`#previous-arrow`).click(function () {
        if (currentProjectIndex >= 1) {
            updateProjectView(viewableProjects[currentProjectIndex - 1])
            let prevDot = dotContainer.find(`.active`).prev()
            $(`.dot`).each(function (index) {
                $(this).removeClass(`active`)
                prevDot.addClass(`active`)
            })
        }
    })

    // Cycle to specific project on second page flag click
    bookContainer.on("click", ".page-flag", function () {
        let index = $(this).index()
        updateProjectView(viewableProjects[index])
        $(`.page-flag`).each(function() {$(this).removeClass(`active`)})
        $(this).addClass(`active`)
    })

    //==========================================================
    //     Main Functions
    //==========================================================

    // Function to Update Selected languages Array from selected Elements
    function updateSelectedLanguages() {
        selectedLanguages = []
        $(`.language-icon`).each(function () {
            if ($(this).hasClass('selected')) {
                selectedLanguages.push(this.id)
            }
        })
    }

    // Function to Create Viewable Projects Array by Selected Languages Array
    function updateViewableProjects() {
        viewableProjects = []
        allProjects.forEach(function (project) {
            if (checkProjectIncludesLanguage(project, selectedLanguages)) {
                viewableProjects.push(project)
            }
        })

    }

    // Function to create page flags based on number of projects in viewableProjects array
    function updatePageFlagsandDots() {
        $(`.page-flag`).remove()
        $(`.dot`).remove()

        for (i = 0; i < viewableProjects.length; i++) {
            bookContainer.prepend(`<div class="page-flag"></div>`)
            dotContainer.prepend(`<li class="dot"></li>`)
        }
    }
    
    //function to update html with project specific text
    function updateProjectView(project) {
        projectTitle.text(project.title)
        projectImage.attr(`src`, project.image)
        projectImage.parent().attr(`href`, project.website)
        projectWebsite.attr(`href`, project.website)
        projectRepository.attr(`href`, project.repository)
        projectDescription.text(project.description)
        projectLanguage1.text(project.language1)
        projectLanguage1Description.text(project.language1_description)
        projectLanguage2.text(project.language2)
        projectLanguage2Description.text(project.language2_description)
        projectLanguage3.text(project.language3)
        projectLanguage3Description.text(project.language3_description)
        currentProjectIndex = getIndexofProject(project)
    }

    //==========================================================
    //     Support Functions
    //==========================================================

    // Function to Check if a Project includes any of the selected languages
    function checkProjectIncludesLanguage(project, array) {
        let found = false;
        project.languages_used.forEach(function (language) {
            if ($.inArray(language, array) >= 0) {
                found = true;
            }
        })
        return found;
    }

    function getIndexofProject(project) {
        return viewableProjects.findIndex(obj => obj.title === project.title)
    }

//==========================================================
//     RESUME SECTION
//==========================================================

    //==========================================================
    //     Global Variables Declaration
    //==========================================================

    const yearlistContainer = $(`#yearlist-container`)
    const resumeDescritpionContainer = $(`#resume-description-container`)
    const resumeTitle = $(`#resume-description-title`)
    const resumeDescription = $(`#resume-description`)

    //==========================================================
    //     Object Declaration
    //==========================================================

    const resumeContainerContents = {
        title1985: `Early Years`,
        desc1985: `1985 - I was born in Santa Clara California to Suzanne and Gary. Being two months premature it was a rough start but Nic made it and began a happy childhood.<br>
1990 - I started playing  on my first soccer team. From there I played for the next 10 years. For the latter half of my soccer career I grew to love the goalkeeping position. I still play goalie in recreational leagues today.<br>
1989 - I started both acrobatics and swim team. These sports were wonderful at keeping me in shape throughout my childhood and building a love of movement.
`,
        title1991: `Childhood`,
        desc1991: `1991 - I joined Cub Scouts where I participated in the iconic childhood memories of group camping trips and pinewood derby races.<br>
1991 - Elementary School is when I began my lifelong learning path. I remember reading to my dog to practice my comprehension, building my California Mission project, and goofing around in the computer lab trying to beat Oregon Trail (the DOS version).<br>
1993 - I spent a couple years toying with the idea of childhood acting. I had my headshots done and even did a few voice-over jobs.<br>
1994 - Cub scouts merged into Boy Scouts. For the next 7 years I participated in some of the most memorable experiences of my life including multi-week backpacking trips, building my own shelter, and learning horseback riding.
`,
        title1996: `Adolescence`,
        desc1996: `1996 - Middle School started in 1996. It was both fun and challenging. I made lifelong friends and discovered many hobbies and passions during this time.<br>
1997 - A friend introduced me to the sport of Volleyball. Our group of guys proceeded to create our schools first men’s volleyball team and went on to play together throughout Middle and High School.<br>
1998 - I had the fortune of attending the “Close Up” civics program in which students attended a week long field trip to Washington D.C..<br>    
1999 - I attended Foothill High from 1999 to 2003. I did relatively well in both academics and extracurriculars while solidifying friendships with some of the best people I have ever met. My GPA stayed above 3.5 and our Volleyball team continued to win our league championship every year.
`,
        title2001: `Formative Years`,
        desc2001: `2001 - A few of my friends and I branched out from highschool volleyball in the spring to year round club volleyball. Our team went on to participate in numerous tournaments including the National Junior Olympics.<br>
2003 - After 4 wonderful years of fun and learning I graduated High School. Some of my best memories include movie nights with friends, championship volleyball games, and throwing pots in ceramics class.<br>
2003 - I completed the final phase Boy Scouts and obtained my Eagle Scout rank. It was a long journey but worth it after learning to push myself through so many challenging experiences.<br>
2003 - I applied to several schools and choose to enter the City and Regional Planning Program at Cal Poly State University, San Luis Obispo. This program is what inspired me to work in the public interest and better understand the relationships between people and the places we build.
`,
        title2006: `Exploratory Years`,
        desc2006: `2007 - In one of the most interesting experiences of my life I joined the Cal Poly at Sea Study Abroad Program. I took classes aboard the Cal Maritime Academy Training Ship for three months while touring the northern pacific.<br>
2007 - I continued my education with a Masters Degree in Business Administration that taught me skills in everything from organizational development to international business and intellectual property law.<br>
2008 - In an effort to explore the world and possibly begin a career in international development work I joined the Peace Corps as a Small Enterprise Development Volunteer in Kenya.<br>
2010 - I met my wife who in a stroke of luck happened to work in the restaurant below my first apartment in Berkeley. We began dating and have spent the time since building a beautiful little life together.
2010 - I worked for about a year and a half with Bay Area Arts Marketing for the Berkeley Repertory Theatre doing subscription sales and office management.
`,
        title2011: `Career Begins`,
        desc2011: `2011 - I began work as a Management Assistant at the San Francisco Municipal Transportation Agency. I worked in the Substance Abuse Program learning many facets of regulatory compliance and program management.<br>
2012 - My wife and I adopted the most chill and perfect cat ever, Tom Tom.<br>
2013 - I joined the local non-profit Livable Berkeley, a group advocating for housing and smart city planning policies.
2014 - I attended the Manager Tools Good Management and Good Communication conferences.<br>
2014 - I became more involved with local government when I applied to and became the commissioner of District 8 on the Berkeley Zoning Adjustments Board.<br>
2015 - After my time on the Zoning Adjustments Board I moved to the Public Works Commission to become of more long range and consequential planning efforts.
`,
        title2016: `Career Building`,
        desc2016: `2016 - I was elected Board Secretary of Livable Berkeley in charge of communications and meeting organization.<br>
2017 - Kristin and I got married after 7 beautiful years together. We celebrated in our College town of San Luis Obispo and then went on our honeymoon for a cruise and backpacking excursion in Europe.<br>
2019 - I was elected Vice Chair of the Berkeley Public Works COmmission after my work on the Undergrounding and Watershed Subcommittees.<br>
2019 - We adopted a baby kitten to be Tom Tom’s sister. She is the embodiment of adorable.<br>
2019 - I completed Treehouse Frontend Techdegree to start off my burgeoning career in web development.
`
    }

    //==========================================================
    //     On Page Load Display
    //==========================================================

    $(`#yearlist-container li:first-child`).addClass(`active`)
    resumeTitle.text(resumeContainerContents.title1985)
    resumeDescription.html(resumeContainerContents.desc1985)

    //==========================================================
    //     Events
    //==========================================================

    yearlistContainer.on("click", "li", function() {
        let year = $(this).text().slice(0, 4).toString()
        let title = resumeContainerContents[`title` + year]
        let description = resumeContainerContents[`desc` + year]

        yearlistContainer.children().each(function() {$(this).removeClass(`active`)})
        $(this).addClass(`active`)
        resumeTitle.text(title)
        resumeDescription.html(description)
    })


});



























