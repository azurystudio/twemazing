import React from 'react'

const MagnifyingGlassTiltedLeft = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#9AAAB4" d="M27.388 24.642L24.56 27.47l-4.95-4.95 2.828-2.828z"/><path fill="#66757F" d="M34.683 29.11l-5.879-5.879c-.781-.781-2.047-.781-2.828 0l-2.828 2.828c-.781.781-.781 2.047 0 2.828l5.879 5.879c1.562 1.563 4.096 1.563 5.658 0 1.56-1.561 1.559-4.094-.002-5.656z"/><circle fill="#8899A6" cx="13.586" cy="13.669" r="13.5"/><circle fill="#BBDDF5" cx="13.586" cy="13.669" r="9.5"/></svg>
  )
}

export default MagnifyingGlassTiltedLeft