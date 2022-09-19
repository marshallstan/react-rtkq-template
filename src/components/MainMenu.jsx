import { Link } from 'react-router-dom'

const MainMenu = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/auth-form">登录form</Link>
        </li>
        <li>
          <Link to="/profile">个人信息</Link>
        </li>
      </ul>
    </header>
  )
}

export default MainMenu
