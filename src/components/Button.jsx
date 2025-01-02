import React from 'react'

const Button = ({children, onClick = () => {}}) => {
  return (
    <button onClick={onClick} type='button' style={{cursor: "pointer"}}>
      {children}
    </button>
  )
}

export default Button
