var popupLogin = document.getElementById("popupL");
var popupRegister = document.getElementById("popupR");

// document.getElementById("#login").addEventListener("click",()=>{
//     popupLogin.style.display = "flex";
// })

function poplogin(){
    popupRegister.style.display = "none";
    popupLogin.style.display = "flex";
}

function popRegister(){
    popupLogin.style.display = "none"; 
    popupRegister.style.display = "flex";
}

function closse
(){
    popupLogin.style.display = "none";
    popupRegister.style.display = "none";
}