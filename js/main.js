
$(document).ready(function() {

//==========================================================
//     HEADER SECTION
//==========================================================

    //change header section title when scrolling
    $('main').scroll(function (event) {
        // y = top position of window

        const y_pos = $(this).scrollTop() - 500;
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
        leadership: 70,
        datamanagement: 80,
        communication: 70,
        projectmanagement: 60,
        organizationaldevelopment: 50
    }

    const wdSkillList = {
        uidesign: 40,
        html: 80,
        css: 70,
        sass: 60,
        javascript: 50,
        jquery: 50
    }

    const hobSkillList = {
        boardgaming: 70,
        reading: 80,
        mcutrivia: 100,
        goalkeeping: 60,
        traveling: 80,
        volleyball: 50
    }

    //Set Program Management Skill List on Page Load
    displayPercentages(pmList, pmSkillList)
    setSkillBarWidths(pmList, pmSkillList)

    //Click Events for Each Skill Category
    pmCategory.click(function () {
        if ($(window).width() < 1200) {
            pmList.show()
            wdList.hide()
            hobList.hide()

            catDescription.text(`
                My experience in program management comes primarily from my work with San Francisco Municipal Transportation Agency. I worked for the Human Resources team for eight years in regulatory compliance. Sounds invigorating, right? Yea not really, but  the experience did grant me valuable insight into the inner workings of the public sector and how programs are interwoven throughout the broader goals of a municipal agency. I learned many valuable skills from contracting to database management and I developed a desire to address many of the problems I have witnessed throughout my early career. Below I have listed several of the main skills I developed and how proficient I am at each.
            `)
        }

        displayPercentages(pmList, pmSkillList)
        setSkillBarWidths(pmList, pmSkillList)
        setSkillBarWidthstoZero(wdList, wdSkillList)
        setSkillBarWidthstoZero(hobList, hobSkillList)
    });

    wdCategory.click(function () {
        if ($(window).width() < 1200) {
            pmList.hide()
            wdList.show()
            hobList.hide()

            catDescription.text(`
            After working in the first ten years of my career in the private and public sector one thing I was always bothered by was that I knew my job could be easier. The small but numerous tasks that would take up a good part of my day could and in my view should be done by a machine. I was right on the cusp of understanding that automating my work was possible but I didn’t yet have the skills to do it. Now I am building those skills and starting in front end web development.  
            `)
        }
        displayPercentages(wdList, wdSkillList)
        setSkillBarWidths(wdList, wdSkillList)
        setSkillBarWidthstoZero(pmList, pmSkillList)
        setSkillBarWidthstoZero(hobList, hobSkillList)
    });

    hobCategory.click(function () {
        if ($(window).width() < 1200) {
            pmList.hide()
            wdList.hide()
            hobList.show()

            catDescription.text(`
            Life isn’t only about work so I try and round out my life with a variety of activities. I am a bit of a nerd when it comes to pop culture so I could go pretty deep into a character study of Darth Vader if you wanted me to. But anyway, I have been pretty active most of my life in both outdoor and more low key activities. Volleyball and Soccer were big parts of my life and I still try and play as much as possible. More recently, I have been reading more science fiction and graphic novels to keep my mind active. One important hobby to me is traveling . I am a firm believer that people grow by getting out and experiencing the world and other cultures. I am proud to have visited/lived in over 20 countries with another coming up next year.
            `)
        }
        displayPercentages(hobList, hobSkillList)
        setSkillBarWidths(hobList, hobSkillList)
        setSkillBarWidthstoZero(pmList, pmSkillList)
        setSkillBarWidthstoZero(wdList, wdSkillList)
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
        `This is the description for project 3`,
        [`html-language`, `css-language`],
        `HTML`,
        `Ths is an explanation for the use of HTML`,
        `CSS`,
        `This is an explanation for the use of CSS`,
        null,
        null
    )

    const project4 = new PortfolioProject(
        `Web Style Guide`,
        `images/project4_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project4`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project4`,
        `This is the description for project 4`,
        [`html-language`, `css-language`, `sass-language`],
        `HTML`,
        `Ths is an explanation for the use of HTML`,
        `CSS`,
        `This is an explanation for the use of CSS`,
        `Sass`,
        `This is an explanation for the use of Sass`
    )

    const project5 = new PortfolioProject(
        `Photo Gallery`,
        `images/project5_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project5`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project5`,
        `This is the description for project 5`,
        [`css-language`, `jquery-language`],
        `CSS`,
        `This is an explanation for the use of CSS`,
        `JQuery`,
        `This is an explanation for the use of Hquery`,
        null,
        null
    )

    const project6 = new PortfolioProject(
        `Word Game`,
        `images/project6_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project6`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project6`,
        `This is the description for project 6`,
        [`css-language`, `javascript-language`],
        `CSS`,
        `This is an explanation for the use of CSS`,
        `JavaScript`,
        `This is an explanation for the use of JavaScript`,
        null,
        null
    )

    const project7 = new PortfolioProject(
        `WebApp Dashboard`,
        `images/project7_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project7`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project7`,
        `This is the description for project 7`,
        [`html-language`, `css-language`, `javascript-language`],
        `HTML`,
        `Ths is an explanation for the use of HTML`,
        `CSS`,
        `This is an explanation for the use of CSS`,
        `JavaScript`,
        `This is an explanation for the use of JavaScript`
    )

    const project8 = new PortfolioProject(
        `Employee Directory`,
        `images/project8_image.JPG`,
        `https://nicdominguez.github.io/FEWD_Techdegree_project8`,
        `https://github.com/NicDominguez/FEWD_Techdegree_project8`,
        `This is the description for project 8`,
        [`css-language`, `javascript-language`],
        `CSS`,
        `This is an explanation for the use of CSS`,
        `JavaScript`,
        `This is an explanation for the use of Javascript`,
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

    })

    // Cycle to next project on mobile view
    $(`#next-arrow`).click(function () {
        if (currentProjectIndex < viewableProjects.length - 1) {
            updateProjectView(viewableProjects[currentProjectIndex + 1])
        }
    })

    // Cycle to next project on mobile view
    $(`#previous-arrow`).click(function () {
        if (currentProjectIndex >= 1) {
            updateProjectView(viewableProjects[currentProjectIndex - 1])
        }
    })

    // Cycle to specific project on second page flag click
    bookContainer.on("click", ".page-flag", function () {
        let index = $(this).index()
        updateProjectView(viewableProjects[index])
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
        title2011: `Career Beginnings`,
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
    //     Events
    //==========================================================

    yearlistContainer.on("click", "li", function() {
        let year = $(this).text().slice(0, 4).toString()
        let title = resumeContainerContents[`title` + year]
        let description = resumeContainerContents[`desc` + year]

        resumeTitle.text(title)
        resumeDescription.html(description)
    })

});



























