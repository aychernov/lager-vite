import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider} from "@chakra-ui/react";
import './index.css'
import NavBar from "./lib/layout/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
		<ChakraProvider>
			<BrowserRouter>
				<NavBar/>
				<Routes>
					<Route path='/' element={<App/>}/>
					{/*<Route path='*' element={<Hero/>}/>*/}
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
)
