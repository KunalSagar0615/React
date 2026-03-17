# 🏦 Keystone Banking Application – Frontend

A modern **Core Banking Frontend Application** built using **React + Vite**.  
This project provides a secure and responsive interface for banking operations such as account management, deposits, withdrawals, transfers, and administrative controls.

---

## 🚀 Features

### 👨‍💼 Employee Dashboard
- Create Saving and Current Accounts
- View all accounts
- Search accounts by:
  - Account Number
  - Email
  - Mobile Number
- Deposit money
- Withdraw money
- Transfer money between accounts
- View transaction history
- Update account details

### 👑 Admin Dashboard
- Manage employees
- Configure banking rules
- Set **Minimum Balance**
- Set **Withdraw Limit**
- Responsive admin panel

---

## 🧰 Tech Stack

| Technology | Usage |
|------------|------|
| **React.js** | Frontend UI |
| **Vite** | Fast development build tool |
| **Tailwind CSS** | Styling |
| **Axios** | API communication |
| **React Router** | Routing |
| **Lucide Icons** | UI icons |
| **JWT Authentication** | Secure login |

---

## 📂 Project Structure
# 🏦 Keystone Banking Application – Frontend

A modern **Core Banking Frontend Application** built using **React + Vite**.  
This project provides a secure and responsive interface for banking operations such as account management, deposits, withdrawals, transfers, and administrative controls.

---

## 🚀 Features

### 👨‍💼 Employee Dashboard
- Create Saving and Current Accounts
- View all accounts
- Search accounts by:
  - Account Number
  - Email
  - Mobile Number
- Deposit money
- Withdraw money
- Transfer money between accounts
- View transaction history
- Update account details

### 👑 Admin Dashboard
- Manage employees
- Configure banking rules
- Set **Minimum Balance**
- Set **Withdraw Limit**
- Responsive admin panel

---

## 🧰 Tech Stack

| Technology | Usage |
|------------|------|
| **React.js** | Frontend UI |
| **Vite** | Fast development build tool |
| **Tailwind CSS** | Styling |
| **Axios** | API communication |
| **React Router** | Routing |
| **Lucide Icons** | UI icons |
| **JWT Authentication** | Secure login |

---

## 📂 Project Structure
src/
│
├── accounts/ # Account related pages
├── admin/ # Admin dashboard pages
├── auth/ # Login & Register
├── components/ # Reusable UI components
├── context/ # Auth & Toast contexts
├── employee/ # Employee dashboard
├── hooks/ # Custom React hooks
├── layouts/ # Admin & Employee layouts
├── pages/ # Common pages
├── routes/ # Protected routing
├── services/ # API services
├── transactions/ # Transaction pages
└── utils/ # Utility functions

---

## 🔐 Authentication

Authentication is implemented using **JWT Tokens**.

Features:
- Role based access
- Protected routes
- Automatic session handling
- Logout on unauthorized access

Roles supported:
- ADMIN
- EMPLOYEE

---

## 🌐 Backend API

This frontend connects to a **Spring Boot Backend API**.

Backend repository:
- https://corebanking-application.onrender.com

API communication handled via:
- src/services/api.js
