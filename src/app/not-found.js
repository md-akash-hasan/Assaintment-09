import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-50 via-white to-pink-50 p-6 text-center">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl w-full">
        {/* Left Side: Mascot / Astronaut Illustration */}
        <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-transparent rounded-full blur-2xl opacity-60 animate-pulse"></div>

          {/* Astronaut Content (CSS/SVG Based Rocket Mascot) */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Astronaut Helmet */}
            <div className="w-40 h-40 bg-slate-100 rounded-full border-4 border-slate-300 shadow-xl flex items-center justify-center relative overflow-hidden">
              {/* Visor */}
              <div className="w-32 h-28 bg-slate-800 rounded-full border-4 border-orange-400 absolute top-4 flex flex-col items-center justify-center gap-2">
                {/* Eyes */}
                <div className="flex gap-4">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                {/* O-shaped Mouth */}
                <div className="w-5 h-5 bg-transparent border-2 border-white rounded-full"></div>
              </div>
            </div>
            {/* Jetpack Flames */}
            <div className="absolute -bottom-4 left-1/4 w-6 h-10 bg-gradient-to-b from-orange-500 to-yellow-400 rounded-b-full animate-bounce"></div>
            <div className="absolute -bottom-2 right-1/4 w-6 h-8 bg-gradient-to-b from-orange-500 to-yellow-400 rounded-b-full animate-bounce delay-100"></div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-left max-w-md">
          <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-2">
            Page Not Found
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Oh No! Error 404
          </h1>
          <p className="text-slate-500 text-sm md:text-base mb-8 leading-relaxed">
            Maybe Raki is lost in space. Come back to the homepage.
          </p>

          {/* Action Button */}
          <Link
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-8 py-3 rounded-full shadow-lg shadow-orange-500/30 transition-all duration-200 ease-in-out hover:scale-105"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
