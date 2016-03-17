;(function (){

	function addOffset(elem, xPos, yPos) {
		var offset = 16;
		elem.style.top = (yPos - offset) + 'px';
		elem.style.left = (xPos - offset) + 'px';
		return elem;
	}

	function createFlag(flagName) {
		var flag = document.createElement("div");
		flag.classList.add(flagName);
		return flag;
	}

	function appendMapItem(xPos, yPos) {
	    var worldmap = document.getElementsByClassName('js_worldmap');
	    worldmap[0].appendChild(addOffset(createFlag("ship"), xPos, yPos));
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