document.addEventListener('DOMContentLoaded', function () {
    const descriptionElement = document.querySelector('.description-text');
    if (descriptionElement) {
        const typed = new Typed('.description-text', {
            strings: [
                "Cognitive Neuroscientist",
                "Post-Doctoral Scholar",
                "Aspiring Programmer",
                "Math Enthusiast", 
                "Always Learning (mostly caffeinated)"],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop:true
        });
    }
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

        // Toggle visibility of the menu items based on current state
        if (menuItems.style.display === 'flex') {
            menuItems.style.display = 'none';
        } else {
            menuItems.style.display = 'flex';
        }
    }

    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', toggleMenu);

    // Adjust menu visibility when resizing the window
    window.addEventListener('resize', function () {
        if (window.innerWidth > 860) {
            // Ensure menu is always visible on larger screens
            menuItems.style.display = 'flex';
        } else {
            // Hide the menu on small screens if the icon is not active
            if (!menuIcon.classList.contains('open')) {
                menuItems.style.display = 'none';
            }
        }
    });

    // Ensure the menu closes when clicking outside of it (optional)
    document.addEventListener('click', function (event) {
        if (!menuIcon.contains(event.target) && !menuItems.contains(event.target)) {
            if (menuIcon.classList.contains('open')) {
                menuIcon.classList.remove('open');
                menuItems.style.display = 'none';
            }
        }
    });
});