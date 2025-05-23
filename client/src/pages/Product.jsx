import PageNav from "../ui/PageNav";

function Product() {
  return (
    <main className="bg-slate-700 m-5">
      <PageNav />
      <section className="px-8 py-12 max-w-[70rem] m-auto min-h-[80vh]">
        <div className="flex items-center justify-center space-x-8 px-2 flex-wrap space-y-4">
          <img src="/img-1.jpg" alt="img-1" className="w-[20rem]" />
          <div className="space-y-6">
            <h1 className="text-slate-200 text-[30px]  sm:text-[25px] xs:text-[20px] sm:text-center xs:text-center">
              About WorldWide.
            </h1>
            <p className="text-slate-100 text-sm  max-w-[30rem] sm:text-center xs:text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
            <p className="text-slate-100 text-sm max-w-[30rem] sm:text-center xs:text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
