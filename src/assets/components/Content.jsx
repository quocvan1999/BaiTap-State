import { useState } from "react";
import "../css/content.css";

const Content = () => {
  const glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "../../../src/assets/img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "../../../src/assets/img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "../../../src/assets/img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "../../../src/assets/img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "../../../src/assets/img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "../../../src/assets/img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "../../../src/assets/img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "../../../src/assets/img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "../../../src/assets/img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  const defaultProduct = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "../../../src/assets/img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  const [product, setProduct] = useState(defaultProduct);

  const handleChangeProduct = (glasse) => {
    setProduct(glasse);
  };

  return (
    <div className="content">
      <div className="item-model">
        <div className="glasses-model">
          <div className="image-glasses">
            <img
              src={product.url}
              alt="img
            "
            />
          </div>
          <div className="item-content">
            <h1 className="title">{product.name}</h1>
            <p className="description">{product.desc}</p>
          </div>
        </div>
      </div>
      <div className="container-glasses">
        {glasses.map((glasse, index) => {
          return (
            <a
              onClick={() => {
                handleChangeProduct(glasse);
              }}
              className="glasses-item"
              key={index}
            >
              <img src={glasse.url} alt="img" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
