import React from 'react'

function Bio(props) {
  return (
    <div className='ok'>
      <section className='all'>
        <h1 className='head'>my contact</h1>
        <h2 className='names'>{props.name}</h2>

        <img className='img' src={props.image} alt='Leonardo DiCaprio' />
        <p className='phone'>{props.phone}</p>
        <p className='email'>{props.email}</p>
      </section>
    </div>
  )
}
export default Bio
