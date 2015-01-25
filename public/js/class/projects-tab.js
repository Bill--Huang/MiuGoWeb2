var ProjectTabManager = {
	totalTabNum : 4,

	init : function() {
		// do nothing
	},

	TabButtonEvent : function(index) {
		ProjectTabManager.ChangeTabPage(index);
	},

	ChangeTabPage : function(index) {
		$(".category-tab-button").each(function(i){
			$(this).removeClass("active");
			if(i == index) {
				$(this).addClass("active");
			}
		});

		$("#categories-pages-list > li").each(function(i){
			$(this).addClass("hide");
			if(i == index) {
				$(this).removeClass("hide");
			}
		});

	}
};