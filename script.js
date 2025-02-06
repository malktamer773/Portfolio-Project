
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