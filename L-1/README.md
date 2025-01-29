# Emmet, Libraries vs Frameworks, and Web Concepts

## 1. What is Emmet?
Emmet is a tool that helps you write HTML and CSS faster. It uses short codes (called abbreviations) that expand into full code.  
For example:  
Typing `div.container` and pressing **Tab** turns into:
```html
<div class="container"></div>
```
This saves time and makes coding easier. It works in VS Code and other editors. 

---

## 2. Difference between a Library and a Framework

| Feature        | Library                 | Framework                  |
|--------------|---------------------|----------------------|
| **Control**   | You control it        | It controls your code  |
| **Purpose**   | Specific tasks        | Full application structure |
| **Integration** | Easy to add           | May require major changes |
| **Examples**  | jQuery, NumPy, React | AngularJS, Django, Rails |

---

## 3. What is a CDN? Why do we use it?
A **Content Delivery Network (CDN)** is a system of distributed servers that enhances the delivery of web content by serving it from locations closer to the user.  
This network improves **loading speeds** and reduces **latency** by caching content, such as images, videos, and web pages, on multiple servers worldwide.

---

## 4. Why is React called React?
React is known as **"React"** because it allows developers to **react** efficiently to changes in data and user interactions.  
This is achieved through its **Virtual DOM**, which enhances performance by minimizing direct manipulation of the actual DOM—a common bottleneck in web applications.

---

## 5. Difference between React and ReactDOM

### **React**
- **What it is:** A library for building user interfaces.
- **Function:** Manages components and their behavior using the Virtual DOM.

### **ReactDOM**
- **What it is:** A package for rendering React components in the browser.
- **Function:** Connects React with the actual DOM to display components on the web page.

---

## 6. Difference between `react.development.js` and `react.production.js` files via CDN
- **`react.development.js`**: Used in development, offers **detailed debugging**, but has a **larger size**.
- **`react.production.js`**: Optimized for production, provides **better performance**, **smaller size**, and **minimal error messages**.

---

## 7. What are `async` and `defer` in web development?

| Feature         | Async                          | Defer                         |
|---------------|--------------------------|-------------------------|
| **Loading**   | Loads while HTML is parsing  | Loads while HTML is parsing |
| **Execution Order** | No specific order         | Runs in order             |
| **Timing**    | Runs as soon as loaded      | Runs after all HTML is loaded |
| **Best For**  | Independent scripts        | Scripts that need to access the DOM |

---

