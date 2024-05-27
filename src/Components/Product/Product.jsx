import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Product = () => {
  const { category, id } = useParams();
  console.log(category, id);

  const products = useLoaderData();

  console.log("will route");
  console.log(products);

  // .............................................................
  const [selectedCar, setSelectedCar] = useState();
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

  console.log(selectedCar);
  console.log(selectedColor);
  console.log(selectedSize);

  useEffect(() => {
    const getCategory = products.filter(
      (productAll) => productAll.id === category
    );
    console.log(getCategory);

    const selectedCarfilter = getCategory[0].products.filter(
      (productItem) => productItem.id === id
    );
    const selectedCar = selectedCarfilter[0];
    console.log(selectedCar);

    setSelectedCar(selectedCar);
    setSelectedColor(selectedCar.colorVariation[0]);
    setSelectedSize(selectedCar.motorSizeVariation[0]);
  }, [products, category, id]);

  const handleColorPaint = async (color) => {
    const selectedColor = await selectedCar.colorVariation.filter(
      (car) => car.id === color
    );
    setSelectedColor(selectedColor[0]);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between pt-5 px-10 lg:px-14">
      <div className="w-10/12 lg:w-8/12">
        <img className="w-full" src={selectedColor.asset} alt="" />
        <div>
          {/* <p className='text-xl font-semibold'>
            {selectedColor.id} awesome car</p> */}
          <p className="text-xl font-semibold text-center md:text-start">
            {selectedSize.detail}
          </p>
        </div>
      </div>

      <div className="w-10/12 md:w-8/12 lg:w-3/12">
        <h3 className="text-4xl font-semibold text-center">
          {selectedCar.title}
        </h3>

        <div className="mt-14 flex flex-col items-center">
          <h3 className="text-3xl font-semibold ">Paint</h3>
          <div className="flex mt-5 mb-1">
            <button
              className={`w-fit border-4 ${
                selectedColor.id === "White" && "border-[#3e6ae1]"
              } p-1 rounded-full`}
              onClick={() => handleColorPaint("White")}
            >
              <p className="w-10 h-10 bg-[#cccccc] rounded-full">White</p>
            </button>

            <button
              className={`w-fit border-4 ${
                selectedColor.id === "Black" && "border-[#3e6ae1]"
              } p-1 rounded-full`}
              onClick={() => handleColorPaint("Black")}
            >
              <p className="w-10 h-10 bg-[#08080a] rounded-full">Black</p>
            </button>

            <button
              className={`w-fit border-4 ${
                selectedColor.id === "Red" && "border-[#3e6ae1]"
              } p-1 rounded-full`}
              onClick={() => handleColorPaint("Red")}
            >
              <p className="w-10 h-10 bg-red-700 rounded-full">Red</p>
            </button>
          </div>
          <p className="text-lg font-semibold">{selectedColor.id}</p>
        </div>

        {/* <div className='mt-14 flex flex-col items-center'>
            <h3 className='text-3xl font-semibold '>Motor size</h3>
            {
                selectedCar.motorSizeVariation?.map((carMotor, index) =>
                    <div className='w-full my-5'>
                        <p className='font-semibold mb-1'>{carMotor.title}</p>
                        <button key={index}
                            className={`flex justify-between w-full border-4 border-slate-500 border-rounded text-slate-500 ${selectedSize.id === carMotor.id && '!border-[#3e6ae1] !text-black'}`} onClick={() => handleMotorSize(carMotor.id)}>
                            <span>{selectedCar.title}</span>
                            <span>{carMotor.price}</span>
                        </button>
                    </div>
                )
            }
        </div> */}

        {/* <div className='mt-14 flex flex-col items-center'>
            <h3 className='text-3xl font-semibold '>Order Your {selectedCar.title}</h3>
            <button className='w-full bg-[#3e6ae1] hover:bg-[#0a45e4] my-5 text-white' onClick={handleAddCart}>Add to cart</button>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
