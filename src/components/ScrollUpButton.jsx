import { useEffect, useState } from 'react';
import './ScrollUpButton.css';

export const ScrollUpButton = () => {
  const [disabled, setDisabled] = useState(true);
  
  const scrollTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const isAtTopOfPage = () => {
    const topDisplacement = document.documentElement.scrollTop
    if (topDisplacement > 300 && disabled) {
      setDisabled(false)
    }
    if (topDisplacement === 0) {
      setDisabled(true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', isAtTopOfPage)
  }, [])

  return (
    <button onClick={scrollTop} className={'scroll-top-btn'} disabled={disabled}>
      UP
    </button>
  )
}