//Author: Akash
//This component will consume one product detail and display it as an article

import React from 'react'

const Detail = () => {
  return (
    <div>
      <section>
            <p className=''>name</p>
            <p className=''>title</p>
      </section>
      <section>
        <img src="" alt="" />
        <span>description</span>
      </section>
      <PriceAndRating price= {'0'} rating={'10'} />
     
    </div>
  )
}

export default Detail
