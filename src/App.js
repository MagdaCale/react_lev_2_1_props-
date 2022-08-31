
import './App.css';
import Product from './components/Product';

const produkt = [
  {
    img: './img/oil.jpeg',
    name: 'cocooil',
    price: 30,
  },
  {
    img: './img/cel.avif',
    name: 'Irgendwas',
    price: 60,
  },
  {
    img: './img/tulpen.avif',
    name: 'Was was',
    price: 20,
  }
]


function App() {
  return (
    <section>
      <div>
      <h1>Super Shop</h1>
      </div>
      <div className="App">
      
        {produkt.map((elt,i) =>
          <Product 
            key={i}
            img={elt.img}
            name={elt.name} 
            price={elt.price}     
          />

        )}
    
      </div>
      
    </section>
  );
}

export default App;
