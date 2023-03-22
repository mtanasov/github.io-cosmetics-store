import { useState } from 'react'
import "./style__header.css"

export default () => {

  return (
    <header className='header'>
      <div className='nav'>
        <button className='menu__catalogue'>Каталог</button>
        <button className='menu__top' >Верхнее меню</button>
        <button className='menu__bottom' >Нижнее меню</button>
      </div>

      <div className="logo">
      </div>
      <div className='controls' >
        <input className='search' type="text" placeholder='Поиск' />
        <button className='basket icon-btn_header' ></button>
      </div>
    </header >
  )
}