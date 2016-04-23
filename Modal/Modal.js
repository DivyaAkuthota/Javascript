/**
 * Created by munni on 4/22/16.
 */

window.onload = function() {
    setTimeout(function(){
        var modal = document.getElementById('myModal');

        var btn = document.getElementById('myBtn');

        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function () {
            modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function () {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    },0);


}

