import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const smoothTransition = {
  duration: 1.1,
  ease: [0.43, 0.13, 0.13, 0.96],
}

const imageVariants = {
  hidden: {
    opacity: 0,
    translateY: 200,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      ...smoothTransition,
    },
  },
}

function GalleryImageWithCaption({ children, rowReverse, caption }) {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={imageVariants}
      className={`image--with-caption ${rowReverse ? "row-reverse" : null}`}
    >
      {children}
      <div className="text text--display">{caption}</div>
    </motion.div>
  )
}

export default GalleryImageWithCaption
