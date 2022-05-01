!function e(o, r, n) {
    function a(l, t) {
        if (!r[l]) {
            if (!o[l]) {
                var s = "function" == typeof require && require;
                if (!t && s) return s(l, !0);
                if (i) return i(l, !0);
                var c = new Error("Cannot find module '" + l + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var d = r[l] = { exports: {} };
            o[l][0].call(d.exports,
                function(e) {
                    var r = o[l][1][e];
                    return a(r ? r : e)
                },
                d,
                d.exports,
                e,
                o,
                r,
                n)
        }
        return r[l].exports
    }

    for (var i = "function" == typeof require && require, l = 0; l < n.length; l++) a(n[l]);
    return a
}({
        1: [
            function(e, o, r) {
                !function() {
                    "use strict";
                    $(document).ready(function() {
                        $(window).bind("scroll",
                            function() {
                                var e = 150;
                                $(window).scrollTop() > e
                                    ? $(".header").addClass("header-fixed")
                                    : $(".header").removeClass("header-fixed")
                            }), $(".mobile-nav-handler").click(function(e) {
                            $(".mobile-nav").toggleClass("mobile-nav--open"), $(".header").toggleClass("header--hide"),
                                $("body").toggleClass("no-scroll"), $("#toggle-nav").toggleClass("active")
                        }), $(".nav-link").click(function(e) {
                            $(".mobile-nav").removeClass("mobile-nav--open"), $(".header").removeClass("header--hide"),
                                $("body").removeClass("no-scroll"), $("#toggle-nav").removeClass("active")
                        })
                    })
                }()
            }, {}
        ]
    },
    {},
    [1]);
    
    
function showModal(name){
    console.log(name);
    let overlay = document.getElementById("overlay"); 
    let hdivs = document.getElementsByClassName("hidden-div");
    console.log(overlay);
    overlay.style.display="inline";
    overlay.classList.add("overlay-div");
    switch(name){
        case 'Vehicles':
            for (let i = 0; i < hdivs.length; i++) {
                hdivs[i].classList.add("div-hidden");
            }
            let vehiclesDiv = document.getElementById("hdiv-vehicles"); 
            let vehiclesNavOption = document.getElementById("nav-Vehicles");
            vehiclesNavOption.classList.add('nav-link-active');
            console.log(vehiclesNavOption);
            vehiclesDiv.classList.remove("div-hidden");
            
            break;
        case 'Shop':
            for (let i = 0; i < hdivs.length; i++) {
                hdivs[i].classList.add("div-hidden");
            }
            let shopDiv = document.getElementById("hdiv-shop"); 
            shopDiv.classList.remove("div-hidden");
            break;
        case 'Fleet':
            for (let i = 0; i < hdivs.length; i++) {
                hdivs[i].classList.add("div-hidden");
            }
            let fleetDiv = document.getElementById("hdiv-fleet"); 
            fleetDiv.classList.remove("div-hidden");
            break;
        case 'Engineering':
            for (let i = 0; i < hdivs.length; i++) {
                hdivs[i].classList.add("div-hidden");
            }
            let engineeringDiv = document.getElementById("hdiv-engineering"); 
            engineeringDiv.classList.remove("div-hidden");
            break;
        case 'About Ford':
            for (let i = 0; i < hdivs.length; i++) {
                hdivs[i].classList.add("div-hidden");
            }
            let aboutFordDiv = document.getElementById("hdiv-aboutFord"); 
            aboutFordDiv.classList.remove("div-hidden");
            break;
        case 'Owner':
            for (let i = 0; i < hdivs.length; i++) {
                hdivs[i].classList.add("div-hidden");
            }
            let ownerDiv = document.getElementById("hdiv-owner"); 
            ownerDiv.classList.remove("div-hidden");
            break;
    }
} 

function hideOverlay(){
    let overlay = document.getElementById("overlay"); 
    let hdivs = document.getElementsByClassName("hidden-div"); 
    for (let i = 0; i < hdivs.length; i++) {
        hdivs[i].classList.add("div-hidden");
    }
    overlay.classList.add("overlay-hidden");
    overlay.classList.remove("overlay-div");
    
}
let slideIndex = 0;
let mLeft = 0;
let timeSlide = 3000;
//showSlides(slideIndex);
showSlides();
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n = null) {
  let slides = document.getElementsByClassName("slides");
  let btns = document.getElementsByClassName("btns"); 
  let img1 = document.getElementsByClassName("img1");
  if(n == null){
    img1[0].style.marginLeft = mLeft+"%";
    switch(mLeft){
        case 0:
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-active");  
            }
            let btn1 = document.getElementsByClassName("btn1"); 
            btn1[0].classList.add("btn-active");
            break;
        case -12.5:
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-active");  
            }
            let btn2 = document.getElementsByClassName("btn2"); 
            btn2[0].classList.add("btn-active");
            break;
        case -25:
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-active");  
            }
            let btn3 = document.getElementsByClassName("btn3"); 
            btn3[0].classList.add("btn-active");
            break;
        case -37.5:
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-active");  
            }
            let btn4 = document.getElementsByClassName("btn4"); 
            btn4[0].classList.add("btn-active");
            break;
        case -50:
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-active");  
            }
            let btn5 = document.getElementsByClassName("btn5"); 
            btn5[0].classList.add("btn-active");
            break;
        case -62.5:
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-active");  
            }
            let btn6 = document.getElementsByClassName("btn6"); 
            btn6[0].classList.add("btn-active");
            break;
        case -75:
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-active");  
            }
            let btn7 = document.getElementsByClassName("btn7"); 
            btn7[0].classList.add("btn-active");
            break;
        case -87.5:
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-active");  
            }
            let btn8 = document.getElementsByClassName("btn8"); 
            btn8[0].classList.add("btn-active");
            break;
        case 12.5:
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("btn-active");  
            }
            let btn01 = document.getElementsByClassName("btn01"); 
            btn01[0].classList.add("btn-active");
            break;
    }
    if(mLeft == -87.5){
        //img1[0].style.transition = "0s";
        mLeft = 12.5;
    }
    
    mLeft -= 12.5;
    setTimeout(showSlides, timeSlide);
    
  }else{
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
  }
}

