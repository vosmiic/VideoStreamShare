import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./Components/Home.tsx";
import Layout from "../layout.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Layout>
          <Home />
      </Layout>
  </StrictMode>,
)
