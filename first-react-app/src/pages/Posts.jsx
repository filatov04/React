import React, { useEffect, useState } from 'react';
import '../styles/App.css'
import PostList from '../Components/PostList';
import PostForm from '../Components/PostForm';
import PostFilter from '../Components/PostFilter';
import MyModal from '../Components/UI/MyModal/MyModal';
import MyButton from '../Components/UI/button/MyButton';
import { usePosts } from '../hooks/usePost';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import {useFetching} from '../hooks/useFetching'
import { getPageCount} from '../utils/pages';
import Pagination from '../Components/UI/pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'ГГ', body: 'АА'},
    {id: 2, title: 'АА', body: 'РР'},
    {id: 3, title: 'ББ', body: 'ЯЯ'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  const changePage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    fetchPosts();
    }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
      <MyButton onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError && 
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}> <Loader/> </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов 1"}/> 
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
