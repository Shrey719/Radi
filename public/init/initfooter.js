let footer = document.getElementById("footer")
if (localStorage.getItem("pinnedApps") == null) {
     localStorage.setItem("pinnedApps", JSON.stringify(["/settingsapp.js", "/uvapp.js", "/linuxapp.js"]))
} 
let allPinnedApps = JSON.parse(localStorage.getItem("pinnedApps"))