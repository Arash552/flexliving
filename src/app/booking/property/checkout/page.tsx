import Header from "@/app/(components)/header";
import GuestDetails from "./guestDetails";
import "./page.css";
export default function Checkout() {
  return (
    <body className="text-black">
      <Header></Header>
      <section className="flex flex-col md:flex-row-reverse md:gap-x-20 md:px-10 md:justify-between">
        <section className="mb-20 md:w-[500px]">
          <img
            src="/1.png"
            alt=""
            className="w-full h-96 object-cover rounded-t-2xl"
          />
          <div className="w-full bg-[#F9F9F9] p-5 grid gap-y-5">
            <div className="flex items-center justify-around gap-x-2">
              <div className="grid gap-y-2">
                <p className="text-sm font-semibold text-center">Move out</p>
                <div className="flex gap-x-2 text-sm rounded-xl bg-white px-5 py-2">
                  <img src="/eva_calendar-fill.png" alt="" className="w-5" />
                  <p>31.02.2022</p>
                </div>
              </div>
              <div className="grid gap-y-2">
                <p className="text-sm font-semibold text-center">Move in</p>
                <div className="flex gap-x-2 text-sm rounded-xl bg-white px-5 py-2">
                  <img src="/eva_calendar-fill.png" alt="" className="w-5" />
                  <p>31.12.2021</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <img src="/icons/eva_people-fill.png" alt="" className="w-5" />
              <p className="text-sm font-semibold mr-2">Guests</p>
              <p className="text-sm">1</p>
            </div>
            <p className="text-sm text-center">All utilities are included</p>
            <p className="text-sm font-semibold text-center">
              Payment timeline
            </p>
            <div className="flex gap-x-2">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-black rounded-full"></div>
                <div className="h-16 w-[3px] bg-black"></div>
                <div className="w-5 h-5 bg-black rounded-full"></div>
              </div>
              <div className="grid gap-y-4">
                <div className="flex justify-between">
                  <div className="grid gap-y-2">
                    <p className="text-sm font-semibold">
                      Reserve this apaptment
                    </p>
                    <p className="text-sm">Due now</p>
                  </div>
                  <p className="">£4001.70</p>
                </div>
                <div className="grid gap-y-2">
                  <p className="font-semibold">After move-out</p>
                  <div className="flex gap-x-2">
                    <p className="text-sm">
                      Receive your £400.00 deposit back within 30 days
                    </p>
                    <img
                      src="/icons/eva_alert-circle-fill.png"
                      alt=""
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GuestDetails/>
      </section>

      <footer className="px-5 pb-5 flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:px-10">
        <div className="grid gap-y-2 place-items-center sm:place-items-start">
          <img src="/Logo.png" alt="" className="h-10" />
          <div className="gap-y-2 hidden sm:grid">
            <p className="text-sm text-black text-start">
              Contact number: 02033074477
            </p>
            <div className="flex justify-start items-center gap-x-5 text-darkgreen text-2xl">
              <i className="bi-in"></i>
              <i className="bi-facebook"></i>
              <i className="bi-twitter"></i>
            </div>
            <p className="text-sm text-black text-start">© 2021 Flex Living</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 sm:flex-row sm:gap-x-10">
          <div className="grid gap-y-2 sm:h-16">
            <p className="text-black font-semibold">Company</p>
            <ul className="list-none text-sm sm:text-xs grid gap-y-2">
              <li>Home</li>
              <li>About us</li>
              <li>Our team</li>
            </ul>
          </div>
          <div className="grid gap-y-2 sm:h-16">
            <p className="text-black font-semibold">Guests</p>
            <ul className="list-none text-sm sm:text-xs grid gap-y-2">
              <li>Blog</li>
              <li>FAQ</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="grid gap-y-2 sm:h-16">
            <p className="text-black font-semibold">Privacy</p>
            <ul className="list-none text-sm sm:text-xs grid gap-y-2">
              <li>Terms of services</li>
              <li>Privecy and policy</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-y-2 sm:w-72">
          <div className="text-black grid gap-y-2 text-center sm:text-start">
            <p className="font-semibold">Stay up to date</p>
            <p className="sm:text-xs">
              Be the first to know about our newest apartments
            </p>
          </div>
          <input
            type="text"
            placeholder="Email address"
            className="bg-[#F2F0F2] text-darkgreen rounded-lg border-none outline-none px-5 py-3 sm:py-1"
          />
          <button className="px-5 py-2 w-40 text-white rounded-full grid place-items-center bg-darkgreen mx-auto sm:ml-0">
            Subscribe
          </button>
        </div>
        <div className="grid gap-y-2 sm:hidden">
          <p className="text-sm text-black text-center">
            Contact number: 02033074477
          </p>
          <div className="flex justify-center items-center gap-x-5 text-darkgreen text-2xl">
            <i className="bi-in"></i>
            <i className="bi-facebook"></i>
            <i className="bi-twitter"></i>
          </div>
          <p className="text-sm text-black text-center">© 2021 Flex Living</p>
        </div>
      </footer>
    </body>
  );
}
