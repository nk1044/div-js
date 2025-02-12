# DivJS

A lightweight and modern UI library that provides ready-to-use components, templates, and boilerplates to make web development faster and easier.

## Features
- **Reusable UI Components** – Pre-built elements to speed up development.
- **Boilerplates** – Ready-to-use code structures for quick setup.
- **Customizable** – Easily adaptable to fit different design needs.
- **Lightweight & Fast** – Optimized for performance.
- **Developer-Friendly** – Simple API and intuitive usage.

---

## Installation

### 1️ Prerequisites
Ensure that **Docker** is installed and running on your machine.

Run the following command to set up the required environment:
```sh
docker run -it -p 9000:9000 neerajkumar1044/divjs:01
```

### 2️ Install the Library
Install **DivJS** via npm:
```sh
npm install trydivjs
```

### 3️ Usage

####  Automatic File Creation
- Upon installation, a `script.js` file will be automatically generated inside the `utils/` folder.

####  Import and Use Components
To use any component, follow these steps:

```javascript
import { DivUi } from "trydivjs";

const divUi = new DivUi("your_api_key");

// Add this line to your script.js
divUi.GetComponent("Button01");
```

#### Run the Script
Execute the script file to generate the component:
```sh
node utils/script.js
```

A new file named **`Button01.txt`** will be created in the `utils/` folder. Now, you can use this component anywhere in your project.

#### `Adds new components by just adding a single line of code`

---

##  Contributing
We welcome contributions! Feel free to **submit issues** or **open a pull request** to improve the library.

---

##  License
This project is licensed under the **MIT License**.

