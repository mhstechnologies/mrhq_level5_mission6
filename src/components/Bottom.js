import { useState, useEffect } from 'react';
import './Bottom.css';

function Bottom() {
  const [names, setNames] = useState([]);
  const [images, setImages] = useState([]);
  //const [products, setProducts] = useState([]);
  const [pets, setPets] = useState([]);
  const [petsImage, setPetsImages] = useState([]);

  const petsObjects = [
    {
      name: "Dog",
      path: "./pet_dog.png"
    },
    {
      name: "Cat",
      path: "./pet_cat.png"
    },
    {
      name: "Fish",
      path: "./pet_fish.png"
    },
    {
      name: "Small Animals",
      path: "./pet_rabbit.png"
    },
    {
      name: "Birds",
      path: "./pet_bird.png"
    },
    {
      name: "Reptile",
      path: "./pet_turtle.png"
    },
    {
      name: "Horses",
      path: "./pet_horse.png"
    }
  ]

  const productsObject = [
    {
      name: "Food",
      path: "./dog_food.png"
    },
    {
      name: "Grooming",
      path: "./grooming.jpeg"
    },
    {
      name: "Flea",
      path: "./flea.jpeg"
    },
    {
      name: "Toys",
      path: "./toys.jpeg"
    },
    {
      name: "Bedding",
      path: "./bedding.jpeg"
    },
    {
      name: "Medicine",
      path: "./medicine.jpeg"
    }
  ]

  //function getProducts() {
  //  fetch('http://localhost:4000/sortedproducts')
  //    .then((res) => res.json())
  //    .then((data) => {
  //      setProducts(data);
  //    })
  //}

  function renderProducts() {
    setNames(productsObject.map(key => key.name));
    setImages(productsObject.map(key => key.path));
    setPets(petsObjects.map(key => key.name));
    setPetsImages(petsObjects.map(key => key.path));
  }

  //useEffect(() => getProducts(), []);
 
  // eslint-disable-next-line
  useEffect(() => renderProducts(), []);

  return (
    <>
      <h3 className="Bottom_H3Tag">SHOP BY PET</h3>
      <div className="Bottom_Shop_Section">
        <div className="Bottom_Pet_Group">
          <img className="Bottom_Pet_Image" src={petsImage[0]} alt="pets_0" />
          <p className="Bottom_Pet_Type">{pets[0]}</p>
        </div>
        <div className="Bottom_Pet_Group">
          <img className="Bottom_Pet_Image" src={petsImage[1]} alt="pets_1" />
          <p className="Bottom_Pet_Type">{pets[1]}</p>
        </div>
        <div className="Bottom_Pet_Group">
          <img className="Bottom_Pet_Image" src={petsImage[2]} alt="pets_2" />
          <p className="Bottom_Pet_Type">{pets[2]}</p>
        </div>
        <div className="Bottom_Pet_Group">
          <img className="Bottom_Pet_Image" src={petsImage[3]} alt="pets_3" />
          <p className="Bottom_Pet_Type">{pets[3]}</p>
        </div>
        <div className="Bottom_Pet_Group">
          <img className="Bottom_Pet_Image" src={petsImage[4]} alt="pets_4" />
          <p className="Bottom_Pet_Type">{pets[4]}</p>
        </div>
        <div className="Bottom_Pet_Group">
          <img className="Bottom_Pet_Image" src={petsImage[5]} alt="pets_5" />
          <p className="Bottom_Pet_Type">{pets[5]}</p>
        </div>
        <div className="Bottom_Pet_Group">
          <img className="Bottom_Pet_Image" src={petsImage[6]} alt="pets_6" />
          <p className="Bottom_Pet_Type">{pets[6]}</p>
        </div>
      </div>
      <h3 className="Bottom_H3Tag">POPULAR CATEGORIES</h3>
      <div className="Bottom_Shop_Section">
        <div className="Bottom_Category_Group">
          <img className="Bottom_Product_Image" src={images[0]} alt="product_0" />
          <p className="Bottom_Pet_Type">{names[0]}</p>
        </div>
        <div className="Bottom_Category_Group">
          <img className="Bottom_Product_Image" src={images[1]} alt="products_1" />
          <p className="Bottom_Pet_Type">{names[1]}</p>
        </div>
        <div className="Bottom_Category_Group">
          <img className="Bottom_Product_Image" src={images[2]} alt="products_2" />
          <p className="Bottom_Pet_Type">{names[2]}</p>
        </div>
        <div className="Bottom_Category_Group">
          <img className="Bottom_Product_Image" src={images[3]} alt="products_3" />
          <p className="Bottom_Pet_Type">{names[3]}</p>
        </div>
        <div className="Bottom_Category_Group">
          <img className="Bottom_Product_Image" src={images[4]} alt="products_4" />
          <p className="Bottom_Pet_Type">{names[4]}</p>
        </div>
        <div className="Bottom_Category_Group">
          <img className="Bottom_Product_Image" src={images[5]} alt="products_4" />
          <p className="Bottom_Pet_Type">{names[5]}</p>
        </div>
      </div>
    </>
  );
};

export default Bottom;