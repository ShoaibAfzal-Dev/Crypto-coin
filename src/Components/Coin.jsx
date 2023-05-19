import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CoinDetails from './CoinDetails'
import '../style/coin.css'
import Loading from './Loading'
import Footer from './Footer'
const Coin = () => {
    const [coin,setCoins]=useState([])
    const [loading,setloading]=useState(true)
    useEffect(()=>{
      const fetchcoins=async()=>{
        try {
           const data= await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`);
           console.log(data.data)
           setCoins(data.data)
           setloading(false)
        } catch (error) {
          setloading(true)
        }
      }
      fetchcoins();
    },[])

  return (<>
    <div className='main-div' >
   {loading? (<Loading/>):(
    <div className='coin-mainn'>
    <div className='coin-main'>{coin.map((i)=>(
     <CoinDetails 
     id={i.id}
     image={i.image}
     price={i.current_price}
     key={i.id}
     name={i.name}
     />
  ))}</div></div>)}
  
  </div>
  <Footer/>
  </>
  )
}

export default Coin