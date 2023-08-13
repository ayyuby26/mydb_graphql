import { g, auth, config } from '@grafbase/sdk'

const account = g.model('Account', { 
  displayName: g.string(),
  email: g.string(),
  password: g.string(),
  note: g.string().optional(),
  url:g.string().optional(),
  photoUrl:g.string().optional(),
})

const user = g.model('User', {
  ID: g.string().unique(),
  displayName: g.string(),
  email: g.string().unique(),
  photoUrl: g.string(), 
}).search()

export default config({ schema: g })