import { useState } from 'react';
import Title from './components/Title';
import menu from './data'
import Menu from './components/Menu';
import Categories from './components/Categories';



const allCategories=['all',...new Set(menu.map((item)=>{return(item.category)}))]
const App = () => {
  const[menuItems,setMenuItems]=useState(menu)
  const[categories,setCategories]=useState(allCategories)
  const filterItem=(category)=>{
    if (category==='all') {
      setMenuItems(menu)
      return
    }
console.log(category);
const newItem=menu.filter((item)=>item.category===category)
setMenuItems(newItem)
  }
  // console.log(categories);
  return <main>
    <section className="menu">
      <Title title='MENU'/>
      <Categories categories={categories} filterItem={filterItem}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
};
export default App;
