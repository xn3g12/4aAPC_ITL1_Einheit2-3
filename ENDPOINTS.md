# Einheit 4 - Backend-Routen, CRUD und Aggregation

Base URL: http://localhost:3000

## 1. Teams

| Methode | Pfad | Beschreibung |
|---|---|---|
| GET | /teams | Alle Teams mit Mitgliedern und Projekten abrufen |
| GET | /teams/:id | Ein Team anhand seiner ID abrufen |
| POST | /teams | Ein neues Team erstellen |
| PUT | /teams/:id | Ein Team aktualisieren |
| DELETE | /teams/:id | Ein Team löschen |

### POST /teams

Body:
```json
{
  "name": "Team Example",
  "klasse": "4aAPC"
}
```
Erfolg: 201 Created. Fehler: 400 bei ungültigen Pflichtfeldern.

### PUT /teams/:id

Body:
```json
{
  "name": "Team Updated",
  "klasse": "4AHITL"
}
```
Erfolg: 200 OK. Bei unbekannter ID: 404 Not Found.

### DELETE /teams/:id

Erfolg: 204 No Content. Bei unbekannter ID: 404 Not Found.

## 2. Projekte

| Methode | Pfad | Beschreibung |
|---|---|---|
| GET | /projects | Alle Projekte mit Team und Bewertungen abrufen |
| GET | /projects/:id | Ein Projekt anhand seiner ID abrufen |
| POST | /projects | Ein Projekt erstellen |
| PUT | /projects/:id | Ein Projekt aktualisieren |
| DELETE | /projects/:id | Ein Projekt löschen |

### POST /projects

Body:
```json
{
  "teamId": 1,
  "titel": "GameOn",
  "beschreibung": "Eine Mini-Game-Plattform",
  "praesentiertAm": "2026-10-21"
}
```
Die teamId muss zu einem existierenden Team gehören. Erfolg: 201 Created.

### PUT /projects/:id

Body:
```json
{
  "titel": "GameOn Updated",
  "beschreibung": "Überarbeitete Beschreibung"
}
```
Erfolg: 200 OK. Bei unbekannter ID: 404 Not Found.

### DELETE /projects/:id

Erfolg: 204 No Content. Bei unbekannter ID: 404 Not Found.

## 3. Bewertungen

| Methode | Pfad | Beschreibung |
|---|---|---|
| POST | /evaluations | Eine neue Bewertung speichern |

### POST /evaluations

Body:
```json
{
  "projectId": 1,
  "criterionId": 1,
  "jurorId": 1,
  "score": 8,
  "comment": "Gute Umsetzung"
}
```
Projekt, Kriterium und Juror müssen existieren. Die Punktzahl muss eine ganze Zahl zwischen 0 und der maximalen Punktzahl des Kriteriums sein.

Erfolg: 201 Created. Fehler: 400 bei ungültigen Daten, 409 bei doppelter Bewertung und 500 bei einem Serverfehler.

## 4. Durchschnittswerte

| Methode | Pfad | Beschreibung |
|---|---|---|
| GET | /statistics/averages | Durchschnittliche Punktzahl pro Projekt und Kriterium berechnen |

### GET /statistics/averages

Request Body: keiner.

Die Berechnung verwendet Sequelize AVG() und GROUP BY.

Erfolg: 200 OK. Zurückgegeben werden Projekt-ID, Kriterium-ID, Durchschnittspunktzahl sowie Projekt- und Kriterieninformationen.

Hinweis: IDs in Beispielen müssen für neue Datensätze in der Datenbank existieren.
