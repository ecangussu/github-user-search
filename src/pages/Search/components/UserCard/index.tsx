import { GitHubUser } from 'core/types/GitHubUser';
import React from 'react';
import './styles.scss';

type Props = {
  gitHubUser: GitHubUser;
}

const UserCard = ({gitHubUser}: Props) => (
  <div className="user-card-container">
    <div className="user-card-div-image-button">
      <div className="user-card-div-image">
        <img src={gitHubUser.avatar_url} alt={gitHubUser.html_url} className="user-card-image"/>
      </div>
      <a href={gitHubUser.html_url}>
        <button className="btn btn-primary btn-lg">
          Ver perfil
        </button>
      </a>
    </div>
    <div>
      <div className="user-card-header">
        <h1 className="layout-header">Repositórios públicos: {gitHubUser.public_repos}</h1>
        <h1 className="layout-header">Seguidores: {gitHubUser.followers}</h1>
        <h1 className="layout-header">Seguindo: {gitHubUser.following}</h1>
      </div>
      <div className="user-card-information">
        <h1 className="layout-information-title">Informações</h1>
        <h1 className="layout-information">Empresa: {gitHubUser.company}</h1>
        <h1 className="layout-information">Website/Blog: {gitHubUser.blog}</h1>
        <h1 className="layout-information">Localidade: {gitHubUser.location}</h1>
        <h1 className="layout-information">Membro desde: {gitHubUser.created_at}</h1>
      </div>
    </div>
  </div>
);

export default UserCard;