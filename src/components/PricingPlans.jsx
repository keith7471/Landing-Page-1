import React from 'react'
import { PLANS_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const PricingPlans = () => {
    return (
        <div>
            <div className='px-4 mt-20'>
                <div className='text-center mb-12 border-t border-gray-800 '>
                    <h2 className='text-3xl mt-20 bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent'>
                        {PLANS_CONTENT.sectionTitle}
                    </h2>
                    <p className='mt-4 text-white font-light text-sm'>{PLANS_CONTENT.sectionDescription}</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {PLANS_CONTENT.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 200 }}
                            // animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className='p-8 rounded-xl bg-gray-900 border border-gray-400'
                        >
                            {/* <div className='text-center mb-4'>
                                <span className='bg-blue-600 text-white text-xs py-1 px-3 rounded-full'>
                                    {PLANS_CONTENT.popularBadge}
                                </span>

                            </div> */}
                            <h3 className='text-lg lg:text-xl mb-4 text-white'>
                                {plan.name}
                            </h3>
                            <p className='text-gray-300 mb-6 text-sm font-light'>
                                {plan.description}
                            </p>
                            <div className='text-2xl lg:text-3xl font-medium mb-6 text-white'>
                                {plan.price}

                            </div>
                            <ul className='mb-8'>
                                {plan.features.map((feature, index) => (
                                    <li key={index} className='flex items-center text-sm text-gray-400 font-light'>
                                        <span className='inline-block w-1 h-1 rounded-full bg-gray-400 mr-2'>

                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className='w-full py-3 px-4 bg-gray-500 rounded-lg hover:bg-blue-600 cursor-pointer hover:text-white'>
                                {PLANS_CONTENT.ctaText}
                            </button>

                        </motion.div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default PricingPlans