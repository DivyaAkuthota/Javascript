/**
 * Created by munni on 4/22/16.
 */

window.onload = function() {

    setTimeout(function(){
        openNav = function() {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
        /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
        closeNav = function() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
    },0);
}