# Einheit 2–3 – Sequelize und Bewertungsapp

## Installation und Konfiguration

Node.js, npm und Sequelize wurden eingerichtet und getestet.
Das Node.js-Projekt wurde mit Sequelize und Sequelize CLI vorbereitet.

## Datenbank

Die MySQL-Datenbank bewertungsapp_db wurde erstellt und mit Sequelize verbunden.
Anschließend wurden die Models und Migrationen für folgende Tabellen erstellt:

Team
Member
Project
Criterion
Juror
Evaluation

Die Migrationen wurden erfolgreich ausgeführt und die Tabellen in der Datenbank erstellt.


## Daten und Beziehungen

Die Tabellen wurden mit Beispieldaten befüllt.

Dabei wurden auch die Fremdschlüssel berücksichtigt:

Member.teamId → Team.id
Project.teamId → Team.id
Evaluation.projectId → Project.id
Evaluation.criterionId → Criterion.id
Evaluation.jurorId → Juror.id

Bei Evaluation wurde außerdem ein Unique-Constraint für projectId, criterionId und jurorId erstellt.

## Fragen

### 1. Hat jede Entität genau einen Primärschlüssel (id)?

Ja. Jede der sechs Tabellen besitzt eine eigene id als Primärschlüssel. Die IDs werden automatisch erhöht.

### 2. Sind alle Fremdschlüssel korrekt benannt und zeigen auf die richtige Tabelle?

Ja. Die Fremdschlüssel sind korrekt definiert und verweisen auf die jeweiligen id-Spalten der anderen Tabellen.

### 3. Passt jeder gewählte Datentyp zu den Beispieldaten (z. B. Datum als DATE, nicht als STRING)?

Ja. Die Datentypen wurden passend zu den Daten gewählt.

Beispiele:
Namen → STRING
IDs → INTEGER
Beschreibung → TEXT
Präsentationsdatum → DATE
Bewertung → INTEGER
Gewichtung → DECIMAL

### 4. Ist bei Evaluation der Unique-Constraint auf (projectId, criterionId, jurorId) eingeplant?

Ja. Bei der Tabelle Evaluation wurde ein Unique-Constraint auf
projectId + criterionId + jurorId
erstellt. Dadurch kann dieselbe Kombination nicht doppelt gespeichert werden.

### 5. Könnt ihr mit euren Spalten jede Zeile der Beispieldaten tatsächlich abbilden, ohne dass Information fehlt?

Ja. Alle Beispieldaten können mit den vorhandenen Spalten gespeichert werden. Die benötigten Informationen wie Team, Projekt, Kriterium, Juror, Bewertung und Kommentar sind vorhanden.


## Dokumentation und Git

Für die Dokumentation wurde der Ordner docs/screenshots erstellt und für die Screenshots vorbereitet.
Die Änderungen wurden mit Git gespeichert und zu GitHub gepusht. Der Tag lab2 wurde erstellt und erfolgreich auf GitHub hochgeladen.