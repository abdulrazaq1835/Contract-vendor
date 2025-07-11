const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Contract Vendor</h1>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline hover:text-gray-200">Privacy</a>
          <a href="#" className="hover:underline hover:text-gray-200">Terms</a>
          <a href="#" className="hover:underline hover:text-gray-200">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
