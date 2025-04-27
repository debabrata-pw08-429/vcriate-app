# React Product Flow App

A clean, scalable, and reusable React application built with plain CSS, following best coding practices and modular architecture.

This app allows users to:
- Fetch a list of products from a public API.
- Pick products and add them as draggable "nodes" onto a blank "flow" area.
- Connect nodes with arrows to show relationships.
- Remove edges (connections) between nodes.

---

## Features

- **Product List Fetching**: Fetches data from `https://dummyjson.com/products` when the app loads.
- **Node Creation**: Adds selected products as draggable nodes on the flow editor.
- **Connections**: Drag from one node's output anchor to another's input anchor to create an arrow connection.
- **Edge Removal**: Clicking on an edge (arrow) removes the connection.
- **Smooth Dragging**: Nodes are fully draggable around the flow area.
- **Modern UI Design**: Beautiful layout with minimalistic node cards featuring:
  - Anchors positioned at the top corners.
  - Product image displayed.
  - Centered title and price.
- **Modular Components**: Clear separation of `ProductList`, `FlowEditor`, and `NodeCard` components.

---

## Project Structure

```
src/
├── App.jsx          # Root component handling state and data flow
├── components/
    ├── ProductList.jsx   # Displays fetched product list and handles adding nodes
    ├── FlowEditor.jsx    # Manages nodes, edges, and SVG lines
    └── NodeCard.jsx      # Individual draggable and connectable node card
├── App.css
├── components/
    ├── FlowEditor.css
    └── NodeCard.css
```

---

## How to Run Locally

1. Clone the repository.
```bash
git clone <repo-url>
```

2. Navigate into the project folder.
```bash
cd react-product-flow-app
```

3. Install dependencies.
```bash
npm install
```

4. Start the development server.
```bash
npm start
```

The app will run on `http://localhost:3000`

---

## Tech Stack
- **React** (Functional Components + Hooks)
- **Plain CSS** (No external libraries for UI)
- **Modern JavaScript (ES6+)**

---

## Best Practices Followed

- Folder structure supports scalability.
- Proper state management using `useState` and `useEffect`.
- Clear separation of concerns across components.
- Clean, readable, and commented code.
- Proper event handling for drag and connect functionalities.

---

## Future Enhancements (Optional)
- Allow multiple selection and batch operations.
- Undo/Redo functionality.
- Save the flow diagram persistently.
- Better snapping and alignment guidelines.

---

> Made with ❤️ by following senior-level engineering practices.

