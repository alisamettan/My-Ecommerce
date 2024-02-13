export default function CategoryCard() {
  return (
    <>
      <section className="py-32 flex flex-col justify-center items-center gap-5 bg-[#FAFAFA]">
        <div className="flex items-center flex-col gap-3">
          <h1 className="text-3xl font-extrabold">EDITOR'S PICK</h1>
          <p>Problems trying to resolve the conflict between</p>
        </div>
        <div className="flex flex-row gap-[_48px]">
          <div className="relative">
            <img
              className="w-[_40rem] h-[_43rem]"
              src="https://images.unsplash.com/photo-1618453292507-4959ece6429e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <button className="absolute bottom-2 left-4 py-[_13px] px-16  bg-white mx-auto mb-2 text-xl font-extrabold">
              MEN
            </button>
          </div>
          <div className="relative">
            <img
              className="w-[_20rem] h-[_43rem]"
              src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <button className="absolute bottom-2 left-4 py-[_13px] px-8  bg-white mx-auto mb-2 text-xl font-extrabold">
              WOMEN
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <div className="relative">
              <img
                className="w-[_20rem] h-[_20rem] "
                src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <button className="absolute bottom-2 left-4 py-[_13px] px-3  bg-white mx-auto mb-2 text-xl font-extrabold">
                ACCESSORIES
              </button>
            </div>
            <div className="relative">
              <img
                className="w-[_20rem] h-[_20rem]"
                src="https://plus.unsplash.com/premium_photo-1661284917589-d96587cbe886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <button className="absolute bottom-2 left-4 py-[_13px] px-14  bg-white mx-auto mb-2 text-xl font-extrabold">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
