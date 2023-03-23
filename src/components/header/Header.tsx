import { useState, useEffect } from 'react'
import "./style__header.css"


export default () => {

  const [trigger, setTrigger] = useState(false);
  const [bgrColor, setBgrColor] = useState("transparent");

  const bgr = () => { // для эффекта наведения
    setTrigger(!trigger)
    console.log(trigger);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setTrigger(true) : setTrigger(false)
    })
  })


  return (
    <header
      className='header'
      onMouseOver={bgr}
      onMouseOut={bgr}
      style={
        {
          backgroundColor: trigger ? "rgb(255, 255, 255)" : "transparent"
        }
      }
    >
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