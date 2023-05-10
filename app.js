const express = require('express');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const port = 3000;
const listeRoutes = require('./routes/listeRoute');
// récupération module listeRoutes  
const optionBDD = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306,
  database: 'todolist'
}
app.use(myConnection(mysql, optionBDD, 'pool'));
app.use(express.static('public')); //definition des resources static
app.set('views', './IHM'); //definition du chemin de mes views dossier IHM
app.set('view engine', 'ejs'); // definition du moteur de views
app.use(express.urlencoded({extended : false}));
// si requete dans query
app.use(listeRoutes);
// Utiliser listeRoutes, component d' accès aux données pour liste
// app.get('/', (req, res)=>{
//   req.getConnection((error, connection)=>{
//     if (error) {
//       console.error(error);
//     } else {
//       connection.query('SELECT * FROM liste', [], (error, data)=>{
//         if (error) {
//           console.error(error);
//         } else {
//           res.status(200).render('index', {data})
//         }
//       })
//     }
//   })
// })
// app.post('/liste', (req, res)=>{
//   let id = req.body.id === "" ? null : req.body.id;
//   let title = req.body.title;
//   let description = req.body.description;
//   let requeteSQL = id === null ? 'INSERT INTO liste(title, description) VALUES (?,?)'
//   : 'UPDATE liste SET title = ?, description = ? WHERE id = ?';
//   let data = id === null ? [title, description] : [title, description, id]
//   req.getConnection((error, connection)=>{
//     if (error) {
//       console.error(error);
//     } else {
//       connection.query(
//         requeteSQL,
//         data,
//         (error, data)=>{
//         if (error) {
//           console.error(error);
//         } else {
//           res.status(302).redirect('/');
//         }
//       })
//     }
//   })
// });
// app.delete('/liste/:id',(req, res)=>{ //binding = dynamique -> :id, ":"
//   let id = req.params.id;
//   req.getConnection((error, connection)=>{
//   if (error) {
//     console.error(error);
//   }else{
//     connection.query('DELETE FROM liste WHERE id = ?', [id], (error, data)=>{
//       // []requête définie 
//       if (error) {
//         console.error(error);
//       }else{
//         res.status(200).json({routeRacine : '/'})
//       }
//       })
//     }
//   })
// })
// Tout cela est les routes qui gèrent la liste: création nouveau fichier avec ces routes. Suite à cela l' appli ne fonctionne plus
app.get('/a-propos', (req, res)=>{
  res.status(200).render('apropos')
});
app.use((req, res)=>{
  res.status(404).render('pageintrouvable')
});
app.listen(port, ()=>{
  console.log("Server listening on port " + port);//server port 3000
});