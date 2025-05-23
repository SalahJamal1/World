import { useEffect, useState } from "react";
import PageNav from "../ui/PageNav";
import { useDispatch, useSelector } from "react-redux";
import { Logins } from "../components/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Auth } = useSelector((store) => store.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    if (!email && !password) return;
    dispatch(Logins({ email, password }));
  };
  useEffect(
    function () {
      if (Auth) navigate("/app");
    },
    [Auth, navigate]
  );

  return (
    <main className="bg-slate-700 m-5">
      <PageNav />
      <section className="px-8 py-12 flex items-center justify-center min-h-[80vh]">
        <form
          className="flex flex-col bg-slate-600 rounded-lg px-6 py-8 w-[30rem] shadow-md"
          onSubmit={handelLogin}
        >
          <label htmlFor="email" className="text-slate-100 text-base mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="example@gmail.com"
            className="rounded-md h-8 bg-slate-300 mb-4 outline-none text-slate-500 px-2 placeholder:text-slate-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-slate-100 text-base mb-1">
            password
          </label>
          <input
            type="password"
            id="password"
            required
            maxLength="8"
            placeholder="*******"
            className="rounded-md h-8 bg-slate-300 mb-6 outline-none text-slate-700 px-2 placeholder:text-slate-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between px-2">
            <button className="px-4 py-1 bg-green-500 rounded-md tracking-widest">
              Login
            </button>
            <Link to="/signup" className="text-slate-100">
              Sign Up
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
