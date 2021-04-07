import React, { useState } from 'react';
import { makeRequest } from 'core/utils/request'
import './styles.scss';
import { GitHubUser } from 'core/types/GitHubUser';
import UserCard from './components/UserCard';

type UserName = {
  name: string;
}

const Search = () => {
  const [userData, setUserData] = useState<GitHubUser>({
    public_repos: 0,
    followers: 0,
    following: 0,
    company: '',
    blog: '',
    location: '',
    created_at: '',
    avatar_url: '',
    html_url: 'github.com',
  });
  const [userName, setUserName] = useState<UserName>({
    name: ''
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserName(data => ({ ...data, [name]: value}));
  }

  const handleOnClick = () => {
    makeRequest({url: userName.name, method: 'GET'})
      .then(response => setUserData(response.data))
      .then(() => {
        setUserName({name: ''});
      });

  }  
  
  return (
    <div>
      <div className="search-container">
        <h1 className="title-search">
          Encontre um perfil GitHub
        </h1>
        <input
          value={userName.name}
          name="name"
          type="text" 
          className="form-control search-input"
          onChange={handleOnChange}
          placeholder="Usuário GitHub" 
        />
        <button 
          className="btn btn-primary btn-lg"
          onClick={handleOnClick}
        >
          Encontrar
        </button>
      </div>
      <div>
        <UserCard gitHubUser={userData}/>
      </div>
    </div>
  );
}

export default Search;