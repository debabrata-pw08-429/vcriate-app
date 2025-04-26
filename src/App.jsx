import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import ProductList from "./components/ProductList/ProductList";
import ProductNode from "./components/ProductNode/ProductNode";
import "@xyflow/react/dist/style.css";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addNode = (product) => {
    const newNode = {
      id: String(product.id),
      type: "textUpdater",
      data: { ...product },
      position: { x: 100 + nodes.length * 30, y: 100 + nodes.length * 30 },
    };
    setNodes((prev) => [...prev, newNode]);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({ textUpdater: ProductNode }), []);

  return (
    <div className="app">
      <ProductList products={products} onAddNode={addNode} />

      <div style={{ width: "80vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}
