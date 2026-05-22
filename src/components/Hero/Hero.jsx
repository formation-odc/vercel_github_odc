import { useState, useEffect } from "react";

const TEXTE = "Clone, branch, commit, push — découvre GitHub en faisant avec un vrai coéquipier.";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      setTyped(TEXTE.slice(0, i + 1));
      i++;
      if (i >= TEXTE.length) clearInterval(iv);
    }, 30);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen text-white text-center px-6 gap-6">
      
      <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-sm px-4 py-1 rounded-full">
         Initiation GitHub
      </span>

      <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-xl">
        Apprends Git & GitHub <br />
        <span className="text-indigo-400">en équipe</span>
      </h1>

      <p className="text-gray-400 text-lg max-w-md min-h-14">
        {typed}
        <span className="animate-pulse text-indigo-400">|</span>
      </p>

      {/* Bouton */}
      <button className="mt-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 transition-colors rounded-lg font-semibold text-white">
        Commencer →
      </button>

    </div>
  )
}