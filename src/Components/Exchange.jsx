import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/Exchange.css'
import Loading from './Loading';
import Errorcom from './Errorcom';
import Footer from './Footer';
const Exchange = () => {
  const [exchanges,Setexchanges]=useState([]);
  const [loading ,setloading]=useState(true);
  const [error,setrerror]=useState(false);
    useEffect(()=>{
      const fetchexchanges= async()=>{
        try{
        const {data}= await axios.get(`https://api.coingecko.com/api/v3/exchanges`);
        console.log(data);
        Setexchanges(data);
        setloading(false)}
        catch(error){
          setloading(false);
          setrerror(true);
        }
      }
      fetchexchanges();
    },[])
   if(error){
    return(
      <Errorcom message="Error occour while fetching data"/>
    )
   }
  return (<>
   <div className='main-div' >
   {loading? (<Loading/>):(
    <div className='show-data'>
    {exchanges.map((i)=>(
    <div className='exchanges-card'  key={i.id}>
      <a href={i.url} target="blank">
      <img src={i.image} alt={i.name} />
      <h2>{i.trust_score_rank}</h2>
      <p className='Name'>{i.name}</p>
      <p><span className='con'> Country:</span>{i.country}</p>
      </a>
    </div>
   ))}</div>)}
   
  </div>
  <Footer/>
  </>
  )
}
export default Exchange

