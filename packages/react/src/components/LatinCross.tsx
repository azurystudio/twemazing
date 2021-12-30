import React from 'react'

const LatinCross = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#9266CC" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M26 10h-6V4c0-.552-.447-1-1-1h-2c-.552 0-1 .448-1 1v6h-6c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h6v18c0 .553.448 1 1 1h2c.553 0 1-.447 1-1V14h6c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1z"/></svg>
  )
}

export default LatinCross