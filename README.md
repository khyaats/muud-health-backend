```markdown
# MUUD Health – Backend

This is the backend implementation for the MUUD Health MVP challenge, covering two core modules:

- 🧘 Journaling Functionality
- 📇 Contact Management System

Built using:
- **Node.js** + **Express.js**
- **PostgreSQL** for data storage
- Hosted on **Render**

---

## 📦 Tech Stack

- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Hosting**: Render.com
- **Environment Variables**: via `.env` file

---

## 📁 Project Structure

```

muud\_backend/
├── controllers/
│   ├── journalController.js
│   └── contactsController.js
├── routes/
│   ├── journal.js
│   └── contacts.js
├── db.js
├── index.js
├── .env
├── package.json
└── README.md

````

---

## 🚀 API Endpoints

### 📘 Journaling

#### POST `/journal/entry`
Create a new journal entry.

**Body:**
```json
{
  "user_id": 1,
  "entry_text": "Feeling great today!",
  "mood_rating": 4,
  "timestamp": "2025-05-29T12:00:00Z"
}
````

#### GET `/journal/user/:id`

Get all journal entries for a given `user_id`.

---

### 📇 Contacts

#### POST `/contacts/add`

Add a new contact.

**Body:**

```json
{
  "user_id": 1,
  "contact_name": "John Doe",
  "contact_email": "john@example.com",
  "contact_phone": "1234567890"
}
```

#### GET `/contacts/user/:id`

Get all contacts for a given `user_id`.

---

## 🔐 Environment Setup

Create a `.env` file:

```
PORT=3000
DB_HOST=<your-db-host>
DB_PORT=5432
DB_NAME=muud_db
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>
```

---

## 🧪 Local Development

1. Clone the repo
   `git clone https://github.com/khyaats/muud-health-backend.git`

2. Install dependencies
   `npm install`

3. Start the server
   `npm start`

Make sure your PostgreSQL database is running and accessible via `.env` credentials.

---

## 🌐 Live Deployment

Backend is deployed at:
👉 **[https://muud-health-backend.onrender.com](https://muud-health-backend.onrender.com)**

Example test:

```bash
curl -X POST https://muud-health-backend.onrender.com/journal/entry \
  -H "Content-Type: application/json" \
  -d '{"user_id":1,"entry_text":"Test from curl","mood_rating":3,"timestamp":"2025-05-29T14:00:00Z"}'
```
## 🧪 Running Tests

### ✅ Prerequisites

1. Make sure you have **Node.js** and **npm** installed.

2. Install dependencies (if not already):

   ```bash
   npm install
   ```

3. Create a **test database** in PostgreSQL (example name: `muud_db_test`).

4. Add the test database connection in your `.env` file:

   ```
   NODE_ENV=test
   DATABASE_URL=postgresql://username:password@localhost:5432/muud_db_test
   ```

   Replace `username`, `password`, and `localhost:5432` with your PostgreSQL credentials.

---

### ▶️ Run All Tests

```bash
npm test
```

This runs all tests using [Jest](https://jestjs.io/) and [Supertest](https://github.com/visionmedia/supertest), with handles automatically closed.

---

## 📝 Notes

* Validate mood\_rating (1–5)
* Ensure correct email format and 10-digit phone numbers in `/contacts/add`
* Deployed using `Render.com`
* Currently supports **single user** (`user_id = 1`); can be extended to JWT-auth in future
* The test runner uses `cross-env` to ensure compatibility across Windows, macOS, and Linux.
* Tests automatically connect to your test PostgreSQL database.
* Make sure your test DB is running and has the correct schema (tables like `contacts`, `journal_entries`).

---

## 📄 License

ISC © 2025 MUUD Health

