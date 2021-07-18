import React , {useEffect, useState} from 'react'
const Covid = () => {

    const [data, setData] = useState([]);
    const style = {
        color: "green",
        backgroundColor:"black",
    }
    const getCovidData = async () =>{
        try {
            const res = await fetch('https://api.covid19india.org/data.json')
            const actualDAta = await res.json();
            console.log(actualDAta.statewise[0]);
            setData(actualDAta.statewise[0]);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
       <>
        <h1 style={{textAlign:'center'}}>Live</h1>
        <h2 style={{textAlign:'center'}}>Covid-19 Coronavirus Tracker</h2>
        <section className="section">
            <ul style={{display: "inline"}}  style={style}>
                <li className="container "  >
                    <div className="upper_layer"></div>
                        <div className="card"> <span>Our</span> Country </div>
                        <h1>INDIA</h1>
                </li>
           
                <li className="container">
                    <div className="upper_layer"></div>
                        <div className="card"> <span>Total </span> Recovered </div>
                        <p>{data.recovered}</p>
                </li>
                     
                <li className="container">
                    <div className="upper_layer"></div>
                        <div className="card"> <span>Total </span> Confirmed </div>
                        <p>{data.confirmed}</p>
                </li>

                <li className="container">
                    <div className="upper_layer"></div>
                        <div className="card"> <span>Total </span> Death </div>
                        <p>{data.deaths}</p>
                </li>

                <li className="container">
                    <div className="upper_layer"></div>
                        <div className="card"> <span>Total </span> Active </div>
                        <p>{data.active}</p>
                </li>

                <li className="container">
                    <div className="upper_layer"></div>
                        <div className="card"> <span>Last </span> Updated </div>
                        <p>{data.lastupdatedtime}</p>
                </li>
            </ul>
        </section>
       </>
    )
}

export default Covid
