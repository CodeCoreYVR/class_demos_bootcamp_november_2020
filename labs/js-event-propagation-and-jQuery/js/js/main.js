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
// Lab 4
$('#form-1').submit(function(e) {
	const color = $('#form-1 > input[type=text]').val();

	// If they enter an invalid color show them an alert message telling them,
	// "Entered color is not a valid option!"
	const validColors = ['red', 'blue', 'black', 'grey'];

	if (!validColors.includes(color)) {
		alert(`Entered colour, "${color}", is not a valid option!`);
	} else {
		// All shapes matching the given color should be removed.
		$(`.shape.${color}`).remove();
	}

	// Clear the input field.
	this.reset(); /* 
		This really clears the entire form, but since the form only has one input,
		it is equivalent.
	*/
	// or
	// $('#form-1 > input[type=text]').val('');
});

// Lab 5

// As you type in the text input, change the Form Message to be the same as what you type.

$('#form-1 > input[type=text]').on('input', function(e) {
	$('#form-message').text($(this).val());
});

// As you type in the text input, change the Form Message to be the REVERSE of what you type.

$('#form-1 > input[type=text]').on('input', function(e) {
	$('#form-message').text(reverse($(this).val()));
});
// Reverses a string
function reverse(string) {
	return string.split('').reverse().join('');
}

//  Set a delegated click handler on the orange container
//  so that red shapes are removed when you click them.

$('#orange-container').on('click', '.shape.red', function() {
	$(this).remove();
});

/* 
This one does NOT work and is NOT a delegated click handler
$('#orange-container .shape.red').on('click', function() {
	$(this).remove();
});
Why do you think that is?
Hint 1: 
Think about what is meant to be achieved by using event delegation;
what use case it is meant to address.
Hint 2:
The following code adds a medium red square to the orange box. 
Run this in the javascript console, and you should see your new red square.
What would you expect to happen when you click on the new red shape?
Next, try actually clicking on it. What happens?
$('#orange-container').append('<div class="shape medium red square"></div>');
*/

});// Bump