import React from 'react'

export const Writer = ({image, name, linkedin}) => {
  return (
    <div className="flex flex-col items-center p-5 text-center w-52">
      <div className="relative overflow-hidden rounded-full w-52 h-52">
        <img
          className="object-cover w-full h-full opacity-100 hover:opacity-20"
          src={image}
          alt={`${name}-picture`}
        />
        <div className="absolute translate-x-1 opacity-0 top-1/2 left-1/2 hover:opacity-100">
          <a href={linkedin}>
            <img
              className="w-8 h-8"
              src="https://img1.wsimg.com/isteam/ip/27fe70ef-fffb-4a7b-bd33-9dc6756d304c/4362961_linkedin_social%20media_icon(1).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true"
            />
          </a>
          <a href="https://twitter.com/carolinemgXD">
            <img
              className="w-8 h-8"
              src="https://img1.wsimg.com/isteam/ip/27fe70ef-fffb-4a7b-bd33-9dc6756d304c/764945_media_social_square_twitter_icon.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true"
            />
          </a>
        </div>
      </div>
      <h2>{name}</h2>
    </div>
  )
}
