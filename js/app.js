
/* Slide in side navigation, push the page content to the right, add a black background color with a 40% opacity to the body element. */
function openNav() {
  document.getElementById("mySidenav").style.width = "28%";
  document.getElementById("main").style.marginLeft = "28%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

/* Hide the side navigation, return page content to original position, and background color to original style. */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "#c3d3e3";
}