import React from 'react'

const PersonInSteamyRoomDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><g fill="#E1E8ED"><circle cx="4.5" cy="25.5" r="4.5"/><circle cx="25.5" cy="20.5" r="5.5"/><circle cx="31" cy="26.5" r="5"/><circle cx="12" cy="24" r="5"/><path d="M33 30c-1.657 0-3 1.343-3 3H6c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3h29v-.184c.314.112.647.184 1 .184 1.657 0 3-1.343 3-3s-1.343-3-3-3z"/><path d="M0 25.5h9V33H0zM20 23h9v4h-9zm11 3.5h5V33h-5z"/></g><path fill="#7C533E" d="M31 36v-4.5c0-3.314-3.56-5.5-6.875-5.5h-12C8.812 26 5 28.186 5 31.5V36h26z"/><path fill="#0B0200" d="M21.33 3.975c-1.722-.557-5.775-.405-6.788.912-2.634.051-5.724 2.431-6.129 5.572-.401 3.108.493 4.552.81 6.889.36 2.648 1.849 3.495 3.039 3.85 1.712 2.262 3.533 2.166 6.59 2.166 5.969 0 8.812-3.994 9.063-10.777.153-4.104-2.254-7.211-6.585-8.612z"/><path fill="#7C533E" d="M15.442 21.658v5.116c0 1.413 1.145 2.558 2.558 2.558 1.413 0 2.558-1.145 2.558-2.558v-5.116h-5.116z"/><path fill="#664131" d="M15.442 24.698c.713.805 1.597 1.024 2.558 1.024.961 0 1.844-.219 2.558-1.024v-2.047h-5.116v2.047z"/><path fill="#7C533E" d="M24.744 12.876c-.578-.8-1.317-1.444-2.938-1.672.608.279 1.19 1.241 1.266 1.773.076.532.152.963-.329.431-1.928-2.131-4.027-1.292-6.108-2.593C15.182 9.906 14.74 8.9 14.74 8.9s-.177 1.342-2.381 2.71c-.639.397-1.401 1.279-1.824 2.583-.304.937-.21 1.773-.21 3.201 0 4.169 3.436 7.674 7.674 7.674s7.674-3.536 7.674-7.674c.001-2.593-.27-3.606-.929-4.518z"/><path fill="#3D2E24" d="M17.945 22.452c-1.606 0-2.447-.794-2.537-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.961-.007.035.032.551.491 1.576.491 1.038 0 1.555-.473 1.576-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.089.091-.929.885-2.535.885m.891-3.043h-1.69c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.69c.233 0 .424.19.424.424v.153c0 .234-.191.423-.424.423"/><path d="M14.589 16.542c-.471 0-.853-.382-.853-.853v-.853c0-.471.382-.853.853-.853s.853.382.853.853v.853c0 .471-.382.853-.853.853zm6.822 0c-.471 0-.853-.382-.853-.853v-.853c0-.471.382-.853.853-.853s.853.382.853.853v.853c-.001.471-.382.853-.853.853z"/><path fill="#664131" d="M15.442 24.986L12.125 26c-2.062 0-4.316.847-5.725 2.285-.249.522-.4 1.099-.4 1.715v6h16.422s-4.686-4.014-6.98-11.014z"/><path fill="#DD551F" d="M24.125 26h-1.567c-1.62 7.571-6.822 10-6.822 10H31v-4.5c0-3.314-3.56-5.5-6.875-5.5z"/><path fill="#C63900" d="M15.736 36h6.553s-.784-.695-1.311-1.355C19.506 35.539 15.736 36 15.736 36z"/><path fill="#FA743E" d="M24.558 26c-.777 0-2.81-1-4-1-1.62 7.571-4.822 11-4.822 11h4s3.202-2.429 4.822-10z"/><path fill="#DD551F" d="M18.529 31.351C17.645 33.209 15.736 36 15.736 36h4.047s.639-.581 1.196-1.355c-.832-1.033-1.9-2.426-2.45-3.294z"/><path fill="#FA743E" d="M13.442 26h-1.317C8.812 26 5 28.186 5 31.5V36h15.422s-4.686-3-6.98-10z"/><path fill="#FA8C56" d="M15.442 25c-1.047 0-3.153 1-4 1 2.295 7 4.98 10 4.98 10h4s-2.686-4-4.98-11z"/><path d="M32 28c-2.975 0-5.438 2.168-5.911 5.009C26.058 33.008 26.03 33 26 33c-2.049 0-3.806 1.236-4.578 3H33c1.65 0 3-1.35 3-3v-3.463C34.938 28.584 33.539 28 32 28zm-18.422 8c-.772-1.764-2.529-3-4.578-3-.78 0-1.509.194-2.166.512.098-.322.166-.657.166-1.012C7 30.567 5.433 29 3.5 29 1.738 29 .295 30.306.05 32H0v1c0 1.65 1.35 3 3 3h10.578z" opacity=".7" fill="#FFF"/></svg>
  )
}

export default PersonInSteamyRoomDarkSkinTone