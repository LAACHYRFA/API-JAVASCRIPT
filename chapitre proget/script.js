const container = document.getElementById("content");
const Selection = document.getElementById("continent");
const input = document.getElementById("input");
const popInput = document.getElementById("population"); 
let pays = [];

if (container) {  
  function afficherCarte(list) {
    container.innerHTML = "";
    list.forEach((country) => {
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

      let pop = document.createElement("p");
      pop.innerText =  country.population;

      element.addEventListener("click", () => {
        window.location.href = `country-details.html?name=${country.name}`;
      });

      element.appendChild(title);
      element.appendChild(langue);
      element.appendChild(flag);
      element.appendChild(cont);
      element.appendChild(pop);
      container.appendChild(element);
    });
  }

  
  fetch("https://countries-api-hsak.onrender.com/api/countries")
    .then(response => response.json())
    .then(countries => {
      pays = countries;
      afficherCarte(pays);
    })
    .catch(error => console.error("Erreur:", error));

  // Filtre par continent
  Selection.addEventListener("change", function() {
    const selected = Selection.value;
    if (selected === "all") {
      afficherCarte(pays);
    } else {
      afficherCarte(pays.filter(c => c.continent === selected));
    }
  });

  input.addEventListener("input", function () {
    const text = input.value.toLowerCase();

    let filtered = pays.filter(country =>
      country.name.toLowerCase().includes(text)
    );

    afficherCarte(filtered);
  });


  popInput.addEventListener("input", function () {
    const value = Number(popInput.value);

    if (!isNaN(value)) {
      let filtered = pays.filter(country => country.population >= value);
      afficherCarte(filtered);
    } else {
      afficherCarte(pays);
    }
  });
}
