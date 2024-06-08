import Link from "next/link";
import Info from "./info";
import "./page.css";
import Search from "../(components)/search";
import Header from "../(components)/header";
import Filter from "./filter";
export default function Booking() {
  return (
    <body>
      <Header></Header>
      <main className="px-5 grid gap-y-20 mb-10">
        <div className="grid gap-y-2">
          <Search></Search>
          <div className="flex items-center gap-x-5 overflow-x-scroll disableScroll text-ellipsis sm:hidden">
            <button className="activeFilter px-5 py-2 flex justify-center items-center gap-x-5 text-darkgreen border-2 border-darkgreen rounded-full">
              Parking
            </button>
            <button className="px-5 py-2 flex justify-center items-center gap-x-5 text-darkgreen border-2 border-darkgreen rounded-full">
              Bedroom <i className="bi-chevron-down"></i>
            </button>
            <button className="px-5 py-2 flex justify-center items-center gap-x-5 text-darkgreen border-2 border-darkgreen rounded-full">
              Bathrooms <i className="bi-chevron-down"></i>
            </button>
            <button className="px-5 py-2 flex justify-center items-center gap-x-5 text-darkgreen border-2 border-darkgreen rounded-full">
              Disabled Access
            </button>
            <button className="px-5 py-2 flex justify-center items-center gap-x-5 text-darkgreen border-2 border-darkgreen rounded-full">
              Elevator
            </button>
            <button className="px-5 py-2 flex justify-center items-center gap-x-5 text-darkgreen border-2 border-darkgreen rounded-full">
              Dishwasher
            </button>
            <button className="px-5 py-2 flex justify-center items-center gap-x-5 text-darkgreen border-2 border-darkgreen rounded-full">
              Washing machine
            </button>
          </div>
          <Filter></Filter>
          <div className="flex justify-between items-center">
            <p className="w-40 sm:w-auto text-sm text-black ">
              <span className="font-semibold">52 results</span> for "1 Bedroom
              property in West London"
            </p>
            <button className="flex items-center gap-x-5 text-darkgreen">
              <p>sort by</p>
              <i className="bi-chevron-down"></i>
            </button>
          </div>
        </div>
      </main>
      <section className="w-full md:flex flex-row-reverse gap-x-5 mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5269991.758801123!2d16.446533140624993!3d49.83798234879425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1716969668970!5m2!1sen!2sde"
          className="w-full md:w-1/2 h-96 md:h-[500px] md:mr-10 border-none outline-none mb-20"
          loading="lazy"
        ></iframe>
        <div className="grid gap-y-5 px-2 sm:px-10">
          <div className="bg-[#F2F0F2] flex gap-x-2 rounded-2xl rounded-bl-lg  overflow-hidden object">
            <img
              src="/Rectangle 222.png"
              alt=""
              className="w-2/6 h-full object-cover"
            />
            <div className="w-full p-2 grid gap-y-2 text-sm text-black">
              <p className="font-semibold text-base">
                Rhoncus suspendisse penatibus mauris, sit non
              </p>
              <div className="flex flex-wrap items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <img src="/fluent_bed-24-filled.png" alt="" className="w-4" />
                  <p>rooms</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/fa-solid_bath.png" alt="" className="w-4" />
                  <p>baths</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/eva_wifi-fill.png" alt="" className="w-4" />
                  <p>wifi</p>
                </div>
              </div>
              <p>City view | 3rd floor | Elevator | Parking </p>
              <Link
                href={"/booking/property"}
                className="w-40 text-xs px-3 py-2 flex gap-x-2 items-center justify-center text-white bg-darkgreen rounded-full"
              >
                Awailable <span className="font-semibold">28 Nov 2021</span>
              </Link>
              <p>
                from <span className="font-semibold">£3490</span> /month
              </p>
            </div>
          </div>
          <div className="bg-[#F2F0F2] flex gap-x-2 rounded-2xl rounded-bl-lg  overflow-hidden object">
            <img
              src="/Rectangle 222 (1).png"
              alt=""
              className="w-2/6 h-full object-cover"
            />
            <div className="w-full p-2 grid gap-y-2 text-sm text-black">
              <p className="font-semibold text-base">
                Rhoncus suspendisse penatibus mauris, sit non
              </p>
              <div className="flex flex-wrap items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <img src="/fluent_bed-24-filled.png" alt="" className="w-4" />
                  <p>rooms</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/fa-solid_bath.png" alt="" className="w-4" />
                  <p>baths</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/eva_wifi-fill.png" alt="" className="w-4" />
                  <p>wifi</p>
                </div>
              </div>
              <p>City view | 3rd floor | Elevator | Parking </p>
              <Link
                href={"/booking/property"}
                className="w-40 text-xs px-3 py-2 flex gap-x-2 items-center justify-center text-white bg-darkgreen rounded-full"
              >
                Awailable <span className="font-semibold">28 Nov 2021</span>
              </Link>
              <p>
                from <span className="font-semibold">£3490</span> /month
              </p>
            </div>
          </div>
          <div className="bg-[#F2F0F2] flex gap-x-2 rounded-2xl rounded-bl-lg  overflow-hidden object">
            <img
              src="/Rectangle 222 (2).png"
              alt=""
              className="w-2/6 h-full object-cover"
            />
            <div className="w-full p-2 grid gap-y-2 text-sm text-black">
              <p className="font-semibold text-base">
                Rhoncus suspendisse penatibus mauris, sit non
              </p>
              <div className="flex flex-wrap items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <img src="/fluent_bed-24-filled.png" alt="" className="w-4" />
                  <p>rooms</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/fa-solid_bath.png" alt="" className="w-4" />
                  <p>baths</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/eva_wifi-fill.png" alt="" className="w-4" />
                  <p>wifi</p>
                </div>
              </div>
              <p>City view | 3rd floor | Elevator | Parking </p>
              <Link
                href={"/booking/property"}
                className="w-40 text-xs px-3 py-2 flex gap-x-2 items-center justify-center text-white bg-darkgreen rounded-full"
              >
                Awailable <span className="font-semibold">28 Nov 2021</span>
              </Link>
              <p>
                from <span className="font-semibold">£3490</span> /month
              </p>
            </div>
          </div>
          <div className="bg-[#F2F0F2] flex gap-x-2 rounded-2xl rounded-bl-lg  overflow-hidden object">
            <img
              src="/Rectangle 222 (3).png"
              alt=""
              className="w-2/6 h-full object-cover"
            />
            <div className="w-full p-2 grid gap-y-2 text-sm text-black">
              <p className="font-semibold text-base">
                Rhoncus suspendisse penatibus mauris, sit non
              </p>
              <div className="flex flex-wrap items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <img src="/fluent_bed-24-filled.png" alt="" className="w-4" />
                  <p>rooms</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/fa-solid_bath.png" alt="" className="w-4" />
                  <p>baths</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/eva_wifi-fill.png" alt="" className="w-4" />
                  <p>wifi</p>
                </div>
              </div>
              <p>City view | 3rd floor | Elevator | Parking </p>
              <Link
                href={"/booking/property"}
                className="w-40 text-xs px-3 py-2 flex gap-x-2 items-center justify-center text-white bg-darkgreen rounded-full"
              >
                Awailable <span className="font-semibold">28 Nov 2021</span>
              </Link>
              <p>
                from <span className="font-semibold">£3490</span> /month
              </p>
            </div>
          </div>
          <div className="bg-[#F2F0F2] flex gap-x-2 rounded-2xl rounded-bl-lg  overflow-hidden object">
            <img
              src="/Rectangle 222 (4).png"
              alt=""
              className="w-2/6 h-full object-cover"
            />
            <div className="w-full p-2 grid gap-y-2 text-sm text-black">
              <p className="font-semibold text-base">
                Rhoncus suspendisse penatibus mauris, sit non
              </p>
              <div className="flex flex-wrap items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <img src="/fluent_bed-24-filled.png" alt="" className="w-4" />
                  <p>rooms</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/fa-solid_bath.png" alt="" className="w-4" />
                  <p>baths</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/eva_wifi-fill.png" alt="" className="w-4" />
                  <p>wifi</p>
                </div>
              </div>
              <p>City view | 3rd floor | Elevator | Parking </p>
              <Link
                href={"/booking/property"}
                className="w-40 text-xs px-3 py-2 flex gap-x-2 items-center justify-center text-white bg-darkgreen rounded-full"
              >
                Awailable <span className="font-semibold">28 Nov 2021</span>
              </Link>
              <p>
                from <span className="font-semibold">£3490</span> /month
              </p>
            </div>
          </div>
          <div className="bg-[#F2F0F2] flex gap-x-2 rounded-2xl rounded-bl-lg  overflow-hidden object">
            <img
              src="/Rectangle 222 (5).png"
              alt=""
              className="w-2/6 h-full object-cover"
            />
            <div className="w-full p-2 grid gap-y-2 text-sm text-black">
              <p className="font-semibold text-base">
                Rhoncus suspendisse penatibus mauris, sit non
              </p>
              <div className="flex flex-wrap items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <img src="/fluent_bed-24-filled.png" alt="" className="w-4" />
                  <p>rooms</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/fa-solid_bath.png" alt="" className="w-4" />
                  <p>baths</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/eva_wifi-fill.png" alt="" className="w-4" />
                  <p>wifi</p>
                </div>
              </div>
              <p>City view | 3rd floor | Elevator | Parking </p>
              <Link
                href={"/booking/property"}
                className="w-40 text-xs px-3 py-2 flex gap-x-2 items-center justify-center text-white bg-darkgreen rounded-full"
              >
                Awailable <span className="font-semibold">28 Nov 2021</span>
              </Link>
              <p>
                from <span className="font-semibold">£3490</span> /month
              </p>
            </div>
          </div>
          <div className="bg-[#F2F0F2] flex gap-x-2 rounded-2xl rounded-bl-lg  overflow-hidden object">
            <img
              src="/Rectangle 222 (6).png"
              alt=""
              className="w-2/6 h-full object-cover"
            />
            <div className="w-full p-2 grid gap-y-2 text-sm text-black">
              <p className="font-semibold text-base">
                Rhoncus suspendisse penatibus mauris, sit non
              </p>
              <div className="flex flex-wrap items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <img src="/fluent_bed-24-filled.png" alt="" className="w-4" />
                  <p>rooms</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/fa-solid_bath.png" alt="" className="w-4" />
                  <p>baths</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/eva_wifi-fill.png" alt="" className="w-4" />
                  <p>wifi</p>
                </div>
              </div>
              <p>City view | 3rd floor | Elevator | Parking </p>
              <Link
                href={"/booking/property"}
                className="w-40 text-xs px-3 py-2 flex gap-x-2 items-center justify-center text-white bg-darkgreen rounded-full"
              >
                Awailable <span className="font-semibold">28 Nov 2021</span>
              </Link>
              <p>
                from <span className="font-semibold">£3490</span> /month
              </p>
            </div>
          </div>
          <div className="bg-[#F2F0F2] flex gap-x-2 rounded-2xl rounded-bl-lg  overflow-hidden object">
            <img
              src="/Rectangle 222 (7).png"
              alt=""
              className="w-2/6 h-full object-cover"
            />
            <div className="w-full p-2 grid gap-y-2 text-sm text-black">
              <p className="font-semibold text-base">
                Rhoncus suspendisse penatibus mauris, sit non
              </p>
              <div className="flex flex-wrap items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <img src="/fluent_bed-24-filled.png" alt="" className="w-4" />
                  <p>rooms</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/fa-solid_bath.png" alt="" className="w-4" />
                  <p>baths</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src="/eva_wifi-fill.png" alt="" className="w-4" />
                  <p>wifi</p>
                </div>
              </div>
              <p>City view | 3rd floor | Elevator | Parking </p>
              <Link
                href={"/booking/property"}
                className="w-40 text-xs px-3 py-2 flex gap-x-2 items-center justify-center text-white bg-darkgreen rounded-full"
              >
                Awailable <span className="font-semibold">28 Nov 2021</span>
              </Link>
              <p>
                from <span className="font-semibold">£3490</span> /month
              </p>
            </div>
          </div>
          <button className="w-56 mx-auto px-5 py-2 text-white bg-darkgreen grid place-items-center rounded-full">
            Show more apartments
          </button>
        </div>
      </section>
      <main className="px-5 grid gap-y-20 mb-10">
        <div className="grid gap-y-10 text-black">
          <div className="grid gap-y-2">
            <p className="text-xl font-semibold">
              Apartments for rent in London
            </p>
            <p className="text-sm">
              A truly global city, London has long been considered a
              cutting-edge metropolis and hub for culture, style and finance.
              With each borough, Tube zone and neighborhood of London sporting
              its own vibe and lifestyle advantages, it can be downright
              difficult to settle on where to look for a furnished apartment in
              London . Whether you’re a digital nomad looking for a studio
              apartment in London or just seeking a month to month rental in
              London, Blueground has you covered. With a pub on almost every
              corner and beautiful parks in all major neighborhoods, you’ll feel
              right at home across all of Blueground’s exquisite London flats.
              <br></br>
              <br></br>
              Furnished apartment rentals in London. Getting the most out of
              living in London starts with securing a furnished flat for rent.
              Fortunately, Blueground’s flats for rent across London marry
              convenient locations close to public transportation, top notch
              interiors and modern furnishings, and support from our local team.
              Zero in on the ideal serviced apartment in London from studios to
              two-bedroom apartments by filtering for your date, area, and
              must-have amenities on our site. Moving to London has never been
              simpler!<br></br>
              <br></br>
              The choice is yours from Chelsea to Soho to Shoreditch, always
              within a short walk from Tube stops and local hangouts. Show up
              and start living in your new London accommodation with furnishings
              and a fully-equipped setup taken care of before your arrival by
              the team at Blueground. So book today, and move in tomorrow so you
              can enjoy all a Blueground London flat has to offer: premium work
              from home setups, a user-friendly guest app service, flexible
              contracts, and a booking process free of broker’s fees (and
              stresses!).
            </p>
          </div>
          <Info></Info>
        </div>
      </main>
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
