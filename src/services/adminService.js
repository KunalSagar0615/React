import { api } from './api.js'

export const adminService = {
  /** GET /admin/display-employees */
  getEmployees() {
    return api.get('/admin/display-employees')
  },

  /** DELETE /admin/delete-employee/{empId} */
  deleteEmployee(empId) {
    const id = encodeURIComponent(String(empId))
    return api.delete(`/admin/delete-employee/${id}`)
  },

  /** PUT /admin/update-min-balance/{type}/{amount} */
  updateMinBalance(type, amount) {
    const t = encodeURIComponent(String(type))
    const a = encodeURIComponent(String(amount))
    return api.put(`/admin/update-min-balance/${t}/${a}`)
  },

  /** PUT /admin/update-withdraw-limit/{type}/{amount} */
  updateWithdrawLimit(type, amount) {
    const t = encodeURIComponent(String(type))
    const a = encodeURIComponent(String(amount))
    return api.put(`/admin/update-withdraw-limit/${t}/${a}`)
  },
}

