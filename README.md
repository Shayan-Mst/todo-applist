# 📝 Task Organizer App

A React-based task management application with support for task categorization, filtering, and local data persistence.

---

## 📄 Description

An app to organize your tasks with the following information:
- Title
- Description
- Date
- Mark as completed
- Mark as important

Tasks are organized into the following routes:
- Today’s tasks
- Important tasks
- Incomplete tasks
- Completed tasks
- All tasks
- Tasks by directory (folder)

Directories and tasks can be edited or deleted. However, there is a default directory called **"Main"** that **cannot be edited or deleted**.

The task list can be displayed in the following order:
- Nearest deadline
- Farthest deadline
- Completed
- Incomplete

You can search for specific tasks using the search bar.

Tasks due today are displayed in the user section and in notifications.

All task data, directory data, and dark mode preferences are saved to **localStorage**.

---

## 🎯 Objective

This project was mainly developed to practice the following technologies:
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React JS

---

## 🛠️ Tools Used

- React JS  
- TypeScript  
- Tailwind CSS  
- Redux Toolkit  
- React Router DOM  
- HTML  
- Figma (for prototyping)

---

## ▶️ How to Run Locally

```bash
git clone https://github.com/aridsm/tasks-app.git
cd tasks-app
npm install
npm start
