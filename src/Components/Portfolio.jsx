import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralProvider";
import Container from "./Container";

const Portfolio = () => {
  const { portfolio, handlePortfolio } = useContext(GeneralContext);
  return (
    <section
      className={` ${
        !portfolio && " animate__animated animate__fadeOut hidden"
      } animate__animated animate__fadeIn mb-10 `}
    >
      <Container>
        <div>
          <h1 className=" inline-block pb-5 mb-5 border-b-4 border-[#df4f3e] xl:text-3xl lg:text-3xl text-white font-bold ">
            Projects
          </h1>
          <section>
            <div className=" duration-200 grid xl:grid-cols-3 lg:grid-cols-2 xl:gap-5 lg:gap-10">
              <div className="bg-red overflow-hidden shadow-2xl rounded-lg shadow-zinc-950">
                <div className=" h-[200px] overflow-hidden ">
                  <a href="">
                    <img className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg w-full" src="https://img.freepik.com/free-vector/hand-drawn-pattern-design-summer-season_23-2150265573.jpg?t=st=1722778199~exp=1722778799~hmac=43be906ecfd31853273eeb4abe5c4b851b49a5a3f35d240d4d2170ff0e0a324d" alt="" />
                  </a>
                </div>
                <p className=" p-3 text-lg text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deserunt?</p>
              </div>
              <div className="bg-red overflow-hidden shadow-2xl rounded-lg shadow-zinc-950">
                <div className=" h-[200px] overflow-hidden ">
                  <a href="">
                    <img className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg w-full" src="https://img.freepik.com/free-vector/hand-drawn-fruit-floral-design-pattern_23-2149460320.jpg?t=st=1722778199~exp=1722778799~hmac=d592077a34957ad92140e38d8c099dda7af1c82e12860a56a8f01869cf1a4d0b" alt="" />
                  </a>
                </div>
                <p className=" p-3 text-lg text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deserunt?</p>
              </div>
              <div className="bg-red overflow-hidden shadow-2xl rounded-lg shadow-zinc-950">
                <div className=" h-[200px] overflow-hidden ">
                  <a href="">
                    <img className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg w-full" src="https://img.freepik.com/free-vector/hand-drawn-background-with-autumn-leaves_52683-43217.jpg?t=st=1722778199~exp=1722778799~hmac=24ebd9bde6c5b52d1bb328c3b25a29093472ccf9af7eaf62018a4b7aa9c5f423" alt="" />
                  </a>
                </div>
                <p className=" p-3 text-lg text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deserunt?</p>
              </div>
              <div className="bg-red overflow-hidden shadow-2xl rounded-lg shadow-zinc-950">
                <div className=" h-[200px] overflow-hidden ">
                  <a href="">
                    <img className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg w-full" src="https://img.freepik.com/free-vector/gradient-zine-culture-pattern_52683-78030.jpg?t=st=1722778199~exp=1722778799~hmac=e61bef90a6a522780a4597bc9908541dafd245174041c203dc4db01104a4f640" alt="" />
                  </a>
                </div>
                <p className=" p-3 text-lg text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deserunt?</p>
              </div>
              <div className="bg-red overflow-hidden shadow-2xl rounded-lg shadow-zinc-950">
                <div className=" h-[200px] overflow-hidden ">
                  <a href="">
                    <img className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg w-full" src="https://img.freepik.com/free-vector/hand-drawn-pattern-design-summer-season_23-2150265573.jpg?t=st=1722778199~exp=1722778799~hmac=43be906ecfd31853273eeb4abe5c4b851b49a5a3f35d240d4d2170ff0e0a324d" alt="" />
                  </a>
                </div>
                <p className=" p-3 text-lg text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deserunt?</p>
              </div>
              <div className="bg-red overflow-hidden shadow-2xl rounded-lg shadow-zinc-950">
                <div className=" h-[200px] overflow-hidden ">
                  <a href="">
                    <img className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg w-full" src="https://img.freepik.com/free-vector/hand-drawn-abstract-doodle-pattern-design_23-2149258828.jpg?t=st=1722778199~exp=1722778799~hmac=e82f5ab6b394bb4d4c4e41a7a1b6d9ee3ecb8336d8b9c2116baf7315db2f22d0" alt="" />
                  </a>
                </div>
                <p className=" p-3 text-lg text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deserunt?</p>
              </div>
              <div className="bg-red overflow-hidden shadow-2xl rounded-lg shadow-zinc-950">
                <div className=" h-[200px] overflow-hidden ">
                  <a href="">
                    <img className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg w-full" src="https://img.freepik.com/free-vector/hand-drawn-pattern-design-summertime_23-2150225979.jpg?t=st=1722778199~exp=1722778799~hmac=7e83e0a2f7f5ae965711ab5ab74b2997a85d2044199372e178278038ccdeb238" alt="" />
                  </a>
                </div>
                <p className=" p-3 text-lg text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deserunt?</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
