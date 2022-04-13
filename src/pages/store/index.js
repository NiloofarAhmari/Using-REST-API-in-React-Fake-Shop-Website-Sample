import React, { useEffect, useState } from 'react';
import { BasePage } from '../../component/base-page'
import './store.css'
import { Filter } from './filter';
import { Card } from './card';



export const StoreIndexPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => {
        setProducts(products)
        setFilteredProducts(products)
        setIsLoading(false)
      });
  }, []);

  useEffect(() => {

    const filtered = selectedCategory
      ? products.filter((item) => item.category === selectedCategory)
      : products;
    if (selectedCategory === "all") {
      setSelectedCategory("");
    }


    setFilteredProducts(
      sortBy ? [...filtered].sort((a, b) =>
        sortBy === "lowest" ? a.price - b.price : b.price - a.price)
        : [...filtered].sort((a, b) => (a.id > b.id ? 1 : -1))
    );
  }, [selectedCategory, sortBy, products]);

  useEffect(() => {
    const lowerCased = search.toLowerCase();
    setFilteredProducts(products.filter((product) => product.title.toLowerCase().includes(lowerCased))
    );
  }, [search]);


  return (
    <BasePage title='فروشگاه' isLoading={isLoading}>
      <h2>تعداد محصولات :{filteredProducts.length}</h2>
      <Filter
        handleSort={setSortBy}
        handleCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        handleSearch={setSearch}
      />

      <div className="row d-flex justify-content-between">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 mb-2">
            <Card product={product} />
          </div>
        ))}
      </div>


    </BasePage>);
};
