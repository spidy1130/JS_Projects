# Interactive Click Animation with Dynamic Text and Color Effects

##  Overview

This project is an interactive web application built using **Vanilla JavaScript** that creates dynamic visual effects on user clicks.
Whenever the user clicks anywhere on the screen, a colorful circular element appears at the click position with a random greeting text and fades away after a few seconds.

It demonstrates core frontend concepts like **DOM manipulation, event handling, and dynamic styling**, along with basic animation.

---

##  Features

* 🖱️ Generates a circle at the exact click position
* 🎨 Random background color for every click
* 💬 Displays random greeting text (Hi, Hola, Welcome, etc.)
* ⏳ Auto-removes elements after 5 seconds
* ⚡ Lightweight and responsive
* 🎬 Smooth fade-out animation using CSS

---

## Technologies Used

* HTML
* CSS
* JavaScript (Vanilla JS)

---

## Project Structure

```
project-folder/
│── index.html
│── style.css
│── script.js
```

---

## How It Works

* Listens for a **click event** on the document body
* Captures mouse position using the event object (`clientX`, `clientY`)
* Dynamically creates a `<div>` element
* Assigns:

  * random text
  * random background color
  * position based on click
* Appends element to DOM
* Removes it after 5 seconds using `setTimeout`

---

## Demo Behavior

* Click anywhere → colorful circle appears with text
* Circle expands/fades → disappears automatically

---

## Concepts Covered

* DOM Manipulation (`createElement`, `appendChild`, `remove`)
* Event Handling (`click`, event object)
* Dynamic Styling (`style`, positioning)
* Randomization (colors, text)
* Timers (`setTimeout`)
* CSS Animations

---

## 🙌 Author
Aman Baranwal
