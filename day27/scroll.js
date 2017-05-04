function getScroll(){
	if (window.pageXOffset){
		console.log("11");
		return {
			top: window.pageYOffset,
			left: window.pageXOffset
		}
	} else if (document.body.scrollTop){
		console.log("22");
		return {
			top: document.body.scrollTop,
			left: document.body.scrollLeft
		}
	} else {
		console.log("33");
		return {
			top: document.documentElement.scrollTop,
			left: document.documentElement.scrollLeft
		}
	}
}








