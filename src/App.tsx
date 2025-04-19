import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { Layout } from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StateProvider } from './context/StateProvider'

export const App = () => (
  <BrowserRouter>
    <StateProvider>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<ReactQueryA />} />
        <Route path="/query-b" element={<ReactQueryB />} /> */}
          <Route path="/fetch-a" element={<ClassicalFetchA />} />
          <Route path="/fetch-b" element={<ClassicalFetchB />} />
          {/* <Route path="/main-context" element={<MainContext />} />
        <Route path="/main-rtkit" element={<MainRTKit />} /> */}
        </Routes>
      </Layout>
    </StateProvider>
  </BrowserRouter>
)
