import React from 'react'

export default function Category({finalCat,setcatName}) 
{
  let cat= finalCat.map((v,i)=>{
    return(
      <li onClick={()=>setcatName(v.slug)} key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[18px] mb-2 font-serif font-500'>{v.slug}</li>
    )
  })
  return (
    <div>
      <h3 className='text-[20px] font-500 p-[10px]'>Product Category</h3>

      <ul>
        {cat}
        {/* <li className='bg-[#ccc] p-[7px] cursor-pointer text-[18px] mb-2 font-serif font-500'>Bracelet</li>
        <li className='bg-[#ccc] p-[7px] cursor-pointer text-[18px] mb-2 font-serif font-500'>Bracelet</li>
        <li className='bg-[#ccc] p-[7px] cursor-pointer text-[18px] mb-2 font-serif font-500'>Bracelet</li>
        <li className='bg-[#ccc] p-[7px] cursor-pointer text-[18px] mb-2 font-serif font-500'>Bracelet</li> */}
      </ul>
    </div>
  )
}
