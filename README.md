# Interface, moteur de template

https://github.com/Kazetus/vs-code/tree/main/nodeBack
GitHub
voir ressources statiques

## Installation 

- npm init -> initialisation projet avec node, crée package.json
quand on crée des packages crée module et package-lock
npm i express -> package express, création back avec express.Faire require js.
Qd on fait du back et qu'on utilise une base de données.Il faut une connection -> module express-myconnection.  Plus un moteur de template-> ejs.
- npm i ejs,
- npm i express-myconnection,
- npm i mysql ->pour la bdd,
- npm i nodemon,
- "start": "nodemon main",
- npm start.

Création dossier, moteur de template, interface, pas d'html, moteur d'interface.(IHM interface homme machine)

props-> c'est pour communiquer des données via une variable d'une page JS qui peut être exploitée sur toutes les pages ejs.
Données dans un objt, appelle objt dans page ejs.
Stockage objet 2eme param hender, dans page js appel obj et propriété.
entre balise % = balise script sur page ejs


https://ejs.co/


faire tableau objet tâche avec titre et description.
ex: apprendre node....
apprendre express....
Il faut utiliser une boucle for.

<%= [Nomdelavariable]%>

<% tache.map((el) => { %>
            <div>
            <h3><%= el.titre %></h3>
            <p><%= el.description %></p>
            </div>
        <% }); %>

faire var header pour le faire dans une seule page et l'importer dans les autres


stockage base de données

démarrer serveur workbench
dans terminal 
mysql - u root -p ent mdp
terminal
create database todolist;
use todolist;
create table liste(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (40),
    description VARCHR(255),
);
show tables;
show columns from liste;

const mysql =require("mysql");

port preference workbench

requete preparee se proteger des injecgtions sql

https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server


templates engines ou moteur de rendu, il en existe plusieurs
ex:ejs ->
balises avec % faire du js dans html

