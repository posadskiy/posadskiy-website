import { motion } from 'framer-motion';

export const MainPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
            >
              <span className="text-white">Hi,</span>
              <br />
              <span className="text-white">I'm </span>
              <span className="text-gradient">Dimitri Posadskiy</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white"
            >
              Principal Java Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl"
            >
              Java / JavaScript / React / React Native / Big Data / Machine Learning
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <div className="px-4 py-2 glass-effect rounded-lg text-sm font-medium text-slate-300">
                Full Stack Development
              </div>
              <div className="px-4 py-2 glass-effect rounded-lg text-sm font-medium text-slate-300">
                Cloud Architecture
              </div>
              <div className="px-4 py-2 glass-effect rounded-lg text-sm font-medium text-slate-300">
                ML & Data Engineering
              </div>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-3xl blur-3xl" />

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src="/main_photo.png"
                  alt="Dimitri Posadskiy"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

