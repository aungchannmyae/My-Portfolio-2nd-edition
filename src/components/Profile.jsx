import Image from "next/image";
import StackIcon from "tech-stack-icons";
import { GrLocation } from "react-icons/gr";
import { LuDownload, LuMails } from "react-icons/lu";
import { RxGithubLogo } from "react-icons/rx";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import Contact from "./Contact";

// Heroicons used next to the resume sub-headings.
const icons = {
  skills:
    "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
  education:
    "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
};

const SubHeading = ({ icon, className = "", children }) => (
  <Reveal
    as="h2"
    className={`text-white font-bold max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2 ${className}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      className="size-8 -translate-x-[13px] text-stone-400 inline-block"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icons[icon]} />
    </svg>
    {children}
  </Reveal>
);

const textClass =
  " max-lg:text-lg xl:text-base lg:text-lg text-stone-400 max-lg:mx-[16px] lg:mx-[42px] font-mono";
const schoolClass =
  " max-lg:ml-[16px] lg:ml-[42px] lg:inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider";

const Profile = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" flex max-lg:flex-col lg:flex-row gap-8 ">
      {/* Side Section */}
      <aside className=" z-30 lg:min-w-52 lg:max-w-52">
        <div className=" sticky lg:top-10 flex max-md:flex-col md:flex-row lg:flex-col gap-4">
          <Reveal
            from="left"
            className=" flex max-lg:justify-between max-lg: gap-3 items-center lg:flex-col bg-slate-200 rounded-lg p-3 shadow-2xl"
          >
            <Image
              className=" rounded-md max-md:w-[140px] md:w-[200px] md:h-60 max-md:h-48 lg:w-full lg:h-52 object-cover object-center"
              src={profile.photo}
              alt={`Photo of ${profile.name}`}
              width={300}
              height={400}
              sizes="(max-width: 768px) 140px, 200px"
              priority
            />
            <div className=" flex flex-col max-lg:gap-2 lg:gap-3">
              <p className=" text-2xl font-normal">
                I&apos;m <br /> {profile.name}
              </p>
              <p>{profile.role}</p>
              <hr className=" border-black border-dotted" />
              <p className=" text-sm italic">{profile.tagline}</p>
            </div>
          </Reveal>
          <Reveal
            from="left"
            className=" bg-slate-200 rounded-lg p-3 flex flex-col justify-center gap-2 shadow-2xl"
          >
            <p className=" inline-flex items-center gap-2">
              <GrLocation aria-hidden="true" />
              {profile.location}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className=" inline-flex items-center gap-2 "
            >
              <LuMails aria-hidden="true" /> {profile.email}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={profile.github.url}
              className=" inline-flex items-center gap-2 "
            >
              <RxGithubLogo aria-hidden="true" />
              {profile.github.username}
            </a>
          </Reveal>
        </div>
      </aside>

      {/* Main section */}
      <div className=" overflow-hidden max-lg:w-full lg:w-fit flex flex-col gap-10">
        <div className=" flex flex-col">
          <h1 className=" text-5xl font-bold text-white mb-5">
            Hello I&apos;m <br />
            <span className=" text-[#df4f3e]">{profile.headline}</span>
          </h1>
          <p className=" text-wrap text-stone-400">{profile.intro}</p>
        </div>

        <Reveal>
          <a
            href={profile.cv.url}
            download={profile.cv.fileName}
            className="inline-flex items-center gap-2 shadow-2xl shadow-zinc-950 w-fit px-2 py-1 hover-1 duration-200 rounded hover:text-black text-white text-xl font-semibold font-mono"
          >
            DownLoad CV <LuDownload className="w-5 h-5" aria-hidden="true" />
          </a>
        </Reveal>

        {/* Resume */}
        <section>
          <SectionTitle>Resume</SectionTitle>
          <div className="  flex flex-col gap-6">
            <div id="skills">
              <SubHeading icon="skills" className=" pl-3 max-lg:mb-6">
                Skills
              </SubHeading>
              <div className=" w-full lg:px-14 overflow-hidden">
                <div className=" my-4 flex flex-col gap-8 ">
                  <Marquee fade className=" max-lg:w-full lg:max-w-3xl">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="  text-lg text-stone-300 bg-stone-700 px-2 py-1 rounded-md "
                      >
                        {skill}
                      </span>
                    ))}
                  </Marquee>

                  <Marquee
                    fade
                    reverse
                    className=" [--gap:2rem] lg:[--gap:5rem] max-lg:w-full lg:max-w-3xl"
                  >
                    {profile.techIcons.map(({ name, light }) => (
                      <StackIcon
                        key={name}
                        className={` w-10 h-10 ${light ? "bg-white" : ""}`}
                        name={name}
                      />
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>

            <div className=" pl-3" id="education">
              <SubHeading icon="education" className=" max-lg:mb-3">
                Education
              </SubHeading>
              <ul>
                {profile.education.map((item) => (
                  <li
                    key={item.school}
                    className="  border-l-2 border-[#df4f3e] mb-4 relative"
                  >
                    <div className=" flex max-lg:flex-col justify-between lg:items-center">
                      <Reveal as="h3" className={schoolClass}>
                        {item.school}
                      </Reveal>
                      <Reveal as="p" className={textClass}>
                        ( {item.years}
                        {item.endYear &&
                          ` - ${item.endYear === "present" ? currentYear : item.endYear}`}{" "}
                        )
                      </Reveal>
                    </div>
                    <Reveal as="p" className={textClass}>
                      {item.detail}
                    </Reveal>
                  </li>
                ))}
                <li className="  border-l-2 border-[#df4f3e] mb-4 relative ">
                  <Reveal
                    as="p"
                    className=" max-lg:ml-[16px] lg:ml-[42px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                  >
                    {profile.learningNote[0]}
                    <br />
                    {profile.learningNote[1]}
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </div>
  );
};

export default Profile;
