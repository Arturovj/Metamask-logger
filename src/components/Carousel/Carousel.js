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
        let profit = coin.price_change_percentage_24h >= 0;

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
                <span>{coin?.symbol}
                &nbsp;
                <span>{profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%</span>
                </span>
            </div>
            </>
        )
    })

    const responsive = {
        0: {
            items:10,
        },
        1024: {
            items: 4,
        },
        2048: {
            items: 1,
        }
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
        animationDuration={5000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        stagePadding={stagePadding}
        items={items}/>
    </div>
  )
}
