import MainMenu from './MainMenu.jsx'

const Layout = ({ children }) => {
  return (
    <div>
      <MainMenu />
      <hr />
      {children}
    </div>
  )
}

export default Layout
