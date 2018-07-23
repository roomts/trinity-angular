const { Posts, Comments } = require('../../models')

module.exports = {
  async createPost (req) {
    const posts = await Posts.create(req.body)
    return {
      success: true,
      posts: posts
    }
  },
  async createComments (req) {
    const comments = await Comments.create(req.body)
    return {
      success: true,
      comments: comments
    }
  }
}
