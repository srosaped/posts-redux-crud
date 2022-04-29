import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, deletePost, updatePost } from './features/Posts';

function App() {

  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.posts.value);

  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  return (
    <div className="App">
      {" "}
      <div className='form addPost'>
        <h1>Posts</h1>
        <select 
          className='input-style' 
          name="priority" 
          id="priority" 
          onChange={(event) => 
            {setPriority(event.target.value)
            }}
        >
          <option disabled selected value> -- select an priority -- </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input 
          className='input-style' 
          type="text" 
          placeholder="Title..."
          onChange={(event) => 
            {setTitle(event.target.value)
          }}
        />
        <textarea 
          className='input-style' 
          rows="4" 
          placeholder="Post Message..."
          onChange={(event) => 
            {setBody(event.target.value)
          }}
          />
        <button onClick={() => {dispatch(addPost({id: postsList[postsList.length -1 ].id + 1, priority , title, body} ))}}>Add Post</button>
      </div>

      <div className='displayPosts'></div>
            {postsList.map((post) => {
              return ( 
              <div>
              <p>{post.priority}</p>
              <p>{post.title}</p>
              <p>{post.body}</p>
              <input 
                className='input-style' 
                type="text" 
                placeholder="New Priority..."
                onChange={(event) => { 
                  setNewPriority(event.target.value)
                }}
              />
              <input 
                className='input-style' 
                type="text" 
                placeholder="New Title..."
                onChange={(event) => { 
                  setNewTitle(event.target.value)
                }}
              />
              <input 
                className='input-style' 
                type="text" 
                placeholder="New Body..."
                onChange={(event) => { 
                  setNewBody(event.target.value)
                }}
              />
              <button 
                onClick={() => {
                  dispatch(updatePost({id: post.id, priority: newPriority, title: newTitle, body: newBody}))
                }}
              >
                {" "}
                Update
              </button>
              <button 
                onClick={() => {
                  dispatch(deletePost({id: post.id}))
                }}
              >
              Delete
              </button>
              </div>
              );
            })}
    </div>
  );
}

export default App;
