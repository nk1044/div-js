# DivJS

A lightweight and modern UI library that provides ready-to-use components, templates, and boilerplates to make web development faster and easier.

## Features
- **Reusable UI Components** – Pre-built elements to speed up development.
- **Boilerplates** – Ready-to-use code structures for quick setup.
- **Customizable** – Easily adaptable to fit different design needs.
- **Lightweight & Fast** – Optimized for performance.
- **Developer-Friendly** – Simple API and intuitive usage.
<!-- 
## Installation

You can install DivJS via npm:
```sh
npm install divjs
```

Or using yarn:
```sh
yarn add divjs
```

## Usage

Import and use DivJS components in your project:

```js
import { Button } from 'divjs';

function App() {
  return <Button label="Click Me" />;
}
``` -->

<!-- ## Documentation
For detailed usage and examples, check out our [official documentation](#). -->
```javascript
import React, { useEffect, useState } from "react";
import Ui from "your-package-name";

export default function App() {
    const [Button01, setButton01] = useState(null);

    useEffect(() => {
        async function loadComponent() {
            const Component = await Ui("Button01");
            setButton01(() => Component);
        }
        loadComponent();
    }, []);

    return (
        <div>
            <h1>Dynamic Component Loading</h1>
            {Button01 ? <Button01 /> : <p>Loading Button01...</p>}
        </div>
    );
}

```

## Contributing
We welcome contributions! Feel free to submit issues or open a pull request.

## License
This project is licensed under the MIT License.
