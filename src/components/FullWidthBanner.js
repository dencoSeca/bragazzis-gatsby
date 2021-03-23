import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion"

function FullWidthBanner({
  dimensions: { width, vh },
  breakpoints: { mobile, tablet },
}) {
  const { scrollYProgress } = useViewportScroll()
  const textScrollLaptop = useTransform(
    scrollYProgress,
    [0.7, 1],
    [vh * -2, vh * 6]
  )
  const textScrollTablet = useTransform(
    scrollYProgress,
    [0.7, 1],
    [vh * -1, vh * 3]
  )

  return (
    <AnimatePresence>
      <section className="full-width-banner">
        <StaticImage
          className="full-width-banner__image"
          src="../images/egg.jpg"
          alt="a gigantic italian chocolate easter egg"
          layout="fullWidth"
          loading="eager"
        />
        <motion.article
          className="full-width-banner__text"
          style={{
            translateY:
              width >= tablet
                ? textScrollLaptop
                : width >= mobile
                ? textScrollTablet
                : 0,
            translateX: "-50%",
          }}
        >
          {width >= 760 ? (
            <>
              <span className="text--display">
                Each season brings a selection of
              </span>
              <span className="text--display">well considered products</span>
            </>
          ) : (
            <>
              <span className="text--display">Each season</span>
              <span className="text--display">brings a selection</span>
              <span className="text--display">of well considered</span>
              <span className="text--display">goods</span>
            </>
          )}
        </motion.article>
      </section>
    </AnimatePresence>
  )
}

export default FullWidthBanner
