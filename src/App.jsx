import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet /> {/* This renders the current route's component */}
    </div>
  );
};

export default App;
