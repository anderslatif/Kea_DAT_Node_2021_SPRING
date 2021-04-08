// how do I access the element that I want to modify?
const footerAbout = document.getElementById("footer-about");

footerAbout.innerText = "© Copyright " + new Date().getFullYear();
