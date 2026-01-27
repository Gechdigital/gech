
var typed = new Typed('#text',{
    strings:['Developer.', 'Designer.','Writer.','Editor.'],
typeSpeed:100,
backSpeed:100,
loop:true,
});
//show skill
let skillBtn = document.querySelector('.skill_btn');
let skillDet = document.querySelector('.about_bottom');

skillBtn.addEventListener('click',() =>{
    skillDet.classList.toggle('show_skills');
});

//sticky nav
let nav = document.querySelector('nav');
window.addEventListener('scroll',() =>{
    if(window.scrollY > 100){
        nav.classList.remove('sticky_nav');
    }
});




// Toggle menu on mobile
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
const menuLinks = document.querySelectorAll(".menu a"); // select all links inside the menu

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});










function opentab(event, tabName) {
    // Remove 'active-link' class from all tab links
    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(link => link.classList.remove('active-link'));

    // Remove 'active-tab' class from all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active-tab'));

    // Add 'active-link' to the clicked tab
    event.currentTarget.classList.add('active-link');

    // Show the corresponding tab content
    document.getElementById(tabName).classList.add('active-tab');
}
