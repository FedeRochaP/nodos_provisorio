// document.getElementById ('r-button').onclick = function () {
//     if (document.getElementById('r-button').onclick == true)
//     {
//         document.querySelector('r-menu:active');
//     }
// }

var logo = document.querySelector('.r-button');
var menu = document.querySelector('.r-menu');

logo.addEventListener('click', function() {
    menu.classList.toggle('show-r-menu');
});