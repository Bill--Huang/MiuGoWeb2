jQuery(document).ready(function ($) {
	


	// Projects.html Slider Ani
	ProjectSliderManager.init(false);
	$("#slider-button-container").click(function(){
		ProjectSliderManager.SliderButtonEvent();
	});
	
	// Project.html Tab Ani
	$(".category-tab-button").click(function(){
		ProjectTabManager.TabButtonEvent($(this).attr("content"));
	});
});