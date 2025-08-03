import React from 'react';
import Broadcom from '../../Components/Broadcom/Broadcom';
import StripeProvider from '../../Components/StripeProvider/StripeProvider';

const Checkout = () => {
    return (
        <div className='w-full pb-[130px]'>

            {/* broadcom component  */}
            <div>
                <Broadcom page={'checkout'} />
            </div>
            <div className="pt-[130px]">

                <div className="md:container mx-auto">
                    <div className="flex justify-between gap-10 w-full">
                        {/* stripe wrapper  */}
                        <div className='min-w-[830px] w-full h-auto'>
                            <StripeProvider />
                        </div>


                        {/* order summary wrapper  */}
                        <div className='max-w-[450px] w-full max-h-[557px] h-ful py-4 border-t-[5px] rounded-3xl border-[#683292] bg-white shadow'>
                            <div className='flex items-center justify-between gap-10 py-3 border-b border-[#e3e4e5] px-4 w-full'>
                                <h4 className='text-base text-[#0f0200] font-archivo font-bold capitalize'>items</h4>
                                <h4 className='text-base text-[#0f0200] font-archivo font-bold capitalize'>price</h4>
                            </div>

                            <div className="flex-col gap-4 px-4 w-full">

                                <div className="flex items-center justify-between gap-8 w-full py-4 border-b border-[#e3e4e5]">
                                    <div className='flex flex-col gap-2.5'>

                                        <h4 className='flex items-center gap-2.5 text-base text-[#0f0200] font-archivo font-bold capitalize'><span>3</span>X classic vanilla</h4>
                                        <p className='text-sm text-[#646464] font-archivo font-normal normal-case max-w-[160px] w-full'>Creamy vanilla ice cream topped with cherry.</p>
                                    </div>
                                    <span className='text-base text-[#0f0200] font-archivo font-bold capitalize'>$13</span>
                                </div>


                                <div className="flex items-center justify-between gap-8 w-full py-4 border-b border-[#e3e4e5]">
                                    <div className='flex flex-col gap-2.5'>

                                        <h4 className='flex items-center gap-2.5 text-base text-[#0f0200] font-archivo font-bold capitalize'><span>6</span>X chocolate brownie</h4>
                                        <p className='text-sm text-[#646464] font-archivo font-normal normal-case max-w-[160px] w-full'>Rich chocolate ice cream with chunks of brownie</p>
                                    </div>
                                    <span className='text-base text-[#0f0200] font-archivo font-bold capitalize'>$23</span>
                                </div>



                                <div className="flex items-center justify-between gap-8 w-full py-4 border-b border-[#e3e4e5]">
                                    <div className='flex flex-col gap-2.5'>

                                        <h4 className='flex items-center gap-2.5 text-base text-[#0f0200] font-archivo font-bold capitalize'><span>6</span>X strawberry cake</h4>
                                        <p className='text-sm text-[#646464] font-archivo font-normal normal-case max-w-[160px] w-full'>Rich chocolate ice cream with chunks of brownie</p>
                                    </div>
                                    <span className='text-base text-[#0f0200] font-archivo font-bold capitalize'>$23</span>
                                </div>


                                <div className="flex items-center justify-between gap-8 w-full py-4 border-b border-[#e3e4e5]">
                                    <div className='flex flex-col gap-2.5'>

                                        <h4 className='flex items-center gap-2.5 text-base text-[#0f0200] font-archivo font-bold capitalize'><span>2</span>X mint chocolate </h4>
                                        <p className='text-sm text-[#646464] font-archivo font-normal normal-case max-w-[160px] w-full'>Rich chocolate ice cream with chunks of brownie</p>
                                    </div>
                                    <span className='text-base text-[#0f0200] font-archivo font-bold capitalize'>$15</span>
                                </div>

                                <div className='flex items-center justify-between gap-10 py-3 px-4 w-full'>
                                    <h4 className='text-base text-[#0f0200] font-archivo font-bold capitalize'>grand total</h4>
                                    <h4 className='text-base text-[#f83d8e] font-archivo font-bold capitalize'>$85</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;