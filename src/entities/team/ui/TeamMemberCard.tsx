'use client'

import Image from 'next/image'
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import {Member} from '../model/types'

interface Props {
  member: Member
}

export const TeamMemberCard = ({member}: Props) => {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(
      mouseYSpring,
      [-0.5, 0.5],
      ["17.5deg", "-17.5deg"]
  )
  const rotateY = useTransform(
      mouseXSpring,
      [-0.5, 0.5],
      ["-17.5deg", "17.5deg"]
  )

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
      <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
        <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d"
            }}
            className="absolute inset-4 grid place-content-center rounded-xl bg-[#303030] shadow-lg">
          <div
              style={{
                transform: "translateZ(75px)",
              }}
              className="flex justify-center">
            <div
                style={{
                  transform: "translateZ(75px)",
                }}
                className="w-32 h-32 md:w-40 md:h-40 mb-4">
              <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-4 border-primary/50"
              />
            </div>
          </div>
          <div
              className="text-center"
              style={{
                transform: "translateZ(50px)",
              }}>
            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
            <p className="text-muted-foreground text-sm line-clamp-3">{member.description}</p>
          </div>
        </div>
      </motion.div>
  )
}