import React, { useEffect, useState } from "react";
import getElementId from "../../useHooks/getElementId";
import { Link, useLoaderData } from "react-router-dom";
import "./Header.css";
import Loading from "../Loading/Loading";

const Header = ({ openModal }) => {
  // ******************* show product in navbar *******************
  const data = useLoaderData();
  const productsList = data;

  //   const [productsList, setProductsList] = useState(data);
  const [products, setProducts] = useState();
  console.log(products);

  //   useEffect(() => {
  //     // fetch('mainApi.json')
  //     //     .then(res => res.json())
  //     //     .then(data => setProductsList(data))
  //     setProductsList(data);
  //   }, [data]);

  // ******* Need Id for changing navbar color and bg ************
  const [inViewElementId, setInViewElementId] = useState("");

  useEffect(() => {
    getElementId({ setInViewElementId });
  }, []);

  // ******************* Mouse enter and leave event ****************
  const [isFocused, setIsFocused] = useState(false);
  const [focusedIn, setFocusedIn] = useState();

  console.log(focusedIn);

  const handleMouseLeave = () => {
    setIsFocused(false);
    setProducts();
    setFocusedIn();
  };

  const handleMouseEnter = async (value) => {
    setIsFocused(true);
    const products = await productsList.filter(
      (productList) => productList.id === value
    )[0]?.products;
    setProducts(products);
    setFocusedIn(value);
  };

  if (!productsList) {
    return <Loading></Loading>;
  }

  // const products = productsList.filter(productList => productList.id === focusedIn)[0]?.products;
  console.log(products);

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`sticky top-0 z-20 font-serif ${
        inViewElementId === "bgBlack" ? "text-white" : "text-black"
      } ${isFocused && "bg-white !text-black z-30"}`}
    >
      {/****** Navbar all link *******/}
      <div className="flex justify-between items-center py-3 px-8">
        <h3>Tesla</h3>

        <div className="w-fit mx-auto hidden lg:flex gap-x-6">
          <button
            onMouseEnter={() => handleMouseEnter("vehicles")}
            className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100	 ${
              focusedIn === "vehicles" && "bg-slate-100"
            }`}
          >
            Vehicles
          </button>

          <button
            onMouseEnter={() => handleMouseEnter("energy")}
            className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100 ${
              focusedIn === "energy" && "bg-slate-100"
            }`}
          >
            Energy
          </button>

          <button
            onMouseEnter={() => handleMouseEnter("charging")}
            className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100 ${
              focusedIn === "charging" && "bg-slate-100"
            }`}
          >
            Charging
          </button>

          <button
            onMouseEnter={() => handleMouseEnter("shop")}
            className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100 ${
              focusedIn === "shop" && "bg-slate-100"
            }`}
          >
            Shop
          </button>
        </div>

        {/****** Open Modal for Responsive Device *******/}
        <button
          className="btnGlass lg:hidden"
          onClick={() => {
            openModal("nabvarModal");
          }}
        >
          Open Modal
        </button>
      </div>

      {/****** Navbar link hover output*******/}
      <div className={`w-7/12 mx-auto ${isFocused && "py-10"}`}>
        <div className="grid grid-cols-3 gap-20">
          {
            // productsList.filter(productList => productList.id === focusedIn)[0]?.products.map(product =>
            //     <Link to={`/products/${product.id}`} className='text-center'>
            //         <img src={product.asset} alt="" />
            //         <h1>{product.title}</h1>
            //         <p className='text-sm underline text-slate-500'>Order</p>
            //     </Link>)

            products?.map((product) => (
              <Link to={`${focusedIn}/${product.id}`} className="text-center">
                <img src={product.asset} alt="" />
                <h1>{product.title}</h1>
                <p className="text-sm underline text-slate-500">Order</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
