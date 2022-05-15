import React, { useEffect, useState } from 'react'
import axios from "axios";
import { TrendingCoins } from '../../libs/api';
import { CryptoState } from '../../CryptoContext';




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
    }, [currency])


  return (
    <div>Carousel</div>
  )
}
