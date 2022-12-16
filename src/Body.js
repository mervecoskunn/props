import React from 'react'
import LeftSide from './LeftSide';
import Content from './Content';

 function Body(props) {
  let user ={
    name: "Merve",
    surname: "Coskun",
    age: 35
  
  }
  let products =[
    {
    name: "Iphone 11",
    price: 1500,
    stock:41
  },
  {
    name: "Iphone 12",
    price: 2500,
    stock:21
  },
  {
    name: "Iphone 13",
    price: 3500,
    stock:11
  }
  ];
  
  return (
    <div className='App'>Body - {props.appdata}
    <p>{user.name}</p>
        <LeftSide bodydata={props.appdata} name = "Coder" kurulus ="2012"/>
        <Content user ={user} products={products} />
    </div>
  )
}
export default Body;