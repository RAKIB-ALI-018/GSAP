import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const App = () => {
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [rotates, setRotates] = useState(0)

  const main = useRef();
  const beeMove = useRef();

  const { contextSafe } = useGSAP(() => {
    gsap.to(beeMove.current, {
      x: xValue,
      y: yValue,
      rotate: rotates,
      duration: 1
    })
  }, { scope: main, dependencies: [xValue, yValue, rotates] })

  const handleClick = contextSafe(() => {
    const containerRect = main.current.getBoundingClientRect();
    const beeRect = beeMove.current.getBoundingClientRect();

    // available space bee can move in, accounting for its own size
    const maxX = (containerRect.width - beeRect.width) / 2;
    const maxY = (containerRect.height - beeRect.height) / 2;

    setXValue(gsap.utils.random(-maxX, maxX, 1))
    setYValue(gsap.utils.random(-maxY, maxY, 1))
    setRotates(gsap.utils.random(0, 360, 1))
  })

  return (
    <main ref={main}>
      <img
        onClick={handleClick}
        ref={beeMove}
        src="https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-cute-bee-cartoon-newborn-baby-adorable-illustration-kawaii-little-chibi-vector-png-image_6687085.png"
        alt="bee"
      />
    </main>
  );
}

export default App;