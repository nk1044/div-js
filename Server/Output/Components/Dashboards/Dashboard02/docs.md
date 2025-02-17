# Navbar03 Component Documentation

## Overview

`Dashboard02` is a React component that renders a futuristic.

## Features

- **Customizable Props:** The component accepts an array of navigation objects (each with a `name` and a `link`). If no props are passed, it defaults to the preset values.

## Installation

Ensure that you have React and Framer Motion installed in your project:

```bash
npm install react framer-motion
```

### import in the existing file:-

```jsx
import Dashboard02 from './utils/Dashboard02';

const Props= [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Docs", link: "/docs" },
  { name: "Contact", link: "/contact" },
]

<Dashboard02 {props=Props}>
```
