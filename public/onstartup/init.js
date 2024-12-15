/**
 * Handles all of the code that runs on startup 
*/
import * as fslib from "/lib/idb_lib.js";

var sysPopupOn = false;

// Window manager
document.addEventListener('keydown', async function(event) {
    if (event.altKey && event.key === 's') {
        if (sysPopupOn) {
            event.preventDefault()
            return;
        }
        event.preventDefault()
        let elm = document.createElement("div")
        elm.style.width = "30%"
        elm.style.height = "fit-content"
        elm.style.border = "0.2rem solid blue";
        elm.style.borderRadius = "0.5rem";

        elm.classList.add("popup")
        let bin = JSON.parse(await fslib.getFS()).bin

        bin.forEach(function(app) {
            let btn = document.createElement("button") 
            
            btn.style.margin = "1rem"
            btn.style.border = "none";
            btn.style.background = "none";
            btn.style.color = "white";
            btn.style.backgroundImage = `url('${app.img}')`
            btn.style.backgroundSize = "cover";
            btn.style.height = "10vh"
            btn.style.width = "10vh";
            btn.style.setProperty('pointer-events', 'auto', 'important');
            btn.className = "appImage"
            
            btn.addEventListener('click', function() {
                event.preventDefault()
                alert(1)
            })
            elm.appendChild(btn)    

        }) 

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


