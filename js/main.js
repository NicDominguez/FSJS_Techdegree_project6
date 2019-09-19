
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
    constructor(title, image, website, respository, description, languages_used, language1, language2, language3) {
        this.title = title;
        this.image = image;
        this.website = website;
        this.repository = respository;
        this.description = description;
        this.languages_used = languages_used;
        this.language1 = language1;
        this.language2 = language2;
        this.language3 = language3;
    }
}







// Click Event to Select Lanaguages and create chosenLanguages array

let chosenLanguages = []
const languageList = $('#language-list').children()

// Creates array of objects called viewableProjects based on chosenLanguages array

let viewableProjects = []
let allProjects = []


//==========================================================
//     Mark clicked languages as selected
//==========================================================

$(`.language-icon`).click(function() {
    let languageId = this.id

    //differentiate between all languages and single language selection
    if (languageId === "all-languages") {
        //loops of each lI in language list and adds selected class then pushes lI id to chosenLanguages array
        
        if ($(this).hasClass("selected")) {
            languageList.each(function () {
                //removes selected class from all LIs
                $(this).removeClass("selected")
                //removes all strings from array chosenLanguages    
                chosenLanguages = []
                
            })

        } else {
            languageList.each(function () {
                //adds selected class to all LI elements
                $(this).addClass("selected")

                //push id to chosenLanguages array online if not alreay included
                if ($.inArray(this.id, chosenLanguages) < 0) {
                    chosenLanguages.push(this.id)
                } 
                
            })
        }

    } else {
        
        if ($(this).hasClass("selected")) {
            //gets index of LIs Id in chosenLanugages Array then removes the value(self) at that index
            let chosenLanguageindex = $.inArray(languageId, chosenLanguages)
            chosenLanguages.splice(chosenLanguageindex,1)

            // removes proejcts containg deslected language from viewableProjects array
            viewableProjects.forEach(function(project) {
                if ($.inArray(languageId, project.languages_used) >= 0) {
                    let index = $(viewableProjects).index(project)
                    viewableProjects.splice(index,1)
                }
            })

        } else {
             //pushes the LI Id to the chosenLanguages array
            chosenLanguages.push(languageId)
        }
       
        $(this).toggleClass("selected");
        
    }

    updateViewableProjects()

});

//==========================================================
//     Create Chosen languages Array from selected Elements
//==========================================================



const project2 = new PortfolioProject(
    `Responsive Layout`,
    `../images/project2_image.JPG`,
    `https://nicdominguez.github.io/FEWD_Techdegree_project2`,
    `https://github.com/NicDominguez/FEWD_Techdegree_project2`,
    `This is the description for project 2`,
    [`html-language`, `sass-language`],
    `HTML - Ths is an explanation for the use of HTML`,
    `CSS - This is an explanation for the use of CSS`,
    null
)

const project3 = new PortfolioProject(
    `Registration Form`,
    `../images/project2_image.JPG`,
    `https://nicdominguez.github.io/FEWD_Techdegree_project3`,
    `https://github.com/NicDominguez/FEWD_Techdegree_project3`,
    `This is the description for project 3`,
    [`javascript-language`, `css-language`],
    `HTML - Ths is an explanation for the use of HTML`,
    `CSS - This is an explanation for the use of CSS`,
    null
)

//creates allProjects array
allProjects.push(project2, project3)

//creates array of all project titles
const allProjectTitles = []
allProjects.forEach(project => { allProjectTitles.push(project.title) });

const allChosenProjectTitles = []


//==========================================================
//     Create Viewale Projects Array from Chosen Languages Array
//==========================================================


//checks if project has any of the languages_used values in the array chosen
function checkProjectIncludesLanguage(project, array) {
    let found = false;
    project.languages_used.forEach(function(language) {

        if ($.inArray(language, array) >= 0) {
            found = true;
        } 
    })
    return found;
}

function updateViewableProjects() {

    allProjects.forEach(function(project) {
        
        if (checkProjectIncludesLanguage(project, chosenLanguages)) {
                //add projects to viewableProjects array only if not already included
                if ($.inArray(project.title, allChosenProjectTitles) < 0) {
                    allChosenProjectTitles.push(project.title)
                    viewableProjects.push(project)
                }
        }
    })
    console.log(viewableProjects)
}

function createChosenLanguages() {


}