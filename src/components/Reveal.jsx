import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 22,
  blur = false,
  as = 'div',
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div

  if (reduce) {
    const Static = as === 'div' ? 'div' : as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Tag
      className={className}
      initial={{
        opacity: 0,
        y,
        filter: blur ? 'blur(6px)' : 'blur(0px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  )
}
