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
    
    
let slideIndex = 0;
let mLeft = 0;
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
  let img1 = document.getElementsByClassName("img1");
  console.log(img1[0]);
  if(n == null){
    console.log(img1);
    img1[0].style.marginLeft = mLeft+"%";
    if(mLeft == -87.5){
        //img1[0].style.transition = "0s";
        mLeft = 12.5;
    }
    
    mLeft -= 12.5;
    setTimeout(showSlides, 3000);
    
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
        console.log("Quiero ver anime jejeddddd " + n);
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