const express = require('express');

const Aluno = require('./alunosRouter')

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    const alunos = await Aluno.findAll();
    res.send(alunos);
});

router.get('/:id', (req, res) => {
    res.send(`GET ID: ${req.params.id}`);
});

router.get('/matricula/:matricula', (req, res) => {
    res.send(`GET Matricula: ${req.params.matricula}`);
});

router.put('/:id', (req, res) => {// atualizar
    res.send(`PUT: ${JSON.stringify(req.body)}`);
});

router.post('/', (req, res) => {//salvar
    res.send(`POST: ${JSON.stringify(req.body)}`);
});


router.delete('/:id', (req, res) => {//delete
    res.send(`DELETE: ${req.params.id}`);
});
module.exports = router