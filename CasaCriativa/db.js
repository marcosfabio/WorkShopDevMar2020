const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./casacriativa.db')

db.serialize(function(){
    
    // Criar Tabela.
    db.run(`
            CREATE TABLE IF NOT EXISTS IDEIAS(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                title TEXT,
                category TEXT,
                description TEXT,
                link TEXT
            );
        `)

 //  Inserir dados na Tabela

// Isserir dado na Tabela.
/* const query = ` 
INSERT INTO ideias(
    image,
    title,
    category,
    description,
    link
) VALUES(?,?,?,?,?);
`

const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Cursos de Programação",
    "Estudos",
    "Aqui vai a descrição da ideia",
    "https://rocketseat.com.br"
]



db.run(query,values, function(err){
    if (err) return console.log(err)
        
    console.log(this)
})
 */
        

                // Deletar um dado da Tabela.
// Exercício sugerido: IMplementar um botão para exclusão de Ideias.

 //   db.run(`DELETE FROM ideias WHERE id = ?`, [1], function(err){
//        if (err) return console.log(err)
//
 //       console.log("Ideia Deletada", this)
 //   })


    // Consultar dados na Tabela.
//
 //   db.all(`SELECT * FROM IDEIAS`, function(err, rows){
 //       if (err) return console.log(err)
//
 //       console.log(rows)
 //   })


})

module.exports = db