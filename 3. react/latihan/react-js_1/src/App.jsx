
import './App.css'

/**
 * Membuat component Header.
 * Component Header menampilkan navigasi.
 */
function Header(){
  return(
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * Membuat component Content
 * Component Content menampung content utama
 */
function Content(){
  return <h1>Content</h1>;
}

/**
 * Membuat component Footer
 * Component Footer menampilkan Footer
 */
function Footer(){
  return(
    <footer>
    <h2>NF Academy</h2>
    <p>Created by React JS</p>
    </footer>
  );
}

function Halo(){
  const Nama = "Aqua";
  return(
    <>
      <h2>Hallo React</h2>
      <p>saya {Nama} - seorang cyber security</p>
    </>
  );
}

function Greeting(props){
  return <h1>Hello, {props.name}</h1>
}

function Profile(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.country}</p>
    </div>
  )
}

/**
 * Component App
 * Component yang menampung component lain
 */
function App() {

  return (
    <>
      <Header />
      <Content />
      <Halo />
      <Greeting name="Alice"/>
      <Profile name="Aqua" age={69} country="Indonesia" />
      <Footer />
    </>
    
  );
}

export default App
