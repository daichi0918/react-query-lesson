import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { Layout } from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StateProvider } from './context/StateProvider'
import { ReactQueryA } from './components/ReactQueryA'
import { ReactQueryB } from './components/ReactQueryB'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MainContext } from './components/MainContext'
import { MainRTKit } from './components/MainRTKit'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ReactQueryA />} />
            <Route path="/query-b" element={<ReactQueryB />} />
            <Route path="/fetch-a" element={<ClassicalFetchA />} />
            <Route path="/fetch-b" element={<ClassicalFetchB />} />
            <Route path="/main-context" element={<MainContext />} />
            <Route path="/main-rtkit" element={<MainRTKit />} />
          </Routes>
        </Layout>
      </StateProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
)
