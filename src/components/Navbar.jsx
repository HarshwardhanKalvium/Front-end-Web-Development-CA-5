import { Link } from "react-router-dom";
import "./NavBar.css";
import mainLogo from '../assets/main-logo.png';
import searchIcon from '../assets/search-icon.png';

function NavBar({books,setBooks,allBooks}) {


  const handleChange=(e)=>{
    let searchValue=e.target.value;
    if(searchValue == ''){
      setBooks(allBooks);
      return;
    }

    let newArr=[...books]
      
    let filterBooks=newArr.filter((ele)=>{
      // console.log(e.title.toLowerCase().includes(searchValue.toLowerCase()),e.title.toLowerCase(),searchValue.toLowerCase(),e.title.toLowerCase()==searchValue.toLowerCase())
      if (ele.title.toLowerCase().includes(searchValue.toLowerCase())){
        return ele;
      };
    });
    setBooks(filterBooks)
    
  }

  return (
    <nav>
        <Link to="/">
          <img className='main-logo' src={mainLogo} alt="Main Logo"/>
        </Link>
        <h1 className='half-logo'>Books</h1>
        <img className='search-icon' src={searchIcon} alt="Search Icon" />
        <input type="text" placeholder="Search Books" onChange={(e)=>handleChange(e)} />
        <button>
          <Link to="/RegisterForm">Register</Link>
        </button>
    </nav>
  )
}

export { NavBar as Nav }