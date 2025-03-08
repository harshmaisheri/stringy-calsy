# 🧮 String Calculator TDD (React + TypeScript + Vite)

This project implements a **String Calculator** following **Test-Driven Development (TDD)** principles. It includes a simple UI built with **React + TypeScript + Vite** and test cases written using **Vitest**.

---

## 🚀 Features
- ✅ Adds numbers from a **comma-separated string**.
- ✅ Supports **newline (`\n`) as a delimiter**.
- ✅ Allows **custom delimiters** (e.g., `"//;\n1;2"` → `3`).
- ✅ Handles **multi-character custom delimiters** (e.g., `"//[***]\n1***2***3"` → `6`).
- ✅ Throws an **error for negative numbers** (e.g., `"1,-2"` → `"Negative numbers not allowed: -2"`).
- ✅ Uses **TDD best practices** with **Vitest**.

---

## 🖥️ Live Demo
⚡ **[Try the App](#)** (Deploy the app and update the link)

---

## 🛠️ Tech Stack
- **Frontend:** React + TypeScript + Vite  
- **State Management:** React Hooks  
- **Testing:** Vitest + React Testing Library  
- **Development Tools:** Husky (pre-commit hooks), ESLint, Prettier  

---

## 📜 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/string-calculator-tdd.git
cd string-calculator-tdd
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
The app will be available at **`http://localhost:5173/`**.

### 4️⃣ Run Tests
```sh
npm test
```

---

## ✅ How It Works

### 🔹 Usage Example
| Input String       | Expected Output |
|--------------------|----------------|
| `""`              | `0`             |
| `"1"`            | `1`             |
| `"1,2,3"`        | `6`             |
| `"1\n2,3"`       | `6`             |
| `"//;\n1;2;3"`   | `6`             |
| `"//[***]\n1***2***3"` | `6` |
| `"1,-2,3"`       | ❌ **Error:** `"Negative numbers not allowed: -2"` |

### 🏗️ TDD Development Steps
1. **Write a failing test** for a small feature.
2. **Implement the minimal code** to pass the test.
3. **Refactor** while keeping tests green.
4. **Repeat** until the full functionality is built.

---

## 🧪 Testing Strategy
- **Unit Tests** for the `add()` function in `StringCalculator.tsx`.
- **Edge Cases Tested:**
  - Empty string (`""` → `0`)
  - Single number (`"1"` → `1`)
  - Multiple numbers (`"1,2,3"` → `6`)
  - Newline as a delimiter (`"1\n2,3"` → `6`)
  - Custom delimiters (`"//;\n1;2"` → `3`)
  - Multi-character delimiters (`"//[***]\n2***13***49"` → `64`)
  - Negative numbers (`"-1,82,-32, 87,-43"` → **Error**)
  
### 🏃‍♂️ Run Tests with Vitest
```sh
npm test
```

---

## 🎯 Project Structure
```
📂 string-calculator-tdd
├── 📁 src
│   ├── 📂 components
│   │   ├── 📂 StringCalculator.tsx 
│   │   │   ├──index.tsx    # Main calculator logic
│   │   │   ├── StringCalculator.test.ts # Unit tests with Vitest
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
├── .husky/                        # Git hooks for pre-commit testing
├── package.json
├── vite.config.ts
├── README.md
```

---

## 🛡️ Husky Pre-Commit Hook
To **prevent bad commits**, we use **Husky** to run tests before every commit:
```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🚀 Running tests before commit..."
npm test -- --bail=1

TEST_EXIT_CODE=$?

if [ "$TEST_EXIT_CODE" -ne 0 ]; then
  echo "❌ Tests failed. Commit aborted."
  exit 1
else
  echo "✅ All tests passed! Proceeding with commit."
  exit 0
fi
```

### **Disable Husky Temporarily**
```sh
git commit --no-verify -m "Commit without running tests"
```

---

## 📌 Future Improvements
🔹 Add UI animations for a better user experience.  
🔹 Improve error messages and user-friendly alerts.  
🔹 Deploy the app on **Vercel / Netlify** for public access.  

---

## 🤝 Contributing
Want to improve this project?  
1. **Fork the repo**
2. **Create a branch** (`feature-new`)
3. **Commit your changes** (`git commit -m "Added new feature"`)
4. **Push to GitHub** (`git push origin feature-new`)
5. **Open a Pull Request** 🚀

---

## 📄 License
This project is licensed under the **MIT License**.  

💙 **Built with React + TypeScript + Vite**  
Happy coding! 🚀  

