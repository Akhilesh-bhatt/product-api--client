import PropTypes from "prop-types";
import testImg from "../layout/assets/testImg.jpg";

function ProductItem({ product }) {
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {product.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {product.description}
      </p>
      <p className="font-normal italic text-gray-700 dark:text-gray-400">
        <strong>quantity:</strong>{product.quantity}
      </p>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
