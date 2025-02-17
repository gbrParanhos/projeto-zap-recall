import styled from "styled-components"
import ZapMain from "./components/ZapMain"

const App = () => {

  return (
    <Layout>
      <ZapMain />
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FB6B6B;
  width: 100vw;
  padding: 40px 40px 110px;
`

export default App