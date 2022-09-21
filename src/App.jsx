import WrapperRoutes from '@/routes'
import Layout from '@/components/Layout'
import useAutoLogout from '@/hooks/useAutoLogout'

function App() {
  useAutoLogout()

  return (
    <Layout>
      <WrapperRoutes />
    </Layout>
  )
}

export default App
