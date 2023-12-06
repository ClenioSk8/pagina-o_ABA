const express = require("express")
const rotas = express.Router()       

const alunos=require('./database/alunos.json')

rotas.get("/aluno", (req, res)=>{
    res.status(200).json(alunos)
})

rotas.post("/alunoAdd", (req, res)=>{
    const novo_aluno = {nome, idade} = req.body
    alunos.push(novo_aluno)
        return res.status(201).json({mensagem: "aluno adicionado", novo_aluno})

})
















































module.exports=rotas

