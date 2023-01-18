// src/App.js
import './App.css';
import { Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
// import Search from 'antd/es/transfer/search';
import Search from './components/Search';

function App() {

  const [ foodsDB, setFoodsDB ] = useState(foods);
  const [ displayedFoods, setDisplayedFoods ] = useState(foods);
  const [ showAddFoodForm, setShowAddFoodForm ] = useState(false);

  const addFood = (newFood) => {
    const newFoodList = [...foodsDB, newFood]; 
    setFoodsDB(newFoodList);
    setDisplayedFoods(newFoodList);
  }

  const filterFoods = (e) => {
    const filteredFoods = foodsDB.filter(food => food.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
    setDisplayedFoods(filteredFoods);
  }

  const deleteFood = (name) => {
    const updatedList = foodsDB.filter(food => food.name !== name);
    setFoodsDB(updatedList);
    setDisplayedFoods(updatedList);
  }

  const showAddFood = () => {
    showAddFoodForm ? setShowAddFoodForm(false) : setShowAddFoodForm(true);
  }

  return (
    <div className="App">
      { showAddFoodForm ?
          <div>
            <Button onClick={ showAddFood }>Hide</Button><br/>
            <AddFoodForm addFood={ addFood } />
          </div>
        : <Button onClick={ showAddFood }>Add Food</Button>
      }
      <Search filterFoods={ filterFoods } />
      <div id="foods">
        { displayedFoods.length === 0 && <b>Oops! There is no more content to show!</b>}
        { displayedFoods.map(food => <FoodBox key={ food.name } food={ food } deleteFood={ deleteFood } /> )}
      </div>
    </div>
  );
}
export default App;