showVehiclesNavbar();
showVehicles();

function showVehicles(n = null){
    let divs = document.getElementsByClassName("vehicles-list-div");
    let navOptions = document.getElementsByClassName("nav-option");
    if(n == null){
       for (let i = 0; i < divs.length; i++) {
           if(i != 0){
               divs[i].style.display = "none";
               navOptions[i].classList.remove("nav-option-active");
           }
        } 
    }
    else
    {
        switch (n){
            case 1:
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none"; 
                    navOptions[i].classList.remove("nav-option-active");
                    let option = document.getElementById("n1");
                    option.classList.add("nav-option-active");
                    let div = document.getElementById("1");
                    div.style.display = "flex";
                }
                break;
            case 2:
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none"; 
                    navOptions[i].classList.remove("nav-option-active");
                    let option = document.getElementById("n2");
                    option.classList.add("nav-option-active");
                    let div = document.getElementById("2");
                    div.style.display = "flex";
                }
                break;
            case 3:
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none"; 
                    navOptions[i].classList.remove("nav-option-active");
                    let option = document.getElementById("n3");
                    option.classList.add("nav-option-active");
                    let div = document.getElementById("3");
                    div.style.display = "flex";
                }
                break;
            case 4:
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none";
                    navOptions[i].classList.remove("nav-option-active");
                    let option = document.getElementById("n4");
                    option.classList.add("nav-option-active");
                    let div = document.getElementById("4");
                    div.style.display = "flex";
                }
                break;
            case 5:
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none";
                    navOptions[i].classList.remove("nav-option-active");
                    let option = document.getElementById("n5");
                    option.classList.add("nav-option-active");
                    let div = document.getElementById("5");
                    div.style.display = "flex";
                }
                break;
            case 6:
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none";
                    navOptions[i].classList.remove("nav-option-active");
                    let option = document.getElementById("n6");
                    option.classList.add("nav-option-active");
                    let div = document.getElementById("6");
                    div.style.display = "flex";
                }
                break;
            case 7:
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none";
                    navOptions[i].classList.remove("nav-option-active");
                    let option = document.getElementById("n7");
                    option.classList.add("nav-option-active");
                    let div = document.getElementById("7");
                    div.style.display = "flex";
                }
                break;
            default:
                console.log("default");
                break;
            
        }
    }
}

function showVehiclesNavbar(n = null){
    let divs = document.getElementsByClassName("vehicles-list-div-navbar");
    let navOptions = document.getElementsByClassName("nav-option-navbar");
    if(n == null){
       for (let i = 0; i < divs.length; i++) {
           if(i != 0){
               divs[i].style.display = "none";
               navOptions[i].classList.remove("nav-option-active-navbar");
           }
        } 
    }
    else
    {
        switch (n){
            case "2-navbar":
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none"; 
                    navOptions[i].classList.remove("nav-option-active-navbar");
                    let option = document.getElementById("n2-navbar");
                    option.classList.add("nav-option-active-navbar");
                    let div = document.getElementById("2-navbar");
                    div.style.display = "flex";
                }
                break;
            case '3-navbar':
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none"; 
                    navOptions[i].classList.remove("nav-option-active-navbar");
                    let option = document.getElementById("n3-navbar");
                    option.classList.add("nav-option-active-navbar");
                    let div = document.getElementById("3-navbar");
                    div.style.display = "flex";
                }
                break;
            case '4-navbar':
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none";
                    navOptions[i].classList.remove("nav-option-active-navbar");
                    let option = document.getElementById("n4-navbar");
                    option.classList.add("nav-option-active-navbar");
                    let div = document.getElementById("4-navbar");
                    div.style.display = "flex";
                }
                break;
            case '5-navbar':
                console.log(n);
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.display = "none";
                    navOptions[i].classList.remove("nav-option-active-navbar");
                    let option = document.getElementById("n5-navbar");
                    option.classList.add("nav-option-active-navbar");
                    let div = document.getElementById("5-navbar");
                    div.style.display = "flex";
                }
                break;
            default:
                console.log("default");
                break;
            
        }
    }
}