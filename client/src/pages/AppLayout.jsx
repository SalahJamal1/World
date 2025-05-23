import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";

function AppLayout() {
  return (
    <div className="grid lg:grid-cols-[1fr_2fr] m-4 relative overflow-hidden md:grid-cols-[1fr,1fr] sm:grid-cols-[1fr] xs:grid-cols-[1fr]">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
