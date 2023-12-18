import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function FixedLogos() {
    return (
        <div>
            <Link to={"https://api.whatsapp.com/send?phone=919314041747"}>
                <FontAwesomeIcon icon={faWhatsapp} className='fs-5 p-3 rounded-circle text-white position-fixed whatsappFixed' />
            </Link>
            <FontAwesomeIcon icon={faShareNodes} className='fs-5 p-2 rounded-circle text-white position-fixed shareFixed' />
        </div>
    )
}