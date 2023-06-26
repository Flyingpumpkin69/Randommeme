const GenrateMeMeBTN = document.querySelector(".meme-generator .generate-meme-btn");
const MeMeimg = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");


const updateDetails = (url,title,author) => {
    MeMeimg.setAttribute('src',url)
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}


const generatememe = () => { 
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json()).then(data => {
            updateDetails(data.url,data.title,data.author)
        }) ;
 }


 GenrateMeMeBTN.addEventListener("click",generatememe);
generatememe();  