import { g } from '@grafbase/sdk'
import { comment } from './comment'
import { post } from './post'

export const user = g.model('User', {
  name: g.string(),
  email: g.email().optional(),
  posts: g.relation(post).optional().list(),
  comments: g.relation(comment).optional().list()
})
