/**
 * Created by munni on 4/22/16.
 */

'use strict';

var slideIndex = 1;
window.onload = testfunc;

function testfunc(){
    (function test() {
       setTimeout(function(){
           // var slides = document.getElementsByClassName("mySlides");
           // // console.log(document.getElementsByClassName("mySlides"));
           // console.log(slides.length);
           showSlides(slideIndex);
       },0);
        //slides[0].style.display = "block";
    }());


}






    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }


    function showSlides(n) {
        var i;
        var container = document.getElementsByClassName("slideshow-container").length;
        console.log(document);
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

