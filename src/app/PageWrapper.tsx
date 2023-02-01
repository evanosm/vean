"use client"
import { motion, AnimatePresence } from 'framer-motion';

const PageWrapper = ({ children }: any) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key='page-wrapper'
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='transition pointer-events-none fixed top-0 left-0 w-full h-full bg-dark z-50'
            ></motion.div>
            <div
                className='container px-3 mx-auto pt-24'>
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageWrapper;