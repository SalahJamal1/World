import Sidebar from "../features/app/Sidebar";
import Map from "../features/app/Map";
import User from "../features/app/User";

function AppLayout() {
  return (
    <div className="grid grid-cols-[1fr_2fr] m-4 relative">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
