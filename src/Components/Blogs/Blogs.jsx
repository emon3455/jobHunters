import React from 'react';

const Blogs = () => {
    return (
        <div className="">

            <h1 className='text-4xl my-10 font-bold text-center'>Blog Post</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-10'>

                <article className='bg-orange-300 rounded-xl p-2'>
                    <h2 className='text-2xl font-semibold my-2' >When we should use context API?</h2>
                    <p >
                        When we need to access the same data into different different component at many level or at nested level then we can use context API. it helps us to get the data at nested level. And if we use context api we don't need to do prop dealing we can access data easily at any levels.
                    </p>
                </article>

                <article className='bg-violet-300 rounded-xl p-2'>
                    <h2 className='text-2xl font-semibold my-2' >What is custom hook ?</h2>
                    <p>
                        custom hook is a function that can be create by developer to reduce code redundancy. for making code reuseable we can create or use custom hook. custom hook is created by react built in hook like as useState, useEffect etc.
                    </p>
                </article>

                <article className='bg-sky-300 rounded-lg p-2'>
                    <h2 className='text-2xl font-semibold my-2' >What is useRef and why it used?</h2>
                    <p>
                        useRef is a react build in hook. useRef is used for reference a DOM element or store any mutable value that need to be parsist across rander. it is a versy usefull hook that can be used for many purpose like as improving performance, simplyfying code e.t.c
                    </p>
                </article>

                <article className='bg-red-300 rounded-lg p-2'>
                    <h2 className='text-2xl font-semibold my-2' >What is useMemo and why it used?</h2>
                    <p>
                        useMemo is a react built in hook that is used for memorizing a result or value or a function so that it don't need to be recalculate the same thing in this situation we can use this hook. this is a really important hook for making our code more efficient and for improving performance.
                    </p>
                </article>

            </div>
        </div>
    );
};

export default Blogs;