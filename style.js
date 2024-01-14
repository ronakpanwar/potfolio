function boxshow() {
    let box = document.getElementById('h-box');
    let btn = document.getElementById('btn');
    let btnHide = document.getElementById('btn-1');
    if (box.style.display != "flex") {
       box.style.display = "flex";
       btn.innerHTML = 'See less';
       btnHide.style.display = "block";
    }
    else {
       box.style.display = "none";
       btn.innerHTML = 'See More';
       btnHide.style.display = "none";

    }

    console.log("hellio")
 }
 
 function showAbout(){
    let hideA = document.getElementById('hide-about');
    let btn = document.getElementById('h-about')

    if(hideA.style.display!="block"){
       hideA.style.display="block";
       btn.innerHTML="See Less About ";
    }
    else{
       hideA.style.display="none";
       btn.innerHTML="See More About";
    }
 }