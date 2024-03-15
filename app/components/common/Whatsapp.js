"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import myPic from '../../../public/Images/Kongkon.jpg'

const Whatsapp = () => {
  return (
    <div>
        <FloatingWhatsApp  style={{ margin: '20px' }}  phoneNumber='+880 1778934545' accountName='Kongkon Jowarder' avatar={myPic} />
    </div>
  )
}

export default Whatsapp
