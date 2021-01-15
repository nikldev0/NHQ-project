const api = {
  base: "https://nhqwords.azurewebsites.net/api/GenerateNoun/?nounType=",
};

const selectBox = document.getElementById("select-box");
const output = document.getElementById("output");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", setQuery);

function setQuery() {
  getResultsfromAPI(selectBox.value);
}

function getResultsfromAPI(query) {
  if (query !== "") {
    getNamesAPI(query)
      .then(displayName)
      .catch((err) => alert("Error received"));
  }
}

// api call

async function getNamesAPI(query) {
  //Query the API and return as JSON
  let data = await (await fetch(`${api.base}${query}`)).json();
  return data;
}

// Output selection
function displayName(data) {
  output.innerHTML = data.noun;
}
