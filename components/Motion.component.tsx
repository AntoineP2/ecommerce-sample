"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionComponent = () => {
    const list = {
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // Délai entre les animations des enfants
          },
        },
        hidden: { opacity: 0 },
      };
      
      const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }

      
      return (
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <motion.li variants={item}> <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-red-600">A</div></motion.li> 
          <motion.li variants={item}> <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-white">B</div></motion.li>
          <motion.li variants={item}> <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-blue-600">C</div></motion.li>
        </motion.ul>
      )
  
}

export default MotionComponent