'use strict'

class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}

let monitor = new Artikal("Monitor", 165, "24-inčni Full HD monitor");
let tv = new Artikal("TV", 650, "55-inčni Smart TV");
let mis = new Artikal("Miš", 20, "Bežični optički miš");

let proizvodi = [monitor, tv, mis];

function displayDetails(artikal) {
    let p = document.createElement("p");

    p.innerHTML = "Naziv: " + artikal.naziv + "<br>" +
                  "Cena: " + artikal.cena + "<br>" +
                  "Opis: " + artikal.opis;

    let detalji = document.querySelector("#details");
    detalji.innerHTML = "";

    detalji.appendChild(p);
}

function popuniTabelu() {
    let tbody = document.querySelector("#productsTable tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < proizvodi.length; i++) {
        let artikal = proizvodi[i];
        let row = document.createElement("tr");

        let cellBr = document.createElement("td");
        cellBr.textContent = i + 1;
        row.appendChild(cellBr);

        let cellNaziv = document.createElement("td");
        cellNaziv.textContent = artikal.naziv;
        row.appendChild(cellNaziv);

        let cellCena = document.createElement("td");
        cellCena.textContent = artikal.cena;
        row.appendChild(cellCena);

        row.addEventListener("click", function() {
            displayDetails(artikal);
        });

        tbody.appendChild(row);
    }
}

function handleFormSubmission() {
    let submitBtn = document.querySelector('#submitBtn');
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const forma = document.querySelector('#productForm');
        const formData = new FormData(forma);

        const naziv = formData.get("naziv");
        const cena = parseFloat(formData.get("cena"));
        const opis = formData.get("opis");

        const novArtikal = new Artikal(naziv, cena, opis);
        proizvodi.push(novArtikal);

        popuniTabelu();
        forma.reset();
    });
}

popuniTabelu();
handleFormSubmission();