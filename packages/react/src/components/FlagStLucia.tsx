import React from 'react'

const FlagStLucia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#6CF" d="M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#FFF" d="M9.333 28.747l2.346-2.909L18 10.2l6.321 15.638 2.346 2.909L18 7.34z"/><path d="M24.321 25.838L18 10.2l-6.321 15.638L18 18z"/><path fill="#FCD116" d="M18 18l-6.321 7.838-2.346 2.909h17.334l-2.346-2.909z"/></svg>
  )
}

export default FlagStLucia