
const container = document.getElementById("content");
const Selection = document.getElementById("continent");
let pays = [];

if (container) {  
  function continent(get) {
    container.innerHTML = "";
    get.forEach((country) => {
      let element = document.createElement("div");
      element.classList.add("country-card");

      let title = document.createElement("h3");
      title.textContent = country.name;

      let langue = document.createElement("p");
      langue.textContent = country.language;

      let flag = document.createElement("img");
      flag.src = country.flag;

      let cont = document.createElement("p");
      cont.innerText = country.continent;

      
      element.addEventListener("click", () => {
        window.location.href = `country-details.html?name=${country.name}`;
      });

      element.appendChild(title);
      element.appendChild(langue);
      element.appendChild(flag);
      element.appendChild(cont);
      container.appendChild(element);
    });
  }

 
  fetch("https://countries-api-hsak.onrender.com/api/countries")
    .then(response => response.json())
    .then(countries => {
      pays = countries;
      continent(pays);
    })
    .catch(error => console.error("Erreur:", error));

 
  Selection.addEventListener("change", function() {
    const selected = Selection.value;
    if (selected === "all") {
      continent(pays);
    } else {
      continent(pays.filter(c => c.continent === selected));
    }
  });
}



