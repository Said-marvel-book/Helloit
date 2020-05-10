(function(){
	var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	$.getJSON(flickerAPI, {
		tags: "toys",
		tagmode: "any",
		format: "json"
	})
	.done(function(data){
		$.each(data.items, function(i, item){
			$("<img>").attr("src", item.media.m).appendTo("#images");
			if (i === 80){
				return false;
			}
		});
	});
})();
(function(){
	var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	$.getJSON(flickerAPI, {
		tags: "school",
		tagmode: "any",
		format: "json"
	})
	.done(function(data){
		$.each(data.items, function(i, item){
			$("<img>").attr("src", item.media.m).appendTo("#images2");
			if (i === 80){
				return false;
			}
		});
	});
})();