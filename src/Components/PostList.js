import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import Search from './Search';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&units=imperial&lang=en');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {filteredPosts.map(post => (
            <ListItem key={post.id}>
              <ListItemText primary={post.title} secondary={post.body} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default PostList;
