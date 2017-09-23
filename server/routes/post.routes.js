import { Router } from 'express'
import * as PostController from '../controllers/post.controller'
import * as HelpSeekerController from '../controllers/helpSeeker.controller'
const router = new Router()

// Get all Posts
router.route('/posts').get(PostController.getPosts)

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost)

// Add a new Post
router.route('/posts').post(PostController.addPost)

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost)

// Get all HelpSeekers
router.route('/helpSeekers').get(HelpSeekerController.getHelpSeekers)

// Get one HelpSeeker by cuid
router.route('/helpSeekers/:cuid').get(HelpSeekerController.getHelpSeeker)

// Add a new HelpSeeker
router.route('/helpSeekers').post(HelpSeekerController.addHelpSeeker)

// Delete a HelpSeeker by cuid
router.route('/helpSeekers/:cuid').delete(HelpSeekerController.deleteHelpSeeker)

export default router
