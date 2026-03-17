import axios from 'axios'

const BASE_URL = 'https://corebanking-application.onrender.com'
// const BASE_URL = 'http://localhost:8080'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
})

/* ---------------- REQUEST INTERCEPTOR ---------------- */

api.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

/* ---------------- RESPONSE INTERCEPTOR ---------------- */

api.interceptors.response.use(
  (response) => response,

  (error) => {

    const status = error?.response?.status

    if (status === 401) {

      // token expired
      localStorage.removeItem("token")
      localStorage.removeItem("role")
      localStorage.removeItem("email")

      if (window.location.pathname !== "/login") {
        window.location.replace("/login")
      }

    }

    if (status === 403) {
      console.error("Access forbidden")
    }

    if (status === 404) {
      console.error("Resource not found")
    }

    if (status === 500) {
      console.error("Server error")
    }

    return Promise.reject(error)
  }
)

/* ---------------- ERROR MESSAGE HELPER ---------------- */

export function getApiErrorMessage(err) {

  if (err?.response?.data) {

    if (typeof err.response.data === "string") {
      return err.response.data
    }

    if (err.response.data.message) {
      return err.response.data.message
    }

    if (err.response.data.error) {
      return err.response.data.error
    }

  }

  return err?.message || "Something went wrong"
}