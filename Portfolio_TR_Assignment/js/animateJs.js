/*document.getElementById("startID").style.webkitAnimationPlayState = "paused";
window.addEventListener("mouseleave", function() {
    document.getElementById("startID").style.webkitAnimationPlayState = "running";
    setTimeout(function() {
        document.getElementById("startID").style.webkitAnimationPlayState = "paused";
    }, 4);
});
*/

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});