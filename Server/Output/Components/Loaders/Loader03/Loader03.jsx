import React from 'react'
import { motion } from 'framer-motion'

const dotVariants = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [1, 0.3, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

function Loader03({ color='blue-500' }) {
  // Create an array of 8 dots
  const dots = Array.from({ length: 8 })
  // Radius for the circle along which the dots are arranged
  const radius = 20

  return (
    <div className="flex items-center justify-center bg-transparent ">
      <div className="relative w-20 h-20">
        {dots.map((_, i) => {
          // Calculate angle for each dot in degrees and then convert to radians
          const angle = (360 / dots.length) * i
          const rad = (angle * Math.PI) / 180
          // Calculate x and y positions relative to the center
          const x = radius * Math.cos(rad)
          const y = radius * Math.sin(rad)

          return (
            <motion.div
              key={i}
              variants={dotVariants}
              animate="animate"
              // Stagger the start of each dot's animation by a fraction of a second
              transition={{ delay: (i * 0.1) }}
              className={`absolute w-2 h-2 bg-${color} rounded-full`}
              style={{
                top: `calc(50% + ${y}px - 0.5rem)`,
                left: `calc(50% + ${x}px - 0.5rem)`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Loader03
