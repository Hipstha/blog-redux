import React from 'react';

import './CategorySelector.scss';

const CategorySelector = () => {
  return (
    <section className="category-selector">
      <article className="category-selector-container">
        <div className="category-selector-menu">
          <ul>
            <li className="category-selector-option active">
              All
            </li>
            <li className="category-selector-option">
              Travel
            </li>
            <li className="category-selector-option">
              Lifestyle
            </li>
            <li className="category-selector-option">
              Business
            </li>
            <li className="category-selector-option">
              Food
            </li>
            <li className="category-selector-option">
              Work
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default CategorySelector;