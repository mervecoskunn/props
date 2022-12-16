import React from 'react'

function LeftSide(props) {
  return (
    <>
    <h1>Hello {props.name}</h1>
    <h2>Hello {props.kurulus}</h2>
    <h3 className={props.className}>
      {props.className}
    </h3>
    <p>
      {props.bodydata}
    </p>
    </>
  )
}
export default LeftSide;
