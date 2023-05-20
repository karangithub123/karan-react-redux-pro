import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 = "https://i.insider.com/5e7ce4c3ba85ee6d4f4c0626?width=700";
const img2 = "https://m.media-amazon.com/images/I/51psAb8VMvL.jpg";
const img3 = "https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/a/canon_eos_80d_dslr_camera_with_18-135mm_lens_001_2.jpg";
const img4 = "https://i.pinimg.com/originals/11/cc/75/11cc7574c86b25b749de213179124f7e.jpg";
const img5 = "https://images-na.ssl-images-amazon.com/images/I/81s20x5wCLL.jpg";
const img6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTXrgfHjLUAIfoqkQa_fkzMJfGIAP6HSInJ700hCdzLO3uYNnnohdUwkTuecW5-iWPh7YlI-busM&usqp=CAU&ec=48665701";
const img7 = "https://cdn.shopify.com/s/files/1/0542/5460/0381/products/Blue_Main-Copy_02df0b16-920c-448f-9a5c-3bafb0d2cf7d@2x.jpg?v=1616471059"
const img8 = "https://n1.sdlcdn.com/imgs/k/b/7/Rock-Light-Windy-5000W-Hair-SDL675162240-1-585f1.jpg"
const img9 = "https://oriflamedealer.com/cdn.shopify.com/s/files/1/1811/9571/files/cosmetic3_4cebd0e4-c042-48ba-8bfb-56f3cda45fc19616.png?v=1557826331"

const Home = () => {

  const productList = [


    {
      name: "Mac Book",
      price: 15000,
      imgSrc: img1,
      id: "jhvgfjhw",
    },

    {
      name: "Black Shoes",
      price: 1900,
      imgSrc: img2,
      id: "jkjghsvkj",

    },

    {

      name: "Cannon M50 Camera",
      price: 699.0,
      imgSrc: img3,
      id: "nvjdxawvad",
    },

    {

      name: "WLS Van Gogh Denim Jacket",
      price: 228.0,
      imgSrc: img4,
      id: "hafdjw",
    },
    {

      name: "LED Light Strips",
      price: 19.99,
      imgSrc: img5,
      id: "jagvdjs",
    },
    {

      name: "SPECTRUM LS TEE",
      price: 68.0,
      imgSrc: img6,
      id: "nvjjv",
    },

    {
      name: "Yoga Mat",
      price: 1500,
      imgSrc: img7,
      id: "jhvgfjhmhgmw",
    },

    {

      name: "Hair Dryer",
      price: 101.0,
      imgSrc: img8,
      id: "nvjjhfkjv",
    },

    {

      name: "Oriflame",
      price: 1100.0,
      imgSrc: img9,
      id: "nvjjhfhfjfkjv",
    },


  ]

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    console.log(options)
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice", });
    toast.success("Added To Cart");

  };
  return (
    <div className='home'>
      {
        productList.map(i => (
          <ProductCard
            key={i.id}
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />
        ))
      }
    </div>
  )
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (

  <div className='productcard'>
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>


  </div>


)

export default Home