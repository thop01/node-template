console.log("main is loaded");

function getHtmlCard(title, body){
    const htmlCard = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = title;
    p.textContent = body;

    htmlCard.classList.add("card");
    htmlCard.appendChild(h2);
    htmlCard.appendChild(p);
    return htmlCard;
}