import './App.css';
import Main from './component/sidebar/main/Main';
import Navbar from './component/sidebar/main/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  return (
    <div className="App grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] grid-areas-[ 'sidebar content' 'sidebar main'] h-screen">
      {/* Sidebar on the left */}
      <Sidebar className="col-start-sidebar col-end-sidebar row-start-sidebar row-end-main shadow-lg" />
      
      {/* Content area for Navbar and Main */}
      <div className="col-start-content col-end-main row-start-sidebar row-end-main flex flex-col">
        {/* Navbar across the top of the content area */}
        <Navbar className="w-full sticky top-0 z-10 shadow-md" />
        
        {/* Main content below the Navbar */}
        <Main className="flex-grow p-4 overflow-auto" />
      </div>
    </div>
  );
}

export default App;
