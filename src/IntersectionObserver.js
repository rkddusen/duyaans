import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from 'styled-components';

const IntersectionObserver = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.3, // 50% of component visible
  });

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return <StyledDiv ref={ref} className={animated ? "animated" : ""}>{children}</StyledDiv>;
};

export default IntersectionObserver;

const slideUp = keyframes`
  from {
    opacity: 0;
  transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledDiv = styled.div`
  opacity: 0;
  transform: translateY(50px);
  &.animated {
    animation: ${slideUp} 0.5s ease-in-out 0s 1 normal forwards;
  }
`;