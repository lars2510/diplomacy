;(function (){
	function createShip(xPos, yPos) {
		var tank = document.createElement("div");
		var offset = 16;
		tank.classList.add("ship");
		tank.style.top = (yPos - offset) + 'px';
		tank.style.left = (xPos - offset) + 'px';
		return tank;
	}

	function appendMapItem(xPos, yPos) {
	    var worldmap = document.getElementsByClassName('js_worldmap');
	    worldmap[0].appendChild(createShip(xPos, yPos));
	}

	function getClickPosition(e) {
	    appendMapItem(e.clientX, e.clientY)
	}

	function init() {
		var worldmap = document.getElementsByClassName('js_worldmap');
		worldmap[0].addEventListener("click", getClickPosition);
	}
	init();
})();