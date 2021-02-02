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

// Lab 2 

// Prepend a row to the table with the columns 0 and -
$('tbody').prepend('<tr><td>0</td><td>-</td></tr>');

// When the form's submit button is clicked, append the text input's current value to the form message.
$('#form-1').submit(function(event) {
    event.preventDefault();

  $('#form-message').append(
    $(this)
      .find('input[type=text]')
      .val()
  );
});

// When Button 1 is clicked, toggle the green container.
$('#button-1').on('click', e => {
  $('#green-container').toggle();
});

// When Button 2 is clicked, fade the Button Message out
$('#button-2').on('click', e => {
  $('#button-message').fadeOut();
});

// When Button 3 is clicked, fade the Button Message back in.
$('#button-3').on('click', e => {
  $('#button-message').fadeIn();
});

// When Button 4 is clicked, slide the green container up.
$('#button-4').on('click', e => {
  $('#green-container').slideUp();
});

// Lab 3

// When the g key is pressed, toggle all gray shapes.

$('body').on('keydown', event => {
	const { key } = event;
	if (key === 'g') {
		$('.shape.grey').toggle();
	} else if (key === ' ') {
		// When the spacebar key is pressed, append a small blue circle to the green container.
		$('#green-container').append('<div class="small blue circle shape"></div>');
	}
});

// Make the Form Message show the number of characters remaining
// (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").

$('#form-1 > input[type=text]').on('input', function(event) {
	let remaining = 14 - $(this).val().length;
	$('#form-message').text(`${remaining} characters remaining`);
});

// actually add the form validation, if you wish

$('#form-1 > input[type=text]').attr('maxlength', 14);

});// Bump