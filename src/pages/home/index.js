import { useState } from 'react';
import Header from "../../components/header";
import ItemList from "../../components/itemlist";
import background from "../../assets/background.png";
import "./styles.css";

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json());
    const { login, name, bio, avatar_url: avatar } = userData;
    setCurrentUser({ login, name, bio, avatar });

    const repoData = await fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json());
    setRepos(repoData);
  }

  return (
    <div className="App">

      <Header />

      <div className="contents">

        <img src={background} alt="Github logo" className="background" />

        <div className="info">
          <div>
            <input
              name="usuario"
              placeholder="@username"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {
            currentUser
              ? (
                <>
                  <div className="profile">
                    <img
                      src={currentUser.avatar}
                      alt="user avatar"
                      className="avatar"
                    />
                    <div>
                      <h3>{currentUser.name}</h3>
                      <span>@{currentUser.login}</span>
                      <br />
                      <br />
                      <p>{currentUser.bio}</p>
                    </div>
                  </div>
                  <hr />
                </>
              )
              : null
          }
          {
            repos
              ? (
                <div className="itemList">
                  <h3>Repositórios</h3>
                  <ItemList repoData={repos}/>
                </div>
              )
              : null
          }

        </div>
      </div>
    </div>
  );
}

export default App;
