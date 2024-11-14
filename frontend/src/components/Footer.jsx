import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      className="md:max-h-[438px] w-full bg-[#E31B54] flex flex-col text-white py-8 px-4 md:px-12 lg:px-20"
    >
      <div
        id="first-row"
        className=" flex flex-col md:flex-row md:justify-between gap-3 md:gap-0"
      >
        <div className="flex flex-col md:w-1/3 space-y-4">
          <h2 className="text-lg font-semibold">
            Join the waitlist
          </h2>
          <p className="text-sm">
            We’ll send you an email once we
            officially launch
          </p>
        </div>
        <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 h-[44px] rounded-lg w-full sm:w-auto flex-grow text-gray-900"
          />
          <button
            type="submit"
            className="bg-white h-[44px] text-[#E31B54] font-semibold py-2 px-4 rounded-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
      <hr className="w-full border-[1px] border-gray-200 my-6" />
      <div
        id="second-row"
        className="flex md:justify-between flex-row md:gap-0 gap-3"
      >
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="font-semi-bold text-3xl">
            attyre
          </h1>
          <p>
            Reach out to us on info@attyre.app
          </p>
          <ul className="gap-2 md:gap-8 flex flex-col md:flex-row">
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Creators
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Curations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Find the Fit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Privacy
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 pt-[150px] md:pt-0">
          <h2 className="">Get the app</h2>
          <img
            src="assets/apple_store.png"
            alt="apple store"
            className="h-[40px] w-[135px]"
          />
          <img
            src="assets/play_store.png"
            alt="apple store"
            className="h-[40px] w-[135px]"
          />
        </div>
      </div>
      <hr className="w-full border-[1px] border-gray-200 my-6" />

      <div
        id="third-row"
        className="flex justify-between gap-6 md:gap-0 flex-col md:flex-row"
      >
        <h2>
          © 2024 Attyre India Pvt. Ltd. All rights
          reserved.
        </h2>
        <div
          id="icon"
          className="flex gap-6 md:gap-10"
        >
          <img
            src="assets/linkedin.png"
            alt="linkedin"
            className="h-[24px] w-[24px]"
          />
          <img
            src="assets/instagram.png"
            alt="linkedin"
            className="h-[24px] w-[24px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
