import './App.css'
import TinderCard from 'react-tinder-card'

function App() {
  return (
    <div className="App">
      <TinderCard>hoge</TinderCard>
      <div className='shop-card'>
        <p>つくば温泉 喜楽里 別邸</p>
        <p>09:00 ~ 24:00</p>
        <img src="https://www.yurakirari.com/kirari/tsukuba/images/inside_spa/inside_spa_ph01.jpg"></img>
        <p>1000 ~ 2000円</p>
      </div>
    </div>
  )
}

export default App
