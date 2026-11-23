import Reveal from "./Reveal";

// Large page heading ("Projects", "Resume", "Contact Me").
const SectionTitle = ({ children }) => (
  <Reveal
    as="h1"
    className=" inline-block pb-5 mb-5 max-lg:pb-3 max-lg:mb-3 max-lg:text-3xl xl:text-3xl lg:text-3xl text-white font-bold "
  >
    {children}
  </Reveal>
);

export default SectionTitle;
