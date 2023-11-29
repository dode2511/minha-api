import { Router } from "express"
import { RoupaShow, roupaCreate, roupaDestroy, roupaIndex } from "./controllers/RoupaController.js"
import { clienteCreate, clienteIndex, clienteLogin } from "./controllers/clienteController.js"

const router = Router()

router.get('/clientes', clienteIndex)
      .post('/clientes', clienteCreate)
      .post('/login', clienteLogin)
  

router.get('/roupa', roupaIndex)
      .post('/roupa', roupaCreate)
      .get('/roupa/:id', RoupaShow)
      .delete('/login',roupaDestroy)
 
//router.get('/avaliacoes', avaliacaoIndex)
  //    .post('/avaliacoes', avaliacaoCreate)
  //    .delete('/avaliacoes/:id', avaliacaoDestroy)
   //   .get('/avaliacoes/graph', avaliacaoGraphEstrelas)
  //    .get('/avaliacoes/graph_dias', avaliacaoGraphDias)
  //    .get('/avaliacoes/filme/:filme_id', avaliacaoFilme)

//router.get('/dados_gerais', dadosGerais)



export default router