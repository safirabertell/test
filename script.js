const tipsLista= [
    "Handla en gigantisk maräng på Årsta konditori!",
    "Ät Stockholms godaste kebab på Palmyra!",
    "Kolla in folkets hus!",
    "Luciatåg i biografen!"
] ;
const knapp = document.getElementById("slumpKnapp");
const text = document.getElementById("resultatText");
knapp.addEventListener("click", function() {
    const slumpIndex = Math.floor(Math.random() * tipsLista.length);
    text.textContent = tipsLista [slumpIndex];
});