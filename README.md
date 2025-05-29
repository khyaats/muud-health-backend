# MUUD Health – Community Wellness App (Backend)

This repository contains the backend implementation of two core modules from the MUUD Health MVP:
- **Journaling functionality**
- **Contact management system**

Built using **Node.js**, **Express**, and **PostgreSQL**, this backend supports journaling and contact data storage and retrieval through RESTful APIs.

---

## 📦 Technologies Used

- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- dotenv (for environment variable management)
- CORS middleware

---

## 🚀 Features

### 📓 Journal Module

- **POST /journal/entry**  
  Accepts: `user_id`, `entry_text`, `mood_rating` (1–5), `timestamp`  
  Stores a journal entry

- **GET /journal/user/:id**  
  Retrieves all journal entries for a specific user

### 📇 Contact Module

- **POST /contacts/add**  
  Accepts: `user_id`, `contact_name`, `contact_email`, `contact_phone`  
  Stores a new contact

- **GET /contacts/user/:id**  
  Retrieves all contacts for a specific user

---

## 🛠 Local Setup Instructions

### ✅ Clone and Install

```bash
git clone https://github.com/khyaats/muud-health-backend.git
cd muud-health-backend
npm install
