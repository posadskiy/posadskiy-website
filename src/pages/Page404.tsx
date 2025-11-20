import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

export const Page404 = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-black text-gradient">404</h1>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-lg text-slate-400 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button size="lg">Go Home</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

