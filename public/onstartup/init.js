/**
 * Handles all of the code that runs on startup 
*/
this.sysPopupOn = false;

// Window manager
document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 's') {
        if (sysPopupOn) {
            event.preventDefault()
            return;
        }
        event.preventDefault()
        let elm = document.createElement("div")
        let appSearch = document.createElement("input")
        elm.style.width = "30%"
        elm.style.border = "0.2rem solid blue";
        elm.style.borderRadius = "0.5rem";
        elm.style.height = "25%"

        elm.classList.add("popup")

        appSearch.style.border = "0.2rem solid black"
        appSearch.style.padding = "0.5rem"
        appSearch.style.color = "black"
        appSearch.style.borderRadius = "0.5rem"
        appSearch.style.width = "90%"
        
        appSearch.style.marginTop = "5%";
        appSearch.style.marginLeft = "5%";
        appSearch.style.marginRight = "5%";
        appSearch.placeholder = "Search for an app..."
        elm.appendChild(appSearch)
        document.body.appendChild(elm)
        appSearch.focus()
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


