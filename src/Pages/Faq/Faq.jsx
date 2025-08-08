import React from 'react';
import Broadcom from '../../Components/Broadcom/Broadcom';
import Newsletter from '../../Components/Newsletter/Newsletter';

const Faq = () => {
    return (
        <div className='w-full pb-[130px]'>

            <div>
                <Broadcom page={'FAQ'} />
            </div>

            <div className='pt-[130px]'>
                <div className="lg:container mx-auto">
                    {/* faq header wrapper  */}
                    <div className="flex items-center justify-center gap-6 flex-col mb-16">
                        <h3 className='text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize'>frequently asked <span className='text-[#f83d8e]'> questions</span></h3>
                        <p className='text-xl text-[#646464] font-archivo font-normal'>Some of the queries you want to know about us.</p>
                    </div>

                    {/* faq content wrapper  */}
                    <div className="flex flex-col gap-8 w-full">
                        <div className="flex items-center justify-center gap-8">
                            <div className="collapse bg-base-100 border-base-300 border">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl text-[#0f0200] font-archivo font-semibold capitalize">Do you offer dairy-free or vegan options?</div>
                                <div className="collapse-content text-sm text-[#646464] font-archivo font-normal">
                                    Click the "Sign Up" button in the top right corner and follow the registration process.
                                </div>
                            </div>
                            <div className="collapse bg-base-100 border-base-300 border">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl text-[#0f0200] font-archivo font-semibold capitalize">Can i order ice cream online?</div>
                                <div className="collapse-content text-sm text-[#646464] font-archivo font-normal">
                                    Click the "Sign Up" button in the top right corner and follow the registration process.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-8">
                            <div className="collapse bg-base-100 border-base-300 border">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl text-[#0f0200] font-archivo font-semibold capitalize">What ingredients do you use in your ice cream?</div>
                                <div className="collapse-content text-sm text-[#646464] font-archivo font-normal">
                                    Click the "Sign Up" button in the top right corner and follow the registration process.
                                </div>
                            </div>
                            <div className="collapse bg-base-100 border-base-300 border">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl text-[#0f0200] font-archivo font-semibold capitalize">Do you have nutritional available?</div>
                                <div className="collapse-content text-sm text-[#646464] font-archivo font-normal">
                                    Click the "Sign Up" button in the top right corner and follow the registration process.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-8">
                            <div className="collapse bg-base-100 border-base-300 border">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl text-[#0f0200] font-archivo font-semibold capitalize">Do you have gluten-free ice cream?</div>
                                <div className="collapse-content text-sm text-[#646464] font-archivo font-normal">
                                    Click the "Sign Up" button in the top right corner and follow the registration process.
                                </div>
                            </div>
                            <div className="collapse bg-base-100 border-base-300 border">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl text-[#0f0200] font-archivo font-semibold capitalize">Can i book your store for private events?</div>
                                <div className="collapse-content text-sm text-[#646464] font-archivo font-normal">
                                    Click the "Sign Up" button in the top right corner and follow the registration process.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <Newsletter />
            </div>
        </div>
    );
};

export default Faq;