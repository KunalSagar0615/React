// import { api } from './api.js'

// export const transactionService = {
//   getAccountTransactions(acno) {
//     const a = encodeURIComponent(String(acno))
//     return api.get(`/account/display-account-transaction/${a}`)
//   },
// }

import { api } from './api.js'

export const transactionService = {

  /** GET /account/display-account-transaction/{acno} */
  getAccountTransactions(acno) {
    const a = encodeURIComponent(String(acno))
    return api.get(`/account/display-account-transaction/${a}`)
  },

  /** POST /account/transfer */
  transferMoney(fromAccount, toAccount, amount) {
    return api.post('/account/transfer', {
      fromAccount,
      toAccount,
      amount
    })
  }

}