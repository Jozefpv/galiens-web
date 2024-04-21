import './wrapper.css'
import Galien from './galien.png'
import GalienCoin from './galiencoin.png'
import Game from './game.jpg'

function Wrapper() {
    return (
        <div className="wrapper">
            <div className='section_hero'>
                <div className='block_chara'>
                    <img src={Galien} className='galien'></img>
                </div>
                <div className='block_logo'>
                    <div className='titleContainer'>
                        <img src={GalienCoin} className='galienCoin' alt="Alien Fumeta" />
                        <span>GALIENS</span>
                    </div>
                    <div style={{paddingTop: "15px"}}>
                        <img src={Game} style={{ width: "600px", border:"3px solid white", borderRadius:"10px" }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wrapper