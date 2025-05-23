function Country({ country }) {
  return (
    <li className="flex flex-col items-center px-2 py-1 rounded-2xl border-l-orange-500 border-l-8 justify-between flex-wrap space-x-2 space-y-1 bg-slate-500 max-h-24">
      <span className="text-3xl text-slate-100">{country.emoji}</span>
      <span className="text-sm text-slate-100 font-semibold">
        {country.cityName}
      </span>
    </li>
  );
}

export default Country;
