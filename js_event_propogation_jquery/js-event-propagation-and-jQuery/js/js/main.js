// document.addEventListener('DOMContentLoaded',()=>{

$(document).ready(()=>{ // jQuery way of writing DOMContentLoaded

console.log('The page has loaded. feel free to make selections and add events')

// $('*')
// $('p')
// $('.class_name')
// $('#id_name')
// $('p .class_name')

// $('#button-2')
// $('.blue.circle').length
// $('li a').length

// $('a').attr('href','http://nyan.cat');
// $('.blue').removeClass('blue').addClass('red');

// $('a').addClass('highlight')
// $('.circle').removeClass('circle').addClass('diamond')

// $('#green-container .shape, #purple-container .shape').remove();
// From Stas
// $('#green-container').children().remove();


// Toget the html of reset button
// $('#reset').html()
// To get html of all the links
// $('a').map((index,link)=>$(link).html());
// To change the text of reset button
// $('#reset').html('Launch Doggos')

// $('td').parents() // This will  grab parents along with grand parents
// $('td').html('yass')
// .children
// $('tr').children();
// $('tr').children().first().html('first children tr');
// $('tr').children().eq(2).html('This will be the third child');


// const smallBlueDiamond=$('<div class="small blue diamond shape"></div>');
// $('.container').append(smallBlueDiamond)
// $('.container').append($('<div class="small blue diamond shape"></div>'));

// $('ul').prepend('<li><a href="http://nyan.cat">Nyan cat</li>')

// const container=$('<div class="container"></div>');
// $('section').first().prepend(container);
// container.append('<div class="small black circle shape"></div>');
// From Stas
// $('section').first().prepend('<div class="container"></div>').append('<div class="small black circle shape"></div>')
// $('.blue.circle').on('mouseenter',event=>{ console.log('Blue Circle: Go away!')});
// $('.blue.circle').on('mouseleave',event=>{ console.log('Blue Circle: Goodbye!')});
// $('#button-1').on('click', event =>{$('.shape').remove()});


// $('button-2').on('click',event=>{ 
//     const {currentTarget}=event;
//     $(currentTarget).attr('disabled',true);
// });

// $('#button-3').on('click',event=>{$('#button-message').html('Button 3 Clicked')});

$('tr').on('mouseenter', event => { 
    const {currentTarget} = event;
    $(currentTarget).addClass('highlight');
});
$('tr').on('mouseleave', event => { 
    const {currentTarget} = event;
    $(currentTarget).removeClass('highlight');
});



});