const isbnForm = document.querySelector(".isbn");
const isbnInput = isbnForm.querySelector("input");

const body = document.querySelector("body");


function showISBNData(){
    const isbn = isbnInput.value;
    fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(json){
        const idx = 0;
        const key = Object.keys(json)[idx];
        value = json[key]

        const bookInfo = value
        
        const poster = bookInfo.cover.large;
        const title = bookInfo.title;
        const author = bookInfo.authors[0].name;
        const publisher = bookInfo.publishers[0].name;
        const pages = bookInfo.number_of_pages;
        const subjects = bookInfo.subjects[0].name;
        const pubDate = bookInfo.publish_date;
        const weight = bookInfo.weight;
        const borrowable = bookInfo.ebooks[0].availability;
        const preview_url = bookInfo.ebooks[0].preview_url;
        const borrow_url = bookInfo.ebooks[0].borrow_url;

        localStorage.setItem("title",title);
        localStorage.setItem("poster",poster);
        localStorage.setItem("author",author);
        localStorage.setItem("publisher",publisher);
        localStorage.setItem("pages",pages);
        localStorage.setItem("subjects",subjects);
        localStorage.setItem("pubDate",pubDate);
        localStorage.setItem("weight",weight);
        localStorage.setItem("borrowable", borrowable);
        localStorage.setItem("preview_url",preview_url);
        localStorage.setItem("borrow_url",borrow_url);

        window.location = "bookData.html";
    })
    .catch(error => {
        alert(`Cannot find the ISBN information detail error: ${error}`);
      });

}

