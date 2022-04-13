import React from "react";


export const Filter = ({ handleSort, handleCategoryChange, selectedCategory, sortBy, handleSearch }) => {
  let category = ["all","men's clothing", "jewelery", "electronics", "women's clothing"];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-9">


          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="جستجو بر اساس عنوان لاتین کالا" onChange={(e) => handleSearch(e.target.value)} />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="submit">جستجو</button>
            </div>
          </div>

          <p className=" mr-2">
             مرتب سازی بر اساس دسته بندی <span className="mr-4"></span>
            {category.map((category, idx) => (
              <button
                key={idx}
                type="button"
                className={`btn mr-2 custom-filter ${selectedCategory === category
                  ? "btn-secondary"
                  : "btn-outline-secondary"
                  }`}
                onClick={(e) => handleCategoryChange(e.target.value)}
                value={category}
              >
                {category}
              </button>
            ))}
          </p>
        </div>
        <div className="col-12 col-md-3">
          <select
            className="form-control"
            onChange={(e) => handleSort(e.target.value)}
            value={sortBy}
          >
            <option value="">مرتب سازی براساس قیمت</option>
            <option value="lowest">ارزانترین</option>
            <option value="highest">گران ترین</option>
          </select>
        </div>
      </div>
    </div>
  );
};


