import CategoryItem from '../category-item/category-item.component';
import '../catalogue/catalogue.styles.scss';

const Catalogue = ({ categories }) => {
  return (
    <div className='catalogue-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Catalogue;
