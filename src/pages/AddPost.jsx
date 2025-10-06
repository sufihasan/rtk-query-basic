import React, { useState } from 'react';
import { useAddNewPostMutation } from '../redux/features/posts/postApi';

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");

    const [addNewPost] = useAddNewPostMutation();
    console.log(addNewPost);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(title, body, userId);
        const newPost = {
            title,
            body,
            userId
        }
        console.log(newPost);
        await addNewPost(newPost);
    }

    return (
        <div className='p-5 shadow-md rounded-lg border max-w-md'>
            <h1>Add New Post</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='block mb-1'>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Post title' className='p-1 border border-gray-300 rounded focus:outline-none w-full' />
                </div>

                <div>
                    <label className='block mb-1'>Description</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder='Description' className='p-1 border border-gray-300 rounded focus:outline-none w-full' />
                </div>

                <div>
                    <label className='block mb-1'>User Id</label>
                    <input value={userId} onChange={(e) => setUserId(e.target.value)} type="text" placeholder='Post userId' className='p-1 border border-gray-300 rounded focus:outline-none w-full' />
                </div>

                <button className='mt-5 px-6 py-2 bg-blue-500 text-white inline-block'>Add Post</button>

            </form>
        </div>
    );
};

export default AddPost;