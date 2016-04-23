/**
 * Created by munni on 4/22/16.
 */
window.onload = function(){
    setTimeout(function(){
        move = function() {
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }
        }
    },0);
}