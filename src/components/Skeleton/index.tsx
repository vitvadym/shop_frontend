const Skeleton = () => {
  return (
    <div className='flex h-[450px] min-w-[300px] select-none flex-col gap-5 rounded-xl bg-white p-2 '>
      <div className='h-52 animate-pulse rounded-md bg-elements sm:h-full sm:w-72'></div>
      <div className='flex flex-1 flex-col gap-5 sm:p-2'>
        <div className='flex flex-1 flex-col gap-3'>
          <div className='h-3 w-full animate-pulse rounded-2xl bg-elements'></div>
          <div className='h-3 w-full animate-pulse rounded-2xl bg-elements'></div>
          <div className='h-3 w-full animate-pulse rounded-2xl bg-elements'></div>
          <div className='h-3 w-full animate-pulse rounded-2xl bg-elements'></div>
        </div>

        <div className='h-14 w-full animate-pulse rounded-2xl bg-elements'></div>
      </div>
    </div>
  );
};

export default Skeleton;
