// import { useState } from 'react'
import Card from './components/Card'
import iconEthereum from './assets/icon-ethereum.svg'
import avatarImg from './assets/image-avatar.png'
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Card title='Equilibrium #3429' text="Our Equilibrium collection promotes balance and calm."
        criptoIcon={iconEthereum} criptoValue='0.041' criptoSigla='eth' profileImg={avatarImg}
      />
    </>
  )
}

export default App
