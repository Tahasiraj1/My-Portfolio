"use client"

import { motion } from "framer-motion"
import React from "react"

interface GradientBlobProps {
  colors: string[]
  blur?: number
  duration?: number
  size?: number
}

export const GradientBlob: React.FC<GradientBlobProps> = ({
  colors,
  blur = 40,
  size = 300,
}) => {

  return (
    <motion.div
      className="absolute rounded-full mix-blend-multiply filter opacity-65"
      style={{
        background: `radial-gradient(circle, ${colors.join(", ")})`,
        width: size,
        height: size,
        filter: `blur(${blur}px)`,
      }}
    />
  )
}