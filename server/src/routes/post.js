var express = require('express')
var router = express.Router()
const {PostsController} = require('../controllers/posts')

router.put('', PostsController.createPost)
router.get('', PostsController.getPosts)
router.get('/:id', PostsController.getPost)
router.delete('', PostsController.deletePosts)
router.put('/comments', PostsController.createComments)
router.get('/comments/:id', PostsController.getComments)

module.exports = router
