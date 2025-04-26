import { Handle, Position } from "@xyflow/react";
import "./ProductNode.css";

export default function ProductNode({ data }) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="product-card">
        <img src={data.thumbnail} alt={data.title} className="product-image" />
        <div className="product-content">
          <h4>{data.title}</h4>
          <p>${data.price}</p>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}
