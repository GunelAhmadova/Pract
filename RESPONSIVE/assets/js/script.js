let dropMenu =document.querySelector(".drop-menu") 
console.log(dropMenu);
let hamburger=document.querySelector(".fa-bars")
let exit=document.querySelector(".exit") 
hamburger.addEventListener("click", function() { 
    dropMenu.style.transform="translateX(0px)"
    exit.addEventListener("click", function(){
        dropMenu.style.transform="translateX(-300px)"
    })
})

let header  = document.querySelector('header')
document.addEventListener('scroll', function(){
    if (window.scrollY>66 && window.scrollY<87) {
       header.style.top="-100px"
    }
    else if(window.scrollY>88){
        header.classList.add('active')
        console.log('salam');
       header.style.top="-0"

    }
    else{
        header.classList.remove('active')
    }
})
