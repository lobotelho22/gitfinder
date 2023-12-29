import Header from "../../components/header";
import ItemList from "../../components/itemlist";
import background from "../../assets/background.png";
import "./styles.css";

function App() {
  return (
    <div className="App">

      <Header />

      <div className="contents">
        
        <img src={background} alt="Github logo" className="background" />
        
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="profile">
            <img
              src="https://avatars.githubusercontent.com/u/99725896?v=4"
              alt="user avatar"
              className="avatar"
            />
            <div>
              <h3>Nome do Usuário</h3>
              <span>@usuario</span>
              <p>Descrição</p>
            </div>
          </div>
        
          <hr />
        
          <div className="itemList">
            <h3>Repositórios</h3>
            <ItemList />
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
