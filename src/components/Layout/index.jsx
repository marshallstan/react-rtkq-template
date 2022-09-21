import MainMenu from '../MainMenu'

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
