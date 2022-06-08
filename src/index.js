import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { createBrowserHistory } from "history"

import './index.css';
import App from './Componentes/App'
import Login from './Componentes/Login'
import ProtectedRoute from './Componentes/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory({ window });


// /Library/Java/JavaVirtualMachines/jdk1.8.0_202.jdk/Contents/Home/bin/java -jar /Users/valter/Documents/React/instalura/instalura.jar

root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Routes>

        <Route path="/" element={<Login />} >
          <Route index element={<Login />} />
        </Route>

        <Route path="/login" element={<Login />} >
        </Route>

        <Route path="/timeline" element={<ProtectedRoute children={<App />} />} >
          <Route path=":login" element={<App />} />
        </Route>


      </Routes>
    </HistoryRouter>
  </React.StrictMode>
);
