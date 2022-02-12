import React from 'react'
import {Writer} from './Writer'

export const Writers = () => {
  const imageUrl =
    'https://img1.wsimg.com/isteam/ip/27fe70ef-fffb-4a7b-bd33-9dc6756d304c/carol.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true'
  const name = 'Caroline Guilherme'
  const linkedin = 'https://www.linkedin.com/in/carolineguilherme/'
  return (
    <section id="writers" className="flex flex-col flex-grow">
      <div className="flex flex-col items-center justify-center p-10">
        <span className="text-3xl font-semibold text-primary font-montserrat">
          Escritoras
        </span>
        {/* <div className="escritora">
          <div className="escritora-image">
            <div className="circle">
              <img
                className="circle-image"
                src="https://img1.wsimg.com/isteam/ip/27fe70ef-fffb-4a7b-bd33-9dc6756d304c/Aline%20Baldino.jpg/:/rs=w:365,h:365"
                alt="aline-baldino-picture"
              />
            </div>
            <h3>Aline Baldino</h3>
          </div>
        </div> */}
        <div className="flex flex-col justify-center">
          <Writer image={imageUrl} name linkedin />
        </div>
      </div>
    </section>
  )
}
