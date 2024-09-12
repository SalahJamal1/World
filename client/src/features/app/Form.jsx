import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  return (
    <form className="flex flex-col bg-slate-500 rounded-lg shadow-2xl py-6 px-6">
      <label htmlFor="name" className="text-slate-100 text-base mb-1">
        City name
      </label>
      <input
        type="text"
        id="name"
        required
        className="rounded-md h-8 bg-slate-300 mb-4 outline-none text-slate-500 px-2 placeholder:text-slate-400"
      />
      <label htmlFor="city" className="text-slate-100 text-base mb-1">
        When did you go to Ainsa?
      </label>
      <input
        type="text"
        id="city"
        required
        className="rounded-md h-8 bg-slate-300 mb-6 outline-none text-slate-500 px-2 placeholder:text-slate-400"
      />
      <label htmlFor="notes" className="text-slate-100 text-base mb-1">
        When did you go to Ainsa?
      </label>
      <input
        type="text"
        id="notes"
        required
        className="rounded-md h-16 bg-slate-300 mb-6 outline-none text-slate-500 px-2 placeholder:text-slate-400"
      />
      <div className="flex justify-between">
        <button className="px-4 py-1 bg-green-500 rounded-md">Add</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="px-4 py-1 rounded-md border border-slate-100 text-slate-100"
        >
          ← Back
        </button>
      </div>
    </form>
  );
}

export default Form;
