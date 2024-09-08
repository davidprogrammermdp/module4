let menu=document.querySelector('.fixed-menu')
menu.addEventListener('click', function(event){
    let clicktarget=event.target
    let activebtn=document.querySelector('.active')
    if (clicktarget.classList.contains('nav-link')){
        activebtn.classList.remove('active')
        clicktarget.classList.add('active')
    }
})
let classLink = '.main-link'
window.onscroll=function(){
    let h=document.documentElement.clientHeight;
    if(window.scrollY>=h*3.8){
        classLink= '.comments-link'
    }
    else if(window.scrollY>=h*2.8){
        classLink= '.works-link'
    }
    else if(window.scrollY>=h*1.8){
        classLink= '.skills-link'
    }
    else if(window.scrollY>=h*0.8){
        classLink= '.about-link'
    }
    else {
        classLink= '.main-link'
    }
    let activebtn=document.querySelector('.active')
    let newactivebtn=document.querySelector(classLink)
    if(!newactivebtn.classList.contains('active')){
        newactivebtn.classList.add('active')
        activebtn.classList.remove('active')
    }
};
