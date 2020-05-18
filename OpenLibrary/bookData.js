const bookData = document.querySelector(".bookData");
const rightPanel = bookData.querySelector(".rightPanel");

const posterImg = bookData.querySelector("#largePoster");
const bookTitle = bookData.querySelector("#bookTitle");

const bookAuthor = rightPanel.querySelector("#author");
const bookPublisher = rightPanel.querySelector("#publisher");
const bookPages = rightPanel.querySelector("#pages");
const bookSubjects = rightPanel.querySelector("#subjects");
const bookPubDate = rightPanel.querySelector("#pubDate");
const bookWeight = rightPanel.querySelector("#weight");
const bookBorrowable = rightPanel.querySelector("#borrowable");
const bookPreview = rightPanel.querySelector("#preview_url");
const bookBorrow = rightPanel.querySelector("#borrow_url");

const body = document.querySelector("body");


function getData(){
    const poster = localStorage.getItem("poster");
    posterImg.src = poster;
    
    const title = localStorage.getItem("title");
    bookTitle.innerText = title;

    const author = localStorage.getItem("author");
    bookAuthor.innerText = `Author: ${author}`;

    const publisher = localStorage.getItem("publisher");
    bookPublisher.innerText = `Publisher: ${publisher}`;

    const pages = localStorage.getItem("pages");
    bookPages.innerText = `Pages: ${pages} p`;

    const subjects = localStorage.getItem("subjects");
    bookSubjects.innerText = `Subjects: ${subjects}`;

    const pubDate = localStorage.getItem("pubDate");
    bookPubDate.innerText = `Publish Date: ${pubDate}`;

    const weight = localStorage.getItem("weight");
    if(weight === "undefined"){
        bookWeight.innerText = "Weight: Currently Invalid";
    }
    else{
        bookWeight.innerText = `Weight: ${weight}`;
    }   
    
    const borrowable = localStorage.getItem("borrowable");
    bookBorrowable.innerText = `Borrowable: ${borrowable}`;

    const preview_url = localStorage.getItem("preview_url");
    if(preview_url === "undefined"){
        bookPreview.innerText = "Proview link is currently invalid";
    }
    else{
        bookPreview.setAttribute("href",preview_url);
        bookPreview.innerText = "Here";
    }

    const borrow_url = localStorage.getItem("borrow_url");
    if(borrow_url === "undefined"){
        bookBorrow.innerText = `Currently 
        invalid`;
    } 
    else{
        bookBorrow.setAttribute("href",borrow_url);
        bookBorrow.innerText = "Here";
    }


    rightPanel.appendChild(author);
    rightPanel.appendChild(publisher);
    rightPanel.appendChild(pages);
    rightPanel.appendChild(subjects);
    rightPanel.appendChild(pubDate);
    rightPanel.appendChild(weight);
    rightPanel.appendChild(borrowable);
    rightPanel.appendChild(preview_url);
    rightPanel.appendChild(borrow_url);
    bookData.appendChild(bookTitle);
    bookData.appendChild(posterImg);
    bookData.appendChild(rightPanel);
    body.appendChild(bookData);
}

getData();