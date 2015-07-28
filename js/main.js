$(document).ready(function() {

	$('.rotator').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000
	});

	$(".news").mCustomScrollbar({
		theme:"dark",
		autoDraggerLength: false,
		scrollInertia: 100,
		mouseWheel:{enable: false}
	});
});