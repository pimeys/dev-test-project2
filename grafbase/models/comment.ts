import { g } from '@grafbase/sdk'
import { post } from './post'
import { user } from './user'

export const comment = g.model('Comment', {
  post: g.relation(post),
  body: g.string(),
  likes: g.int().default(0),
  author: g.relation(() => user).optional()
})
