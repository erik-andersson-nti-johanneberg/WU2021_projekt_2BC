const contactArticles = document.getElementsByClassName("contactArticle");

const getChildIndex = (element) => {
    let i = 0;
    while( (element = element.previousElementSibling) != null ) {
      i++;
    }
    return i;
}

for(let a = 0; a < contactArticles.length; a++) {
    contactArticles[a].addEventListener("click", (event) => {
        // Expand article
        const articleIndex = getChildIndex(event.currentTarget);
        const article = contactArticles[articleIndex];
        article.classList.toggle("showContactInformation");

        // Rotate plus svg
        const gg = article.children[1];
        gg.classList.toggle("changeToMinus");
    });
}