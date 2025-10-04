import React from 'react';
import { useGetAllPostsQuery } from '../redux/features/posts/postApi';
import { Link } from 'react-router';

const Home = () => {
    const { data, error, isLoading } = useGetAllPostsQuery();
    console.log(data);

    if (error) return <p>some thing error</p>
    if (isLoading) return <p>loading...</p>
    return (
        <div>
            <div>rtk query</div>
            <ul >
                {
                    data.slice(0, 10).map(post => (<li className='m-3' key={post.id}>
                        <Link to={`/blog/${post.id}`} className='pointer border'>{post.id} {post.title}</Link>
                    </li>))
                }
            </ul>
        </div>
    );
};

export default Home;