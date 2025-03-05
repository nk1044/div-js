import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

function Loader02() {
  const [food, setFood] = useState('right')
  const [collision, setCollision] = useState(false)

  const angle = useMotionValue(270)
  const radius = 32

  const x = useTransform(angle, (a) => radius * Math.sin(a * (Math.PI / 180)))
  const y = useTransform(angle, (a) => -radius * Math.cos(a * (Math.PI / 180)))

  const tailOffsets = [30, 55, 75]; // increased gap
  const tailTransforms = tailOffsets.map(offset => {
    const tailAngle = useTransform(angle, (a) => a - offset)
    return {
      x: useTransform(tailAngle, (a) => radius * Math.sin(a * (Math.PI / 180))),
      y: useTransform(tailAngle, (a) => -radius * Math.cos(a * (Math.PI / 180)))
    }
  })

  useEffect(() => {
    const controls = animate(angle, 270 + 360 * 1000, {
      duration: 2.5 * 1000,
      ease: 'linear',
      repeat: Infinity,
    })

    const unsubscribe = angle.onChange((a) => {
      const normalizedAngle = a % 360
      if (food === 'left' && normalizedAngle >= 265 && normalizedAngle <= 275) {
        if (!collision) {
          setFood('right')
          setCollision(true)
        }
      } else if (food === 'right' && normalizedAngle >= 85 && normalizedAngle <= 95) {
        if (!collision) {
          setFood('left')
          setCollision(true)
        }
      } else {
        setCollision(false)
      }
    })

    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [angle, food, collision])

  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="relative w-20 h-20 rounded-full bg-transparent">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Tail segments with gradient sizes */}
          {tailTransforms.map((tail, i) => (
            <motion.div
              key={i}
              style={{ x: tail.x, y: tail.y }}
              className={`absolute  rounded-full ${i === 0 ? 'w-5 h-5 bg-green-600' : i === 1 ? 'w-4 h-4 bg-green-400' : 'w-3 h-3 bg-green-600'
                }`}
            />
          ))}
          {/* Snake head with eyes */}
          <motion.div
            style={{ x, y }}
            className="w-6 h-6 z-10 bg-green-500 rounded-full absolute shadow-lg shadow-blue-500/50"
          >
            {/* Snake face */}
            <div className="relative w-full h-full">
              {/* Eyes */}
              <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-1.5 left-1" />
              <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-1.5 right-1" />
              {/* Pupils */}
              <div className="absolute w-0.5 h-0.5 bg-red-900 rounded-full top-2 left-1.5" />
              <div className="absolute w-0.5 h-0.5 bg-red-900 rounded-full top-2 right-1.5" />
            </div>
          </motion.div>
        </div>
        <motion.div className="w-20 h-20 absolute">
          {food === 'left' && (
            <div className="w-4 h-4 bg-red-500 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2" />
          )}
          {food === 'right' && (
            <div className="w-4 h-4 bg-red-500 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Loader02