import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="text-indigo-500">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-6">
        <h2 className="text-3xl font-bold">
          Web <span className="text-indigo-950"></span>
        </h2>
        <div className="flex gap-x3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a key={id} href={href} className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300">
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
