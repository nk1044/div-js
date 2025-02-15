# trydivJS

**trydivJS** is a modern, lightweight, and efficient UI library designed to streamline web development. It offers a rich collection of pre-built UI components, templates, and boilerplates, enabling developers to build high-quality user interfaces with minimal effort.

##  Official Links

- **Website**: [trydivJS](https://divjs.vercel.app/)
- **DockerHub**: [neerajkumar1044](https://hub.docker.com/repository/docker/neerajkumar1044/divjs/general)
- **GitHub Repository**: [trydivJS GitHub](https://github.com/NeerajKumar-1044/div-js)
- **Documentation**: [trydivJS Docs](https://divjs.vercel.app/)

---

##  Key Features

- 🔹 **Pre-built UI Components** – Integrate customizable UI elements with ease.
- 🔹 **Optimized Performance** – Lightweight and fast rendering for seamless user experience.
- 🔹 **Boilerplates & Templates** – Ready-to-use structures for rapid development.
- 🔹 **Developer-Friendly** – Simple, intuitive API designed for effortless integration.
- 🔹 **Customizable & Extensible** – Modify components to match your project requirements.
- 🔹 **Cross-Browser Compatibility** – Works across all modern web browsers.
- 🔹 **Active Community Support** – Regular updates and community-driven enhancements.

---

##  Installation

### Install via npm

```sh
npm install trydivjs --save-dev
```

---

##  Getting Started

After installing `trydivJS`, it will automatically create a `utils/` directory in your project root and a `script.js` file inside. This makes integration and component management seamless.

### Import and Use Components

```javascript
// utils/script.js
import { DivUi } from "trydivjs";

const divUi = new DivUi();

// Load a UI component
divUi.GetComponent("your_component");
```

Replace `your_component` with the desired component name, then run the script to fetch it.

### Running the Script

Execute the following command to generate the component file:

```sh
node utils/script.js
```

This will create a **`your_component`** file inside the `utils/` folder, which you can use in your project.

### Adding Multiple Components

Simply add multiple lines to fetch additional components:

```javascript
// give a try to these components:-
divUi.GetComponent("Slider04");

divUi.GetComponent("Navbar03");

divUi.GetComponent("Card03");
```

---

## Full Documentation

### Available Components

| Component | Description |
|-----------|-------------|
| `Button01` | A customizable button component |
| `Navbar01` | A responsive navigation bar |
| `Form01`  | A login form template |
| `Card01`  | A user-friendly card layout |
| `Dashboard01` | A pre-built dashboard interface |

For a full list of components and customization options, check the **[official documentation](https://divjs.vercel.app/)**.

---

##  Customization

Each component is fully customizable. Modify the generated files in `utils/` to adjust styles, colors, and layouts according to your project’s needs.

---

##  Contributing

We welcome contributions! Help improve **trydivJS** by:

- Reporting issues
- Requesting new features
- Submitting pull requests

For guidelines, refer to our **[CONTRIBUTING.md](https://github.com/NeerajKumar-1044/div-js/main/CONTRIBUTING.md)**.

---

##  License

This project is licensed under the **MIT License**, allowing open use, modification, and distribution.

---

## Need Help?

For support and discussions:

- **GitHub Issues**: [Report an issue](https://github.com/NeerajKumar-1044/div-js)
- **Community Discussions**: [Join the conversation](https://github.com/NeerajKumar-1044/div-js/discussions)

---

###  Start Building with trydivJS Today!

