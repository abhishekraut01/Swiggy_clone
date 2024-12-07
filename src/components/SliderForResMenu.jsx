import React from "react";

const SliderForResMenu = () => {
  const items = [
    {
      title: "Cheesy American BBQ",
      description: "Hot toasted sub with 1.5X filling of 3 type of chicken & real mozz cheese",
      price: "₹299",
    },
    {
      title: "Potato Chilli Cheese",
      description: "Hot toasted sub loaded with 1.5X filling of potato patty & real mozz cheese",
      price: "₹279",
    },
    {
      title: "Cheesy Chicken Sub",
      description: "2X the chicken, with real cheese. Indulge in hot cheesy delight",
      price: "₹319",
    },
    {
      title: "Cheesy Chicken Sub",
      description: "2X the chicken, with real cheese. Indulge in hot cheesy delight",
      price: "₹319",
    },
    {
      title: "Cheesy Chicken Sub",
      description: "2X the chicken, with real cheese. Indulge in hot cheesy delight",
      price: "₹319",
    },
  ];

  return (
    <div className="max-w-full overflow-hidden">
       {/* Arrows */}
       <div className=" ">
        <h2 className="text-xl font-semibold mb-4">Top Picks</h2>
        </div>
      <div className="relative">
        {/* Slider Container */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-64 p-4 bg-black text-white rounded-lg shadow-lg"
            >
              <p className="text-xs text-yellow-400 uppercase mb-2">Newly Launched</p>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm mb-3">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{item.price}</span>
                <button className="bg-green-500 px-4 py-1 text-sm rounded-lg font-medium">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SliderForResMenu;
