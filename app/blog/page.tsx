import React from 'react'
import BlogCategories from './components/BlogCategories'
import RecentBlogs from './components/RecentBlogs'

const BlogPage = () => {
    return (
        <main className=''>
            <BlogCategories />
            <RecentBlogs />
        </main>
    )
}

export default BlogPage