function getScroll(){
	if (window.pageXOffset){
		return {
			top: window.pageYOffset,
			left: window.pageXOffset
		}
	} else if (document.body.scrollTop){
		return {
			top: document.body.scrollTop,
			left: document.body.scrollLeft
		}
	} else {
		return {
			top: document.documentElement.scrollTop,
			left: document.documentElement.scrollLeft
		}
	}
}
