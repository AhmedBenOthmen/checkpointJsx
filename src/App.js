import './App.css';
import { product } from "./comp/product.js";
import ProductName from './comp/name.js';
import ProductPrice from './comp/price.js';
import ProductDescription from './comp/description.js';
import Card from 'react-bootstrap/Card';


function App() {

  const firstName = "Ahmed";
  const helloImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Deseret_small_long_O.svg/932px-Deseret_small_long_O.svg.png";
  return (
    <div className="App">

      {/* CARD with all the components */}
      
      <Card>
        <Card.Img variant="top" src={product.url} />
        <Card.Body>
          <Card.Text>

            <ProductName/>
            <ProductPrice/>

          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            
            <ProductDescription/>

          </Card.Text>
        </Card.Body>
        
      </Card>
      
      {/* hello there card */}

      <div>
        {firstName ? (
          <>
            Hello, {firstName}!
            <br/>
            <img src={helloImg}/>
          </>
        ) : (
          'Hello, there!'
        )}

      </div>




    </div>
  );
}

export default App;
