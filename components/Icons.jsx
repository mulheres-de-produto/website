import React from 'react'
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMediumM,
} from 'react-icons/fa'

export default function Icons() {
  return (
    <div className="flex items-center justify-center space-x-6 text-white">
      <a href="https://medium.com/mulheres-de-produto" type="button">
        <FaMediumM size={25} />
      </a>
      <a href="https://www.linkedin.com/company/11446424/admin/" type="button">
        <FaLinkedin size={25} />
      </a>

      <a href="https://www.twitter.com/MulheresProduto" type="button">
        <FaTwitter size={25} />
      </a>

      <a href="https://www.instagram.com/mulheresdeproduto/" type="button">
        <FaInstagram size={25} />
      </a>

      <a
        href="https://www.youtube.com/channel/UCX7-a5T_6Ezu_livuVjNtrA"
        type="button"
      >
        <FaYoutube size={25} />
      </a>
    </div>
  )
}
