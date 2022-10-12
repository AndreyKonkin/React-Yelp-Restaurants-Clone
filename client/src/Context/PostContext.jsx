/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, {
  createContext, useCallback, useEffect, useState,
} from 'react';
import axios from 'axios';

const URL = process.env.REACT_APP_BASEURL;

const PostsContext = createContext();

function PostContextProvider({ children }) {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/posts`).then((res) => setPosts(res.data));
  }, []);

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${URL}/posts`, { input }).then((res) => setPosts((prev) => [...prev, res.data]));
  };

  const handleDelete = useCallback((id) => {
    axios.delete(`${URL}/posts/${id}`).then(() => setPosts((prev) => prev.filter((el) => el.id !== id)));
  }, []);

  const changeHandler = async (id) => {
    const res = await fetch(
      `${URL}/posts/${id}`,
      { method: 'PUT' },
    );
    if (res.ok) {
      setPosts((prev) => prev.map((el) => {
        if (el.id === id) {
          el.status = !el.status;
          return el;
        }
        return el;
      }));
    }
  };

  const editHandler = (id) => {
    fetch(`/task/edit/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        setInput((prev) => prev.map((el) => (el.id === data.id ? data.title : el)));
      });
  };

  const handleSubmites = (e) => {
    e.preventDefault();
    axios.post(`${URL}/posts`, { input }).then((res) => setPosts((prev) => [...prev, res.data]));
  };

  return (
    <PostsContext.Provider
      value={{
        input, handleChange, handleSubmit, handleDelete, posts, changeHandler, editHandler, handleSubmites, setPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export { PostsContext };
export default PostContextProvider;
