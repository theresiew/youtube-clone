const Loader = () => {
  return (
    <div className="flex items-center justify-center h-64 w-full">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-[#272727]"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-red-600 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;