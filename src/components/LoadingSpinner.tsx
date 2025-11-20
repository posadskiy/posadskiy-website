export const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
      </div>
    </div>
  );
};

