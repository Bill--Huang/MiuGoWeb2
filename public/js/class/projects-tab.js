var ProjectTabManager = {
	totalTabNum : 4,

	init : function() {
		// do nothing
	},

	TabButtonEvent : function(index) {
		ProjectTabManager.ChangeTab(index);
	},

	ChangeTab : function(index) {
		$("#tabs-button-list li").each(function(i){
			$(this).find("a").removeClass("active");
			if(i == index) {
				$(this).find("a").addClass("active");
			}
		});

		$("#tab-page-list > li").each(function(i){
			$(this).addClass("hide");
			if(i == index) {
				$(this).removeClass("hide");
			}
		});

	}
};