export default function GetInTouch() {
  return (
    <section className="flex flex-col  px-8 md:px-16 py-3  items-center gap-8 md:gap-12">
      <div className="max-w-[550px] space-y-16">
        <h2 className="text-[42px] md:text-[52px] text-center font-semibold">
          Get in Touch
        </h2>
        <div className="">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:border-black mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:border-black mb-4"
          />
          <textarea
            placeholder="Message"
            className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:border-black mb-4 h-40"
          />
          <button className="w-full bg-black text-white p-4  focus:outline-none rounded-full">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
