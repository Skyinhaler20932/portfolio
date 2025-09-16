export const Header = () => {
  return ( 
  <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#" className=" nav-item">Home</a>
      <a href="#projects" className=" nav-item">Projects</a>
      <a href="#About" className=" nav-item">About</a>
      <a href="https://forms.gle/9FoaTGnci6hxSihK9" 
         target="_blank"
         rel="noopener noreferrer"
         className=" nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"> {"Let's Talk"}</a>
    </nav>
  </div>
  );
};





