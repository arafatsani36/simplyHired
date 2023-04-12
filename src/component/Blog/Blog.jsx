import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='mt-5 text-center text-xl mb-5'>My Blog</h1>
            <div>
                <h1 className='question'>Question 1: <span>When should you use context API?</span></h1>
                <p className='answer'>Answer : <span>Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.
                Context API consists of two main components: the context provider and the context consumer. The provider is responsible for creating and managing the context, which holds the data to be shared between components. On the other hand, the consumer is used to access the context and its data from within a component.</span></p>
            </div>
            <div className='mt-5'>
                <h1 className='question'>Question 2: <span>What is a custom hook?</span></h1>
                <p className='answer'>Answer : <span>Custom Hooks are functions. Usually, they start with the word use.Custom Hooks allow us to access the React ecosystem in terms of hooks, which means we have access to all the known hooks like useState, useMemo, useEffect, etc.</span></p>
            </div>
            <div className='mt-5 mb-5'>
                <h1 className='question'>Question 3: <span>What is useRef?</span></h1>
                <p className='answer'>Answer : <span>useRef is a hook introduced with other hooks in React version 16.8 and is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component. 
                But don't think even for a second that it's the only thing this hook is capable of as it can even be used for storing mutable values across different rerenders of the component.</span></p>
            </div>
            <div className='nt-5 mb-5'>
                <h1 className='question'>Question 4: <span>What is useMemo?</span></h1>
                <p className='answer'>Answer : <span>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed. In our example below we have an expensive function called computeLetterCount (for demo purposes we make it slow by including a large and completely unnecessary loop).</span></p>
            </div>
        </div>
    );
};

export default Blog;