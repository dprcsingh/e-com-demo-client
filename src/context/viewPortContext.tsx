import React, { useState, useEffect } from 'react';

type viewPort = {
  width: number;
  height: number;
};
type Props = {
  children: React.ReactNode;
};
const ViewPort = React.createContext<Partial<viewPort>>({});

const ViewPortProvider = (props: Props) => {
  const [viewPort, setViewPort] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', () => handleResize);
    };
  }, []);
  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    setViewPort({ width: innerWidth, height: innerHeight });
  };
  return (
    <ViewPort.Provider value={viewPort}>{props.children}</ViewPort.Provider>
  );
};

export { ViewPort, ViewPortProvider };
