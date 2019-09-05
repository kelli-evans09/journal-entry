import apiManager from "./apiManager.js";
import domPrinter from "./DOMPrinter.js";

// When the page loads, fetch all the entries from your json-server API
apiManager.getAllEntries().then(parsedEntries => {
    domPrinter.printEntriesToDOM(parsedEntries);
});

// fetch("http://localhost:8088/journals")
//   .then(response => response.json())
//   .then(parsedEntries => {
//     // When the response comes back, send them into the printToDOM function
//     printEntriesToDOM(parsedEntries);
//   });

//   *******************CLICK EVENT FOR SUBMIT BUTTON*******************

//  Get a reference to the submit button
const submitButton = document.querySelector("#record-journal-entry");
console.log(submitButton);

  // Add event listener on submit button
submitButton.addEventListener("click", function() {
// Inside the click event listener, use document.querySelector().value to capture what the user typed into the text input.
  const dateValue = document.querySelector("#journalDate").value;
  const conceptsValue = document.querySelector("#conceptsCovered").value;
  const journalEntryValue = document.querySelector("#journalEntry").value;
  const moodValue = document.querySelector("#mood-select").value;
  //    console.log(dateValue, conceptsValue, journalEntryValue, moodValue)

  // Convert the input to an object that we'll send to json-server
  const newJournalEntryObject = {
    date: dateValue,
    concept: conceptsValue,
    mood: moodValue,
    entry: journalEntryValue
  };
  console.log(newJournalEntryObject);



//   // POST  the journal object to json-server
apiManager.postOneEntry(newJournalEntryObject)
.then(apiManager.getAllEntries)
.then(parsedEntries => {
    domPrinter.printEntriesToDOM(parsedEntries);
})
});

// ------- CLICK EVENT FOR DELETE BUTTONS ----------//
// Add an event listener to the body element because the delete buttons are loaded dynamically-- they don't exist on page load!
document.querySelector("body").addEventListener("click", () => {
    // If the user clicks on a delete button, do some stuff
    if (event.target.id.includes("delete-student")) {
      // get the unique id of the person you want to delete
      // remember that we gave our delete buttons id attributes of delete-student-uniqueId
      const wordArray = event.target.id.split("-");
      const idOfThingWeWantToDelete = wordArray[2];
      console.log(idOfThingWeWantToDelete);
  
      // Make a DELETE request to our json-server
      apiManager.deleteOneStudent(idOfThingWeWantToDelete).then(() => {
          // Once the delete is completed, get all the students-- we need to "refresh" the page (kind of)
        apiManager.getAllStudents()
        .then(parsedStudents => {
            // When the students come back, print them to the DOM again
          domPrinter.printStudentsToDOM(parsedStudents);
        });
      });
    }
  });


//   // POST  the journal object to json-server
//   fetch("http://localhost:8088/journals", {
//     // Replace "url" with your API's URL
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newJournalEntryObject)
//   }).then(() => {
//     // When the POST is complete, we need to refresh the page. GET all of the entries, including the new one.
//     fetch("http://localhost:8088/journals")
//       .then(response => response.json())
//       .then(parsedEntries => {
//         // Once the entries have come back, print them to the DOM
//         printEntriesToDOM(parsedEntries);
//       });
//   });
