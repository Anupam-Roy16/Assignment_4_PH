1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById --> Selects a single unique element by its id attribute.
getElementsByClassName--> Selects all elements that have a specific class name.
querySelector---> Selects the first element that matches a specified CSS selector

3. How do you create and insert a new element into the DOM?
   Answer: appendChild() method adds the element as the last child of a parent. document.createElement() method to create a new element node
5. What is Event Bubbling? And how does it work?
6. Answer: Event bubbling is a JavaScript mechanism where an event triggered on a child element propagates upward through
 its parent and ancestor elements in the DOM tree.
It starts at the innermost target element and rises to the document root by default, allowing parent elements to handle events from children

9. What is Event Delegation in JavaScript? Why is it useful?
    
Answer:
Event delegation is a JavaScript design pattern where a single event listener is attached to a parent element to manage events for all its present and future child elements

Improved Performance: Attaching one listener instead of hundreds (e.g., in a large list) significantly reduces memory consumption and CPU overhead.
Handles Dynamic Elements: It automatically works for elements added to the DOM after the initial page load, such as items loaded via AJAX, without needing to reattach listeners.
Simpler Code Maintenance: Centralizing event logic in one parent element makes the codebase cleaner, easier to debug, and simpler to update.
Memory Leak Prevention: It eliminates the need to manually remove listeners when child elements are deleted, reducing the risk of memory

11. What is the difference between preventDefault() and stopPropagation() methods?
The main difference between preventDefault()stopPropagation() is
 whether you are stopping a browser's built-in behavior or the flow of an event through the DOM hierarchy.

    

