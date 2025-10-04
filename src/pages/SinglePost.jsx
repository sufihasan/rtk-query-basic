import React from 'react';
import { useParams } from 'react-router';
import { useGetPostByIdQuery } from '../redux/features/posts/postApi';

const SinglePost = () => {
    const { id } = useParams();
    console.log(id);


    const { data, isLoading, error } = useGetPostByIdQuery(id);
    console.log(data);

    if (error) return <p>some thing error</p>
    if (isLoading) return <p>Loading... and loading...</p>

    return (
        <div className='p-4'>
            <h1>{id} {data.title}</h1>
            <p>{data.body}</p>
            <p>{data.userId}</p>

        </div>
    );
};

export default SinglePost;