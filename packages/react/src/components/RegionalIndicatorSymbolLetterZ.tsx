import React from 'react'

const RegionalIndicatorSymbolLetterZ = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M24.281 24.907c1.301 0 2.232.713 2.232 2.046 0 1.179-1.117 2.047-2.232 2.047H12.095c-1.643 0-2.604-.93-2.604-2.232 0-.62.217-1.24.62-1.799l9.984-13.952H11.94c-1.24 0-2.17-.713-2.17-1.984 0-1.178.992-2.108 2.17-2.108h11.349c1.797 0 2.603 1.147 2.603 2.232 0 .682-.279 1.457-.682 1.984l-9.922 13.767h8.993z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterZ