var toggleButton = document.getElementById("toggle-skills"); /**import or get button by its id */
var skills = document.getElementById("skills"); /**importing skills section by its id */
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") /*this checks if skill section is currently hidden or display none ho ya invisible ho  then*/ {
        skills.style.display = "block"; /**sisplay block means to display skills section instantly*/
    }
    else {
        skills.style.display = "none"; /**means agar skills wala section visible hy toh usko hide krdo */
    }
}); /**add event listener ka kaam hy k yh wait karega k user button par click karay jysy hi user button par click karega yh apna kaam perform karega */
/**jaisy hi user buttton par click karay toh hamara if wala section/block run hojyega */ 
