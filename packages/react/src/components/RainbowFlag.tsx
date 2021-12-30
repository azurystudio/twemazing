import React from 'react'

const RainbowFlag = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#880082" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-.5H0v.5z"/><path fill="#3558A0" d="M0 22.07h36v4.6H0z"/><path fill="#138F3E" d="M0 17.83h36v4.5H0z"/><path fill="#FAD220" d="M0 13.5h36V18H0z"/><path fill="#FF5000" d="M0 9.17h36v4.5H0z"/><path fill="#FF000E" d="M32 5H4C1.791 5 0 6.791 0 9v.33h36V9c0-2.209-1.791-4-4-4z"/></svg>
  )
}

export default RainbowFlag