import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Sidebar from './Sidebar'

export default function Drawer() {
  return (
    <div className='drawer'>
    <div className='py-3 px-2'>
        <AiOutlineClose 
        color='white'
        size='1.5rem'
        className='d-flex ms-auto'
        style={{cusor: 'pointer'}}
        />
        <Sidebar/>
    </div>
    </div>
  )
}
