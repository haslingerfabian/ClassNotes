## WebApi Projekt erstellen
dotnet new webapi -n ClassNotes.Api
cd ClassNotes.Api

## Pakete installieren
dotned add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Swashbuckle.AspNetCore 

cd ..
dotnet new sln -n classnotes
dotnet sln add "ClassNotes.Api\ClassNotes.Api.csproj"

Wichtige Befehle in VS Paket-Manager-Konsole:
add-migration
update-database

## CreateBuilder
npm create vite@latest frontend