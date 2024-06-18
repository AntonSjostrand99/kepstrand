import React from 'react';
import DividerWithText from '../DividerWithText/DividerWithText';

// Example review data
const reviews = [
  { name: 'John Doe', text: 'Great product!', rating: 5 },
  { name: 'Jane Smith', text: 'Really enjoyed this cap.', rating: 4 },
  { name: 'Sam Wilson', text: 'Good quay and fast shipping.', rating: 5 },
  { name: 'Emily Johnson', text: 'Excellent customer service.', rating: 5 },
  { name: 'Michael Brown', text: 'Very satisfied ', rating: 4 },
  { name: 'Sarah Davis', text: 'Will buy again!', rating: 5 },
];

const Reviews = () => {
  return (
    <div className="container mx-auto py-8 text-center">
      <DividerWithText text="Vad våra kunder säger"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white border-4 border-black shadow-md rounded-lg p-4 flex flex-col justify-start gap-4">
            <div className="text-center text-lg font-semibold text-gray-800">{review.name}</div>
            <div className="text-sm font-light text-gray-600">{review.text}</div>
            <hr className="border-t border-gray-800 my-2" />
            <div className="flex justify-center items-center">
              <p className="text-yellow-500">{'🧢'.repeat(review.rating)} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;