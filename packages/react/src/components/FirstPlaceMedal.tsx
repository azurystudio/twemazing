import React from 'react'

const FirstPlaceMedal = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#55ACEE" d="M18 8l-7-8H0l14 17 11.521-4.75z"/><path fill="#3B88C3" d="M25 0l-7 8 5.39 7.312 1.227-1.489L36 0z"/><path fill="#FFAC33" d="M23.205 16.026c.08-.217.131-.448.131-.693 0-1.104-.896-2-2-2h-6.667c-1.105 0-2 .896-2 2 0 .245.05.476.131.693-3.258 1.826-5.464 5.307-5.464 9.307C7.335 31.224 12.111 36 18.002 36s10.667-4.776 10.667-10.667c0-4-2.206-7.481-5.464-9.307z"/><path fill="#9E5200" d="M19.404 18.6h-1.721l-2.73 2.132c-.056.056-.112.206-.112.28v1.178c0 .186.15.354.337.354h1.795v8.414c0 .188.15.355.355.355h2.076c.186 0 .336-.168.336-.355V18.954c0-.186-.149-.354-.336-.354z"/></svg>
  )
}

export default FirstPlaceMedal