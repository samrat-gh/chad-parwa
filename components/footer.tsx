import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-red-800 px-4 py-12 pb-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="mb-4 text-2xl font-bold">शुभ दशैं!</h3>
        <p className="mb-6 text-red-200">
          May this Dashain bring happiness, prosperity, and blessings to all
        </p>
        <div className="mb-4 text-3xl">🙏</div>
        <p className="text-sm text-red-300">
          Reflecting on Nepali Culture and Traditions
        </p>
      </div>
      <div className="mx-auto mt-4 max-w-4xl text-center">
        <Link
          href="https://github.com/samrat-gh/chad-parwa"
          target="_blank"
          className="group inline-flex w-fit items-center rounded-full px-2 py-2 text-red-300 underline hover:bg-slate-50/20"
        >
          <Github className="inline-block group-hover:text-white" size={20} />
        </Link>
        <p className="text-sm text-red-200">Contribute Here </p>
      </div>
    </footer>
  );
};

export default Footer;
