'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

export const LogoAnimated = () => {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength()

      pathRef.current.style.strokeDasharray = `${pathLength}`
      pathRef.current.style.strokeDashoffset = `${pathLength}`

      animate(pathRef.current, {
        strokeDashoffset: [pathLength, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: 300,
      })
    }
  }, [])

  return (
      <svg
          width="97"
          height="58"
          viewBox="0 0 97 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            ref={pathRef}
            d="M96.1437 6.1796L93.8245 15.6635L89.7407 57.9099L75.6743 54.6641C75.6743 54.6641 68.9694 33.8705 67.8596 30.3204C63.121 31.7912 51.7764 38.6378 64.5825 57.9099H21.1739C21.2112 57.5826 21.2492 57.238 21.2891 56.8773C21.7702 52.5239 22.5107 45.823 25.2577 38.8914H0.906128L3.02365 34.9863H50.1638L52.3821 31.1319H28.4339C28.7869 29.7625 30.3498 26.2124 31.8623 23.5752H9.47707L11.645 19.8729H58.7347L60.9531 16.0692H36.1982C36.736 15.0042 38.3157 12.7625 39.1224 12.3162H16.6363L18.8042 8.46182H65.1377L67.4569 4.40454H24.9047L26.9718 0.752991H67.4569C71.3895 0.752991 82.0275 4.40454 85.2038 8.46182C86.9601 8.17268 90.1996 7.46309 92.7701 6.90004C94.2579 6.57415 95.5215 6.29736 96.1437 6.1796ZM90.9513 23.7273L90.0942 31.994L87.4221 24.6909L90.9513 23.7273Z"
            stroke="#ffffff"
            strokeWidth="1"
            fill="transparent"
        />
      </svg>
  )
}
