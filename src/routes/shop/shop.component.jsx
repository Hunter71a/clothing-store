import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';

import ProductCard from '../../components/product-card/product-card.component';
import Category from '../category/category.component';

import './shop.styles.scss';
import CartItem from '../../components/cart-item/cart-item.component';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
