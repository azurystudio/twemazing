import React from 'react'

const DownLeftArrow = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 4c0-2.209-1.791-4-4-4H4C1.791 0 0 1.791 0 4v28c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V4z"/><path fill="#FFF" d="M9 11v16h16z"/><path fill="#FFF" d="M9.53 20.814L23.343 7 29 12.657 15.186 26.471z"/></svg>
  )
}

export default DownLeftArrow