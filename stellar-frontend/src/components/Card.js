import { Component } from 'react';

const Card = ({ item }) => {
    console.log(item.links[0]["href"])
    return(
    <div className='card'>
        <img src={item.links[0]["href"]} alt='broken'/>
        <span><img src={item.links[0]["href"]} alt='broken' />
		<figcaption>{item.data[0]["title"]}</figcaption></span>
    </div>
    )
}

export default Card;