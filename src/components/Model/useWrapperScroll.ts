import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
    const { wrapperRef } = useContext(ModelsContext);
    const scrollY = useMotionValue(0);
    const scrollYProgress = useMotionValue(0.5);

    useEffect(() => {

        const element = wrapperRef.current;

        if (element) {
        const updateScrolllValue = () => { 
            if(wrapperRef.current){
                const {scrollTop,scrollHeight,offsetHeight} = element;

                const fullScroll = scrollHeight - offsetHeight;

                scrollY.set(scrollTop);
                scrollYProgress.set(scrollTop / fullScroll);

            }
        }
        
        element.addEventListener("scroll",updateScrolllValue);
            
        return () => element.removeEventListener("scroll",updateScrolllValue)
    }
    }, [scrollY, scrollYProgress, wrapperRef])

    return { scrollY, scrollYProgress };
}