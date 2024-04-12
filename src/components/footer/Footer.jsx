import React from 'react'
import './Footer.css'
import { footerData } from '../../contants/data';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className='app__footer-cont'>
        {footerData.map((ul) => (
          <ul key={ul.id}>
            <h4>{ul.title}</h4>
            {ul.li?.map((li) => (
              <li className='section__P' key={li}>{li}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Footer
