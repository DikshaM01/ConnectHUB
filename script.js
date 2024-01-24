
var settingsmenu=document.querySelector(".settings");
var darkbtn=document.getElementById("dark-btn")
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-height" )
}
darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
