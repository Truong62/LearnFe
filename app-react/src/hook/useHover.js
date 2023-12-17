import  { useEffect, useRef, useState } from 'react'

export default function useHover() {
  

    const [isHovered, setIsHovered] = useState(false);
    const hoverRef = useRef(null);
  
    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };
  
    useEffect(() => {
      const ref = hoverRef.current;
      if (ref) {
        ref.addEventListener('mouseover', handleMouseOver);
        ref.addEventListener('mouseout', handleMouseOut);
  
        return () => {
          ref.removeEventListener('mouseover', handleMouseOver);
          ref.removeEventListener('mouseout', handleMouseOut);
        };
      }
    }, []);
  
    return [hoverRef, isHovered];
 
}
