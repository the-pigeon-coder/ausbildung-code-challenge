# Task Result

## Bitte den [Google Doc](https://docs.google.com/document/d/1ZoKsAw86lu_qd0X3Fmj696DKu46dlcC4cf6zPsCPCCU/edit?usp=drivesdk) lesen, würde mir sehr viel bedeuten, außerdem im ordner "Dokumente" alle nötigen vorbereitungen und dokumentierungen enthalten. Im ordner "main" sind die ganzen code dateien.

## Used technologies / Frameworks

Ich habe folgende technologien/Frameworks in meinem Projekt benutzt:

- HTML & CSS
- Javascript
-Ich habe mich für HTML und CSS entschieden, weil es die 2 sprachen sind mit dem ich sehr confident bin, und auch sehr einfach eine UI designen konnte
-Ich habe mich für Javascript entschieden weil es die einzige scripting sprache ist die ich halbwegs gut kann, und sie sehr gut kompatibel ist mir HTML & CSS
-Ich habe die DOM (Document Object Model) verwendet, um die HTML-Elemente dynamisch zu verändern. Dadurch konnte ich den Upload- und Bearbeitungsbereich steuern, die CSV-Dateien laden und die Benutzeroberfläche je nach Status anpassen.

## Benutze 3rd Party Libraries

Ich benutze die folgenden 3rd Party Libraries in meinem Projekt:

Name | Begründung
--- | ---
[PapaParse](https://github.com/mholt/PapaParse) um die CSV parsen zu können
[Bootstrap](https://getbootstrap.com/) | Sehr einfaches und simples Framework um frontend besser aussehen zu lassen

## Installation / Run

Um das Projekt lokal auszuführen, sind folgende Schritte notwendig:

1. Lade das Repository herunter:
   ```console
   git clone https://github.com/the-pigeon-coder/ausbildung-code-challenge
   ```
2. Wechsle in das Projektverzeichnis:
   ```console
   cd ausbildung-code-challenge
   ```
3. Falls du einen lokalen Server benötigst, kannst du beispielsweise den Live Server von VS Code verwenden oder Python als lokalen Server starten:
   - Mit Python:
     ```console
     python -m http.server 8000
     ```
   - Mit VS Code Live Server: Installiere die Live Server Extension und starte die `web.html` Datei darüber.

Das Projekt kann nun im Browser unter `http://localhost:8000` aufgerufen werden.

### Alternative (Einfachste Methode)
einfach die HTML-, CSS- und JavaScript-Dateien herunterladen, in einen Ordner legen und die `web.html` Datei direkt im Browser öffnen. Dadurch wird die Anwendung ohne zusätzliche Konfiguration ausgeführt.
