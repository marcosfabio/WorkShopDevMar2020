// Usei o EXPRESS para criar e configurar o servidor

const express = require("express")

const server = express()

const db = require("./db")



// Configurar arquivos ESTÁTICOS
//  exemplos: CSS, Imagens, Scripts, etc.

server.use(express.static("public"))

server.use(express.urlencoded({extended : true}))

// Configuração do NUNJUCKS

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express : server,  
    noCache : true,  
})


//  criei uma ROTA "/"" e capturo o pediso
//  do cliente para responder.

server.get("/",function(req, res){
    
    // Consultar dados na Tabela.

    db.all(`SELECT * FROM IDEIAS`, function(err, rows){
        if (err) {
            console.log(err)
            return res.send("Erro no Banco de Dados!")
        }

        const ideiasrevertidas = [...rows].reverse()

        let lastideias = []
        for(let ideia of ideiasrevertidas){
            if (lastideias.length < 2){
                lastideias.push(ideia)
            }
        }
    
        return res.render("index.html", {ideias: lastideias})
    })
    
    
})

server.get("/ideias",function(req, res){
    
    db.all(`SELECT * FROM IDEIAS`, function(err, rows){
        if (err) {
            console.log(err)
            return res.send("Erro no Banco de Dados!")
        }
        const ideiasrevertidas = [...rows].reverse()

        return res.render("ideias.html",{ideias: ideiasrevertidas})

    })
    
    

})


server.post("/", function(req, res){
    // INserir dado na Tabela.
    const query = ` 
        INSERT INTO ideias(
            image,
            title,
            category,
            description,
            link
        ) VALUES(?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ]

    db.run(query,values, function(err){
        if (err) {
            console.log(err)
            return res.send("Erro no Banco de Dados!")
        }
            
        return res.redirect("/")
    })
 
})


// liguei o servidor na porta 3000
server.listen(3000)

