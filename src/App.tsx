import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='shop-card'>
        <p>つくば温泉 喜楽里 別邸</p>
        <p>09:00 ~ 24:00</p>
        <img src="https://www.yurakirari.com/kirari/tsukuba/images/inside_spa/inside_spa_ph01.jpg"></img>
        <p>1000 ~ 2000円</p>
        <a href="https://www.google.com/maps/place/%E3%81%A4%E3%81%8F%E3%81%B0%E6%B8%A9%E6%B3%89+%E5%96%9C%E6%A5%BD%E9%87%8C+%E5%88%A5%E9%82%B8/@36.074972,140.0817692,17z/data=!3m1!4b1!4m5!3m4!1s0x60220b98d62e8e71:0xe1b112d7b966938c!8m2!3d36.074972!4d140.0839579">茨城県つくば市西大橋６１４−１</a>
      </div>
    </div>
  )
}

export default App
