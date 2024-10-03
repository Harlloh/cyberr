const nav = document.querySelector('nav');
const ham = document.querySelector('.hamburger');
const cancel = document.querySelector('.cancel');
const cancels = document.querySelector('.cancels');
const navbar = document.querySelector('header');
const logo = document.querySelector('.logo');
const contact = document.getElementById('contact');
const contactPage = document.querySelector('#contact-page');
const contactNav = document.querySelector('#COntact');
const navItem = document.querySelectorAll('li');
const navItems = Array.from(navItem)

const navTop = navbar.offsetTop;

const dispNav = ()=> {
    nav.style.right = '0%';
    // nav.classList.toggle('makeAppear');
    console.log('yo');
    // ham.style.display = 'flex';
}
const nodispNav = ()=> {
    nav.style.right = '120%';
}
const disp = ()=> {
    contactPage.style.display = 'flex';
}
const noDisp = ()=> {
    contactPage.style.display = 'none';
}
const noDispnav = ()=> {
    console.log('omooooooooooo')
    nav.style.right = '-100%';
}
const navvvv = navItems.map(navData => {
    navData.addEventListener('click', noDispnav )
})

const bgChange = ()=> {
    if(window.scrollY >= navTop){
        document.body.style.paddingTop = navbar.offsetHeight + 'px'; 
        navbar.style.position = 'fixed'
        // navbar.style.background = 'black'
        logo.style.transform = 'translateX(0%)';

    }else{
        document.body.style.paddingTop = 0; 
        navbar.style.position = 'inherit'
        logo.style.transform = 'translateX(-150%)';
    }
}



ham.addEventListener('click', dispNav);
cancel.addEventListener('click', nodispNav);
contact.addEventListener('click', disp);
contactNav.addEventListener('click', disp);
cancels.addEventListener('click', noDisp);
// navItem.addEventListener('click', noDispnav);
window.addEventListener('scroll', bgChange);