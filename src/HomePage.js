/* eslint-disable no-unused-vars */

import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
function HomePage() {

  return (
    <div className="w-screen h-screen bg-slate-300 flex flex-row p-2 gap-2">
      <SideBar />
      <div className='w-full h-full flex justify-center items-center'>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
