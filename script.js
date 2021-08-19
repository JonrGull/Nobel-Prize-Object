"use strict";
// Please don't delete the 'use strict' line above

// Create and append title
const newTitle = document.createElement("h1");
document.body.appendChild(newTitle);
newTitle.textContent = "Nobel Prize Winners";

let lineBreak = document.createElement("br");
document.body.appendChild(lineBreak);

//Loop inside loop so it takes it one at a time instead of doing them all and moving on to the next object.
// Years
for (let i = 0; i < nobels.prizes.length; i++) {
  if (nobels.prizes[i] != undefined) {
    let h2Years = document.createElement("h2");
    h2Years.innerText = nobels.prizes[i].year;
    document.body.appendChild(h2Years);

    // Categories

    let h3Categories = document.createElement("h3");
    h3Categories.innerText = nobels.prizes[i].category;
    document.body.appendChild(h3Categories);

    //Overall Motivations:
    let h4OverMotivations = document.createElement("h4");
    h4OverMotivations.innerText = `Overall motivation: ${nobels.prizes[i].overallMotivation}`;
    //There are only 7 total.
    //Shortcut if statement
    nobels.prizes[i].overallMotivation != undefined
      ? document.body.appendChild(h4OverMotivations)
      : null;

    // ID, names, motivation, shares
    for (let k = 0; k < nobels.prizes[i].laureates.length; k++) {
      //console.log(nobels.prizes[i].laureates);
      let innerLaureates = document.createElement("p");
      let innerLaureatesShort = nobels.prizes[i].laureates[k];

      // checks if object has a motivation property
      if (innerLaureatesShort.motivation != undefined) {
        innerLaureates.innerText = `ID: ${innerLaureatesShort.id} - ${innerLaureatesShort.motivation} - ${innerLaureatesShort.firstname} ${innerLaureatesShort.surname}  (Share: ${innerLaureatesShort.share})`;
      } else {
        innerLaureates.innerText = `ID: ${innerLaureatesShort.id} - ${innerLaureatesShort.firstname} ${innerLaureatesShort.surname}  (Share: ${innerLaureatesShort.share})`;
      }
      document.body.appendChild(innerLaureates);
    }
  }
}
