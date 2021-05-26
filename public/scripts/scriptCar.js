let valor = "90";

if(valor == "100%"){
    document.querySelector(".progressKM > div > span").outerHTML = "<span></span>";
    document.querySelector(".progressKM > span").style.cssText = "font-size:0.75rem; color:green";
    document.querySelector(".progressKM > div > div").style.width = valor ;
    document.querySelector(".progressKM > div > span").style.left = valor;


}else{
    document.querySelector(".progressKM > div > div").style.width = valor ;
    document.querySelector(".progressKM > div > span").style.left = valor;
}

