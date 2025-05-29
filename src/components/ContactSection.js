export default function ContactSection() {
  return (
    <section className="bg-[#0067B1] text-white py-16 px-4"
    id="contact">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-12">
         {/* Left Section  */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-semibold mb-4 hidden md:block">
            Get in touch
          </h2>
          <div className="h-1 w-12 bg-white mb-6 hidden md:block" />

          <p className="mb-6 text-lg">For general enquiries</p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="font-semibold">Address :</p>
              <p>110, 16th Road, Chembur, Mumbai - 400071</p>
            </div>
            <div>
              <p className="font-semibold">Phone :</p>
              <p>+91 22 25208822</p>
            </div>
            <div>
              <p className="font-semibold">Email :</p>
              <p>info@supremegroup.co.in</p>
            </div>
          </div>
        </div>

       
        {/* Right Section */}
        <form className="md:w-1/2 space-y-4">
         <h2 className="text-4xl font-semibold mb-4 md:hidden block">
          Get in touch
        </h2>
        <div className="h-1 w-12 bg-white mb-6 md:hidden block" />
          <div>
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent border-b border-white py-2 focus:outline-none placeholder-white text-white"
              required
            />
          </div>

          <div>
            <input
              placeholder="Email"
              type="email"
              className="w-full bg-transparent border-b border-white py-2 focus:outline-none placeholder-white text-white"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-white py-2 focus:outline-none placeholder-white text-white"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent border-b border-white py-2 focus:outline-none placeholder-white text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-2 rounded-full w-full md:w-32 cursor-pointer hover:bg-gray-200 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
