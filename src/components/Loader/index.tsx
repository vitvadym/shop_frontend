const Loader = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center bg-secondary bg-opacity-40'>
      <div className='h-10 w-10 animate-spin  rounded-full border-4 border-secondary border-t-primary' />
    </div>
  );
};

export default Loader;
