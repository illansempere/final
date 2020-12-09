let thumbBar = document.querySelector('#thumb-bar');
let display = document.querySelector('#displayed-img');
let btn = document.querySelector('#button');
let input = document.querySelector('#effect');

document.getElementById("form").style.display = 'none';

for(i = 1; i <= 5; i++) {
    let newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i + ".jpg");
    thumbBar.appendChild(newImage);
}

function show(event) {
    document.getElementById("form").style.display = 'flex';
    display.src = event.target.src;
}

thumbBar.addEventListener("mouseover", show);

function submit() {
    if (input.value === 'blur') {
        let current = display.src;
        let num = current.slice(-5, -4);
        display.setAttribute('src', "images/pic"+ num +"B.jpg");
        effect.value = "";
    } else {
        alert("The value you have entered is incorrect.");
        effect.value = "";
    }
}

btn.addEventListener("click", submit);