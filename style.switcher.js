
// toggle style switcher


const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
   document.querySelector(".style-switcher").classList.toggle("open");
   
});

//  style switcher scroll

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
        {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// theme color

const alternativeStyles = document.querySelectorAll(".alternative-style");
function setActiveStyle(color)
    
{
    alternativeStyles.forEach(style => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
}

// light and dark mode
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click',()=>{
    dayNight.querySelector('i').classList.toggle('fa-moon');
    dayNight.querySelector('i').classList.toggle('fa-sun');
    document.body.classList.toggle('dark');
})
window.addEventListener('load',()=>{
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    else{
        dayNight.querySelector('i').classList.add('fa-moon');
    }
});

// 
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

       
        navLinks.forEach(nav => nav.classList.remove('active'));

        
        this.classList.add('active');

        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId); 

        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
});
