
import './App.css'
import Coin from './galiencoin.png'
import Navbar from './components/navbar/navbar'
import Main from './components/main/main'
import Snowfall from 'react-snowfall';


function App() {

  const snowflake1 = document.createElement('img')
  snowflake1.src = Coin
  const snowflake2 = document.createElement('img')
  snowflake2.src = Coin

  const images = [snowflake1, snowflake2]

  return (
    <>
      <div className='snow'>
        <Snowfall
          style={{ background: "transparent" }}
          snowflakeCount={50}
          images={images}
          radius={[0.5, 80.0]}
        />
      </div>
      <div className='background'>
      </div>
      <div style={{ zIndex: "10" }}>
        <Navbar></Navbar>
        <Main></Main>
      </div>
    </>
  )
}

export default App
