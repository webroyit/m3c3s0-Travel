// sidenav
const sideNav = document.querySelector(".sidenav");
// use Materialize to show the sidenav
M.Sidenav.init(sideNav, {});

// slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: false,      // hide the dots
    height: 500,
    transition: 500,        // speed of the transition
    interval: 5000          // time for a image to switch
})