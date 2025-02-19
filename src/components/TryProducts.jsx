import React, { useState } from 'react'
import { HOW_IT_WORKS_CONTENT } from '../constants'
import { motion } from 'framer-motion'
import { useEffect } from 'react';

const TryProducts = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    return (
        <>
            <div className='mt-20 p-10'>
                <div className='flex justify-center text-center'>
                    <h2 className='text-white font-bold text-3xl'>How It Works</h2>
                </div>


{/* Skeleton Loading */}
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        loading ? HOW_IT_WORKS_CONTENT.steps.map((_, index) => (
                            <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col">
                                <div className="h-6 w-3/4 bg-gray-600 rounded"></div>
                                <div className="h-4 w-full bg-gray-600 mt-2 rounded"></div>
                                <div className="h-48 bg-gray-600 mt-4 rounded-lg"></div>
                            </div>
                        ))
                            :
                            HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }} // Animates when in viewport
                                    transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                    viewport={{ once: false, amount: 0.2 }} // Staggered animation
                                >
                                    
                                        <h3 className='text-gray-300 font-semibold'>{step.title}</h3>
                                        <p className='text-gray-300 mt-2 font-light text-sm'>{step.description}</p>
                                        <img src={step.imageSrc} className='mt-4 rounded-lg ' alt="" />
                                    

                                </motion.div>
                            ))
                    }

                </div>


            </div>
        </>
    )
}

export default TryProducts