import { useState, useContext, useEffect } from "react";
import ProductContext from "../../context/ProductContext";
import ElasticSearch from "../layout/ElasticSearch";

function ProductSearch() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const { products, getProductInstance, getProducts, clearProducts } =
    useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      const productList = await getProductInstance(text);
      setData(productList);
    };
    if (!text || text.length === 0) {
      setData([]);
    } else {
      fetchData();
    }
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      // getProductBySearch(text)
      getProducts(text);
    }
    setText("");
    setData([])
  };

  return (
    <>
      <div className="grid gird-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                />
                <button
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                  type="submit"
                >
                  Go
                </button>
              </div>
            </div>
          </form>

          <div className="mt-4">
            <ElasticSearch elasticData={data} />
          </div>

        </div>
        {products.length > 0 && (
          <div>
            <button
              className="btn btn-ghost btn-lg"
              onClick={() => clearProducts()}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductSearch;
