/**
 * Handles all of the code that runs on startup 
*/
this.sysPopupOn = false;

// Window manager
document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'd') {
        if (sysPopupOn) {
            return;
        }
        event.preventDefault()
        let elm = document.createElement("div")
        elm.style.width = "20%"
        elm.style.height = "20%"
        elm.classList.add("popup")
        elm.style.backgroundColor = "blue"
        document.body.appendChild(elm)
        sysPopupOn = true;
    }
    if (event.key === 'Escape') {
        if (sysPopupOn) {
            event.preventDefault()
            document.body.removeChild(document.querySelector(".popup"))
            sysPopupOn = false;
        }
    }
});


