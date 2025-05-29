````markdown
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
````

### ⚙️ Environment Variables

Create a `.env` file in the root:

```env
PORT=3000
DATABASE_URL=postgres://youruser:yourpass@localhost:5432/muud_db
```

### 🧱 Database Setup

Run the following SQL to set up required tables:

```sql
CREATE TABLE journal_entries (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  entry_text TEXT NOT NULL,
  mood_rating INTEGER CHECK (mood_rating >= 1 AND mood_rating <= 5),
  timestamp TIMESTAMP NOT NULL
);

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);
```

### ▶️ Start the Server

```bash
npm start
```

Server will run at: `http://localhost:3000`

---

## 📬 API Reference

### Journaling

| Method | Endpoint            | Description                     |
| ------ | ------------------- | ------------------------------- |
| POST   | `/journal/entry`    | Create a new journal entry      |
| GET    | `/journal/user/:id` | Get all journal entries by user |

### Contacts

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/contacts/add`      | Add a new contact       |
| GET    | `/contacts/user/:id` | Get contacts for a user |

---

## 🧑‍💻 Author

Built for the **MUUD Health Developer Coding Challenge**
GitHub: [@khyaats](https://github.com/khyaats)

---

## 📄 License

MIT
