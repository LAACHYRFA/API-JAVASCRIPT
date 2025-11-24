const detailsDiv = document.getElementById("details");

if (detailsDiv) { 

  function loadDetails() {

    const country = JSON.parse(localStorage.getItem("selectedCountry"));

    
    if (!country) {
      detailsDiv.innerHTML = "<h2>Pays introuvable</h2>";
      return;
    }

    
    detailsDiv.innerHTML = "";

    let title = document.createElement("h1");
    title.textContent = country.name;

    let img = document.createElement("img");
    img.src = country.flag;

    let p1 = document.createElement("p");
    p1.textContent = country.continent;

    let p2 = document.createElement("p");
    p2.textContent = country.language;

    let p3 = document.createElement("p");
    p3.textContent = country.population;

    let p4 = document.createElement("p");
    p4.textContent = country.area;

    let p5 = document.createElement("p");
    p5.textContent = country.currency;

    detailsDiv.append(title, img, p1, p2, p3, p4, p5);
  }

  loadDetails();
}