/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- FUNCTION BUTTON HIRE-ME ---- */
function btnHireMe() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}


function downloadCV() {
  
  var tempLink = document.createElement('a');
  
  
  tempLink.setAttribute('href', '/assets/vendor/file/Contoh-resume.pdf'); 
  tempLink.setAttribute('download', 'Contoh-resume.pdf'); 


  document.body.appendChild(tempLink);

  
  tempLink.click();

  
  document.body.removeChild(tempLink);
}


  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }



 var typingEffect = new Typed(".typedText",{
    strings : [" a Computer Science Student","an innovative Thinker", "an initiative taker"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 });



 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })


sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


sr.reveal('.skills-grid',{interval:350})


sr.reveal('.project-box',{interval: 200})
sr.reveal('.portfolio-cover',{delay:200})


sr.reveal('.top-header',{})






const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})


srLeft.reveal('.portfolio-info',{delay:100})
srLeft.reveal('.portfolio-tags',{delay:200})
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})


const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})


srRight.reveal('.skills-box',{delay: 100})


srRight.reveal('.form-inputs',{delay: 150})
srRight.reveal('.form-message',{delay: 100})






const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)