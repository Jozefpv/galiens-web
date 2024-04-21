import { useEffect, useState } from 'react';
import Galien from './galien.png'
import './ranking.css'

const Ranking = () => {

    // const [points, setPoints] = useState('0')
    // const [wallet, setWallet] = useState('')
    const [ranking, setRanking] = useState(null)


    useEffect(() => {
        fetchRankingData();
    }, [])

    const fetchRankingData = async () => {
        try {
            const response = await fetch('https://galiens-api.onrender.com/ranking');

            if (!response.ok) {
                throw new Error('Error al obtener el ranking');
            }

            const data = await response.json();
            console.log(data)
            setRanking(data);
        } catch (error) {
            console.error('Error al obtener el ranking:', error);
        }
    };

    // const handlePoints = (e) => {
    //     setPoints(e.target.value)
    // }

    // const handleWallet = (e) => {
    //     setWallet(e.target.value)
    // }

    // const sendData = async (e) => {
    //     e.preventDefault();

    //     const data = {
    //         points: points,
    //         wallet: wallet
    //     };

    //     const response = await fetch('http://localhost:3000/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     });

    //     if (!response.ok) {
    //         console.error('Error al enviar el post');
    //         return;
    //     }

    //     const result = await response.json();
    //     fetchRankingData()
    //     console.log('Post creado:', result);
    // };

    return (
        <div className='rankingContainer' id='ranking'>
            <h1 className='rankingTitle'>Ranking</h1>
            {ranking ? (
                <>
                    <img src={Galien} style={{width:"80px"}}></img>
                    <div className='tableContainer'>
                        <table className='rankingTable'>
                            <tr>
                                <td style={{ fontSize: "20px", fontWeight: "bold" }}>WALLET</td>
                                <td style={{ fontSize: "20px", fontWeight: "bold" }}>POINTS</td>
                            </tr>
                            {ranking.ranking.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.points}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </>
            ) : (
                <p>Cargando ranking...</p>
            )}
        </div>
    )
}

export default Ranking