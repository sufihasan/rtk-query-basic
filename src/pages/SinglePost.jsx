import React from 'react';
import { useParams } from 'react-router';
import { useDeletePostByIdMutation, useGetPostByIdQuery, useUpdatePostByIdMutation } from '../redux/features/posts/postApi';

const SinglePost = () => {
    const { id } = useParams();
    // console.log(id);


    const { data, isLoading, error } = useGetPostByIdQuery(id);
    // console.log(data);
    const [deletePostById] = useDeletePostByIdMutation();
    const [updatePostById] = useUpdatePostByIdMutation();
    // console.log(deletePostById, 'from single post');

    const handleDeletePost = async () => {
        try {
            const response = await deletePostById(id);

            console.log(response);
        } catch (error) {
            console.error("Error deleting post", error);
        }
    }

    const handleUpdatePost = async () => {
        const data = {
            title: 'update title',
            body: 'update body',
            userId: 1
        }

        try {
            const response = await updatePostById({ data, id });
            console.log(response);
        } catch (error) {
            console.error("Error deleting post", error);
        }
    }

    if (error) return <p>some thing error</p>
    if (isLoading) return <p>Loading... and loading...</p>

    return (
        <div className='p-4'>
            <h1>{id} {data.title}</h1>
            <p>{data.body}</p>
            <p>{data.userId}</p>
            <button onClick={handleDeletePost} className='px-2 py-1 bg-red-500 rounded hover:bg-red-600 transition
             delay-300 mt-3'>Delete this post</button>
            <button onClick={handleUpdatePost} className='ms-5 px-2 py-1 bg-blue-500 rounded hover:bg-blue-600 transition
             delay-300 mt-3'>Update Post</button>

        </div>
    );
};

export default SinglePost;