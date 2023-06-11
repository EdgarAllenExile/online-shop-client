import React , { useState } from "react";
import { Link } from "gatsby";
import ProductFilter from "../components/product-filter";

const AllProductsTemplate = ({ pageContext }) => {
  
  const { allProducts } = pageContext;
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const applyFilters = (updatedProducts) => {
      setFilteredProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto">
      <ProductFilter products={allProducts} onApplyFilters={applyFilters} />
      <div className="ml-64">
        <div className="bg-white place-content-center grid grid-cols-4 gap-4 p-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="card card-compact bg-white shadow-xl p-4">
              <Link to={`/product/${product.id}`} >
                <figure className="px-10 pt-10">
                  <img src={`http://localhost:3000${product.image}`} alt={product.product_name} className="w-full h-60 object-cover" />
                </figure>
                <h2 className="card-title text-black">{product.product_name}</h2>
                <p className="badge badge-secondary">${ product.retail_price }</p>
                <div className="card-actions pt-6">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsTemplate;