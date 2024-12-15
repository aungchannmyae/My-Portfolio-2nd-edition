
import Container from "./Container";
import useGeneralStore from "../store/useGeneralStore";

const Portfolio = () => {

  const {navBar} = useGeneralStore();
  return (
    <section
      className={` ${
        !navBar[3].page && " animate__animated animate__fadeOut hidden"
      } animate__animated animate__fadeIn mb-10 `}
    >
      <Container>
        <div>
          <h1 className=" inline-block lg:pb-5 lg:mb-5 border-b-4 border-[#df4f3e] max-lg:pb-3 max-lg:mb-3 max-lg:text-3xl xl:text-3xl lg:text-3xl text-white font-bold ">
            Projects
          </h1>
          <section>
            <div className=" w-fit py-2 duration-200 grid max-sm:grid-cols-1 max-lg:gap-6 xl:grid-cols-3 md:grid-cols-2 xl:gap-5 lg:gap-10">
              <div className="bg-red overflow-hidden shadow-2xl pb-3 rounded-lg shadow-zinc-950">
                <div className=" h-[200px] overflow-hidden mb-3">
                  <a target="_blank" href="https://joyboi-e-commerce.vercel.app/">
                    <img className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg h-[200px] object-cover object-center" src="/project-1.png" alt="" />
                  </a>
                </div>
                <p className=" px-3 text-lg text-stone-400"> <span className=" text-[#df4f3e]">React</span> E-Commerce Website</p>
                <p className=" px-3 text-md text-stone-400">Design and Production by <a className=" text-[#df4f3e]" target="_blank" href="https://joyboi.vercel.app">aungchanmyae</a></p>
              </div>

              <div className="bg-red overflow-hidden shadow-2xl pb-3 rounded-lg shadow-zinc-950">
                <div className=" overflow-hidden mb-3">
                  <a target="_blank" href="https://joyboi-e-commerce.vercel.app/">
                    <img className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg h-[200px] object-cover object-center" src="/project-2.png" alt="" />
                  </a>
                </div>
                <p className=" px-3 text-lg text-stone-400"> <span className=" text-[#df4f3e]">React</span> Personal Portfolio Website</p>
                <p className=" px-3 text-md text-stone-400">Design and Production by <a className=" text-[#df4f3e]" target="_blank" href="https://joyboi.vercel.app">aungchanmyae</a></p>
              </div>
              
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
