'use client';
import { useEffect, useRef, useState } from 'react';
import ModalSearch from './search.modal';
import Search from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { getBlog } from '@/services/blog';

const SearchAppBar = () => {
  const searchBarRef = useRef(null);
  const [textSearch, setTextSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setIsSearching(false); // Ẩn modal search
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);
  useEffect(() => {
    if (textSearch.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [textSearch]);
  const handleChange = async (event) => {
    const value = event.target.value;
    setTextSearch(value);

    if (blogs.length === 0) {
      // Chờ fetch xong
      const response = await getBlog('all');
      setBlogs(response);

      const filtered = response.filter((blog) =>
        blog.blog_title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      // Đã có blog → lọc luôn
      const filtered = blogs.filter((blog) =>
        blog.blog_title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };
  const searching = () => {
    if (textSearch.trim().length > 0) {
      router.push(`/search/${textSearch}`); // Redirect to /search/{textSearch}
    }
    setIsSearching(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Handle search logic here
      searching();
    }
  };

  return (
    <>
      <div className="flex-grow relative search-bar" ref={searchBarRef}>
        <input
          type="text"
          placeholder="Search..."
          value={textSearch}
          onChange={(e) => handleChange(e)}
          onKeyDown={(event) => handleKeyDown(event)}
          autoComplete="off"

          className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none"
        />
        {
          textSearch.length > 0 &&
          <button
            aria-label='Clear search'
            type="button"
            onClick={() => setTextSearch("")}
            className="absolute right-8 top-[10px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        }

        <button aria-label='Search' type="button" className="absolute right-2 top-2 " onClick={() => searching()}>
          <Search className="text-gray-500" />
        </button>
        {
          isSearching &&
          <ModalSearch searchResults={searchResults} setIsSearching={setIsSearching} />
        }
      </div>
    </>

  );
};

export default SearchAppBar;
