'use client'
import { useEffect, useState } from "react";
import ProductCard from "@/components/app.product.card";
import { getBlog } from "@/services/blog";

const Page = ({ params }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProduct('all');
            const filteredProducts = products.filter((product) =>
                product.product_name.toLowerCase().includes(params.slug.toLowerCase())
            );
            setProducts(filteredProducts);
        };
        fetchProducts();
    }, [params.slug]);

    // Mock Product Data (Replace with actual data fetching)

    return (
        <main className='min-h-[50vh]'>
            <div className="container mx-auto py-8 px-4 sm:px-6">
                <h1 className="text-2xl font-bold mb-4">Search Results for "{params.slug}"</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products?.length > 0 ? (
                        products?.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </main>

    );
}
export default Page;