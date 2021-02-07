import React from 'react';
import {arr} from './data';
const Card = () =>{
  return (
    arr.map((person) => {
      return(
        <div className="ml-8 mt-8 mr-8 md:ml-8 md:mr-8 mb-3">
  <div style={{background:"#9b5151"}} className="hover:shadow-xl transition duration:900 ease-in-out transform hover:translate-x-1 block w-11/12 md:11/12 rounded-lg overflow-hidden shadow-md">
    <div className="ml-6">
      <img style={{objectFit:"cover"}} className="transition duration-300 ease-in-out transform hover:translate-x-1 ml-3 mt-3 w-56 bg-contain h-56 rounded-full " src={person.img} alt="Display" />
    <div style={{background:"#f5d782"}} className=" ml-1.5 w-52 -mt-56 h-56 rounded-full "></div>
    </div>
    <div className="px-6 py-4">
      <div style={{color:"#ffee93"}} className=" font-bold text-xl mb-2">
        {person.name}      
      </div>
      <p style={{color:"#f5d782"}} className=" text-base">
        {person.quote} <span></span>
      </p>
    </div>
    <div className="px-6 py-4">
      <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{person.skills[0]}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{person.skills[1]}</span>
      <span className="mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{person.skills[2]}</span>
    </div>
  </div>
  </div>
      );
    })   
);
}
export default Card;