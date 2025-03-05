# Documentation for Sidebar01 Component

## Overview
The `Sidebar01` component is a responsive sidebar navigation system designed for documentation pages. It supports:
### import it in your file:-
```jsx
import Sidebar01 from './utils/Sidebar01/Sidebar01';
```
- **Desktop sidebar navigation** (fixed on the left)
- **Mobile-friendly menu** (accessible via a button toggle)
- **Dynamic rendering of components** when an item is selected
- **Nested subitems** for hierarchical organization

This documentation will guide you on how to use the `Sidebar01` component, how to structure the `tree` prop, and how to integrate it into your React project.

---

## Installation and Usage
To use the `Sidebar01` component in your React project, first import it:

```jsx
import Sidebar01 from './Sidebars/Sidebar01/Sidebar01';
```

### Define the Tree Structure
The sidebar uses a `tree` structure to define its items and subitems. Here’s an example:

```jsx
import Item1 from './temp/Item1';
import Item2 from './temp/Item2';
import Item3 from './temp/Item3';

const tree = [
  { name: 'Item 1', Component: Item1, children: [] },
  { 
    name: 'Item 2', Component: Item2, children: [
      { name: 'Subitem1', id: 'subitem1' },
      { name: 'Subitem2', id: 'subitem2' }
    ] 
  },
  { name: 'Item 3', Component: Item3, children: [] }
];
```

### Add Sidebar to Your Page
Once you have the `tree` structure ready, you can add the sidebar inside your main container:

```jsx
<div className='w-full'>
  <Sidebar01 tree={tree} />
</div>
```

---

## Understanding the `tree` Structure
The `tree` is an array of objects that define sidebar items. Each object has the following properties:

### Item Properties:
| Property     | Type            | Description |
|-------------|----------------|-------------|
| `name`      | `string`        | The display name of the item in the sidebar. |
| `Component` | `React.Component` | The component to be displayed when the item is clicked. |
| `children`  | `Array`         | An array of subitems under this item. |

### Subitem Properties:
| Property | Type     | Description |
|----------|---------|-------------|
| `name`   | `string` | The display name of the subitem. |
| `id`     | `string` | The ID of the HTML section that the subitem links to. |

**Example Explanation:**
```jsx
const tree = [
  { name: 'Item 1', Component: Item1, children: [] },
  { 
    name: 'Item 2', Component: Item2, children: [
      { name: 'Subitem1', id: 'subitem1' },
      { name: 'Subitem2', id: 'subitem2' }
    ] 
  },
  { name: 'Item 3', Component: Item3, children: [] }
];
```
- **Item 1:** A standalone item with no subitems. Clicking on it will render `Item1`.
- **Item 2:** Has subitems `Subitem1` and `Subitem2`. Clicking on `Item 2` renders `Item2`.
  - Clicking `Subitem1` or `Subitem2` will scroll to the corresponding section with `id="subitem1"` or `id="subitem2"`.
- **Item 3:** Another standalone item, similar to `Item 1`.

---

## Sidebar01 Component Breakdown

### Props
The component accepts a single prop:

| Prop   | Type   | Description |
|--------|--------|-------------|
| `tree` | `Array` | The hierarchical structure defining sidebar items. |

### Sidebar Functionality
1. **Desktop View:**
   - Sidebar is fixed to the left.
   - Items are listed with expandable submenus.
   - Clicking an item loads the corresponding component.

2. **Mobile View:**
   - A header with a menu button (`☰`) appears.
   - Clicking the button opens a fullscreen navigation menu.

3. **Selecting an Item:**
   - Clicking an item updates `SelectedComponent`, rendering the component inside the main content area.
   - Clicking a subitem scrolls to the corresponding section.

4. **Navigating Back:**
   - The sidebar includes a "Back" button that redirects to the home page (`/`).

---

## Example Components
You need to create components (`Item1`, `Item2`, `Item3`) that will be displayed when an item is selected.

### Example `Item1.js`:
```jsx
const Item1 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-200 p-6">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">Item 1</h1>
      <p className="text-lg text-slate-600 max-w-prose text-center">
        This is the content for Item 1. Enjoy the sleek design and modern aesthetics!
      </p>
    </div>
  );
};

export default Item1;
```

### Example `Item2.js` with Sections:
```jsx
const Item2 = () => {
  return (
    <div>
      <h2>Item 2 Content</h2>
      <p>This is the content for Item 2.</p>
      <div id="subitem1">
        <h3>Subitem 1</h3>
        <p>Details about Subitem 1.</p>
      </div>
      <div id="subitem2">
        <h3>Subitem 2</h3>
        <p>Details about Subitem 2.</p>
      </div>
    </div>
  );
};

export default Item2;
```

### Example `Item3.js`:
```jsx
const Item3 = () => {
  return (
    <div>
      <h2>Item 3 Content</h2>
      <p>This is the content for Item 3.</p>
    </div>
  );
};

export default Item3;
```

---

## Summary
- **`Sidebar01`** is a responsive navigation sidebar that dynamically loads components.
- The `tree` structure defines sidebar items and their subitems.
- Clicking an item loads the corresponding component.
- Clicking a subitem scrolls to the respective section.
- Supports **mobile-friendly navigation** with a menu toggle.

---

## Next Steps
- Customize the sidebar styling using Tailwind CSS.
- Add more components and expand the `tree` structure.
- Improve accessibility by adding `aria-labels` and keyboard navigation support.