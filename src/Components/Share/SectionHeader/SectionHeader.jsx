
const SectionHeader = ({title, subTitle}) => {
    return (
        <div className="w-full flex flex-col items-center gap-4 mb-12">
            {
                title && <div className="flex items-center gap-2">
                    {
                        title.split(" ").map((word, index) => (
                            <h3 key={index} className={`text-5xl text-[#0f0200] font-berkshire-heading font-normal capitalize ${word === 'vegan' && 'text-[#f83d8e]'}`}>
                                {word}
                            </h3>
                        ))
                    }
                </div>
            }

            {
                subTitle && <p className="text-xl text-[#646464] font-archivo font-normal">{subTitle}</p>
            }
            
        </div>
    );
};

export default SectionHeader;