import PageNav from "../ui/PageNav";

function Pricing() {
  return (
    <main className="bg-slate-700 m-5">
      <PageNav />
      <section className="px-8 py-12 max-w-[70rem] m-auto min-h-[80vh]">
        <div className="flex items-center justify-center space-x-8 px-2 flex-wrap space-y-4">
          <div className="space-y-6">
            <h1 className="text-slate-200 md:text-[40px]  sm:text-[30px] xs:text-[20px] sm:text-center xs:text-center">
              Simple pricing. Just $9/month.{" "}
            </h1>
            <p className="text-slate-400 md:text-sm md:font-semibold max-w-[30rem]  sm:text-center xs:text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </div>
          <img src="/img-2.jpg" alt="img-2" className="w-[20rem]" />
        </div>
      </section>
    </main>
  );
}

export default Pricing;
