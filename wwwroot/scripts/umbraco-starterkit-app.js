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
  //let dots = document.getElementsByClassName("dot");
  if(n == null){
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "inline";
    setTimeout(showSlides, 6000);
  }else{
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for (i = 0; i < dots.length; i++) {
        //dots[i].className = dots[i].className.replace(" active", "");
    //}
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
  }
}

showVehicles();

function showVehicles(n = null){
    let divs = document.getElementsByClassName("vehicles-list-div");
    if(n == null){
       for (let i = 0; i < divs.length; i++) {
           if(i != 0){
               divs[i].style.display = "none";
           }
        } 
    }
    else
    {
        console.log("Quiero ver anime jeje " + n);
        for (let i = 0; i < divs.length; i++) {
           if(i != n+1){
               divs[i].style.display = "none";
           }else{
               divs[n+1].style.display = "flex";
           }
        } 
    }
}