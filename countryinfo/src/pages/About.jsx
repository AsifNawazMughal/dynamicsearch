import api from "../api/countryData.json";

export const About = () => {
  return (
    <div className="bg-black w-full">
      <div className="max-w-screen-xl px-16 mx-auto flex flex-col">
        <h1 className="text-2xl text-white font-bold text-center leading-tight mb-10">
          Here are the interesting facts
          <br />
          we're proud of
        </h1>

        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3  gap-8 mb-16">
          {api.map((country, index) => {
            const { countryName, capital, population, interestingFact } = country;
            return (
              <div
                key={index}
                className='bg-gradient-to-bl from-gray-700 via-gray-900 to-black
                  h-52 border-2 rounded-tr-4xl rounded-bl-4xl  text-white border-gray-800 p-4 text-1xl overflow-clip w-72'
              >
                <h2 className="text-lg font-semibold">{countryName}</h2>
                <p>
                  <span className="text-gray-400">Capital: </span>{capital}
                </p>
                <p>
                  <span className="text-gray-400">Population: </span>{population}
                </p>
                <p>
                  <span className="text-gray-400">Interesting Fact: </span>{interestingFact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
