document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const dropzone = document.getElementById("dropzone");
    const uploadContainer = document.querySelector(".row"); // Upload-Bereich
    const container = document.querySelector(".container"); // Hauptcontainer

    // Neues Div für Tabelle & Buttons erstellen
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table-responsive", "mt-4");
    container.appendChild(tableContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "justify-content-center", "gap-3", "mt-3", "fixed-buttons");
    container.appendChild(buttonContainer);

    // CSV speichern Button
    const saveCsvButton = document.createElement("button");
    saveCsvButton.innerText = "Speichern als CSV";
    saveCsvButton.classList.add("btn", "btn-primary");
    buttonContainer.appendChild(saveCsvButton);

    // Andere Datei auswählen Button
    const selectNewFileButton = document.createElement("button");
    selectNewFileButton.innerText = "Andere Datei auswählen";
    selectNewFileButton.classList.add("btn", "btn-danger");
    buttonContainer.appendChild(selectNewFileButton);

    // Upload und so entfernen
    buttonContainer.style.display = "none";

    dropzone.addEventListener("click", () => fileInput.click());

    // Drag-and-Drop feature
    dropzone.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropzone.style.background = "#e0e0e0";
    });

    dropzone.addEventListener("dragleave", () => {
        dropzone.style.background = "";
    });

    dropzone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropzone.style.background = "";
        if (event.dataTransfer.files.length > 0) {
            handleFile(event.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            handleFile(fileInput.files[0]);
        }
    });

    function handleFile(file) {
        if (file.type !== "text/csv") {
            alert("Bitte eine CSV-Datei hochladen.");
            return;
        }

        uploadContainer.style.display = "none"; // Upload-Box verstecken
        buttonContainer.style.display = "flex"; // Buttons sichtbar machen

        const reader = new FileReader();
        reader.onload = (event) => parseCSV(event.target.result);
        reader.readAsText(file);
    }

    function parseCSV(csvData) {
        Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => displayTable(result.data),
        });
    }

    function displayTable(data) {
        if (data.length === 0) {
            alert("Keine Daten in der CSV gefunden.");
            return;
        }

        let table = `<table class="table table-bordered table-striped"><thead><tr style="background-color: black; color: white;">`;

        // Damit ganz oben alles fetter und krasser aussieht
        Object.keys(data[0]).forEach((key) => {
            table += `<th style="border: 2px solid black;">${key}</th>`;
        });
        table += "</tr></thead><tbody>";

        // Damit zeilen schwarze ränder haben
        data.forEach((row) => {
            table += "<tr>";
            Object.values(row).forEach((value) => {
                table += `<td contenteditable="true" style="border: 2px solid black;">${value}</td>`;
            });
            table += "</tr>";
        });
        table += "</tbody></table>";

        tableContainer.innerHTML = table;
    }

    // CSV speichern
    saveCsvButton.addEventListener("click", function () {
        let csvContent = "";
        const rows = document.querySelectorAll("table tr");

        rows.forEach((row) => {
            let cols = row.querySelectorAll("th, td");
            let rowData = [];
            cols.forEach((col) => rowData.push(col.innerText));
            csvContent += rowData.join(",") + "\n";
        });

        const blob = new Blob([csvContent], { type: "text/csv" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Tabelle.csv";
        a.click();
    });

    // Andere Datei auswählen
    selectNewFileButton.addEventListener("click", () => location.reload());
});
