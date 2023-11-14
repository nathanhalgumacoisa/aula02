import { Router } from "express";

const rotasAlunos = Router();

rotasAlunos.get("/", (req, res) =>{
    return res.status(200).
    send({message: "Rota GET ALL alunos"});
});

rotasAlunos.get("/:id", (req, res) =>{
    const { id } = req.params;
    return res.status(200).
    send({message: `Rota GET aluno com ID ${id}`});
});

rotasAlunos.post("/", (req, res) =>{
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade){
        return res.status(400).
        send({ message: "Dados invalidos" });
    }
    return res.status(201).
    send({message: `Rota POST alunos`});
});

rotasAlunos.put("/:id", (req, res) =>{
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade){
        return res.status(400).
        send({ message: "Dados invalidos" });
    }
    return res.status(201).
    send({message: `Rota PUT aluno com ID ${id}`});
});


export default rotasAlunos