jQuery(document).ready(function ($) {
	


	// Projects.html Slider Ani
	ProjectSliderManager.init(false);
	$("#projects-slider-button").click(function(){
		ProjectSliderManager.SliderButtonEvent();
	});

	// Project.html Tab Ani
	$(".tab-button").click(function(){
		ProjectTabManager.TabButtonEvent($(this).attr("content"));
	});
});