import React, { useState } from 'react';
import Broadcom from '../../Components/Broadcom/Broadcom';
import { Link } from 'react-router';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const categories = [
    {
        category: 'All',
    },
    {
        category: 'Advices',
    },
    {
        category: 'Announcements',
    },
    {
        category: 'News',
    },
    {
        category: 'Consultations',
    },
    {
        category: 'Development',
    },

];


const blogs = [
    {
        title: 'The Best Ice Cream Flavors for Summer',
        date: 'June 15, 2023',
        content: 'Discover the top ice cream flavors to beat the summer heat. From classic vanilla to exotic mango, find your perfect scoop.',
        image: '/blog_1.jpg',
        category: 'Advices'
    },
    {
        title: 'How to Make Homemade Ice Cream',
        date: 'July 20, 2023',
        content: 'Learn how to create delicious homemade ice cream with simple ingredients and easy steps. Perfect for family gatherings.',
        image: '/blog_2.jpg',
        category: 'Announcements'
    },
    {
        title: 'Our strength, Your business',
        date: 'July 20, 2023',
        content: 'Learn how to create delicious homemade ice cream with simple ingredients and easy steps. Perfect for family gatherings.',
        image: '/blog_3.jpg',
        category: 'News'
    },
    {
        title: 'How is the economy?',
        date: 'July 20, 2023',
        content: 'Learn how to create delicious homemade ice cream with simple ingredients and easy steps. Perfect for family gatherings.',
        image: '/blog_4.jpg',
        category: 'Consultations'
    },
    {
        title: 'How is the economy?',
        date: 'July 20, 2023',
        content: 'Learn how to create delicious homemade ice cream with simple ingredients and easy steps. Perfect for family gatherings.',
        image: '/blog_5.jpg',
        category: 'Development'
    },
    {
        title: 'The Best Ice Cream Flavors for Summer',
        date: 'June 15, 2023',
        content: 'Discover the top ice cream flavors to beat the summer heat. From classic vanilla to exotic mango, find your perfect scoop.',
        image: '/blog_6.jpg',
        category: 'Advices'
    },
    {
        title: 'How to Make Homemade Ice Cream',
        date: 'July 20, 2023',
        content: 'Learn how to create delicious homemade ice cream with simple ingredients and easy steps. Perfect for family gatherings.',
        image: '/blog_7.jpg',
        category: 'Announcements'
    },
    {
        title: 'Our strength, Your business',
        date: 'July 20, 2023',
        content: 'Learn how to create delicious homemade ice cream with simple ingredients and easy steps. Perfect for family gatherings.',
        image: '/blog_8.jpg',
        category: 'News'
    },
    {
        title: 'How is the economy?',
        date: 'July 20, 2023',
        content: 'Learn how to create delicious homemade ice cream with simple ingredients and easy steps. Perfect for family gatherings.',
        image: '/blog_4.jpg',
        category: 'Consultations'
    },
    {
        title: 'How is the economy?',
        date: 'July 20, 2023',
        content: 'Learn how to create delicious homemade ice cream with simple ingredients and easy steps. Perfect for family gatherings.',
        image: '/blog_5.jpg',
        category: 'Development'
    },
]

const Blog = () => {

    const [activeCategory, setCategory] = useState({
        category: 'All',
        index: 0
    });



    const filteringBlogs = activeCategory?.category === 'All' ? blogs : blogs?.filter(blog => blog.category === activeCategory?.category)



    return (
        <div className='w-full pb-[130px]'>

            <div className='w-full pb-[130px]'>
                <Broadcom page={'BLog'} />
            </div>


            <div className="lg:container mx-auto">
                {/* blog header wrapper  */}
                <div className='w-full flex items-center justify-between gap-8 pb-10 px-10'>
                    {
                        categories?.map((item, index) => (
                            <button onClick={() => setCategory({ category: item?.category, index })} key={index} className={`text-xl  font-archivo px-7 py-2 cursor-pointer rounded-3xl font-medium capitalize ${activeCategory.index === index ? 'bg-[#f83d8e] text-white' : 'bg-none text-[#0f0200]'}`}>{item?.category}</button>
                        ))
                    }
                </div>


                {/* blogs wrapper  */}
                <div className="grid grid-cols-3 gap-8">
                    {
                        filteringBlogs?.map((blog, index) => (
                            <div key={index} className='w-full min-h-[517px] h-full shadow rounded-2xl'>
                                <div className='w-full max-h-[285px] h-full pb-8'>
                                    <img className='w-full max-h-[285px] h-full object-cover rounded-t-2xl' src={blog?.image} alt={blog?.title} />
                                </div>
                                <div className='flex flex-col gap-4 px-6 py-6'>
                                    {/* icon wrapper  */}
                                    <div className='flex items-center gap-10'>
                                        <button className='flex items-center gap-2 text-[#646464] text-sm font-archivo font-medium capitalize'> <FaUser color='#f83d8e' /> posted by admin</button>
                                        <button className='flex items-center gap-2 text-[#646464] text-sm font-archivo font-medium capitalize'><FaCalendarAlt color='#f83d8e' /> {blog?.date}</button>
                                    </div>

                                    <h3 className='text-xl text-[#0f0200] font-archivo font-bold capitalize'>{blog?.title}</h3>
                                    <p className='text-base text-[#646464] font-archivo capitalize font-normal'>{blog?.content}</p>
                                    <Link className='text-base font-archivo font-medium capitalize text-[#0f0200] underline'>read more</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;