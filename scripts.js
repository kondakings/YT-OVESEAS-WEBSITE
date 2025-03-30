document.addEventListener("DOMContentLoaded",() =>{
    const navToggle=document.querySelector(".nav-toggle");
    const navMenu=document.querySelector("nav ul");

    if(navToggle){
        navToggle.addEventListener("click", () =>{
            navMenu.classList.toggle("visible");
        });
    }

    const links=document.querySelectorAll("a[href^='#']");
    links.forEach(link=>{
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId=link.getAttribute("href");
            const targetSection=document.querySelector(targetId);

            if (targetSection){
                targetSection.scrollIntoView({behavior: "smoth"});
            }
        });
    });

    const contactButtons=document.querySelectorAll(".btn");
    contactButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            alert ("Thank you for your interest this functionality is uner construction.");

        });
    });

    const greetingtext=document.querySelector(".banner.highlight");
    if(greetingtext){
        const currentHour=new Date().getHours();
        if(currentHour<12){
            greetingtext.textContent="Good Morning!" +greetingtext.textContent;

        } else if (currentHour<18){
            greetingtext.textContent="Good Afternoon!" +greetingtext.textContent;

        } else {
            greetingtext.textContent="good Evening!" +greetingtext.textContent;
            
        }
    }
});