import { links, settings } from "../data";
const Navbar = () => {
  return (
    <nav>
      <div className="flex p-5 items-center bg-blue-800/50">
        <h2 className="text-3xl font-bold ">
          Travelzy
        </h2>
        <div className="flex-grow flex justify-center flex-row">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a key={id} href={href} className="mr-5">
                {text}
              </a>
            );
          })}
        </div>
        <div className="flex flex-row justify-evenly mr-5">
          {settings.map((setting) => {
            const { id, href, text, icon } = setting;
            return (
              <a key={id} href={href} className="mr-5">
                {icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
