Below is an updated version of your README that reflects the new behavior:

---

# trydivJS

**trydivJS** is a modern, lightweight, and efficient UI library designed to streamline web development. It offers a rich collection of pre-built UI components, templates, and boilerplates, enabling developers to build high-quality user interfaces with minimal effort. With the latest update, trydivJS now generates a `utils/` folder for component management and provides a simple CLI command to add components directly.

---

## Official Links

- **Website**: [trydivJS](https://divjs.vercel.app/)
- **DockerHub**: [neerajkumar1044](https://hub.docker.com/repository/docker/neerajkumar1044/divjs/general)
- **GitHub Repository**: [trydivJS GitHub](https://github.com/nk1044/div-js)
- **Documentation**: [trydivJS Docs](https://divjs.vercel.app/)

---

## Key Features

- 🔹 **Pre-built UI Components** – Quickly integrate customizable UI elements.
- 🔹 **Optimized Performance** – Enjoy fast, lightweight rendering for a seamless user experience.
- 🔹 **Boilerplates & Templates** – Jumpstart your projects with ready-to-use structures.
- 🔹 **Developer-Friendly CLI** – Easily add components via the CLI.
- 🔹 **Customizable & Extensible** – Tweak generated files to fit your project’s design.
- 🔹 **Cross-Browser Compatibility** – Works flawlessly across all modern web browsers.
- 🔹 **Active Community Support** – Benefit from regular updates and community-driven enhancements.

---

## Installation

Install trydivJS as a development dependency via npm:

```sh
npm install trydivjs --save-dev
```

---

## Getting Started

After installing `trydivJS`, the library automatically generates a `utils/` folder in your project root. You don’t need to run any script manually—the CLI takes care of component generation.

To add any UI component, simply run:

```sh
npx trydivjs add <component_name>
```

Replace `<component_name>` with the name of the desired component.

### Example

To add the `Card01` component, run:

```sh
npx trydivjs add Card01
```

---

## Available Components

Here are some example components you can add:

| Component   | Description                                      |
|-------------|--------------------------------------------------|
| **Card01**  | A modern, customizable card component.         |
| **Card02**  | An alternative card style with extra flair.    |
| **Button01**| A sleek and responsive button component.       |
| **Loader01**| A lightweight loader/spinner component.          |
| **Form01**  | A pre-built form template for user input.        |
| **Navbar03**| A responsive and stylish navigation bar.         |
| **Sidebar02**| A collapsible sidebar to enhance your UI.       |

For a full list of components and customization options, please refer to the **[official documentation](https://divjs.vercel.app/)**.

---

## Customization

Each generated component file is fully customizable. Simply modify the files in the `utils/` folder to adjust styles, colors, layouts, and more according to your project’s needs.

---

## Contributing

We welcome contributions! Help improve **trydivJS** by:

- Reporting issues
- Requesting new features
- Submitting pull requests

For contribution guidelines, see our **[CONTRIBUTING.md](https://github.com/nk1044/div-js/main/CONTRIBUTING.md)**.

---

## License

This project is licensed under the **MIT License**, which allows open use, modification, and distribution.

---

## Need Help?

For support and discussions:

- **GitHub Issues**: [Report an issue](https://github.com/nk1044/div-js)
- **Community Discussions**: [Join the conversation](https://github.com/nk1044/div-js/discussions)

---

### Start Building with trydivJS Today!

---

This updated README now reflects the new CLI-based workflow—users only need to run `npx trydivjs add <component_name>` to add a component, and the library will generate the necessary `utils/` folder without creating a separate `script.js` file.