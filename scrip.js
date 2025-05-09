let myDictionary =[];

function add() {
  myDictionary.push(document.getElementById("addWord").value);  
  console.log(myDictionary);
}

function searchWord() {
  if (myDictionary.find(el => el == document.getElementById("addWord").value) == undefined) {
    document.getElementById('Search result').innerHTML = "Cuvantul nu exista in dictionar";
  } else {
    document.getElementById('Search result').innerHTML = "Cuvantul exista in dictionar"
  }
}
