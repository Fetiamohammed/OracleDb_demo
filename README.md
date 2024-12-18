# Bibliotekshanteringssystem vid Oracle Database

## 1. Introduktion

Syfte: Utforska Oracle Databases funktioner och prestandaoptimering genom att skapa ett enkelt bibliotekssystem. Projektet syftar till att få en grundläggande förståelse för Oracle Database och dess kapacitet.

### Oracle Database:

- Ett objektrelaterat databashanteringssystem (RDBMS) utvecklat av Oracle Corporation.
- Designat för att lagra, hantera och hämta data effektivt.
- Vanligt använt i företag för att hantera stora datamängder och stödja olika applikationer.

### Huvudfunktioner:

- **SQL**: Använder Structured Query Language för datamanipulation och frågehantering.
- **Transaktioner**: Säkerställer dataintegritet och konsistens.
- **Hög Tillgänglighet**: Funktioner för säkerhetskopiering och återställning.
- **Säkerhet**: Erbjuder robusta säkerhetsfunktioner.

## 2. Indexering i Oracle Database

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

## 3. Installation av Oracle och SQL Developer

![Installation av Oracle och SQL Developer](./img/installDB.png)

## 4. Skapandet av databastabeller

- **Böcker (BOOKS)**: Lagrar information om böcker, inklusive titel, författare och publiceringsdatum.
- **Medlemmar (MEMBERS)**: Hanterar information om medlemmar, såsom namn och e-post.
- **Lånade Böcker (BORROWED_BOOKS)**: Spårar lån och returdatum, länkat till tabellerna BOOKS och MEMBERS.

![Skapandet av databastabeller](./img/tableCreate.jpg)

## 5. Datahantering och SQL-frågor

Kontrollera tabellernas struktur med DESCRIBE och lägg till data med INSERT.

![Skapandet av databastabeller](./img/describe-insert-query.jpg)

Utför olika SQL-frågor för att hämta och verifiera data, till exempel visa lånade böcker.

![Skapandet av databastabeller](./img/borrowed-returned-query.jpg)

## 6. Index och Optimering

Förbättra prestandan genom att skapa och kontrollera index på viktiga kolumner, samt optimera SQL-frågor.

- **Index på titlar i böcker**:
- **Index på medlemmars e-post**:
- **Index på lånade böcker**:

![Skapandet av databastabeller](./img/index-creating.png)

Vi använde EXPLAIN PLAN för att analysera och justera frågeoptimering.

![Skapandet av databastabeller](./img/optimaztion-query.png)

## 7. Backend och Frontend Utveckling

Skapa en serverapplikation med Node.js och Express.js för att hantera CRUD-operationer. Framtida förbättringar kan inkludera fler funktioner för medlemmar, förbättrad klient med React och rapporteringsverktyg för att analysera lånehistorik.

![Skapandet av databastabeller](./img/GetAll-books.png)
![Skapandet av databastabeller](./img/getBookId.png)

## 8. Resultat och Framtid

Projektet gav en stark grundläggande förståelse för Oracle Database och dess funktioner. Backend och frontend är fullt fungerande och kan utökas med fler funktioner. Vi har lagt grunden för ett komplett bibliotekssystem som kan vidareutvecklas med rapportering, avancerad sökning och bättre användarupplevelse.
