import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './parallax-scrolling.css'

export type ParallaxComponentProps = {
  /** Large atmospheric title behind the hero overlay */
  title?: string
  /** Hero content rendered above the parallax layers */
  children?: React.ReactNode
  className?: string
  /** Disable Lenis + scrub when true (also auto when prefers-reduced-motion) */
  disableMotion?: boolean
}

const LAYERS = [
  {
    layer: '1',
    yPercent: 70,
    src: 'https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp',
  },
  {
    layer: '2',
    yPercent: 55,
    src: 'https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp',
  },
  {
    layer: '4',
    yPercent: 10,
    src: 'https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp',
  },
] as const

export function ParallaxComponent({
  title = 'SUJAL',
  children,
  className = '',
  disableMotion = false,
}: ParallaxComponentProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce =
      disableMotion ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) return

    gsap.registerPlugin(ScrollTrigger)

    const root = parallaxRef.current
    const triggerElement = root?.querySelector(
      '[data-parallax-layers]',
    ) as HTMLElement | null

    let tl: gsap.core.Timeline | undefined
    let lenis: Lenis | undefined
    let tickerFn: ((time: number) => void) | undefined

    if (triggerElement) {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '0% 0%',
          end: '100% 0%',
          scrub: 0,
        },
      })

      const layerMotion = [
        { layer: '1', yPercent: 70 },
        { layer: '2', yPercent: 55 },
        { layer: '3', yPercent: 40 },
        { layer: '4', yPercent: 10 },
      ]

      layerMotion.forEach((layerObj, idx) => {
        tl!.to(
          triggerElement.querySelectorAll(
            `[data-parallax-layer="${layerObj.layer}"]`,
          ),
          {
            yPercent: layerObj.yPercent,
            ease: 'none',
          },
          idx === 0 ? undefined : '<',
        )
      })
    }

    lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })
    lenis.on('scroll', ScrollTrigger.update)
    tickerFn = (time: number) => {
      lenis?.raf(time * 1000)
    }
    gsap.ticker.add(tickerFn)
    gsap.ticker.lagSmoothing(0)

    return () => {
      if (tickerFn) gsap.ticker.remove(tickerFn)
      lenis?.destroy()
      tl?.scrollTrigger?.kill()
      tl?.kill()
      if (triggerElement) gsap.killTweensOf(triggerElement)
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === triggerElement) st.kill()
      })
    }
  }, [disableMotion])

  return (
    <div
      className={`parallax${disableMotion ? ' parallax--static' : ''}${className ? ` ${className}` : ''}`}
      ref={parallaxRef}
    >
      <section className="parallax__header" aria-label="Hero parallax">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow" />
          <div data-parallax-layers className="parallax__layers">
            {LAYERS.slice(0, 2).map((layer) => (
              <img
                key={layer.layer}
                src={layer.src}
                loading="eager"
                width={1600}
                height={900}
                data-parallax-layer={layer.layer}
                alt=""
                className="parallax__layer-img"
                draggable={false}
              />
            ))}

            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title">{title}</h2>
            </div>

            <img
              src={LAYERS[2].src}
              loading="eager"
              width={1600}
              height={900}
              data-parallax-layer="4"
              alt=""
              className="parallax__layer-img"
              draggable={false}
            />
          </div>
          <div className="parallax__fade" />
        </div>

        {children ? (
          <div className="parallax__hero-overlay">
            <div className="wrap w-full">{children}</div>
          </div>
        ) : null}
      </section>
    </div>
  )
}
