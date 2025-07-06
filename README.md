# 💰 Personal Finance Visualizer

A modern and responsive full-stack web application to manage **personal finances** — built with **Next.js (App Router)**, **MongoDB**, **Recharts**, and **shadcn/ui**. It helps users track expenses, categorize spending, and visualize monthly trends and budget comparisons.

---

## 🎯 Project Overview

| Stage       | Features                                                                 |
|-------------|--------------------------------------------------------------------------|
| ✅ Stage 1  | Add/Edit/Delete transactions, Monthly Expense Chart, Form Validation     |
| ✅ Stage 2  | Predefined Categories, Category Pie Chart, Summary Dashboard             |
| ✅ Stage 3  | Set Budgets, Budget vs Actual Chart, Spending Insights                   |

This project **completes all 3 stages** as defined in the assignment and does **not include login/signup**.

---

## 🛠️ Tech Stack

| Category       | Technology                          |
|----------------|-------------------------------------|
| Framework      | [Next.js 14 (App Router)](https://nextjs.org) |
| Frontend       | [React 18](https://react.dev) + [shadcn/ui](https://ui.shadcn.com) |
| Charts         | [Recharts](https://recharts.org)    |
| Styling        | [Tailwind CSS](https://tailwindcss.com) |
| Database       | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) via Mongoose |
| API Routes     | Next.js Server Actions (`/app/api`) |

---

## 🧩 Features by Stage

### 🔹 Stage 1: Transaction Tracking
- [x] Add/Edit/Delete transactions with validation
- [x] Monthly bar chart (Recharts)
- [x] Responsive form and list layout

### 🔸 Stage 2: Categories & Summary Dashboard
- [x] Predefined categories (Food, Travel, Bills, etc.)
- [x] Category-wise Pie Chart
- [x] Summary cards showing:
  - Total spent
  - Top category
  - Highest transaction
  - Total transactions

### 🔶 Stage 3: Budgeting & Comparison
- [x] Set monthly category-wise budgets
- [x] Budget vs Actual chart (Grouped Bar Chart)
- [x] Visual spending insights on dashboard

---

## 📂 Folder Structure

```
personal-finance-visualizer/
├── app/
│   ├── layout.tsx             # App layout (global styles)
│   ├── page.tsx               # Main dashboard
│   └── api/
│       └── transactions/      # MongoDB API routes (CRUD)
│           └── route.tsx
│
├── components/
│   ├── TransactionForm.tsx
│   ├── TransactionList.tsx
│   ├── MonthlyBarChart.tsx
│   ├── CategoryPieChart.tsx
│   ├── BudgetComparisonChart.tsx
│   └── ui/                    # shadcn/ui-based UI elements
│       ├── button.tsx
│       ├── input.tsx
│       └── label.tsx
│
├── lib/
│   ├── db.ts                  # MongoDB connection helper
│   └── utils.ts
│
├── models/
│   └── transaction.ts         # Mongoose schema for transactions
│
├── styles/
│   └── globals.css            # Tailwind base styles
│
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── package-lock.json
```
---

## 📈 Visuals

| Component                | Description                         |
| ------------------------ | ----------------------------------- |
| 📊 MonthlyBarChart       | Monthly trends of total expenses    |
| 📈 CategoryPieChart      | Visual breakdown by category        |
| 📉 BudgetComparisonChart | Actual vs Budget grouped comparison |

---

### ✅ **📥 Requirements & Installation**

## 📥 Requirements

Before installation, ensure the following are set up:

| Requirement    | Version / Info                    |
|----------------|-----------------------------------|
| Node.js        | >= 18.x                           |
| npm or yarn    | npm >= 9.x recommended            |
| MongoDB        | MongoDB Atlas or local instance   |
| Vercel (optional) | For live deployment            |

> 💡 The project uses `Tailwind CSS`, `shadcn/ui`, and `Recharts`. Styling is pre-configured.

---

## 🚀 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/Bhakthi-Shetty7811/personal-finance-visualizer
cd personal-finance-visualizer
npm install
```

### 🌍 Environment Setup

Create a `.env.local` file:

```env
MONGODB_URI=your-mongodb-connection-url
```

Then run the development server:

```bash
npm run dev
```

View the app:
   Visit `http://localhost:3000` in your browser.

> ✅ You’re now ready to track transactions, view charts, and manage budgets!

---

## 🌐 Live Demo

> 🔗 [Live Site (Vercel)](https://personal-finance-visualizer-six-tau.vercel.app/)

---

## 🧠 Evaluation Alignment

| Evaluation Criteria    | Covered                                |
| ---------------------- | -------------------------------------- |
| ✅ Feature Completion | All 3 stages completed                 |
| ✅ Code Quality       | Modular, type-safe, scalable           |
| ✅ UI/UX Design       | Responsive, clean, consistent styling  |
| ✅ No Authentication  | Follows rule: no login/signup included |

---

## 📝 Notes

* MongoDB is used for real-time data persistence
* Tailwind + shadcn/ui ensures accessible and styled forms
* Fully modular React components
* `app/api/transactions/route.tsx` handles API logic via Server Actions

---

## 👩‍💻 Author

**Bhakthi Shetty**
Final-Year B.Tech IT 2025, UMIT SNDT, GitHub: [Bhakthi-Shetty7811](https://github.com/Bhakthi-Shetty7811), Email: bhakthi.shetty7811@gmail.com

```
