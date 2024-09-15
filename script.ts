const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement/**import or get button by its id */

const skills=document.getElementById("skills") as HTMLElement/**importing skills section by its id */

toggleButton.addEventListener("click", () => {
    // Check if the 'skills' section is currently hidden (display is set to 'none')
    if (skills.style.display === "none") {
        // If the 'skills' section is hidden, set its display to 'block' to make it visible
        skills.style.display = "block";
    } else {
        // If the 'skills' section is visible, set its display to 'none' to hide it
        skills.style.display = "none";
    }
});


/**Explanation:
toggleButton.addEventListener("click", () => {...}): This attaches an event listener to the toggleButton element, listening for a click event. When the user clicks the button, the code inside the arrow function gets executed.

if (skills.style.display === "none"): This condition checks whether the skills section is currently hidden (i.e., if the display property is set to "none"). If it is hidden:

skills.style.display = "block";: This line makes the skills section visible by changing its display property to "block", which displays the element normally.
else { skills.style.display = "none"; }: If the skills section is visible (i.e., display is not "none"), this block hides it by setting skills.style.display to "none".

Event Listener Behavior:
The event listener waits for the user to click the toggleButton. When clicked, it triggers the function, which checks the current visibility of the skills section and either shows or hides it accordingly.





 */