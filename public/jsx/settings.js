// no its not real JSX, im not insane

function renderSettings() {
    document.getElementById("app_container")
    const appContainer = document.getElementById("app_container");
    if (appContainer) {
      appContainer.innerHTML = `
        <style>
            .txtheader {
				margin-left: 1vw;
				margin-top: 2.5vh;
                font-size: 2.5rem;
                font-weight: bold;
                color: white;
				z-index: 2;
            }
			.settingsitem {
				margin-left: 1.5vw;
				color: rgb(200, 200, 200); 
				font-size: 1rem;
				font-weight: bold;
				margin-bottom: 2rem;
				width: 1rem;
				text-decoration: none;
				border: none;
				background-color: transparent;
				z-index: 2;
			}

            body { 
                background-color: rgb(40, 40, 40);
            }
			.current_settings_group {
				height: 80%; 
				z-index: 1;
				width: 80%;
				position: absolute;
				bottom: 0;
				right: 0;
			}
        </style>
        <h1 class="txtheader" id="settingsheader">Settings</h1>
		<button class="settingsitem" style="color: white" onclick="DisplayGeneral()" id='genhead'>General</button><br>
		<div id="current_settings_group" class="current_settings_group">
		</div>
		<button class="settingsitem" onclick="DisplayV86()" id='v86head'>v86</button><br>
		<button class="settingsitem" onclick="DisplayUV()" id='uvhead'>Ultravoilet</button><br>

      `;
	  DisplayGeneral();
    }

}

function DisplayGeneral() {
	document.getElementById('genhead').style.color = 'white';
	document.getElementById('v86head').style.color = 'rgb(200, 200, 200)';
	document.getElementById('uvhead').style.color = 'rgb(200, 200, 200)';
	document.getElementById("current_settings_group").innerHTML = `
    
    <style>
        .subHeader {
			color: white;

        }
    </style>
    <h1 class="subHeader">General</h2>
    <div id="backgroundManager"></div>
	<div id="themeManager"></div>
	<div id="soundManager"></div>
	`
}
function DisplayV86() {
	document.getElementById('v86head').style.color = 'white';
	document.getElementById('uvhead').style.color = 'rgb(200, 200, 200)';
	document.getElementById('genhead').style.color = 'rgb(200, 200, 200)';
	document.getElementById("current_settings_group").innerHTML = `
    
    <style>
        .subHeader {
			color: white;

        }
    </style>
    <h1 class="subHeader">v86</h2>
    <div id="fsManager"></div>
	<div id="osManager"></div>
	<div id="developerModeManager"></div>
	`
}
function DisplayUV() {
	document.getElementById('uvhead').style.color = 'white';
	document.getElementById('v86head').style.color = 'rgb(200, 200, 200)';
	document.getElementById('genhead').style.color = 'rgb(200, 200, 200)';
	document.getElementById("current_settings_group").innerHTML = `
    
    <style>
        .subHeader {
			color: white;

        }
    </style>
    <h1 class="subHeader">Ultravoilet</h2>
    <div id="wispManager"></div>
	<div id="uvconfigManager"></div>
	<div id="epoxyLibcurlManager"></div>
	`
}

