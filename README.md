# Bibliotekshanteringssystem vid Oracle Database

## 1. Introduktion

Den här projekt syftar att utforska Oracle Databases funktioner och prestandaoptimering genom att skapa ett enkelt bibliotekssystem. Projekt målet är att få en förståelse för Oracle Database och dess kapacitet.

### Oracle Database:

- Ett objektrelaterat databashanteringssystem (RDBMS) utvecklat av Oracle Corporation.
- Designat för att lagra, hantera och hämta data effektivt.
- Vanligt använt i företag för att hantera stora datamängder och stödja olika applikationer.

### Huvudfunktioner:

- **SQL**: Använder Structured Query Language för datamanipulation och frågehantering.
- **Transaktioner**: Säkerställer dataintegritet och konsistens.
- **Hög Tillgänglighet**: Funktioner för säkerhetskopiering och återställning.
- **Säkerhet**: Erbjuder robusta säkerhetsfunktioner.

## 2. Likheter och Skillnader mellan SQL-databaser och Oracle Database

| Egenskap                  | SQL-databaser                          | Oracle Database                          |
|---------------------------|----------------------------------------|------------------------------------------|
| Typ                       | RDBMS                                  | RDBMS                                    |
| SQL-användning            | Använder SQL                           | Använder SQL                             |
| ACID-egenskaper           | Stödjer ACID                           | Stödjer ACID                             |
| Indexering                | Olika typer av index                   | Olika typer av index                     |
| Transaktionshantering     | Hanterar transaktioner                 | Hanterar transaktioner                   |
| Backup och återställning  | Stöd för säkerhetskopiering och återställning | Stöd för säkerhetskopiering och återställning |
| Säkerhetsfunktioner       | Autentisering, auktorisering, kryptering | Autentisering, auktorisering, kryptering |
| Utvecklare                | Flera utvecklare (t.ex. MySQL, PostgreSQL) | Oracle Corporation                       |
| Licensiering och Kostnad  | Open-source, vissa kommersiella versioner | Kommersiellt licensierat, ofta kostsamt  |
| Funktioner och Verktyg    | Varierar beroende på specifik databas  | Omfattande funktioner (t.ex. RAC, Data Guard) |
| Plattformsstöd            | Flera plattformar                      | Flera plattformar, optimerad för Oracle moln |
| Utökningar och Tillägg    | Specifika utökningar (t.ex. PostGIS)   | Proprietära tillägg (t.ex. PL/SQL, Oracle APEX) |
| Skalbarhet och Prestanda  | Varierar beroende på implementering    | Hög skalbarhet och prestanda|

## 3.Indexering i Oracle Database

Indexering förbättrar prestandan för frågeoperationer genom att minska mängden data som behöver skannas. Oracle stöder flera typer av index:

1. **B-tree Index**:
    - Standard indextyp.
    - Effektiv för exakta matchningar och intervallfrågor.
    - Använder en balanserad trädstruktur.

2. **Bitmap Index**:
    - Perfekt för kolumner med få unika värden.
    - Lagrar rad-ID:n som bitkartor.

3. **Funktionsbaserade Index**:
    - Indexerar uttryck eller funktioner på kolumner.
    - Användbart för frågor som UPPER(column_name).

4. **Partitionerade Index**:
    - Optimerar prestanda för stora tabeller genom att dela upp data i partitioner.

## 4. Installation av Oracle och SQL Developer:
  För att installera Oracle Database och SQL Developer, följ dessa länkar:

- [Ladda ner Oracle Database](https://www.oracle.com/database/technologies/oracle-database-software-downloads.html)
- [Ladda ner SQL Developer](https://www.oracle.com/database/sqldeveloper/technologies/download/)

![Installation av Oracle och SQL Developer](./img/installDB.png)

## 5. Skapandet av databastabeller

- **Böcker (BOOKS)**: Lagrar information om böcker, inklusive titel, författare och publiceringsdatum.
- **Medlemmar (MEMBERS)**: Hanterar information om medlemmar, såsom namn och e-post.
- **Lånade Böcker (BORROWED_BOOKS)**: Spårar lån och returdatum, länkat till tabellerna BOOKS och MEMBERS.

![Skapandet av databastabeller](./img/tableCreate.jpg)

## 6. Datahantering och SQL-frågor

Kontrollera tabellernas struktur med DESCRIBE och lägg till data med INSERT.

![Skapandet av databastabeller](./img/describe-insert-query.jpg)

Utför olika SQL-frågor för att hämta och verifiera data, till exempel visa lånade böcker.

![Skapandet av databastabeller](./img/borrowed-returned-query.jpg)

## 7. Index och Optimering

Förbättra prestandan genom att skapa och kontrollera index på viktiga kolumner, samt optimera SQL-frågor.

- **Index på titlar i böcker**:
- **Index på medlemmars e-post**:
- **Index på lånade böcker**:

![Skapandet av databastabeller](./img/index-creating.png)

Vi använde EXPLAIN PLAN för att analysera och justera frågeoptimering.

![Skapandet av databastabeller](./img/optimaztion-query.png)

## 8. Backend och Frontend Utveckling

Skapa en serverapplikation med Node.js och Express.js för att hantera CRUD-operationer. Framtida förbättringar kan inkludera fler funktioner för medlemmar, förbättrad klient sida med React och rapporteringsverktyg för att analysera lånehistorik.

![Skapandet av databastabeller](./img/GetAll-books.png)
![Skapandet av databastabeller](./img/getBookId.png)

## 9. Resultat och Framtid

Projektet gav mig en stark grundläggande förståelse för Oracle Database och dess funktioner. Backenden är  nästan klart vid fullt fungerande databas och kan utökas med fler funktioner. Jag har lagt grunden för ett komplett bibliotekssystem som kan vidareutvecklas med rapportering, avancerad sökning och  kommer skapas frontenden för bättre användarupplevelse.

## 10. Sammanfattning

I detta projekt implementerades tekniker för datahantering och optimering i Oracle Database. Genom att skapa B-tree-index på boktitlar och medlemmarnas e-post förbättrades sökprestandan, samtidigt som index användes sparsamt för att undvika att påverka insättnings- och uppdateringsoperationer negativt. EXPLAIN PLAN användes för att analysera och optimera SQL-frågor, vilket resulterade i minskad resursanvändning och snabbare exekvering. Även om transaktionshantering inte implementerades fullt ut, planerades användning av ACID-egenskaper för att säkerställa dataintegritet och konsistens i framtida utveckling. Projektet lade en stabil grund för ett skalbart och effektivt bibliotekssystem.
