
// Selecting nodes:

// <node>.querySelector - will return the first node that matches the given ccs selector
const div = document.querySelector('div');

// Selecting multiple nodes

// <node>.querySelectorAll - will return a NodeList of all the nodes that match the given css selector

// A NodeList is an array like structure.
// with a NodeList you can use methods like .forEach that loop through all nodes within the list

// All the nodes within a NodeList are a Node that you would get back from .querySelector -> which  means you can call .querySelector on it
const allDivs = document.querySelectorAll('div');

allDivs.forEach((div) => {
  console.log(div)
  // console.log(div.querySelector('li'))
})

const michaelAndLarry = document.querySelectorAll('#moneybags-michael, #larry-the-lion')

const teamTealDoggosButNotTheFirst = document.querySelectorAll('.team.teal .doggo:not(:first-child')
// get all elements with both team and teal classes (.team.teal)... then within those elements get all elements with doggo(.doggo) class that are not the "first-child" (:not-first:child)

// css selectors that use : are called pseudo-class https://www.w3schools.com/css/css_pseudo_classes.asp

const secondDoggoInTeams = document.querySelectorAll('.team .doggo:nth-child(2)')

// Navigating nodes

const ToxicTim = document.querySelector('#toxic-tim');

// Every dom node has a bunch of methods and properties.
// Some properties can be used to navigate from a given node

// nextElementSibling - returns the next sibling of a given node
ToxicTim.nextElementSibling // returns Nina The Ninja

// previousElementSibling - returns previous sibling of given node
ToxicTim.previousElementSibling // returns null because there is no previous sibling (in relation to ToxicTim)

// parentElement - returns the parent of a given node
ToxicTim.parentElement // returns roster


// children - returns an array like structure of all of the selected node's children
// It returns HTMLCollection: Is an array like structure of nodes but unlike a NodeList it does not have methods like forEach

ToxicTim.parentElement.children //
// HTMLCollection(3) [div#toxic-tim.doggo.fighter, div#bumble-bertha.doggo.fighter, div#nina-the-ninja.doggo.fighter, toxic-tim: div#toxic-tim.doggo.fighter, bumble-bertha: div#bumble-bertha.doggo.fighter, nina-the-ninja: div#nina-the-ninja.doggo.fighter]

// <node>.matches returns true if the selected node matches a given css selector


// Manipulating nodes

// <node>.style - allows you to set inline styles for a selected node
ToxicTim.style.border = '5px solid yellow'

// the style attibute only refers to inline styles. If you want the actual computed values of an element use the global method getComputedStyle

// innerHTML - returns the content of a node. This property is LIVE meaning if you change it the changes are immediately reflected on the html page
ToxicTim.innerHTML = '<a href="https://google.ca">Link to Google</a>'

// outerHTML - like innerHTML but will return the html of the selected node (not just the content). Also Live!
ToxicTim.outerHTML = '<li>Hello World</li>'

// id & className properties
const BumbleBertha = document.querySelector('#bumble-bertha');
BumbleBertha.id // returns the id of node
BumbleBertha.className // returns the class of node
// These properties are live

// Usually if you're manipulating elements (hiding or animating elemnts) you would attatch or remove classes from them.

// to hide bumble bertha
BumbleBertha.className = BumbleBertha.className + " hidden"

// Because working with classes is done so often there is a helper property that abstracts manipulating classes. Its called classList

// classList
// classList has methods to add or remove single classes from a node

// to add a class to a node
BumbleBertha.classList.add('hidden')
// to remove a class 
BumbleBertha.classList.remove('hidden')

// Lower level api to manipulate Node's attributes
// setAttribute
// getAttribute
// hasAttribute
// removeAttribute

BumbleBertha.getAttribute('id'); // returns the id of node

// Data
BumbleBertha.setAttribute('data-id', '7xz80');
BumbleBertha.getAttribute('data-id');

// attributes that start with data- can be accessed through the <node>.dataset property
// The dataset property is a DOMStringMap which is just a collection of key-value pairs
// if you add keys to dataset then a data- attribute is added to the node

// Removing Nodes
// the method <node>.remove() will delete a node

BumbleBertha.remove() // the node is deleted from the DOM but we still have a reference to it in memory because we've saved it in a constant called BumbleBertha

// Change all the teams background colour to fuchsia
const teams = document.querySelectorAll('.team');

teams.forEach(node => {
  node.style.backgroundColor = 'fuchsia';
})

// 
const doggos = document.querySelectorAll('.doggo');
doggos.forEach(node => {
  node.querySelector('h1').innerText = 'Rob The Slob'
  node.style.backgroundImage = 'url(https://i.pinimg.com/originals/0c/1c/a1/0c1ca1955e2b0c5469ba17da2b1b9b96.jpg)'
})

// Creating Nodes

// the document node has a method .createElement that accepts a type string
// it will create a new node im memory with that type.

const DrillBitDarel = document.createElement('div');
DrillBitDarel.className = 'doggo fighter';
DrillBitDarel.id = 'drill-bit-darel';
DrillBitDarel.style.backgroundImage = 'url(images/drill_bit_darel.jpg)';

const DrillBitDarelTitle = document.createElement('h1');
DrillBitDarelTitle.innerText = 'Drill Bit Darel';

DrillBitDarel.appendChild(DrillBitDarelTitle)

// adding nodes to the DOM
const teamSalmonRoster = document.querySelector('.team.salmon .roster');
teamSalmonRoster.appendChild(DrillBitDarel);

// using insertBefore
// <selected-node>.insertBefore(NEW NODE, Reference Node);
// Reference node should be a child of the selected node

const teamTealRoster = document.querySelector('.team.teal .roster');
const MoneyBagsMichael = teamTealRoster.querySelector('#moneybags-michael');
console.log(MoneyBagsMichael);
teamTealRoster.insertBefore(DrillBitDarel, MoneyBagsMichael); // insert Drill Bit Darel as achild of team teal roster but before MoneyBagsMichael

