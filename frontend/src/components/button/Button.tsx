import React, { ReactNode } from 'react'

interface Props {
    children : ReactNode
    className? : string
    handleClick? : Function
}

export default function Button({children,className,handleClick = ()=>{}}:Props) {
  return (
    <button type='button' className={`bg-primary ${className}`} onClick={()=> {handleClick()} }>
        {children}
    </button>
  )
}
