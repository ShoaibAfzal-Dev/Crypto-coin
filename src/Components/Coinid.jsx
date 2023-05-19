import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import Loading from './Loading'
import '../style/coinid.css';
import Errorcom from './Errorcom'
import  Chart  from './Chart.jsx';

const Coinid = () => {
  const [coindetail, setCoindetails] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [days,setDays]=useState('1d')
  const [chartarray,setChartarray]=useState([])
  const params = useParams();
  const btns=['1d','7d','14d','30d','60d','200d','360d','max'];

  const switchChartSrats=(key)=>{
    switch (key) {
      case '1d':
        setDays('1d');
        setLoading(true);
        break;
      case '7d':
        setDays('7d');
        setLoading(true);
        break;
      case '14d':
        setDays('14d');
        setLoading(true);
        break;
      case '30d':
        setDays('30d');
        setLoading(true);
        break;
      case '60d':
        setDays('60d');
        setLoading(true);
        break;
      case '200d':
        setDays('200d');
        setLoading(true);
        break;
      case '360d':
        setDays('360d');
        setLoading(true);
        break;
      case 'max':
        setDays('max');
        setLoading(true);
        break;
      default:
        setDays('1d');
        setLoading(true);
        break;
    }
  }
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`);
        const {data:chartdata  } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=${days}`);
        console.log(chartdata);
        setCoindetails(data);
        setChartarray(chartdata.prices);
        setLoading(false);
        setError(false)
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchdata();
  }, [params.id,days])
  if (error) {
    return (
      <Errorcom message="Error occour while fetching data" />
    )
  }

  return (<>
    <div className='coin-detail-s'>
      
      {
        loading ? (<Loading />) : (
          <>
          <div className='chart-details'>
         <Chart arr={chartarray} days={days}/>
          </div>
          <div >
            {btns.map((i)=>(
              <button className='coin-btns' key={i} onClick={()=>{
                switchChartSrats(i)
              }}>{i}</button>
            ))}
          </div>
            <h6 className='days-details'>Last update on {Date(coindetail.last_updated).split("G")[0]}</h6>
            <img className='coin-image' src={coindetail.image.large} alt={coindetail.name} />
            <h4>{coindetail.name}</h4>
            <h2>${coindetail.market_data.current_price.usd}</h2>

            <div className='inc-dec'>{coindetail.market_data.price_change_percentage_24h_in_currency.usd > 0 ? (<AiFillCaretUp />) : (<AiFillCaretDown />)}{coindetail.market_data.price_change_percentage_24h_in_currency.usd}</div>
            <button className='rank-details'>#{coindetail.market_cap_rank}</button>
            <div className='line-color'><p>${coindetail.market_data.low_24h.usd}</p> <p>24H Range</p> <p>${coindetail.market_data.high_24h.usd}</p></div>
            <div className='coin-com'>
              <div className='co-in'>
              <p className='co-in1'>Total Supply</p>
              <p className='co-in2'>{coindetail.market_data.total_supply}</p>
            </div>
              <div className='co-in'>
                <p className='co-in1'>Circulating Supply</p>
                <p className='co-in2'>{coindetail.market_data.circulating_supply}</p>
              </div>
              <div className='co-in'>
                <p className='co-in1'>Market Cap</p>
                <p className='co-in2'>${coindetail.market_data.market_cap.usd}</p>
              </div>
              <div className='co-in'>
                <p className='co-in1'>All Time High</p>
                <p className='co-in2'>${coindetail.market_data.ath.usd}</p>
              </div>
              <div className='co-in'>
                <p className='co-in1'>All Time Low</p>
                <p className='co-in2'>${coindetail.market_data.atl.usd}</p>
              </div>
            </div>
          </>
        )
      }
      
    </div>
    
    </>
  )
}

export default Coinid