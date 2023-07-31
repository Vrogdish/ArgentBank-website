import React, { ReactNode } from 'react'

interface Props {
    children : ReactNode
    className? : string
}

export default function Button({children,className}:Props) {
  return (
    <button className={`bg-primary ${className}`}>
        {children}
    </button>
  )
}
