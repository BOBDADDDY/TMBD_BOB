import React from 'react'

export default function PageLayout({children, heading, error}) {
  return (
    <div className='container-md py-4'>
        
        <h1 className='text-white mb-4 fs-5'>{heading}</h1>
        {error && <p className='text-white mt-4 fs-5'>{error.message}</p> }
        {children}
        </div>
  )
}
