function boxshow() {
    let box = document.getElementById('h-box');
    let btn = document.getElementById('btn');

    if (box.style.display != "flex") {
       box.style.display = "flex";
       btn.innerHTML = 'See less';
     
    }
    else {
       box.style.display = "none";
       btn.innerHTML = 'See More';
       

    }

    console.log("hellio")
 }
 
 function showAbout(){
   let hideA = document.getElementById('hide-about');
    let btn = document.getElementById('h-about')

    if(hideA.style.display!="block"){
       hideA.style.display="block";
       btn.style.display="none";
    }
   
    
 }

 let list = document.getElementById('lists');
 let btn = document.getElementById('bars');
 let xbar = document.getElementById('x-bars');
  
 xbar.style.display = 'none';

 function change(){
  btn.style.display = "none";
  list.style.display="block";
  
  xbar.style.display = 'block';
   
 }

 function xchange(){
   btn.style.display = "block";
   list.style.display="none";
  
   xbar.style.display = 'none';
 }