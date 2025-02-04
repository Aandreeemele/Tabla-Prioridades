document.addEventListener("DOMContentLoaded", function() {
    const areas = ["Espiritual", "Intelectual", "Salud", "Alimentación", "Deporte", "Económico", "Profesional", "Recreativo"];
    const table = document.createElement("table");
    document.body.appendChild(table);

    let headerRow = document.createElement("tr");
    let headers = [
        "Mis áreas prioritarias", "¿Qué quiero?", "¿Por qué quiero?", "¿Para quién quiero?", 
        "¿Cómo haré para lograr lo que quiero?", "¿Con quién quiero lograrlo?", 
        "¿En dónde haré lo que quiero?", "¿Cuándo haré lo que quiero?", "¿Cómo evaluaré mis logros?"
    ];

    headers.forEach((text, index) => {
        let th = document.createElement("th");
        th.innerHTML = text;
        th.style.color = ["black", "orange", "magenta", "red", "blue", "green", "purple", "goldenrod", "brown"][index];
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    areas.forEach(area => {
        let row = document.createElement("tr");
        let tdArea = document.createElement("td");
        tdArea.textContent = area;
        row.appendChild(tdArea);

        for (let i = 0; i < 8; i++) {
            let td = document.createElement("td");
            td.contentEditable = "true";  // Hace que las celdas sean editables
            row.appendChild(td);
        }
        table.appendChild(row);
    });
});
