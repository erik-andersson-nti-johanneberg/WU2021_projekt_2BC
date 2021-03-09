const contactArticles = document.getElementsByClassName("contactArticle");

const getChildIndex = (element) => {
    let i = 0;
    /* This ingenious solution is courtesy of Liv on stackoverflow */
    while( (element = element.previousElementSibling) != null ) {
      i++;
    }
    return i;
}

for(let a = 0; a < contactArticles.length; a++) {
    contactArticles[a].addEventListener("click", (event) => {
        let index = getChildIndex(event.currentTarget);
        const article = contactArticles[index];
        article.classList.toggle("showContactInformation");
    });
}