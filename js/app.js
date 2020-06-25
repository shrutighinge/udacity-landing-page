/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const startingTime = performance.now();

//navigation global variable
const navigation = document.getElementById('navbar__list');

// sections global variable
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuilder = () => {
    let navUI = '';
     
    // looping over all sections
    sections.forEach(section => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    
    navUI += `<li><a class="menu__link" href= "#${sectionID}">${sectionDataNav}</a></li>`;
    });
    // append all elements to navigation
    navigation.innerHTML =navUI;
};

navBuilder();

// Add class 'active' to section when near top of viewport

// get the largest value that is less or equal to the number
const offset = (section)=>{
    return Math.floor(section.getBoundingClientRect().top);
};
// removing the active class
const removeActive = (section)=>{
    section.classList.remove('your-active-class');
    section.style.cssText= "background:linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);";
};
// adding the active class
const addActive = (conditional, section)=> {
    if (conditional){
        section.classList.add('your-active-class');
        section.style.cssText= "background-color:black;";
    };
}

//implementing the actual function
const sectionActivation= ()=>{
    sections.forEach(section =>{
       const elementOffset = offset(section);
     
       inviewport = ()=> elementOffset < 150 && elementOffset>=-150;
    
    removeActive(section);
    addActive (inviewport(), section);
    });
};
window.addEventListener('scroll' , sectionActivation);

// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event
 
const scrolling=() =>{
    const links =document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', ()=>{
            for (i=0; i<sections; i++){
                sections[i].addEventListener('click',sectionScroll(link));
            }
        });
    });
};
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// performance results
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

// Scroll to section on link click

// Set sections as active


