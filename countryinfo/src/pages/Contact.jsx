export const Contact = () => {

    const handleFormSubmit = (formData) => {
        console.log(formData.entries());
        const data = Object.fromEntries(formData);
        console.log(data);
        alert("Form submitted successfully!");
    }


  return (
    <div className="w-full  bg-black m-0  text-white py-16">
      <div className="max-w-screen-xl px-16 py-5 mx-auto flex flex-col">
        <h1 className="text-3xl font-bold text-center ">Contact Us</h1>
        <form action={handleFormSubmit} className="flex flex-col max-w-xl md:w-[35rem] mx-auto mt-8">
          <input
            name="username"
            type="text"
            required
            autoComplete="off"
            placeholder="Enter Your Name"
            className="mb-6 p-2 rounded border-gray-500 border-1"
          />
          <input
            name="email"
            type="email"
            required
            autoComplete="off"
            placeholder="Enter Your Email"
            className="mb-6 p-2 rounded border-gray-500 border-1"
          />
          <textarea
            name="message"
            autoComplete="off"
            placeholder="Enter Your Message"
            className="mb-6 p-2 rounded border-gray-500 border-1 h-32"
          />
          <button className="w-32 mx-auto text-white p-2 px-4 border-white border-2 rounded-lg mt-1 hover:bg-white hover:text-black cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
