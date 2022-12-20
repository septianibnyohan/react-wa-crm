// /// <reference types="chrome" />
// /// <reference types="vite-plugin-svgr/client" />

// import logo from './logo.svg'
// import './App.css'

// function getLogo() {
//   if (window.chrome) {
//     return window.chrome.runtime.getURL(logo.toString())
//   }

//   return logo
// }

// function App() {
//   return (
//     <div className="relative w-full h-full">
//       <div className="absolute bottom-0 left-0 z-10 pb-4 pl-2 text-sm">
//         <a href="https://cutt.ly/memdown" target="_blank" rel="noreferrer noopener" className="px-3 py-2 bg-white rounded-full shadow-md">
//           <span className="pr-2">Versi 11.1.7</span> - <span className="pl-2 font-medium text-blue-600">Info Update</span>
//         </a>
//       </div>
//       <div className="w-full h-full overflow-y-auto bg-gray-200 App">
//       </div>
//     </div>
//   )
// }

// export default App



import React from 'react';
class App extends React.Component {
  state = { color: 'lightgreen' }
  constructor(props: {} | Readonly<{}>) {
    super(props);
  
    // Initializing the state 
    this.state = { color: 'lightgreen' };
  }
  componentDidMount() {
  
    // Changing the state after 2 sec
    // from the time when the component
    // is rendered
    setTimeout(() => {
      this.setState({ color: 'wheat' });
    }, 2000);
  }
  render() {
    return (
      <div className="relative w-full h-full">
        <div className="absolute bottom-0 left-0 z-10 pb-4 pl-2 text-sm">
          <a href="https://cutt.ly/memdown" target="_blank" rel="noreferrer noopener" className="px-3 py-2 bg-white rounded-full shadow-md">
            <span className="pr-2">Versi 11.1.7</span> - <span className="pl-2 font-medium text-blue-600">Info Update</span>
          </a>
        </div>
        <div className="w-full h-full overflow-y-auto bg-gray-200 App">
        </div>
      </div>
    );
  }
}
export default App;


