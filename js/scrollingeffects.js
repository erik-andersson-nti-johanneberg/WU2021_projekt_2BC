const showNavButton = document.getElementById("showNavButton");
const body = document.getElementById("hero");

body.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if(window.scrollY >= 0.9*window.innerHeight) {
        showNavButton.classList.toggle("changeColor");
    }
});

/*
const getIndexFromTag = (emtList, tagName) => {
    index = undefined;
    for(let e = 0; e < emtList.length; e++) {
        if(emtList[e].tagName == tagName.toUpperCase()) {
            index = e;
        }
    }
    return index;
}

const section1 = document.getElementsByTagName("section")[0];
const textBox1 = section1.children[getIndexFromTag(section1.children, "article")];

setInterval(() => {
    textBox1.style.marginLeft = easingFunction(window.scrollY, 10, 0.01) + "em";
}, 1);

const easingFunction = (x, limit, easing) => {
    return limit - (1/Math.exp(easing*x+Math.log(1/limit)));
}
*/