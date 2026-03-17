import { api } from './api.js'

export const accountService = {
  /** POST /account/create-saving-account */
  createSavingAccount(body) {
    return api.post('/account/create-saving-account', body)
  },

  /** POST /account/create-current-account */
  createCurrentAccount(body) {
    return api.post('/account/create-current-account', body)
  },

  /** GET /account/display-all-accounts */
  getAllAccounts() {
    return api.get('/account/display-all-accounts')
  },

  /** GET /account/display-all-saving-accounts */
  getAllSavingAccounts() {
    return api.get('/account/display-all-saving-accounts')
  },

  /** GET /account/display-all-current-accounts */
  getAllCurrentAccounts() {
    return api.get('/account/display-all-current-accounts')
  },

  /** GET /account/search-by-account-number/{acno} */
  searchByAccountNumber(acno) {
    const a = encodeURIComponent(String(acno))
    return api.get(`/account/search-by-account-number/${a}`)
  },

  /** GET /account/search-by-email/{email} */
  searchByEmail(email) {
    const e = encodeURIComponent(String(email ?? '').trim())
    return api.get(`/account/search-by-email/${e}`)
  },

  /** GET /account/search-by-mobile/{mobile} */
  searchByMobile(mobile) {
    const m = encodeURIComponent(String(mobile ?? '').trim())
    return api.get(`/account/search-by-mobile/${m}`)
  },

  /** GET /account/check-account-balance/{acno} */
  checkBalance(acno) {
    const a = encodeURIComponent(String(acno))
    return api.get(`/account/check-account-balance/${a}`)
  },

  /** PUT /account/deposit-amount/{acno}/{amount} */
  deposit(acno, amount) {
    const a = encodeURIComponent(String(acno))
    const amt = encodeURIComponent(String(amount))
    return api.put(`/account/deposit-amount/${a}/${amt}`)
  },

  /** PUT /account/withdraw-amount/{acno}/{amount} */
  withdraw(acno, amount) {
    const a = encodeURIComponent(String(acno))
    const amt = encodeURIComponent(String(amount))
    return api.put(`/account/withdraw-amount/${a}/${amt}`)
  },

  /** PUT /account/update-account/{acno} */
  updateAccount(acno, body) {
    const a = encodeURIComponent(String(acno))
    return api.put(`/account/update-account/${a}`, body)
  },

  /** DELETE /account/close-account/{acno} */
  closeAccount(acno) {
    const a = encodeURIComponent(String(acno))
    return api.delete(`/account/close-account/${a}`)
  },
}

