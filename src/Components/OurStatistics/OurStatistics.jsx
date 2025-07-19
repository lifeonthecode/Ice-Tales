import React from 'react';

const statisticsData = [
    {
        title: '91',

        symbol: '+',
        description: 'awards win',
    },
    {
        title: '95',

        symbol: '%',
        description: 'satisfied clients',
    },
    {
        title: '48',

        symbol: '+',
        description: 'years of experience',
    },
    {
        title: '143',
        symbol: '+',
        description: 'employees working'
    },
]

const OurStatistics = () => {
    return (
        <div className='w-full bg-white py-[130px] flex items-center justify-center'>
            <div className="lg:container mx-auto">

                {/* section header  */}
                <div className="w-full flex flex-col items-center gap-4 mb-12">
                    <h3 className={`text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize`}>
                        our <span className='text-[#f83d8e]'>statistics</span>
                    </h3>
                    <p className="text-xl text-[#646464] font-archivo font-normal">What makes us special through our impressive statistics</p>
                </div>

                <div className="grid grid-cols-4 gap-8">
                    {
                        statisticsData.map((stat, index) => (
                            <div key={index} className='flex flex-col items-center justify-center gap-4 shadow-lg border-b-[3px] border-[#f83d8e] p-8 rounded-lg min-h-[182px]'>
                                <h3 className='text-5xl text-[#0f0200] font-berkshire-heading font-normal flex gap-1.5'>{stat?.title} <span className='text-[#f83d8e] text-[22px] font-bold'>{stat?.symbol}</span></h3>
                                <p className='text-xl text-[#646464] font-archivo font-normal capitalize'>{stat.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OurStatistics;