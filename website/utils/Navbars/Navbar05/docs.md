# Navbar03 Component Documentation

## Overview

`Navbar05` is a React component that renders a futuristic navigation bar.

## Features

- **Customizable Props:** The component accepts an array of navigation objects (each with a `name` and a `link`). If no props are passed, it defaults to the preset values.

## Installation

Ensure that you have React and Framer Motion installed in your project:

### import in the existing file:-

```jsx
import Navbar04 from './utils/Navbar05';

const Props= [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Docs", link: "/docs" },
  { name: "Contact", link: "/contact" },
]

<Navbar05 {props=Props}>
```
