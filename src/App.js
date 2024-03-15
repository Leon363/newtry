import React, { useMemo, useRef, useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';

function App() {

  const [posts, setPosts] = useState ([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'aJavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'aDescription'}
  ])


  // const [selectedSort, setSelectedSort] = useState('')
  // const [searchQuery, setSearchQuery] = useState('')

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  // function getSortedPosts() {
    
  // }
  
  const sortedPosts = useMemo(() => {
    console.log('worked');
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } 
    return posts;

  }, [filter.sort, posts]) 

  const sortedAndSerchedPosts = useMemo ( () => {

    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))

  }, [filter.query, sortedPosts])

  // const [likes, setLikes] = useState (7);

  // const [value, setValue] = useState('Text in Input');
  // const [textovoe, settextovoe] = useState('something');
  // const [therd, setTherd] = useState('therd text');

  // const bodyInputRef = useRef();
  // const [body, setBody] = useState(' ')
  // const addNewPost = (e) => {
  //     e.preventDefault()
  //     // const newPost = {
  //     //   id: Date.now(),
  //     //   title,
  //     //   body
  //     // }
  //     setPosts([...posts, {...post, id: Date.now()}])
  //     setPost({title:'', body:''})
  //     // setTitle('')
  //     // setBody('')
  //     // e.preventDefault()
  //     // console.log(title);
  //     // console.log(bodyInputRef.current.value);
  // }
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);

  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  // const sortPosts = (sort) => {
  //   setSelectedSort(sort);
    
  // }

  
  return (
    <div className="App">
        <MyButton style={{marginTop: 30}} onClick = {() => setModal(true)}>
          Create user
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>
        <hr style={{margin: '15px 0'}} />
        <PostFilter 
          filter={filter}
          setFilter={setFilter}
         />
      
          <PostList remove={removePost} posts={sortedAndSerchedPosts} title={'Список постов JS'}/>
        
           
        
        
     

      {/* <ClassCounter /> */}
      {/* <h1>{likes}</h1>
      <h1>{value}</h1>
      <input 
        type='text' 
        value={value} 
          onChange={event => setValue(event.target.value)}
        />
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <h1>{textovoe}</h1>
      <input 
        type='text'
        value={textovoe}
          onChange={event => settextovoe(event.target.value)}
        />
        <h1>{therd}</h1>
        <input 
          type='text'
          value={therd}
          onChange={event => setTherd(event.target.value)}
        /> */}
      
    </div>
  );
}

export default App;
