export const Home = () => {
  return (
    <main className="h-xl py-2 bg-black ">
        <div className="max-w-screen-xl px-16 py-4 flex flex-col-reverse md:flex-row justify-around items-center mx-auto ">
          <div className="mt-2 l">
            <h1 className="text-3xl mb-1 font-bold text-white ">Explore the World. One Country at a Time.</h1>
            <p className="text-sm text-gray-300 mb-6">
              Discover the beauty, culture, and history of every nation. Sort, Search and filter through countries to find the details you need. 
            </p>
            <button className="text-white p-2 px-4 border-white border-2 rounded-lg mt-1 hover:bg-white hover:text-black cursor-pointer">
              Get Started 
            </button>
          </div>
          <div className="flex justify-center items-center p-2">
            <img src="/images/Earth.png" alt="Beautiful Earth"  className=" max-w-80 md: min-w-60 w-96"/>
          </div>
        </div>
    </main>
  );
};