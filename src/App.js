import { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import Category from './Components/Category';
import Images from './Components/Images';
import API from './api/API';

function App() {
  const [selectedCategory, setCategory] = useState('Birds');
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const { data, isLoading } = API({
    query,
    category: selectedCategory,
  });
  return (
    <div
      className='container-fluid py-3'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
    >
      <div className='row justify-content-center'>
        <div className='col-12 col-lg-8'>
          <h1 className='mb-3 text-center'> Image Snapshot</h1>
          <div className='row'>
            <div className='col'>
              <Search selectedQuery={query} onQueryChange={handleQueryChange} />
            </div>
            <div className='col-12'>
              <Category
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                className='w-100 d-flex flex-wrap justify-content-center'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-12 col-lg-8'>
          <Images
            category={selectedCategory}
            data={data}
            isLoading={isLoading}
            query={query}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
