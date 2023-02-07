const hamburger = document.getElementsByClassName('hamburgmenu')[0];
const navbar = document.getElementsByClassName('navbar')[0];

let ishamburger;
if(navbar.style.display == 'none'){
    ishamburger = false;
}
else{
    ishamburger = true;
}

hamburger.addEventListener('click', ()=>{
    if(ishamburger){
        navbar.style.display = 'flex';
    }
    else{
        navbar.style.display = 'none';
    }
    ishamburger = !ishamburger;
})

