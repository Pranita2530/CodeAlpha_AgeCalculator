#  Age Calculator Web App

A modern and responsive Age Calculator built using HTML, CSS, Bootstrap, and JavaScript.  
This application calculates the exact age in Years, Months, and Days based on a user's birth date.

---

## 🚀 Features

-  Calculates precise age (Years, Months, Days)
-  Validates future dates
-  Smooth result animation
-  Modern dark UI design
-  Responsive layout (Mobile & Desktop)
-  Clean and structured code

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Vanilla JS - Date API)

---

## 📂 Project Structure

```text
Age-Calculator
│
├── index.html        # Main UI
├── style.css         # Styling & animations
├── script.js         # Age calculation logic
├── calculator.png
└── README.md         # Project documentation
```

---

## 🧠 How It Works

The application:

1. Takes user input (First Name, Last Name, Year, Month, Day).
2. Creates a JavaScript `Date` object from the input.
3. Compares it with today's date.
4. Adjusts negative month/day differences using borrowing logic.
5. Displays exact age with animation.

The calculation handles:
- Month difference adjustment
- Day borrowing from previous month
- Future date validation
