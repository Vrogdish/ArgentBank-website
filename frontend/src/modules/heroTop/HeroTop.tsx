import React from 'react'
import Image from 'next/image'

export default function HeroTop() {
  return (
    <div className='h-[400px] bg-slate-200 relative flex items-center justify-end'>
        <Image src={"/images/bank-tree.jpeg"} alt='plante dans un vase rempli de piéces de monnaie' width={1650} height={1100} className='h-full w-full object-cover absolute object-[0%,33%]'/>
        <div>
        <section className="relative bg-white p-8 mr-20 w-[364px]">
          {/* <h2 className="sr-only">Promoted Content</h2> */}
          <p className='text-2xl font-bold'>No fees.</p>
          <p className='text-2xl font-bold'>No minimum deposit.</p>
          <p className='text-2xl font-bold'>High interest rates.</p>
          <p className='text-xl mt-4'>Open a savings account with Argent Bank today!</p>
        </section>
        </div>
    </div>
  )
}
