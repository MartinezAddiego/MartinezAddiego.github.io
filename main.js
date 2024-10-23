var typed = new Typed(".description-text", {
    strings: [
        "Cognitive Neuroscientist",
        "PhD Candidate",
        "Aspiring Programmer",
        "Math Enthusiast", 
        "Always Learning (mostly caffeinated)"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu-items');

    // Function to toggle the menu
    function toggleMenu() {
        // Toggle the "open" class on the menu icon
        menuIcon.classList.toggle('open');

        // Toggle the visibility of the menu items
        menuItems.style.display = (menuItems.style.display === 'flex' && window.innerWidth <= 860) ? 'none' : 'flex';
    }

    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', toggleMenu);

    // Listen for window resize events to adjust menu visibility
    window.addEventListener('resize', function () {
        if (window.innerWidth > 860) {
            menuItems.style.display = 'flex';
        } else {
            // Hide menu items on small screens when the menu icon is not active
            if (!menuIcon.classList.contains('open')) {
                menuItems.style.display = 'none';
            }
        }
    });
});