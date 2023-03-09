import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="center">
    <header className="my-header">
      <div className="container1">
        <h2>my app</h2>
      </div>
      <nav>
        <ul>
          <li>home</li>
        </ul>
      </nav>
    </header>
    <h3>I'm happy to start my first react hello world project</h3>
    <section className="display">
      <div className="image-content">
        <p>build the community that your fans will love when viewing your site</p>
        <form className="form-input">
          <label className="name">first name:</label>
          <input type="text" placeholder="first name" required></input><br></br>
          <label className="name"> last name:</label>
          <input type="text" placeholder="last name" required></input><br></br>
          <label className="name">email address:</label>
          <input type="text" placeholder="enter email...." required></input>
          <button className="button-submit" type="submit">submit</button>
        </form>
        <img src= {logo} alt="logo"></img>
      </div>
    </section>
    <footer>
      <p>Bencopyright &copy;2023</p>
    </footer>
    </div>
  );
}

export default App;
