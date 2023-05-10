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

requete preparee se proteger des injections sql

https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server


templates engines ou moteur de rendu, il en existe plusieurs
ex:ejs ->
balises avec % faire du js dans html


PS C:\Users\utilisateur\Desktop\nodeBack> mysql -u root -p;
Enter password: ****
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 29
Server version: 8.0.32 MySQL Community Server - GPL
Copyright (c) 2000, 2023, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
Type 'help;' or '\h' for help. Type '\c' to clear the current input
mysql> CREATE DATABASE;
ERROR 1064 (42000): You have an error in your SQL syntax; check the x to use near '' at line 1
mysql> create database todolist;
Query OK, 1 row affected (0.03 sec)
mysql> use todolist
Database changed
mysql> create table liste (
    -> id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -> title VARCHAR(40);
ERROR 1064 (42000): You have an error in your SQL syntax; check the x to use near '' at line 3
mysql> create table liste(
    -> id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -> title VARCHAR(40),
    -> description VARCHAR(255)
    -> );
Query OK, 0 rows affected (0.05 sec)
mysql> show tables;
+--------------------+
| Tables_in_todolist |
+--------------------+
| liste              |
+--------------------+
1 row in set (0.01 sec)
mysql> show columns from liste;
+-------------+--------------+------+-----+---------+---------------
| Field       | Type         | Null | Key | Default | Extra
+-------------+--------------+------+-----+---------+---------------
| id          | int          | NO   | PRI | NULL    | auto_increment
| title       | varchar(40)  | YES  |     | NULL    |
| description | varchar(255) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
3 rows in set (0.01 sec)
mysql> insert into liste (title, description) values ('titre1','description1);
    '> mysql
    '> insert into liste (title, description)values ('titre2','description2');iption2');
    '> ^C
mysql>