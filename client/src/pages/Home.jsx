import { Link } from "react-router-dom";
import PageNav from "../ui/PageNav";

function Home() {
  return (
    <main className="hero">
      <PageNav />
      <section className="max-w-[50rem] m-auto h-full px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-12">
          <h1 className="text-slate-200 text-[45px] text-center">
            You travel the world. WorldWise keeps track of your adventures.
          </h1>
          <p className="text-slate-400 text-lg font-semibold text-center">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>
          <Link
            to="login"
            className="text-slate-900 mt-8 uppercase tracking-wide bg-green-500 px-4 py-2 rounded-lg"
          >
            Start tracking now
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
