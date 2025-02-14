# Navbar03 Component Documentation

## Overview

`Navbar03` is a React component that renders a futuristic "bubble-notch" navigation bar using [Framer Motion](https://www.framer.com/motion/). The component features an animated notch that expands on hover and bubble-style navigation links that animate into view.

## Features

- **Animated Notch:** The notch expands from a default size to a larger size when hovered.
- **Bubble Links:** Navigation links are displayed as bubbles that animate (fade and scale) into view on hover.
- **Customizable Props:** The component accepts an array of navigation objects (each with a `name` and a `link`). If no props are passed, it defaults to the preset values.

## Installation

Ensure that you have React and Framer Motion installed in your project:

```bash
npm install react framer-motion
```

### import in the existing file:-

```jsx
import Navbar03 from './utils/Navbar03';

const Props= [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Docs", link: "/docs" },
  { name: "Contact", link: "/contact" },
]

<Navbar03 {props=Props}>
```
