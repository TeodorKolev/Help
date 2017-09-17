import { Router } from 'express'
import * as PostController from '../controllers/post.controller'
import * as HelpSeekerController from '../controllers/helpSeeker.controller'

const router = new Router()

router.route('/helpSeekers').get(HelpSeekerController.getHelpSeekers)

// Get all Posts
router.route('/posts').get(PostController.getPosts)

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost)

router.route('/details/:_id').get(HelpSeekerController.getHelpSeeker)

// Add a new Post
router.route('/posts').post(PostController.addPost)

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost)

export default router
