# 📝 UpTodo App (React Native)

A simple and intuitive **UpTodo** built using **React Native** and **AsyncStorage**.  
This app helps users add, update, delete, and filter their daily tasks. It also includes a user profile update feature.

---

## 🚀 Features

### ✅ Task Management

- **Add Tasks**
  - Input field to add new todo items
  - Validates input before saving
  - Stores tasks in local device storage using `AsyncStorage`

- **Display Task List**
  - Fetches tasks from AsyncStorage
  - Displays all tasks in a scrollable list
  - Differentiates between pending and completed tasks

- **Update Task Status**
  - Toggle task status with a checkbox
  - Updates task status in real time and persists it

- **Delete Tasks**
  - Each task has a delete button
  - Confirms before deletion
  - Updates AsyncStorage after deletion

- **Filter Tasks**
  - Toggle between **Pending** and **Completed** tabs
  - Displays tasks based on the selected filter

---

### 👤 Profile Management

- Update only the user profile photo
- Select image using react-native-image-picker
- Shows toast notification after successful update
- Saves and displays the updated image from local storage

---

## 🛠 Tech Stack

- **React Native**
- **AsyncStorage**
- `react-native-toast-message` (for success/error toasts)
- `@react-navigation/native` (for navigation)
- `react-native-image-picker` (for profile image upload)
- `BouncyCheckbox` (for animated task checkboxes)

---

## 🔧 Setup & Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install
# or
yarn install

# Run on Android
npx react-native run-android

# Run on iOS (macOS only)
npx react-native run-ios
