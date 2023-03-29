
import './App.css';
import NewProduct from './Components/NewProduct';
import Product from './Components/Product';

function App() {
  const response = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Surf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Arial',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  function printProductData(data){
    console.log('I am inside App.js')
    console.log(data);
  }

  return (

    <div className='product'>
      <NewProduct nirmal= {printProductData}></NewProduct>
      <Product item={response}></Product>
    </div>
  );
}

export default App;
