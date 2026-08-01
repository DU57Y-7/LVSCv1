/* =========================================
   LOGAN VILLAGE SERVICES CLUB
   Version 1 JavaScript
========================================= */



/* ---------- MOBILE MENU ---------- */


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}





/* ---------- AUTOMATIC YEAR ---------- */


const year = document.getElementById("year");


if(year){

    year.textContent =
    new Date().getFullYear();

}





/* ---------- OPEN / CLOSED STATUS ---------- */


function updateClubStatus(){


    const status =
    document.getElementById("club-status");


    if(!status) return;



    const now =
    new Date();



    const day =
    now.getDay();


    const hour =
    now.getHours()
    +
    now.getMinutes()/60;



    let open = false;



    /*
        Sunday = 0
        Friday = 5
        Saturday = 6
    */


    if(day === 5){

        if(hour >= 16 && hour < 23){

            open = true;

        }

    }



    if(day === 6){

        if(hour >= 15 && hour < 20){

            open = true;

        }

    }



    if(day === 0){

        if(hour >= 15 && hour < 21){

            open = true;

        }

    }




    if(open){

        status.innerHTML =
        "🟢 OPEN NOW";

    }

    else {

        status.innerHTML =
        "🔴 CURRENTLY CLOSED";

    }


}



updateClubStatus();





/* ---------- EVENTS ---------- */


const events = [

"event_1.png",
"event_2.png",
"event_3.png",
"event_4.png",
"event_5.png"

];



const eventContainer =
document.getElementById(
"event-container"
);



if(eventContainer){


events.forEach(event => {


const image =
document.createElement("img");


image.src =
"assets/events/" + event;


image.alt =
"Logan Village Services Club Event";


eventContainer.appendChild(image);



});


}





/* ---------- GALLERY ---------- */


const galleryImages = [

"1.JPG",
"3.jpeg",
"4.jpg",
"5.JPG",
"6.JPG",
"7.JPG",
"8.JPG",
"9.JPG"

];



const galleryContainer =
document.getElementById(
"gallery-container"
);



if(galleryContainer){


galleryImages.forEach(photo => {


const image =
document.createElement("img");


image.src =
"assets/gallery/" + photo;


image.alt =
"Logan Village Services Club Gallery Photo";



galleryContainer.appendChild(image);



});


}





/* ---------- SPONSORS ---------- */


const sponsors = [

{
name:
"Tri Tech Refrigeration",

logo:
"tritech.png",

link:
"https://www.tritech.com.au/"
},


{
name:
"Gannon Fabrications",

logo:
"gannon.png",

link:
"https://www.gannonfabrications.com.au/"
},


{
name:
"Ironjack Recycling",

logo:
"ironjack.png",

link:
"https://ironjack.net.au/"
},


{
name:
"Right Choice Earthmoving",

logo:
"earth.jpg",

link:
"https://rightchoiceearthmoving.com.au/"
},


{
name:
"Logan Coaches",

logo:
"coaches.png",

link:
"https://logancoaches.com.au/Home"
},


{
name:
"Logan Village Pharmacy",

logo:
"pharmacy.jpg",

link:
"https://www.facebook.com/profile.php?id=61569915600680"
},


{
name:
"Kristie Steele - Ray White Beenleigh & Flagstone",

logo:
"steele.png",

link:
"https://raywhitebeenleigh.com.au/agents/kristie-steele/63562"
},


{
name:
"Jimboomba Butchery",

logo:
"butcher.jpeg",

link:
"https://flagstonebutcher.com.au/"
}

];




const sponsorContainer =
document.getElementById(
"sponsor-container"
);



if(sponsorContainer){


sponsors.forEach(sponsor => {


const card =
document.createElement("a");


card.href =
sponsor.link;


card.target =
"_blank";



const image =
document.createElement("img");


image.src =
"assets/sponsors/" + sponsor.logo;


image.alt =
sponsor.name;



card.appendChild(image);


sponsorContainer.appendChild(card);



});


}





/* ---------- SIMPLE IMAGE LIGHTBOX ---------- */


document.addEventListener(
"click",
function(event){


if(event.target.tagName === "IMG"
&&
event.target.closest(".gallery-grid")){


const overlay =
document.createElement("div");


overlay.style.position =
"fixed";


overlay.style.inset =
"0";


overlay.style.background =
"rgba(0,0,0,0.85)";


overlay.style.display =
"flex";


overlay.style.alignItems =
"center";


overlay.style.justifyContent =
"center";


overlay.style.zIndex =
"2000";



const image =
document.createElement("img");


image.src =
event.target.src;


image.style.maxWidth =
"90%";


image.style.maxHeight =
"90%";


image.style.borderRadius =
"10px";



overlay.appendChild(image);



document.body.appendChild(overlay);



overlay.onclick =
() => {

overlay.remove();

};



}


});





/* ---------- END ---------- */