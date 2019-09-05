const apiManager = {
// Method to get all entries
getAllEntries: () => {
    return fetch("http://localhost:8088/journals").then(response =>
      response.json()
    );
  },

  // Method to post one entry
  postOneEntry: singleEntryObject =>
    fetch("http://localhost:8088/journals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(singleEntryObject)
    }),
    deleteOneEntry: (id) => fetch(`http://localhost:8088/journals/${id}`, {
        method: "DELETE"
      })
};

export default apiManager;