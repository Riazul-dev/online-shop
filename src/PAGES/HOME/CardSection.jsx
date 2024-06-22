import React from 'react'
import CardHome from '../../COMPONENTS/Card_Home'

const CardSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10 py-10 px-4'>
        <CardHome title='20% Off On Tank Tops' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          dictum.' img='https://plus.unsplash.com/premium_photo-1714226830926-1af8bf7b06c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' />
        <CardHome title='Latest Eyewear For You' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          dictum.' img='https://images.unsplash.com/photo-1525845859779-54d477ff291f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D' />
        <CardHome title="Let's Lorem Suit Up!" desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          dictum.' img='https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8' />
    </div>
  )
}

export default CardSection