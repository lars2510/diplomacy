function createTank(xPos, yPos) {
	var tank = document.createElement("div");
	tank.style.left = 200
	tank.classList.add("tank");
	tank.style.top = (yPos - 16) + 'px';
	tank.style.left = (xPos - 16) + 'px';
	return tank;
}

function appendMapItem(xPos, yPos) {
    var worldmap = document.getElementsByClassName('js_worldmap');
    worldmap[0].appendChild(createTank(xPos, yPos));
}

function getClickPosition(e) {
    var xPos = e.clientX;
    var yPos = e.clientY;
    appendMapItem(xPos, yPos)
}

function init() {
	var worldmap = document.getElementsByClassName('js_worldmap');
	worldmap[0].addEventListener("click", getClickPosition);
}

init();