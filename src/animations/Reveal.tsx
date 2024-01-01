import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props{
    children: JSX.Element;
};

export const RevealUp = ({ children }: Props) => {

    const ref = useRef(null);
    const isInView = useInView( ref, {once: false} );
    const mainControls = useAnimation();
    
    useEffect(() => {
      if (isInView) {
        mainControls.start('visible');
      } else {
        mainControls.start('hidden'); // Inicia la animación de salida
      }
    }, [isInView]);

    return (
      <div
        ref={ref}
        style={{ position: "relative", overflow: "hidden" }}
      >

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          exit="hidden"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    );
}

export const RevealRight = ({ children }: Props) => {

  
  const ref = useRef(null);
  const isInView = useInView( ref, {once: false} );
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden'); // Inicia la animación de salida
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", overflow: "hidden" }}
    >

      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export const RevealLeft = ({ children }: Props) => {

  const ref = useRef(null);
  const isInView = useInView( ref, {once: false} );
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden'); // Inicia la animación de salida
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", overflow: "hidden" }}
    >

      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}