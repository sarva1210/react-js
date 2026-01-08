const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-950">
      <div
        id="wifi-loader"
        className="relative flex h-16 w-16 items-center justify-center">
        {/* Outer */}
        <svg className="circle-outer absolute h-[86px] w-[86px]" viewBox="0 0 86 86">
          <circle className="back" cx="43" cy="43" r="40" />
          <circle className="front" cx="43" cy="43" r="40" />
        </svg>

        {/* Middle */}
        <svg className="circle-middle absolute h-[60px] w-[60px]" viewBox="0 0 60 60">
          <circle className="back" cx="30" cy="30" r="27" />
          <circle className="front" cx="30" cy="30" r="27" />
        </svg>

        {/* Inner */}
        <svg className="circle-inner absolute h-[34px] w-[34px]" viewBox="0 0 34 34">
          <circle className="back" cx="17" cy="17" r="14" />
          <circle className="front" cx="17" cy="17" r="14" />
        </svg>

        {/* Text */}
        <div className="text absolute -bottom-10 text-sm font-medium text-gray-700 dark:text-zinc-300" data-text="loading"/>
      </div>
    </div>
  );
};

export default Loader;