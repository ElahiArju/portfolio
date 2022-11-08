let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

function sendEmail(event) {
    event.preventDefault
    let name = document.forms['form']['name'].value
    let email = document.forms['form']['email'].value
    let subject = document.forms['form']['subject'].value
    let content = document.forms['form']['message'].value

    if(name=email=subject=content!= '' ){
        alert('Your message is sent successfully')
    }
    else{
        alert('Message is not sent')
    }
    // email.send({
    //     SecureToken: "350e284e-253a-4257-97c3-2f0f88f40b26",
    //     To: 'elahi15-2945@diu.edu.bd',
    //     From: "arjukhan005@gmail.com",
    //     Subject: "Email From Portfolio",
    //     Body: "Name: "+name+"<br>"+
    //             "Email: "+email+"<br>"+
    //             "Subject: "+subject+"<br> <br>"+
    //             content
    // }).then(
    //     message => {
    //         document.getElementById("name").value=null
    //         document.getElementById("email").value=null
    //         document.getElementById("subject").value=null
    //         document.getElementById("message").value=null
    //         if (message === "OK") {
    //             alert("Your Message has been sent successfully")
                
    //         }
    //         else {
    //             alert(message)
                
    //         }
    //     }

    // );
}




const resume_sections = document.querySelectorAll('section.edu,section.experience');
const main_sections = document.querySelectorAll("#home-section,section.about-me,section.resume-con,section.projects,section.contact")
const resume_nav = document.querySelectorAll(".resume-sidebar ul li a");
const main_nav = document.querySelectorAll("nav ul li a");