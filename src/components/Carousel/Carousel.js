import React, { useEffect, useState } from 'react'
import axios from "axios";
import { TrendingCoins } from '../../libs/api';
import { CryptoState } from '../../CryptoContext';
import AliceCarousel from "react-alice-carousel"
import './Carousel.css'

// import { Link } from "react-router-dom"




export default function Carousel() {

    const [trending, setTrending ] = useState([])

    const { currency } = CryptoState();

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        setTrending(data)
    };

    console.log(trending)

    useEffect(() => {
        fetchTrendingCoins();
    }, [currency]);




    const items = trending.map((coin) => {
        return (
            <>
            <div className='coin' >
                <img
                src={coin?.image}
                alt={coin.name}
                height="150"
                width="150"
                style={{ marginBottom: 10, marginTop: 40}}
                />
                <span>{coin?.symbol}</span>
            </div>
            </>
        )
    })

    const responsive = {
        0: {
            items: 2,
        },
        1024: {
            items: 5,
        },
    };

    const stagePadding = {
        paddingLeft: 0,
        paddingRight: 0
    }


  return (
    <div>
        <AliceCarousel
        infinite
        autoPlayInterval={1000}
        animationDuration={10000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        stagePadding={stagePadding}
        items={items}/>
    </div>
  )
}
