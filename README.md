# OOPS-CONCEPT
# 🚀 Employee Management System (OOP in JavaScript)

![GitHub repo size](https://img.shields.io/github/repo-size/your-username/your-repo-name)
![GitHub stars](https://img.shields.io/github/stars/your-username/your-repo-name?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/your-repo-name?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/your-repo-name)
![License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-Backend-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-OOP-yellow)

---

## 📌 Project Overview

This project demonstrates **Object-Oriented Programming (OOP)** concepts using **JavaScript (Node.js)** by implementing an Employee Payroll System.

It covers:

* Inheritance
* Method Overriding
* Polymorphism
* Abstract Method Simulation
* Virtual Methods
* Interface-like Behavior
* Salary Computation Logic

---

## 🧠 OOP Concepts Implemented

### 🔹 Employee (Base Class)

* Stores common employee details
* Virtual method: `computePay()`
* Abstract method: `doWork()`

### 🔹 SalesEmployee (Derived Class)

* Inherits from Employee
* Adds `commission`
* Overrides `computePay()`
* Implements `doWork()`

### 🔹 SalesManager (Advanced Derived Class)

* Inherits from SalesEmployee
* Adds `bonus`
* Overrides `computePay()`
* Includes training-related methods

---

## 📂 Project Structure

```
Employee-OOP-Project/
│
├── employee.js
├── salesemployee.js
├── salesmanager.js
├── index.js
└── README.md
```

---

## 💰 Salary Calculation Logic

**Employee Pay**

```
basicSalary + hra − tax
```

**SalesEmployee Pay**

```
basicSalary + hra − tax + commission
```

**SalesManager Pay**

```
basicSalary + hra − tax + commission + bonus
```

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/your-repo-name.git
```

### 2️⃣ Navigate to Project Folder

```
cd your-repo-name
```

### 3️⃣ Run the Application

```
node index.js
```

---

## 📌 Sample Output

```
Employee Pay: 33000
SalesEmployee Pay: 40000
SalesManager Pay: 55000
SalesEmployee is working.
SalesManager is working.
SalesManager conducting training session.
```

---

## 🛠 Technologies Used

* JavaScript (ES6)
* Node.js
* OOP Concepts

---

## 🎯 Learning Outcomes

This project helps you understand:

* Class-based design in JavaScript
* Constructor chaining using `super`
* Method overriding
* Runtime polymorphism
* Abstract method enforcement
* Clean code structure

---

## 👨‍💻 Author

**Sachin Kharat**
BCA Student | Aspiring Software Developer

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🛠 Improve it

---

## 📜 License

This project is licensed under the **MIT License**.
