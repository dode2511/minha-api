import { Roupa } from "../models/Roupas"


export const roupaIndex = async (req, res) => {
    try {
      const roupas = await Roupa.findAll()
      res.status(200).json(roupas)
    } catch (error) {
      res.status(400).send(error)
    }
  }
  
  export const filmeDestaques = async (req, res) => {
    try {
      const roupas = await Filme.findAll({ where: { destaque: true } })
      res.status(200).json(roupas)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  
  export const roupaCreate = async (req, res) => {
    const { nome,marca,preco,cor,foto,descricao } = req.body
  
    // se não informou estes atributos
    if (!nome || !marca || !preco || !cor || !foto || !descricao ) {
      res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
      return
    }
  
    try {
      const roupas = await Roupa.create({
        nome, marca, preco, cor, descricao, foto
      });
      res.status(201).json(roupas)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  
  export const roupaDestroy = async (req, res) => {
    const { id } = req.params
  
    try {
      await Roupa.destroy({ where: { id } });
      res.status(200).json({ msg: "Ok! Removido com Sucesso" })
    } catch (error) {
      res.status(400).send(error)
    }
  }
  
  export const RoupaShow = async (req, res) => {
    const { id } = req.params
  
    try {
      const roupas = await Roupa.findByPk(id)
      res.status(200).json(roupas)
    } catch (error) {
      res.status(400).send(error)
    }
  }