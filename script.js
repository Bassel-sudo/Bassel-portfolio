const text = "welcome in my portfolio";
const title = document.getElementById("welcoming");

let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        title.innerHTML = text.slice(0, index++);
        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        title.innerHTML = text.slice(0, index--);
        if (index < 0) {
            window.location.href = "index2.html";
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
