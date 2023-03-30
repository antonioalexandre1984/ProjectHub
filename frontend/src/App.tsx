import { BrowserRouter } from "react-router-dom"
/* import { AuthContextProvider } from "./components/Contexts/AuthContext" */
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { AuthContextProvider } from "./components/Contexts/AuthContext"
import { AppLayout } from "./components/AppLayout"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'



const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <ReactNotifications />
          <AppLayout>
            <Router />
          </AppLayout>
          <GlobalStyle />
        </BrowserRouter>
      </AuthContextProvider >
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )

}

export default App
