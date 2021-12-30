import React from 'react'

const MountainRailway = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D1D3D4" d="M0 35h36V10S29.999 0 26.999 0 17 9 15 11s-4.5.5-6-1-3-3-4-3-5 7-5 7v21z"/><path fill="#939598" d="M0 34h36v2H0z"/><circle fill="#58595B" cx="11" cy="32" r="3"/><circle fill="#292F33" cx="11" cy="32" r="2"/><path fill="#58595B" d="M22 32c0-1.657-1.344-3-3-3-1.657 0-3 1.343-3 3s1.343 3 3 3c1.656 0 3-1.343 3-3z"/><path fill="#292F33" d="M21 32c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z"/><path fill="#FFE8B6" d="M36 14H7c-2.209 0-4 1.791-4 4v10c0 2.209 1.791 4 4 4h29V14z"/><path fill="#77B255" d="M36 14H7c-1.477 0-2.752.81-3.445 2H36v-2z"/><path fill="#5C913B" d="M36 28H3c0 2.209 1.791 4 4 4h29v-4z"/><path fill="#FFAC33" d="M3 26h33v2H3z"/><path fill="#55ACEE" d="M3 19h6v5H3zm12 3c0 .553-.447 1-1 1h-2c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1h2c.553 0 1 .447 1 1v2zm5 0c0 .553-.447 1-1 1h-2c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1h2c.553 0 1 .447 1 1v2zm7 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2zm7 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2z"/><path fill="#66757F" d="M27.5 30h-5c-.827 0-1.5-.673-1.5-1.5v-10c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zm-5-12c-.275 0-.5.224-.5.5v10c0 .275.225.5.5.5h5c.275 0 .5-.225.5-.5v-10c0-.276-.225-.5-.5-.5h-5z"/></svg>
  )
}

export default MountainRailway