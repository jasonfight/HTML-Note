
(function($){
	$.fn.extend({
		"borderColor": function(color){
			var color = color || "red"; 
			return this.css("borderColor", color);
		}
	});
})(jQuery);




