const fetcher = async (endpoint: string, options = {}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_BLOG_URL}${endpoint}`, options);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }

    return res.json();
};
const getBlog = async (id: string) => {
    try {
        const response = await fetcher(`/api/blog/${id}`, { cache: "no-cache" });
        if (response.status !== 200) {
            return null
        }
        return response.metadata
    } catch (error) {
        console.error(error)
    }
}

export {
    getBlog
}