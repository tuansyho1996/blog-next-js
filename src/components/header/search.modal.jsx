'use client';
import Link from "next/link";
import Image from "next/image";

const ModalSearch = ({ searchResults, setIsSearching }) => {

    return (
        <div className='modal-search absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50'>
            <div className='modal-search-content'>
                <div className='modal-search-header'>
                    {searchResults.length > 0 ? (
                        searchResults.map((blog) => (
                            <Link href={`/blog/${blog.blog_slug}`} key={blog._id} onClick={() => setIsSearching(false)}>
                                <div className='flex items-center p-2 border-b'>
                                    <Image
                                        src={blog.blog_image}
                                        alt={blog.blog_title}
                                        width={50}
                                        height={50}
                                        className='w-12 h-12 object-cover rounded mr-3'
                                        loading="lazy"
                                    />
                                    <div>
                                        <h2 className='text-lg font-bold'>{blog.blog_title}</h2>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className='text-lg font-light text-gray-300'>No results found</p>
                    )}
                </div>
                <div className='modal-search-body'>
                    {/* Render search results here */}
                </div>
            </div>
        </div>
    );
};

export default ModalSearch;
