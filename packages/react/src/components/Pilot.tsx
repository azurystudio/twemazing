import React from 'react'

const Pilot = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E1E8ED" d="M32 36v-2c0-3.314-2.685-6-6-6H10c-3.313 0-6 2.686-6 6v2h28z"/><path fill="#292F33" d="M30 7.5c0 4.142-5.372 7.5-12 7.5-6.627 0-12-3.358-12-7.5S11.373 0 18 0c6.628 0 12 3.358 12 7.5"/><path fill="#FFDC5D" d="M13.64 28.101c1.744 1.268 2.848 1.963 4.36 1.963 1.512 0 2.616-.696 4.36-1.963V24.29h-8.72v3.811z"/><path fill="#F9CA55" d="M13.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.147-.373 4.364-1.746v-3.491h-8.728v3.491z"/><path fill="#FFAC33" d="M17.696 5.37c-1.925-.623.39-.581-.743.891-2.944.057-7.957 2.309-9.03 4.545-1.069 2.228-.215 4.871.14 7.484.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.85-4.464 10.131-12.047.171-4.587-6.42-6.031-11.261-7.597z"/><path fill="#FFDC5D" d="M25.413 13.291c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.625-1.017-2.12-2.141-2.12-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c0-2.899-.304-4.031-1.04-5.05z"/><path fill="#C1694F" d="M18.827 20.724h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z"/><path fill="#662113" d="M14.062 17.388c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953zm7.625 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z"/><path fill="#C1694F" d="M18 24.704c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848"/><path fill="#292F33" d="M8.5 9c0-1.105 4.253-2 9.5-2s9.5.895 9.5 2-4.253 2-9.5 2-9.5-.895-9.5-2"/><path fill="#66757F" d="M27.5 8h-19V4.554S12.458 1 18 1s9.5 3.554 9.5 3.554V8z"/><path fill="#FFAC33" d="M15 5c0-2.792 1.343-1 3-1s3-1.792 3 1c0 1.657-1.343 2-3 2s-3-.343-3-2"/><path fill="#FDCB58" d="M16 5c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2m11.5 4h-19c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h19c.275 0 .5.225.5.5s-.225.5-.5.5"/><path fill="#292F33" d="M11.578 29.056l-5.926.938c-.272.043-.529-.144-.572-.416l-.157-.988c-.043-.271.144-.528.416-.571l5.926-.938c.272-.043.529.145.572.415l.157.988c.043.271-.144.528-.416.572"/><path fill="#FDCB58" d="M5.834 27.94l.989-.157.312 1.974-.989.157zm1.973-.313l.987-.156.313 1.975-.988.157zm1.978-.313l.988-.155.31 1.976-.988.155z"/><path fill="#292F33" d="M30.348 29.994l-5.926-.939c-.272-.043-.459-.3-.416-.572l.157-.986c.043-.272.3-.459.572-.416l5.926.938c.271.043.459.3.416.572l-.157.987c-.043.272-.3.459-.572.416"/><path fill="#FDCB58" d="M24.916 29.135l.312-1.975.988.156-.313 1.975zm1.976.312l.31-1.976.989.155-.31 1.976zm1.975.315l.312-1.976.99.156-.313 1.976z"/><path fill="#99AAB5" d="M18.001 30.878s3.381 2.494 4.093 2.778c.156.063-.366-3.656-.366-3.656h-7.454s-.524 3.781-.232 3.625c.639-.343 3.959-2.747 3.959-2.747"/><path fill="#292F33" d="M19.312 33.438s.375-.625.531-.906c.183-.329.453-1.57.453-1.57L18.108 30c0-.007-.16.006-.16.006l-.184.042-.172.062c-.218.07.094.008.094.015l-1.974.837s.287 1.241.47 1.57c.156.281.528.906.528.906s-.753.562-1.035 2.563h4.668c-.281-1.595-1.031-2.563-1.031-2.563"/><path fill="#F5F8FA" d="M13.292 26.625c.566.566 4.709 3.383 4.709 3.383s-2.126 1.242-4.084 3.534c-.197.23-1.542-4.625-1.583-5.709-.012-.303.687-1.479.958-1.208m9.438 0c-.566.566-4.709 3.383-4.709 3.383s2.126 1.242 4.084 3.534c.196.23 1.542-4.625 1.583-5.709.012-.303-.687-1.479-.958-1.208"/><path fill="#323A3F" d="M18.016 30.688c.39-.022 1.543.771 1.422 1.25-.461 1.827-.849 1.391-1.391 1.391-.611 0-.964.473-1.39-1.312-.094-.388.797-1.298 1.359-1.329M20.047 36h-4.024s.542-2.167 2.019-2.167S20.047 36 20.047 36"/></svg>
  )
}

export default Pilot