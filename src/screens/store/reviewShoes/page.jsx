import React from 'react';

const ReviewShoes = () => {
  return (
    <div className='mt-2'>
      <div className='text-[20px] uppercase font-[600]'>Review this product</div>
      <div className='text-[15px] mt-2'>Share your thoughts with other customers</div>
     <form action="" method='SET' className='flex flex-col'>
     <textarea type="text" placeholder='Write a Product Review' className='w-[300px] text-[12px] h-[150px] px-2 py-1 outline-none border  border-gray-800 bg-transparent text-gray-400  my-2' />
     <button className='w-[140px] border-gray-800 bg-yellow-600 font-[600] rounded-md border py-2'>Submit</button>
     </form>
    </div>
  );
}

export default ReviewShoes;
