import { useEffect, useState } from "react";
import PageNav from "../ui/PageNav";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";
import { login } from "../services/apiCities";

function Login() {
  const { Auth, dispatch } = useUser();
  const navigate = useNavigate();
  const [formData, setData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(formData);

      if (data.status === 200) {
        toast.success("Login successfully");
        dispatch({ type: "User/Login", payload: data.data.user });
        navigate("/app");
      }
    } catch (err) {
      console.log(err);
      const errorMessage = err?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      dispatch({ type: "User/Error", payload: errorMessage });
    }
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
            name="email"
            required
            placeholder="example@gmail.com"
            className="rounded-md h-8 bg-slate-300 mb-4 outline-none text-slate-500 px-2 placeholder:text-slate-400"
            value={formData.email}
            onChange={onChange}
          />
          <label htmlFor="password" className="text-slate-100 text-base mb-1">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            maxLength="8"
            placeholder="*******"
            className="rounded-md h-8 bg-slate-300 mb-6 outline-none text-slate-700 px-2 placeholder:text-slate-400"
            value={formData.password}
            onChange={onChange}
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
