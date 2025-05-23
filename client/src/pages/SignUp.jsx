import { useState } from "react";
import PageNav from "../ui/PageNav";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/apiCities";
import toast from "react-hot-toast";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signUp(formData);
      if (data.status === 200) {
        toast.success("You are signed Up successfully");
        navigate("/login");
      }
    } catch (err) {
      console.log(err.message);
      toast.error("Some thing wrong, please try again later");
    }
  };

  return (
    <main className="bg-slate-700 m-5">
      <PageNav />
      <section className="px-8 py-12 flex items-center justify-center min-h-[80vh]">
        <form
          className="flex flex-col bg-slate-600 rounded-lg px-6 py-8 w-[30rem] shadow-md capitalize"
          onSubmit={onSubmit}
        >
          <label htmlFor="name" className="text-slate-100 text-base mb-1">
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter you name"
            className="rounded-md h-8 bg-slate-300 mb-4 outline-none text-slate-700 px-2 placeholder:text-slate-400"
            value={formData.name}
            onChange={onChange}
          />
          <label htmlFor="email" className="text-slate-100 text-base mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@gmail.com"
            className="rounded-md h-8 bg-slate-300 mb-4 outline-none text-slate-700 px-2 placeholder:text-slate-400"
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
          <label
            htmlFor="passwordConfirm"
            className="text-slate-100 text-base mb-1"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            required
            maxLength="8"
            placeholder="*******"
            className="rounded-md h-8 bg-slate-300 mb-6 outline-none text-slate-700 px-2 placeholder:text-slate-400"
            value={formData.passwordConfirm}
            onChange={onChange}
          />
          {/* <div className="flex"> */}
          <button className="px-4 py-1 bg-green-500 rounded-md">SignUp</button>
          {/* </div> */}
        </form>
      </section>
    </main>
  );
}

export default SignUp;
