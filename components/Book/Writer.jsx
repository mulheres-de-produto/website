import React from 'react'

export const Writer = ({image, name, linkedin}) => {
  return (
    <div
      id="member"
      className="flex flex-col items-center p-2 text-center sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      <div
        id="circle"
        className="relative w-40 h-40 overflow-hidden rounded-full group"
      >
        <img
          id="circle-image"
          className="object-cover w-full h-full transition-opacity ease-linear group-hover:opacity-20"
          src={image}
          alt={`${name}-picture`}
        />
        <div
          id="social"
          className="absolute -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 group-hover:opacity-100"
        >
          <a href={linkedin}>
            <img
              id="social-image"
              className="w-10 h-10"
              src="https://img1.wsimg.com/isteam/ip/27fe70ef-fffb-4a7b-bd33-9dc6756d304c/4362961_linkedin_social%20media_icon(1).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true"
            />
          </a>
        </div>
      </div>
      <span className="pt-4 mb-5 text-base font-montserrat">{name}</span>
    </div>
  )
}
