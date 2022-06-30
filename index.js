
window.onload = function injectfuct(){

  let div = document.createElement('div');
  document.body.appendChild(div);
  div.id = "injectbtn";
  document.getElementById("injectbtn").innerHTML += '<button onclick="topscroll()" id="AscrollBtn" title="auto scroll to top">Top</button>';

};


// seach icon open functions
function openSearch() {
    document.getElementById("searchOverlay").style.height = "100%";
    document.getElementById("closex").style.display = "block";
    document.getElementById("sbar").style.display = "block";
    document.getElementById("sbtn").style.display = "block";
  };


// seach icon close functions
function closeSearch() {
    document.getElementById("searchOverlay").style.height = "0";
    document.getElementById("closex").style.display = "none";
    document.getElementById("sbar").style.display = "none";
    document.getElementById("sbtn").style.display = "none";
  };



window.onscroll = function() {scrollFunctionnav(), scrollFunctionbtn()};

// nav bar functions
function scrollFunctionnav() {

  if(window.scrollY > 0){
    document.querySelector('#navbartop').classList.add('scroll');
    document.getElementById("logo").style.width = "50px";
    
        
  } else{
    document.querySelector('#navbartop').classList.remove('scroll');
    document.getElementById("logo").style.width = "100px";
    
  } 
};

// show the scroll button if user scroll down 30px 
function scrollFunctionbtn(){

  if(window.scrollY > 30){
    document.getElementById("AscrollBtn").style.display = "block";
  }else{
    document.getElementById("AscrollBtn").style.display = "none";
  }

};


// if user click the btn whole page scrolls to top
function topscroll() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//message submit btn function

function alertbox() {
  alert ("You Have Successfully Submitted\nYour Message!")
};