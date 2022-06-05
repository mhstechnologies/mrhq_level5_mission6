import { useState, useEffect } from 'react';
import './Bottom.css';

function Bottom() {
  const [names, setNames] = useState([]);
  const [images, setImages] = useState([]);
  const [products, setProducts] = useState([]);

  function getProducts() {
    fetch('http://localhost:4000/sortedproducts')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
  }

  function renderProducts() {
    setNames(products.map(key => key.name));
    setImages(products.map(key => key.img_path));
  }

  useEffect(() => getProducts(), []);
  
  // eslint-disable-next-line
  useEffect(() => renderProducts(), [products]);

  return (
    <div className="Bottom_Body">
      <div className="Bottom_Figure_Generic">
        <img className="Bottom_Figures" src={images[0]} alt="photo_1"/>
        <div className="Bottom_Figure_Description">
          <p>{names[0]}</p>
        </div>
      </div>
      <div className="Bottom_Figure_Generic">
        <img className="Bottom_Figures" src={images[1]} alt="photo_2"/>
        <div className="Bottom_Figure_Description">
          <p>{names[1]}</p>
        </div>
      </div>
      <div className="Bottom_Figure_Generic">
        <img className="Bottom_Figures" src={images[2]} alt="photo_3"/>
        <div className="Bottom_Figure_Description">
          <p>{names[2]}</p>
        </div>
      </div>
      <div className="Bottom_Figure_Generic">
        <img className="Bottom_Figures" src={images[3]} alt="photo_4"/>
        <div className="Bottom_Figure_Description">
          <p>{names[3]}</p>
        </div>
      </div>
      <div className="Bottom_Figure_Generic">
        <img className="Bottom_Figures" src={images[4]} alt="photo_5"/>
        <div className="Bottom_Figure_Description">
          <p>{names[4]}</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;