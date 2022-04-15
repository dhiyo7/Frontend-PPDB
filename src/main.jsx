import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import "mapbox-gl/dist/mapbox-gl.css";
import { registerSW } from "virtual:pwa-register";
import Toastify from 'toastify-js'




import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location) && !/lvh.me/.test(window.location)) {
  const updateSW = registerSW({
    onNeedRefresh() {
      Toastify({
        text: `<h4 style='display: inline'>An update is available!</h4>
               <br><br>
               <a class='do-sw-update'>Click to update and reload</a>  `,
        escapeMarkup: false,
        gravity: "bottom",
        onClick() {
          updateSW(true);
        }
      }).showToast();
    }
  });
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
