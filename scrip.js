let myDictionary =[];

function add() {
  myDictionary.push(document.getElementById("addWord").value);  
  document.getElementById('Search result').innerHTML = "";
}

function searchWord() {
  if (myDictionary.find(el => el == document.getElementById("addWord").value) == undefined) {
    document.getElementById('Search result').innerHTML = "The word does not exist in the dictionary.";
  } else {
    document.getElementById('Search result').innerHTML = "The word exists in the dictionary.";
  }
}
