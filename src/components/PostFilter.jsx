import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
          <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder='serch...'
          />
          <MySelect 
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue='Сортировка по'
            options={[
              {value: 'title', name:'По названию'},
              {value: 'body', name:'По описанию'}
            ]}
          />
          {/* <select>
            <option value='value1'> По названию </option>
            <option value='value1'> По описанию </option>
          </select> */}
        </div>
  )
}

export default PostFilter