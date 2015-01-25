var ProjectSliderManager = {
	totalSliderPageNum : 4,
	visibleSliderPageNum : 3,
	currentSliderPageIndex : 0,

	isAutoPlay : false,
	currentInterval : null,

	init : function(isAuto) {
		ProjectSliderManager.isAutoPlay = isAuto;
		if(ProjectSliderManager.isAutoPlay) {
			// auto play
			ProjectSliderManager.currentInterval = setInterval("ProjectSliderManager.SlideToNextPage()", 3000);
		}
	},

	SliderButtonEvent : function() {
		if(ProjectSliderManager.isAutoPlay) {
			clearInterval(ProjectSliderManager.currentInterval);
			ProjectSliderManager.currentInterval = setInterval("ProjectSliderManager.SlideToNextPage()", 3000);
		}
		ProjectSliderManager.SlideToNextPage();
	},

	SlideToNextPage : function() {
		var oldIndex = ProjectSliderManager.currentSliderPageIndex;
		ProjectSliderManager.currentSliderPageIndex = (ProjectSliderManager.currentSliderPageIndex + 1) % ProjectSliderManager.totalSliderPageNum;
		$("#slider-main-img").attr("src", "resource/projects/slider/projects-slider-main-" + ProjectSliderManager.currentSliderPageIndex + ".jpg");

		$("#slider-sub-items-list li").each(function(index, element){
			// alert(index);
			var imgIndex = (oldIndex + ProjectSliderManager.totalSliderPageNum - index) % ProjectSliderManager.totalSliderPageNum;
			$(this).find("img").attr("src", "resource/projects/slider/projects-slider-sub-" + imgIndex + ".jpg");
		});
	}
};