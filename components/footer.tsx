import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-12 px-4 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">शुभ दशैं!</h3>
        <p className="text-red-200 mb-6">
          May this Dashain bring happiness, prosperity, and blessings to all
        </p>
        <div className="text-3xl mb-4">🙏</div>
        <p className="text-red-300 text-sm">
          Reflecting on Nepali Culture and Traditions
        </p>
      </div>
      <div className="max-w-4xl mx-auto text-center mt-4">
        <Link
          href="https://github.com/samrat-gh/chad-parwa"
          target="_blank"
          className="group inline-flex items-center w-fit text-red-300 underline px-2 py-2 rounded-full hover:bg-slate-50/20">
          <Github className="inline-block group-hover:text-white" size={20} />
        </Link>
        <p className="text-red-200 text-sm">Contribute Here </p>
      </div>
    </footer>
  );
};

export default Footer;
