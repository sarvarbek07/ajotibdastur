let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links');

window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove("hovered-link");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
});



const scrollProgress = document.getElementById('scrollbarProgress');
const heightDoc = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop /  heightDoc) * 100}%`

})
