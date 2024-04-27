import React, { useRef, useState } from 'react';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import './styles/App.css'
import PostItems from './Components/PostItems';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton'
import MyInput from './Components/UI/input/MyInput';

function App() {
  const [post, setPost] = useState([
      {id: 1, title: 'Javascript', body: 'Description' },
      {id: 2, title: 'Javascript 2', body: 'Description' },
      {id: 3, title: 'Javascript 3', body: 'Description' },]
  )

  const [posts, setPosts] = useState({title: '', body: ''})


  const addNewPost = (e) => {
    e.preventDefault()

    setPost([...post, {...posts, id: Date.now()}])
    setPosts({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        {/*Управляеымй компонент*/}
        <MyInput
          value={posts.title}
          onChange={e => setPosts({...posts, title: e.target.value})}
          type="text" 
          placeholder="Название поста"/>
          {/* Неуправляемый \ неконтролируемый компонент */}
        {/* <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста"/> */}
        <MyInput
          value={posts.body}
          onChange={e => setPosts({...posts, body: e.target.value})}
          type="text" 
          placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList post={post} title="Посты про JS"/>
    </div>
  );
}

export default App;
