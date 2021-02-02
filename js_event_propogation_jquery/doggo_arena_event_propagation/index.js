function eventLogger(event){
    const {currentTarget, eventPhase}=event;
    // console.log(event);
    // console.log('Current Target:', event.currentTarget);
            // 👆🏻The `currentTarget` property refers to the node that
            // calls the `addEventListener` method. In other words,
            // it's the listening node. 
// console.log('Event Target:', event.target);
            //👆🏻 The `target` property refers to the node that
            // orginally triggered the event. In the case of
            // "click" event, it's the node where the cursor
            // was located at the time it happened.
    const {id, tagName,className}=currentTarget;

    if(currentTarget.matches('#toxic-tim')){
        // Use the .stopPropagation() to prevent and event from
      // triggering listeners that happen after this one.
        event.stopPropagation();
        console.log('hi!')
    }
    // The event object has a property, eventPhase, which
    // holds an integer that corresponds to the current
    // phase of the event as follows:
    // AT_TARGET : 2
    // BUBBLING_PHASE : 3
    // CAPTURING_PHASE : 1
    // NONE : 0
    const phases={
        "1":"Capturing",
        "2":"At Target",
        "3":"Bubbling",
        "0":"None"
    }
    console.log(`${tagName}- #${id}-${className} Phase:${phases[eventPhase]}`);
}

document.querySelectorAll("*").forEach(node=>{
        
    // By default, event listeners trigger only on the bubbling phase

    node.addEventListener('click',eventLogger);
    // Events
//  .addEventListener is HOF which takes first argument as an event fired and the second argument is a CB function that acts listner to an event. This works only with a node.


        // <node>.addEventListener(<event-name>, <listener-callback>)
        // The method allows us to react with a callback to
        // events that occur somewhere in the browser.

        // <event-name> arg. is a string that corresponds to the name
        // of an event. For a list possible events, go to:
        // https://developer.mozilla.org/en-US/docs/Web/Events

        // <listener-callback> arg. is a function named "listener"
        // that is called when the event is triggered. Much like
        // setTimeout or setInteval, it is asynchronous.
    node.addEventListener('click',eventLogger,true);
    // Capturing👆🏻:
    // Optionally, they can be made to trigger on the capturing
    // phase. To do this, set a third argument to .addEventListener
    // of `true` as shown below:
})