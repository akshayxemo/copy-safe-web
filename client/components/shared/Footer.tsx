const Footer = () => {
  return (
    <footer className=" text-gray-500 px-4 pt-10 pb-5 z-50">
      <div className="w-full mb-2">
        <ul className="w-full flex items-center justify-center divide-x">
          <li className="hover:text-white text-gray-300 cursor-pointer px-3">
            <a href="/home">Home</a>
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer px-3">
            <a href="/pricing">Pricing</a>
          </li>
        </ul>
      </div>
      <p className="text-center">
        copysafe &copy; 2024. All rights are reserverd.
      </p>
    </footer>
  );
};

export default Footer;
