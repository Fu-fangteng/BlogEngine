import blogs from "../data/blogs"

export const getPopularBlogs = async () => {
    return new Promise((reslove) => {
        setTimeout(() => reslove(blogs), 500)
    });

};

export const searchBlogs = async (query) => {

    return new Promise((reslove) => {
        setTimeout(() => {
            const filterBlogs = blogs.filter((blog) =>
                blog.title.toLowerCase().includes(query.toLowerCase())
            )
            reslove(filterBlogs)
        }, 500);
    })
    
}