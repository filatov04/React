import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context/context';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  return (
    <div className="navbar">
        <MyButton onClick={() => setIsAuth(false)}>
            Выйти
        </MyButton>
        <div className="navbar__links">
          <Link to="/about">О сайте</Link>
          <Link to="/post">Посты</Link>
        </div>
    </div>
  )
}

export default Navbar