$(document).ready(()=>{

$('.shape').on('mouseenter', function(event) {
	$(event.currentTarget).toggleClass('highlight');
});

$('.shape.small').on('click', e => {
	$(e.currentTarget).hide();
});

$('.shape.medium').on('click', e => {
	$(e.currentTarget)
		.removeClass('medium')
		.addClass('small');
});

$('.shape.large').on('click', e => {
	$(e.currentTarget)
		.removeClass('large')
		.addClass('medium');
});


});// Bump