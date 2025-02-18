import React, { useState } from 'react'
import { AI_FAQs } from '../constants/index.jsx'
import { RiArrowUpSLine, RiArrowDownSLine } from '@remixicon/react';

const FrequentlyAskedQues = () => {

    const [isOpenIndex, setIsOpenIndex] = useState(null);

    function toggleFaq(index) {
        setIsOpenIndex(isOpenIndex === index ? null : index);
    }

    return (
        <div className='mt-40'>
            <div className='mb-5'>
                <span></span>
                <h2 className='text-3xl mt-20 bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent text-center'>Frequently asked questions</h2>
            </div>
            <div className='px-4'>
                {AI_FAQs.map((value, index) => (
                    <div key={index} className='border border-gray-800 px-3 py-3 mt-2 rounded-lg bg-gray-500 flex flex-col cursor-pointer'
                        onClick={() => toggleFaq(index)}
                    >
                        <div className='flex justify-between'>
                            <p className='text-white'>{value.question}</p>

                            {isOpenIndex === index ? (<RiArrowUpSLine />) : (<RiArrowDownSLine />)}
                        </div>

                        <div>
                            {isOpenIndex === index && (<p className='text-sm font-light text-white'>{value.answer}</p>)}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default FrequentlyAskedQues