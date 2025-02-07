
let buttonToggle = document.getElementById('btn')
let menu = document.getElementById('mobileLinks')
let bod = document.getElementById('body')


function myFunc() {

    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        // body.style.overflowY = 'hidden';
        console.log("opned")
    } else {
        menu.style.display = 'none'
        console.log("closed")
        // body.style.overflowY = 'scroll';
    }
}


// js type auto

function startTypedEffect(elementId, strings, typeSpeed = 130, backSpeed = 130, loop = true) {
    console.log("type Autio")
    var typed = new Typed(elementId, {
        strings: strings, // النصوص اللي هتتكتب
        typeSpeed: typeSpeed, // سرعة الكتابة
        backSpeed: backSpeed, // سرعة المسح
        loop: loop // التكرار

    });
    console.log("type Autio")
}
startTypedEffect('#auto-type', ['Frontend Developer', 'Student', 'Software Engineering']);


// func darkmode
let body = document.getElementById('body');
let icon = document.getElementById('iconLight');

function darkAndLight() {
    if (body.style.backgroundColor === 'rgb(255, 255, 255)' || body.style.backgroundColor === '#FFF' || body.style.backgroundColor === '') {
        // وضع الليل
        body.style.backgroundColor = '#422003';
        body.style.color = "#FFF";
        icon.classList.remove('bi-moon-fill'); // مسح الكلاس القديم
        icon.classList.add('bi-brightness-high-fill'); // إضافة الكلاس الجديد
        icon.style.color = 'orange'
    } else {
        // وضع النهار
        body.style.backgroundColor = '#FFF';
        body.style.color = "#000";
        icon.classList.remove('bi-brightness-high-fill'); // مسح الكلاس القديم
        icon.classList.add('bi-moon-fill'); // إضافة الكلاس الجديد
        icon.style.color = 'orange'
    }
}

icon.addEventListener('click', darkAndLight);