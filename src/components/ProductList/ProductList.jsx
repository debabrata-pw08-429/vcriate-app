import "./ProductList.css";

const ProductList = ({ products, onAddNode }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="product-item"
          onClick={() => onAddNode(product)}
        >
          {product.title} - ${product.price}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
