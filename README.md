# 📝 Contract Vendor - Frontend

This is the frontend of the **Contract Vendor** web application. It allows users to create and manage contract records through a clean, responsive UI.

Built using:

- **React**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**

---

## 🚀 Features

- Modern, mobile-responsive UI
- Multi-page navigation using React Router
- Create new contracts using form input
- Dummy contract data display
- Organized folder and component structure

---

## ⚙️ Tech Stack

- **React** – Frontend framework
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first CSS
- **React Router DOM** – Routing across pages

---

## 🔀 React Router DOM

The app uses **React Router DOM v6+** for routing between pages:

- `/` – Home Page  
- `/new-contract` – Create New Contract  
- `/contract/:id` – View specific contract (dynamic route)

Defined inside `App.jsx` using `<Routes>` and `<Route>`.

Also uses `useNavigate()` for redirecting after form submission.

---

## 🧠 React Hooks Used

- `useState` – Manage form input and state
- `useNavigate` – For routing programmatically
- `useEffect` – (Ready for future API integration or side-effects)

---

## 🧪 Dummy Data

Currently, the app uses **dummy contract data** in the frontend only.  
No backend is connected yet — ideal for mockup and UI showcase.

---

## 📁 Project Structure


