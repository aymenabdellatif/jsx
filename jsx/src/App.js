import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';
import React from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [firstName, setFirstName] = React.useState('');

  return (
    <div className="container">
      <h1>Hello, {firstName || 'there'}!</h1>
      {firstName && <img src="path/to/your/image.jpg" alt={firstName} />}
      <div className="card">
        <Name name={product.name} />
        <Price price={product.price} />
        <Description description={product.description} />
        <Image image={product.image} name={product.name} />
      </div>
    </div>
  );
}
const App = () => {
  const name = 'aymen ben abdellatif';
  return (
    <div className="container">
      <ProductCard name={name} />
      <h2>Hello, {name || 'there'}!</h2>
      {name && <img src="#" alt={name} />}
    </div>
  );
};
const App = () => {
  const name = 'aymen';

export default App;