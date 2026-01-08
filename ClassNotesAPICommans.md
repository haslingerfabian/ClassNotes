## WebApi Projekt erstellen
dotnet new webapi -n ClassNotes.Api
cd ClassNotes.Api

## Pakete installieren
dotned add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Swashbuckle.AspNetCore 