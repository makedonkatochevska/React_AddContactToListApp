# React + TypeScript Add Contact to List

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🔗 Demo <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 🧰 Components Overview <br>
  - 📝 Notes <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>

---

## Project Description 📜

This **Contact Management CRUD Application** is a React single-page app built with **TypeScript** designed to manage a list of contacts. It covers core React concepts such as state management, component interaction, prop handling, and CRUD operations — create, read, update, and delete contacts.

### Key Features:

- **Contacts Component**: Iterates and displays a list of contacts.
- **Contact Component**: Shows each contact's name, email, and phone with toggling detail view.
- **AddContact Component**: Form to add new contacts with validation.
- **Delete Functionality**: Remove contacts from the list.
- **Toggle Details**: Expand/collapse contact details.
- **Persistent Storage**: Saves contacts to `localStorage` to maintain data after refresh.
- **TypeScript**: Strict typing used for all components, props, and state.
- **Icons**: Uses FontAwesome icons for interaction (toggle and delete).

---

## Technologies Used ⚙️

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## 🔗 Demo

Check out the live demo of the Adventure Blog App:

👉 [Check it Live](https://react-addcontacttolist-makedonkat.netlify.app/)

---

## Installation 🔨

To run this project locally, follow the steps below:

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/makedonkatochevska/challenges.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

---

## Usage 🚀

### How It Works:

- The **Contacts** component manages the array of contacts, loaded from `localStorage` or initialized with default contacts.
- Each **Contact** displays the name and icons to toggle detailed info (email & phone) or delete the contact.
- The **AddContact** form validates inputs and adds new contacts to the list.
- All updates are saved to `localStorage` for persistence.

---

## 🧰 Components Overview

### 1. **Contacts**

- Contains and manages the list of contacts.
- Passes contact data and handlers to child components.

### 2. **Contact**

- Displays individual contact's name.
- Clicking the **sort-down icon** toggles visibility of email and phone details.
- Clicking the **times icon** deletes the contact.

### 3. **AddContact**

- Form with inputs for name, email, and phone.
- Validates inputs before submitting.
- Adds new contacts to the main contacts list.

---

## Notes 📝

- The contacts list is saved in **localStorage** to keep data persistent after page refresh.
- The project is fully built with **TypeScript** using `.tsx` files.
- All components, props, and functions are strictly typed for better code quality and maintainability.
- Input validation is implemented in the **AddContact** form to prevent empty or invalid entries.
- The UI uses icons to provide a better user experience for toggling details and deleting contacts.

---

## Credits 📝

This project was developed as part of a React + TypeScript workshop focused on CRUD operations, state management, and component communication.

---

## Contact 📞

📫 You can reach me at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or connect with me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
