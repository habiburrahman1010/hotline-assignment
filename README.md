 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

get element by id select the id (only one specific id).

get element by class name select class name (array like object).

quarry selector select all valid css quarry and show only first element.

quarry selector all select all valid css quarry.



2. How do you create and insert a new element into the DOM?

const paraContainer = document.getElementById('name-container'); //parent

const para = document.createElement('p'); // create new element

para.innerText = newName; 

nameContainer.appendChild(para); // append



3. What is Event Bubbling and how does it work?

event bubbling has three phase capture ,target and bubbling ,at first browser dont't know where clicked browser search the target and finally bubbling. (it goes bottom to uo like bubble).


4. what is Event Delegation in JavaScript? Why is it useful?

event delegation is a system whewe use add event listener in parent node not child.for this code is simple and less use of event listener.



5. What is the difference between preventDefault() and stopPropagation() methods? 

  prevent default use for prevent browser default action and stop propagation is used for preveny bubble.
