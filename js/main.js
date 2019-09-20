
$(document).ready(function() {

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



    //Skill Category Switching 

    const pmCategory = $('#program-management-category')
    const wdCategory = $('#web-development-category')
    const hobCategory = $('#hobbies-category')

    const pmList = $('#program-management-skill-list')
    const wdList = $('#web-development-skill-list')
    const hobList = $('#hobbies-skill-list')

    const catDescription =$('#category-description').find('p')

    pmCategory.click(function () {
        if ($(window).width() < 1200) {
            pmList.show()
            wdList.hide()
            hobList.hide()

            catDescription.text(`
                My experience in program management comes primarily from my work with San Francisco Municipal Transportation Agency. I worked for the Human Resources team for eight years in regulatory compliance. Sounds invigorating, right? Yea not really, but  the experience did grant me valuable insight into the inner workings of the public sector and how programs are interwoven throughout the broader goals of a municipal agency. I learned many valuable skills from contracting to database management and I developed a desire to address many of the problems I have witnessed throughout my early career. Below I have listed several of the main skills I developed and how proficient I am at each.
            `)
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
        }
    });









    
});

// Portfolio Project Class Construction


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
    `This is the description for project 2`,
    [`html-language`, `sass-language`],
    `HTML`,
    `Ths is an explanation for the use of HTML`,
    `CSS`,
    `This is an explanation for the use of CSS`,
    `Sass`,
    `This is an explanation for the use of Sass`
)

const project3 = new PortfolioProject(
    `Registration Form`,
    `images/project2_image.JPG`,
    `https://nicdominguez.github.io/FEWD_Techdegree_project3`,
    `https://github.com/NicDominguez/FEWD_Techdegree_project3`,
    `This is the description for project 3`,
    [`javascript-language`, `css-language`],
    `HTML - Ths is an explanation for the use of HTML`,
    `CSS - This is an explanation for the use of CSS`,
    null
)

const languageList = $('#language-list').children()

//==========================================================
//     Create Array of All Available Project Objects
//==========================================================

let allProjects = []
allProjects.push(project2, project3)

//==========================================================
//     Create Array of selected Languages
//==========================================================

let selectedLanguages = []
let viewableProjects = []

//==========================================================
//     EVENTS
//==========================================================

// Mark clicked languages as selected
$(`.language-icon`).click(function() {
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
});

//==========================================================
//     MAIN FUNCTIONS
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
    allProjects.forEach(function(project) {
        if (checkProjectIncludesLanguage(project, selectedLanguages)) {
            viewableProjects.push(project)
        }
    })
    console.log(viewableProjects)
}

//==========================================================
//     SUPPORT FUNCTIONS
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


/* class PortfolioProject {
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
} */

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


function updateProjectView() {
    projectTitle.text(project2.title)
    projectImage.attr(`src`, project2.image)
    projectWebsite.attr(`href`, project2.website)
    projectRepository.attr(`href`, project2.repository)
    projectDescription.text(project2.description)
    projectLanguage1.text(project2.language1)
    projectLanguage1Description.text(project2.language1_description)
    projectLanguage2.text(project2.language2)
    projectLanguage2Description.text(project2.language2_description)
    projectLanguage3.text(project2.language3)
    projectLanguage3Description.text(project2.language3_description)
}
