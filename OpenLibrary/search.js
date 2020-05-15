const isbnForm = document.querySelector(".isbn");
const isbnInput = isbnForm.querySelector("input");
const body = document.querySelector("body");

async function showISBNData(){
    const isbn = isbnInput.value;
    fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        window.alert("hello");
    })
}


