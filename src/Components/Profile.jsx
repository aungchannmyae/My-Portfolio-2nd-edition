import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralProvider";
import Container from "./Container";

const Profile = () => {
  const { profile, setProfile } = useContext(GeneralContext);
  const img = ["../src/assets/Aung Chan Myae.jpg"];
  return (
    <section
      className={` ${
        !profile && " animate__animated animate__fadeOut hidden"
      } animate__animated animate__fadeIn `}
    >
      <Container>
        <div className=" w-full grid grid-cols-3 ">
          <section className=" flex items-center justify-center col-span-1">
            <div className=" w-3/4 m-auto">
              <img className=" rounded-full" src={img[0]} alt="" />
            </div>
          </section>
          <section className=" col-span-2 bg-blue">
            <div className=" flex flex-col gap-5">
              <div className="  m-auto p-5 border-b-4 border-[#df4f3e] justify-center items-center flex flex-col gap-2">
                <h1 className=" mb-2 text-white text-4xl font-medium font-serif ">
                  Aung Chan Myae
                </h1>
                <p className=" px-3 py-1 rounded shadow-2xl shadow-zinc-950 text-stone-400 text-xl font-mono ">
                  Junior Web Developer
                </p>
              </div>
              <div className=" m-auto ">
                <ul className=" text-[#df4f3e] grid grid-cols-3">
                  <li className=" mb-2 flex bg-slate justify-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10 text-[#df4f3e] inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>

                    <div className=" ml-2 flex flex-col">
                      <h1 className=" text-lg inline-block text-white font-semibold tracking-wider">
                        Phone
                      </h1>
                      <p className=" text-lg text-stone-400">
                        <a href="tel:+959400297397">+959-400-297-397</a>
                      </p>
                    </div>
                  </li>
                  <li className=" mb-2 flex bg-slate justify-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 mx-1 text-[#df4f3e] inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>

                    <div className=" ml-2 flex flex-col">
                      <h1 className=" text-lg inline-block text-white font-semibold tracking-wider">
                        Mail
                      </h1>
                      <p className=" text-lg text-stone-400">
                        <a href="mailto:myae0517@gmail.com">
                          myae0517@gmail.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className=" mb-2 flex justify-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#df4f3e"
                      viewBox="0 0 256 256"
                      className=" size-8 mx-1 inline-block"
                    >
                      <path d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19Zm-61.14,36L78.15,126.35l-49.6-9.73ZM88,200V152.52l24.79,21.74Zm87.53,8L92.85,135.5l119-85.29Z"></path>
                    </svg>

                    <div className=" ml-2 flex flex-col">
                      <h1 className=" text-lg inline-block text-white font-semibold tracking-wider">
                        Telegram
                      </h1>
                      <p className=" text-lg text-stone-400">
                        <a href="https://t.me/myae170903">@myae170903</a>
                      </p>
                    </div>
                  </li>
                  <li className=" mb-2 flex justify-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#df4f3e"
                      viewBox="0 0 256 256"
                      className=" size-8 mx-1 inline-block"
                    >
                      <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                    </svg>
                    <div className=" ml-2 flex flex-col">
                      <h1 className=" text-lg inline-block text-white font-semibold tracking-wider">
                        GitHub
                      </h1>
                      <p className=" text-lg text-stone-400">
                        <a href="https://github.com/aungchannmyae">
                          aungchannmyae
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className=" mb-2 flex justify-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#df4f3e"
                      viewBox="0 0 256 256"
                      className=" size-8 mx-1 inline-block"
                    >
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                    <div className=" ml-2 flex flex-col">
                      <h1 className=" text-lg inline-block text-white font-semibold tracking-wider">
                        LinkedIn
                      </h1>
                      <p className=" text-lg text-stone-400">
                        <a href="https://www.linkedin.com/in/aung-chan-myae-783883285">
                          Aung Chan Myae
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className=" mb-2 flex justify-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#df4f3e"
                      viewBox="0 0 256 256"
                      className=" size-8 mx-1 inline-block"
                    >
                      <path d="M240,149.31c0,16.11-3.17,29.89-9.17,39.84-7.43,12.33-19,18.85-33.39,18.85-27.94,0-47.78-37-68.78-76.22C111.64,100,92.35,64,74,64c-9.38,0-19.94,10-28.25,26.67A138.18,138.18,0,0,0,32,149.31c0,13.2,2.38,24.12,6.88,31.58S49.82,192,58.56,192c15.12,0,30.85-24.54,44.23-48.55a8,8,0,0,1,14,7.8C101.46,178.71,83.07,208,58.56,208c-14.41,0-26-6.52-33.39-18.85-6-10-9.17-23.73-9.17-39.84A154.81,154.81,0,0,1,31.42,83.54C42.82,60.62,57.94,48,74,48c27.94,0,47.77,37,68.78,76.22C159.79,156,179.08,192,197.44,192c8.74,0,15.18-3.63,19.68-11.11S224,162.51,224,149.31a138.18,138.18,0,0,0-13.74-58.64C202,74,191.39,64,182,64c-8.36,0-17.68,7.48-28.51,22.88a8,8,0,1,1-13.08-9.21c9-12.74,23-29.67,41.59-29.67,16.05,0,31.17,12.62,42.57,35.54A154.81,154.81,0,0,1,240,149.31Z"></path>
                    </svg>
                    <div className=" ml-2 flex flex-col">
                      <h1 className=" text-lg inline-block text-white font-semibold tracking-wider">
                        Facebook
                      </h1>
                      <p className=" text-lg text-stone-400">
                        <a href="https://www.facebook.com/profile.php?id=100038063593080&mibextid=ZbWKwl">
                          Chan Myae
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className=" mb-2 flex justify-start items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" size-10 mx-1 inline-block"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7.96472 6.2019C7.77897 6.17476 7.58952 6.21205 7.42791 6.30756H7.41413C7.03892 6.52749 6.70092 6.80547 6.41269 7.13115C6.17316 7.40809 6.04322 7.68831 6.0091 7.95803C5.98875 8.11881 6.00253 8.27959 6.05044 8.43315L6.0675 8.44365C6.33722 9.2364 6.68963 9.99896 7.12013 10.7169C7.67467 11.7255 8.35713 12.6583 9.15057 13.4922L9.17419 13.5263L9.2116 13.5539L9.23522 13.5814L9.26278 13.6051C10.0997 14.4008 11.0347 15.0865 12.0453 15.6453C13.2003 16.274 13.9012 16.5713 14.3218 16.6947V16.7012C14.4452 16.7387 14.5574 16.7557 14.6703 16.7557C15.0288 16.7294 15.3682 16.5839 15.6343 16.3423C15.9585 16.054 16.2334 15.7146 16.4481 15.3376V15.331C16.6495 14.9517 16.5813 14.5927 16.2906 14.3499C15.7083 13.841 15.0788 13.389 14.4104 13C13.9628 12.7572 13.5081 12.9042 13.3237 13.1503L12.9306 13.6457C12.7291 13.8918 12.3629 13.8577 12.3629 13.8577L12.3524 13.8643C9.62175 13.1667 8.89332 10.4019 8.89332 10.4019C8.89332 10.4019 8.85919 10.0259 9.11185 9.83425L9.60403 9.43787C9.83963 9.24625 10.0037 8.79212 9.75103 8.3439C9.36477 7.67463 8.91373 7.04489 8.40441 6.46375C8.29306 6.32674 8.13685 6.23353 7.96341 6.20059L7.96472 6.2019Z"
                          fill="#df4f3e"
                        ></path>{" "}
                        <path
                          d="M12.5792 5.00009C12.3031 5.00009 12.0792 5.22395 12.0792 5.50009C12.0792 5.77623 12.3031 6.00009 12.5792 6.00009C13.8437 6.00009 14.8944 6.41341 15.7245 7.20484C16.1518 7.63824 16.4844 8.15124 16.7028 8.71263C16.922 9.27613 17.0217 9.877 16.9961 10.4789C16.9844 10.7547 17.1985 10.9879 17.4744 10.9996C17.7503 11.0114 17.9835 10.7972 17.9952 10.5213C18.0267 9.7809 17.9039 9.04214 17.6347 8.35009C17.3655 7.65807 16.9558 7.02746 16.4307 6.49657L16.4207 6.48696C15.3907 5.50193 14.0851 5.00009 12.5792 5.00009Z"
                          fill="#df4f3e"
                        ></path>{" "}
                        <path
                          d="M12.5452 6.64442C12.2691 6.64442 12.0452 6.86828 12.0452 7.14442C12.0452 7.42056 12.2691 7.64442 12.5452 7.64442H12.5615C13.474 7.70872 14.1379 8.01286 14.6034 8.5121C15.0799 9.02626 15.3267 9.66489 15.3084 10.4551C15.302 10.7311 15.5207 10.9601 15.7967 10.9665C16.0728 10.9729 16.3018 10.7543 16.3082 10.4782C16.3322 9.44071 15.9985 8.54607 15.3363 7.83174L15.3354 7.8308C14.6588 7.10472 13.7305 6.72061 12.6122 6.64554L12.5955 6.64442H12.5452Z"
                          fill="#df4f3e"
                        ></path>{" "}
                        <path
                          d="M12.5263 8.31877C12.2505 8.30426 12.0152 8.51604 12.0007 8.7918C11.9862 9.06756 12.198 9.30287 12.4737 9.31739C12.8924 9.33943 13.1592 9.46499 13.327 9.63443C13.4956 9.8046 13.6216 10.0771 13.6446 10.5043C13.6595 10.7801 13.895 10.9916 14.1708 10.9767C14.4465 10.9619 14.658 10.7264 14.6432 10.4506C14.6109 9.85058 14.4231 9.32011 14.0376 8.93078C13.6513 8.54072 13.1238 8.35022 12.5263 8.31877Z"
                          fill="#df4f3e"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.06673 2.38357C10.2488 1.67227 13.5487 1.67227 16.7308 2.38357L17.0699 2.45935C18.9667 2.88334 20.4637 4.33816 20.9418 6.22204C21.7495 9.40488 21.7495 12.7391 20.9418 15.9219C20.4637 17.8058 18.9666 19.2606 17.0699 19.6846L16.7308 19.7604C14.732 20.2072 12.6867 20.3733 10.6533 20.2588L8.0001 22.6327C7.79637 22.815 7.50959 22.872 7.25164 22.7815C6.99369 22.691 6.80543 22.4673 6.76029 22.1976L6.32148 19.5763C4.61909 19.0473 3.29919 17.6691 2.85579 15.9219C2.04807 12.7391 2.04807 9.40488 2.85579 6.22204C3.33386 4.33816 4.83092 2.88334 6.7277 2.45935L7.06673 2.38357ZM16.4036 3.84744C13.437 3.18432 10.3606 3.18432 7.39395 3.84744L7.05492 3.92323C5.71009 4.22383 4.64866 5.25532 4.3097 6.591C3.56343 9.53171 3.56343 12.6122 4.3097 15.5529C4.64866 16.8886 5.71008 17.9201 7.05492 18.2207L7.14448 18.2407C7.44237 18.3073 7.67018 18.5478 7.72058 18.8488L8.01485 20.6068L9.88722 18.9315C10.0384 18.7962 10.2379 18.7279 10.4403 18.7423C12.4338 18.8834 14.4427 18.7348 16.4036 18.2965L16.7426 18.2207C18.0875 17.9201 19.1489 16.8886 19.4879 15.5529C20.2341 12.6122 20.2341 9.53171 19.4879 6.591C19.1489 5.25532 18.0875 4.22384 16.7426 3.92323L16.4036 3.84744Z"
                          fill="#df4f3e"
                        ></path>{" "}
                      </g>
                    </svg>
                    <div className=" ml-2 flex flex-col">
                      <h1 className=" text-lg inline-block text-white font-semibold tracking-wider">
                        Viber
                      </h1>
                      <p className=" text-lg text-stone-400">
                        <a href="tel:+959400297397">+959 400 297 397</a>
                      </p>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Profile;
