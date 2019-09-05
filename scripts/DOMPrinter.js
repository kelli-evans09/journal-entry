const domPrinter = {

// Method that accepts an array of journal objects and prints them to the DOM
printEntriesToDOM: arrayOfEntriesParam => {
    // Grab a reference to the output container
    document.querySelector("#entry-log").innerHTML = "";
    // Loop through the array of journal entries
    arrayOfEntriesParam.forEach(singleObject => {
      // For each entry, print a p tag with the entry to the DOM
      document.querySelector("#entry-log").innerHTML += `
          <br>
          <div id="output-div">
              <h2>${singleObject.date}</h2>
              <h3>Concepts covered: ${singleObject.concept}</h3>
              <h3>My mood: ${singleObject.mood}</h3>
              <h3>Journal Entry:</h3><h4>${singleObject.entry}</h4>
              <button id="delete-student-${singleObject.id}">Delete</button>
            </div>`;
    });
  }

}

export default domPrinter;