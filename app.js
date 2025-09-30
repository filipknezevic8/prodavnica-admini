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

function popuniTabelu() {
    let tbody = document.querySelector("#productsTable tbody");
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

        tbody.appendChild(row);
    }
}

popuniTabelu();