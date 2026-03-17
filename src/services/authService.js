// import { api } from './api.js'

// export const authService = {
//   /**
//    * GET /user/login/{email}/{password}
//    * Returns: { token: string }
//    */
//   login(email, password) {
//     const e = encodeURIComponent(String(email ?? '').trim())
//     const p = encodeURIComponent(String(password ?? ''))
//     return api.get(`/user/login/${e}/${p}`)
//   },
// }

import { api } from './api.js'

export const authService = {
  login(email, password) {
    const e = encodeURIComponent(String(email ?? '').trim())
    const p = encodeURIComponent(String(password ?? ''))
    return api.get(`/user/login/${e}/${p}`)
  },

  register(user) {
    return api.post("/user/register", user)
  }
}

