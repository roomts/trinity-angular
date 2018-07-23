const { Posts, Comments } = require('../../models')
const functions = require('./functions')

module.exports.PostsController = {
  async createPost (req, res) {
    try {
      if (req.body.title !== '' && req.body.text !== '') {
        await functions.createPost(req)
        return res.send(req.body)
      } else {
        res.send({
          success: false,
          error: 'Erro ao inserir'
        })
      }
    } catch (error) {
      console.log(error.message)
      res.send({
        success: false,
        error: error.message
      })
    }
  },

  async createComments (req, res) {
    try {
      console.log(req.body.PostId)
      if (req.body.text !== '' && req.body.PostId !== '') {
        await functions.createComments(req)
        return res.send(req.body)
      } else {
        res.send({
          success: false,
          error: 'Erro ao inserir'
        })
      }
    } catch (error) {
      res.send({
        success: false,
        error: error.message
      })
    }
  },

  getPosts (req, res) {
    try {
      Posts.findAll({
        attributes: ['id', 'title', 'text']
      }).then(posts => {
        if (posts) {
          return res.send(posts)
        } else {
          res.send({
            success: false,
            error: 'Erro ao listar'
          })
        }
      })
    } catch (error) {
      res.send({
        success: false,
        error: error.message
      })
    }
  },

  getPost (req, res) {
    try {
      Posts.findOne({
        where: {
          id: req.params.id
        }
      }).then(posts => {
        return res.send(posts)
      })
    } catch (error) {
      res.send({
        success: false,
        error: error.message
      })
    }
  },

  getComments (req, res) {
    try {
      Comments.findAll({
        where: {
          PostId: req.params.id
        }
      }).then(comments => {
        return res.send(comments)
      })
      console.log(req)
    } catch (error) {
      res.send({
        success: false,
        error: error.message
      })
    }
  },

  async deletePosts (req, res) {
    try {
      let destroy = Posts.destroy({
        where: {
          id: req.body.id
        }
      })
      if (destroy) {
        res.send('Deletado com sucesso!')
      }
    } catch (error) {
      res.send({
        success: false,
        error: error.message
      })
    }
  }
}
