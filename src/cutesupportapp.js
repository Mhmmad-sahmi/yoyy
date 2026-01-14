import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowLeft } from "lucide-react";

export default function CuteSupportApp() {
  const [choice, setChoice] = useState(null);

  // Replace these paths with your own images in public/images/
  const images = {
    sad: "/images/sad_pic.png",
    notSad: "/images/smile_pic.png",
    default: "/images/default_pic.png",
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 mt-10">
      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 p-6 text-center">

          {/* Image */}
          <motion.img
            src={choice === "sad" ? images.sad : choice === "notSad" ? images.notSad : images.default}
            alt="cute"
            className="mx-auto rounded-2xl shadow-xl border-2 border-pink-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Heart icon */}
          <div className="flex justify-center mt-4">
            <Heart className="w-10 h-10 text-pink-400 animate-pulse drop-shadow-lg" />
          </div>

          {/* Buttons */}
          {!choice && (
            <div className="flex flex-col gap-4 mt-6">
              <button
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-2xl hover:scale-105 transition-transform shadow-lg font-bold"
                onClick={() => setChoice("sad")}
              >
                My baby is sad 💔
              </button>
              <button
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-100 py-3 px-6 rounded-2xl hover:scale-105 transition-transform shadow-md font-bold"
                onClick={() => setChoice("notSad")}
              >
                No 😌
              </button>
            </div>
          )}

          {/* Messages */}
          {choice === "sad" && (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-pink-200 text-lg mt-6 font-semibold drop-shadow-md"
              >
                Hey my love 🤍<br />
                You don’t have to be strong all the time.<br />
                I’m here, always. You are deeply loved 🌸
              </motion.p>
              <button
                className="flex items-center justify-center mt-6 mx-auto bg-gray-700 text-gray-100 py-2 px-4 rounded-xl hover:bg-gray-600 transition font-semibold"
                onClick={() => setChoice(null)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </button>
            </>
          )}

          {choice === "notSad" && (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-pink-200 text-lg mt-6 font-semibold drop-shadow-md"
              >
                Then please send evidence 😏<br />
                A picture of you smiling on WhatsApp 📸💖
              </motion.p>
              <button
                className="flex items-center justify-center mt-6 mx-auto bg-gray-700 text-gray-100 py-2 px-4 rounded-xl hover:bg-gray-600 transition font-semibold"
                onClick={() => setChoice(null)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}