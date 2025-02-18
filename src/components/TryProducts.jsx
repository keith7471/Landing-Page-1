import React from 'react'
import { HOW_IT_WORKS_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const TryProducts = () => {
    return (
        <>
            <div className='mt-20 p-10'>
                <div className='flex justify-center text-center'>
                    <h2 className='text-white font-bold text-3xl'>How It Works</h2>
                </div>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-700 p-6 rounded-xl shadow-lg flex flex-col"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }} // Animates when in viewport
                            transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            viewport={{ once: false, amount: 0.2 }} // Staggered animation
                        >
                            <div>
                                <h3 className='text-gray-300 font-semibold'>{step.title}</h3>
                                <p className='text-gray-300 mt-2 font-light text-sm'>{step.description}</p>
                                <img src={step.imageSrc} className='mt-4 rounded-lg ' alt="" />
                            </div>

                        </motion.div>
                    ))}

                </div>


            </div>
        </>
    )
}

export default TryProducts