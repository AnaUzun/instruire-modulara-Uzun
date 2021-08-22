var index = 0;
AOS.init({duration: 1000 });

function menu() {
    document.getElementById("side-menu").classList.toggle("nav");
    document.getElementById("menu-btn").classList.toggle("nav");
    document.getElementById("main").classList.toggle("inactive");
    document.getElementById("hamburger").classList.toggle("hidden");
    document.getElementById("close").classList.toggle("hidden");
}

function slider() {
    var slides = document.getElementsByClassName("slide");
    var i = 0;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";
    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

slider();
setInterval(slider, 2000);
new SimpleLightbox({elements: ".container-galerie a"});
new SimpleLightbox({elements: ".content a"});

emailjs.init("user_ab6qzPH5TUg6Nl4k21Jlo");
function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_7h2wwi6", "template_8dlianf", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Mai încercați o dată sau contactati programatorul.")
        })
}



function clock() {
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

month=new Array("ianuarie", "februarie", "martie", "aprilie", "mai", "iunie",
"iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie");

if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

date_time = "Suntem în - " + day + " " + month[month_num] + " " + d.getFullYear() +
"  &nbsp;&nbsp;&nbsp;Ora curentă - "+ hours + ":" + minutes + ":" + seconds;
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("doc_time").innerHTML = date_time;
 setTimeout("clock()", 1000);
}

 clock();
