import React, { useState } from 'react'
import { useEffect } from 'react'
import SliderForResMenu from './SliderForResMenu'
import 'remixicon/fonts/remixicon.css'
import Shrimmer from './Shrimmer'

function RestorentMenu() {
  const [resMenuDetails, setresMenuDetails] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.11610&lng=79.07060&restaurantId=773319&catalog_qa=undefined&submitAction=ENTER`);

      const jsonData = await response.json();

      const resMenuDetails = jsonData?.data?.cards
      setresMenuDetails(resMenuDetails)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const resDetails = resMenuDetails?.[2]?.card?.card?.info; // Access safely
  console.log("resDetails:", resDetails); // Debugging

  if (!resMenuDetails) {
    return (
      <div className="wrapper">
        {Array.from({ length: 20 }).map((_, index) => (
          <Shrimmer key={index} />
        ))}
      </div>
    ); // Show loader if data isn’t ready
  }

  return (
    <div>
      <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg ">

        <h2 className="text-2xl mb-1 font-bold text-gray-800">{resDetails.name}</h2>

        <div className="max-w-4xl mb-8 mx-auto border rounded-2xl shadow-lg p-4 bg-white">
          {/* Rating and Cost */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <span className="text-green-600 text-lg font-semibold">{resDetails.avgRating}</span>
              <span className="text-gray-500 text-sm">({resDetails.totalRatingsString})</span>
            </div>
            <div className="text-gray-700 text-sm font-medium">{resDetails.costForTwoMessage}</div>
          </div>

          {/* Cuisine */}
          <div className="mt-2">
            <p className="text-orange-600 font-semibold text-sm">{resDetails.cuisines.join(' ')}</p>
          </div>

          {/* Location and Time */}
          <div className="mt-3 text-gray-500 text-sm space-y-1">
            <p>
              <span className="font-medium text-black">Outlet:</span> {resDetails.locality}
            </p>
            <p>{resDetails.sla.minDeliveryTime}-{resDetails.sla.maxDeliveryTime} mins</p>
          </div>

          {/* Free Delivery Banner */}
          <div className="mt-4 border-t border-red-100 pt-2 text-red-500 text-xs font-semibold">
            Free delivery on orders above ₹199
          </div>
        </div>

        {/* Deals for you Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Deals for you</h3>
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {/* Deal 1 */}
            <div className="flex-shrink-0 bg-orange-100 text-orange-600 px-6 py-4 rounded-lg text-sm font-semibold flex items-center">
              <span className="bg-orange-300 text-white px-2 py-1 rounded-full text-xs mr-2">DEAL OF DAY</span>
              Items At ₹99 <br />
              <span className="text-xs text-gray-500">ON SELECT ITEMS</span>
            </div>
            {/* Deal 2 */}
            <div className="flex-shrink-0 bg-orange-100 text-orange-600 px-6 py-4 rounded-lg text-sm font-semibold flex items-center">
              <span className="bg-orange-300 text-white px-2 py-1 rounded-full text-xs mr-2">%</span>
              Flat ₹50 Off <br />
              <span className="text-xs text-gray-500">USE FLASHDEAL</span>
            </div>
            {/* Deal 3 */}
            <div className="flex-shrink-0 bg-yellow-100 text-yellow-600 px-6 py-4 rounded-lg text-sm font-semibold flex items-center">
              <span className="bg-yellow-300 text-white px-2 py-1 rounded-full text-xs mr-2">%</span>
              2+1 Offer <br />
              <span className="text-xs text-gray-500">USE FLASHSPECIAL</span>
            </div>

            <div className="flex-shrink-0 bg-yellow-100 text-yellow-600 px-6 py-4 rounded-lg text-sm font-semibold flex items-center">
              <span className="bg-yellow-300 text-white px-2 py-1 rounded-full text-xs mr-2">%</span>
              2+1 Offer <br />
              <span className="text-xs text-gray-500">USE FLASHSPECIAL</span>
            </div>

            <div className="flex-shrink-0 bg-yellow-100 text-yellow-600 px-6 py-4 rounded-lg text-sm font-semibold flex items-center">
              <span className="bg-yellow-300 text-white px-2 py-1 rounded-full text-xs mr-2">%</span>
              2+1 Offer <br />
              <span className="text-xs text-gray-500">USE FLASHSPECIAL</span>
            </div>
          </div>

        </div>

        <SliderForResMenu />
      </div>
    </div>
  );
}

export default RestorentMenu