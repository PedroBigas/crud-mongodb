const express = require('express');
const router = express.Router();
var methodOverride = require('method-override');

router.use(methodOverride('_method'))

const linkController = require('../controllers/linkController')


router.get('/', linkController.allLinks)
router.get('/:title', linkController.redirect)

// ROTAS PARA ADICIONAR LINK

router.get('/add',(req,res) => { 
    res.render('add', { error: false, body: {} })
})
router.post('/', express.urlencoded({ extended: true }) , linkController.addLink);


// ROTAS PARA EDIT
router.get('/edit/:id', linkController.loadLink)
router.post('/edit/:id', express.urlencoded({ extended: true }), linkController.editLink)



// ROTAS PARA DELETAR
router.delete('/:id', linkController.deleteLink)
router.delete('/', express.urlencoded({ extended: true }) ,linkController.deleteLink)

module.exports = router