import Link from "next/link";
import Comments from "./comments";
import "./page.css";
import Search from "./(components)/search";
import Header from "./(components)/header";
export default function Home() {
  return (
    <body>
      <Header></Header>
      <section className="w-full h-[500px] sm:h-[450px] bg-[url(/Image.png)] sm:bg-[url(/1.png)] bg-cover flex flex-col justify-between items-center sm:items-start py-5 mb-20 sm:pt-32">
        <div className="sm:w-80 pr-5">
          <div className="bg-white p-5 grid gap-y-2 rounded-r-2xl">
            <p className="text-2xl text-black font-semibold">
              We rent your property
            </p>
            <p className="text-sm text-black">
              Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis
              proin fermentum, consectetur cursus.
            </p>
          </div>
        </div>
        <div className="w-full px-5 relative top-14">
          <Search></Search>
        </div>
      </section>
      <main className="grid gap-y-10 px-5 sm:gap-y-20">
        <div className="sm:h-[350px] rounded-2xl bg-[#F2F0F2] sm:flex">
          <img
            src="/Images 1.png"
            alt=""
            className="w-full sm:min-w-[50%] object-cover rounded-2xl rounded-r-none"
          />
          <div className="p-5 grid gap-y-2 sm:h-40 my-auto sm:p-10">
            <p className="text-black text-2xl font-semibold sm:text-3xl">
              The future is flexible
            </p>
            <p className="text-sm text-black sm:text-xs text-justify">
              We believe in a world where finding a home is just a click away.
              Whether you’re selling your home, travelling for work or moving to
              a new city. Just bring your bags, and we’ll handle the rest.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="max-w-[450px] mx-auto grid gap-y-2 text-center">
            <p className="text-2xl text-black font-semibold sm:text-3xl">
              Id aliquam molestie nunc quis turpis imperdiet quis
            </p>
            <p className="text-sm text-black sm:text-xs">
              Euismod condimentum tempus quis nibh. Accumsan imperdiet non
              vulputate venenatis, lorem amet, purus amet, sagittis. Cum orci
              quam enim adipiscing interdum purus.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-5 sm:flex-wrap sm:justify-center">
            <div className="bg-green p-5 grid gap-y-2 rounded-2xl sm:w-[280px]">
              <img src="/eva_calendar-fill.png" alt="" className="h-10" />
              <p className="text-black font-semibold">Flexible living</p>
              <p className="text-sm">
                Stay as Long or as little as you need with month-to-month
                contracts
              </p>
            </div>
            <div className="bg-green p-5 grid gap-y-2 rounded-2xl sm:w-[280px]">
              <img src="/mdi_sofa.png" alt="" className="h-10" />
              <p className="text-black font-semibold">Move-in ready</p>
              <p className="text-sm">
                Ready to move in with everything you need
              </p>
            </div>
            <div className="bg-green p-5 grid gap-y-2 rounded-2xl sm:w-[280px]">
              <img src="/eva_wifi-fill.png" alt="" className="h-10" />
              <p className="text-black font-semibold">High-speed Wi-Fi</p>
              <p className="text-sm">
                Best in class internet speeds suitable for working from home
              </p>
            </div>
            <div className="bg-green p-5 grid gap-y-2 rounded-2xl sm:w-[280px]">
              <img src="/eva_message-circle-fill.png" alt="" className="h-10" />
              <p className="text-black font-semibold">24/7 support</p>
              <p className="text-sm">On hand team for any issues you have</p>
            </div>
          </div>
        </div>
        <div className="grid gap-y-10">
          <p className="text-2xl text-black font-semibold text-center">
            Choose your location
          </p>
          <div className="flex flex-col gap-y-5 sm:flex-row gap-x-5 overflow-scroll disableScroll">
            <Link href={"/booking"} className="grid gap-y-2 sm:min-w-40">
              <p className="font-semibold text-sm text-center">Shoreditch</p>
              <img src="/unsplash__7AFTBn2jO4.png" alt="" />
            </Link>
            <Link href={"/booking"} className="grid gap-y-2 sm:min-w-40">
              <p className="font-semibold text-sm text-center">Hammersmith</p>
              <img src="/unsplash_19szVauJ7KA.png" alt="" />
            </Link>
            <Link href={"/booking"} className="grid gap-y-2 sm:min-w-40">
              <p className="font-semibold text-sm text-center">
                City of London
              </p>
              <img src="/unsplash_kZOGdVyB_hM.png" alt="" />
            </Link>
            <Link href={"/booking"} className="grid gap-y-2 sm:min-w-40">
              <p className="font-semibold text-sm text-center">The West End</p>
              <img src="/unsplash_trPI4zXpaQU.png" alt="" />
            </Link>
            <Link href={"/booking"} className="grid gap-y-2 sm:min-w-40">
              <p className="font-semibold text-sm text-center">Kensington</p>
              <img src="/unsplash_u3gTIoJLmpg.png" alt="" />
            </Link>
            <Link href={"/booking"} className="grid gap-y-2 sm:min-w-40">
              <p className="font-semibold text-sm text-center">
                Kingston-Upon-Thames
              </p>
              <img src="/unsplash_YxlZv4sG4Eg.png" alt="" />
            </Link>
          </div>
          <Link
            href={"/booking"}
            className="w-40 mx-auto px-5 py-2 grid place-items-center text-white text-sm rounded-full bg-darkgreen"
          >
            View all spaces
          </Link>
        </div>
      </main>
      <section
        className="w-full h-96 p-5 pt-20 my-10 sm:py-0 sm:flex sm:items-center"
        style={{
          backgroundImage: "url(/BespokePartnerships.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="grid gap-y-2 sm:w-96">
          <p className="text-xl font-semibold text-white">Bespoke spaces</p>
          <p className="text-white text-sm font-light">
            Expertly designed to create extraordinary spaces with the flexible
            renter in mind
          </p>
          <Link
            href={"/booking"}
            className="w-40  px-5 py-2 grid place-items-center text-white text-sm rounded-full bg-darkgreen mt-5"
          >
            Start booking
          </Link>
        </div>
      </section>
      <main className="grid gap-y-10 px-5">
        <div className="flex flex-col gap-y-5">
          <div className="grid gap-y-2 text-center sm:w-96 mx-auto">
            <p className="text-2xl text-black font-semibold">
              Corporate Partnerships
            </p>
            <p className="text-sm text-black sm:text-xs">
              We work with 100+ companies to meet accommodation needs in London.
              Offer a dedicated booking manager that can help to find properties
              for your needs.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 sm:flex-row gap-x-5 sm:justify-center">
            <div className="bg-green p-5 grid gap-y-2 rounded-2xl sm:w-[190px]">
              <img src="/eva_search-outline.png" alt="" className="h-10" />
              <p className="text-black font-semibold">Booking manager </p>
              <p className="text-sm sm:text-xs">We do the searching for you</p>
            </div>
            <div className="bg-green p-5 grid gap-y-2 rounded-2xl sm:w-[190px]">
              <img src="/eva_person-fill.png" alt="" className="h-10" />
              <p className="text-black font-semibold">Account manager</p>
              <p className="text-sm sm:text-xs">Preferred partner rates</p>
            </div>
            <div className="bg-green p-5 grid gap-y-2 rounded-2xl sm:w-[190px]">
              <img src="/eva_file-text-fill.png" alt="" className="h-10" />
              <p className="text-black font-semibold">Flexible terms</p>
              <p className="text-sm sm:text-xs">Extend on short notice</p>
            </div>
          </div>
        </div>
        <div className="grid gap-y-10">
          <div className="grid gap-y-2 text-center text-black">
            <p className="text-2xl font-semibold">What our partners think</p>
            <p className="text-sm">See what our partners say about us</p>
          </div>
          <Comments></Comments>
        </div>
        <div className="grid gap-y-10">
          <p className="text-black text-2xl font-semibold text-center">
            Read our blogs
          </p>
          <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 overflow-scroll disableScroll">
            <Link
              href={"/blog"}
              className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]"
            >
              <img src="/blog1.png" alt="" className="w-full" />
              <div className="p-5 grid gap-y-2 text-center sm:text-start">
                <p className="text-black text-2xl font-semibold h-16 overflow-hidden">
                  Turpis elit in dictum eget eget
                </p>
                <p className="text-black text-sm sm:text-xs sm:h-12 overflow-hidden">
                  Neque faucibus pharetra condimentum tincidunt commodo velit.
                </p>
                <div className="flex gap-x-2 text-black font-bold mx-auto sm:ml-0">
                  <i className="bi-clock-fill"></i>
                  <p>1 min read</p>
                </div>
              </div>
            </Link>
            <Link
              href={"/blog"}
              className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]"
            >
              <img src="/blog2.png" alt="" className="w-full" />
              <div className="p-5 grid gap-y-2 text-center sm:text-start">
                <p className="text-black text-2xl font-semibold h-16 overflow-hidden">
                  Turpis elit in dictum eget eget
                </p>
                <p className="text-black text-sm sm:text-xs sm:h-12 overflow-hidden">
                  Convallis eu vel fames feugiat et venenatis nulla ipsum.
                </p>
                <div className="flex gap-x-2 text-black font-bold mx-auto sm:ml-0">
                  <i className="bi-clock-fill"></i>
                  <p>1 min read</p>
                </div>
              </div>
            </Link>
            <Link
              href={"/blog"}
              className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]"
            >
              <img src="/blog3.png" alt="" className="w-full" />
              <div className="p-5 grid gap-y-2 text-center sm:text-start">
                <p className="text-black text-2xl font-semibold sm:h-16 sm:overflow-hidden">
                  Viverra tellus risus lacus commodo
                </p>
                <p className="text-black text-sm sm:text-xs sm:h-12 overflow-hidden">
                  Viverra tellus risus lacus commodo urna fringilla cursus nulla
                  amet.
                </p>
                <div className="flex gap-x-2 text-black font-bold mx-auto sm:ml-0">
                  <i className="bi-clock-fill"></i>
                  <p>1 min read</p>
                </div>
              </div>
            </Link>
            <Link
              href={"/blog"}
              className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]"
            >
              <img src="/blog4.png" alt="" className="w-full" />
              <div className="p-5 grid gap-y-2 text-center sm:text-start">
                <p className="text-black text-2xl font-semibold h-16 overflow-hidden">
                  Faucibus egestas ut sit purus ultricies at eu
                </p>
                <p className="text-black text-sm sm:text-xs sm:h-12 overflow-hidden">
                  Viverra tellus risus lacus commodo urna fringilla cursus nulla
                  amet.
                </p>
                <div className="flex gap-x-2 text-black font-bold mx-auto sm:ml-0">
                  <i className="bi-clock-fill"></i>
                  <p>3 min read</p>
                </div>
              </div>
            </Link>
            <Link
              href={"/blog"}
              className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]"
            >
              <img src="/blog5.png" alt="" className="w-full" />
              <div className="p-5 grid gap-y-2 text-center sm:text-start">
                <p className="text-black text-2xl font-semibold h-16 overflow-hidden">
                  Feugiat gravida sed sit lacus sagittis
                </p>
                <p className="text-black text-sm sm:text-xs sm:h-12 overflow-hidden">
                  Pellentesque ultrices hendrerit lacus lectus.
                </p>
                <div className="flex gap-x-2 text-black font-bold mx-auto sm:ml-0">
                  <i className="bi-clock-fill"></i>
                  <p>3 min read</p>
                </div>
              </div>
            </Link>
          </div>
          <button className="px-5 py-2 text-white rounded-full grid place-items-center bg-darkgreen mx-auto">
            Read more
          </button>
        </div>
        <div className="grid gap-y-10">
          <p className="text-black text-2xl font-semibold sm:text-center">
            Usefull Links
          </p>
          <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-10">
            <div className="grid gap-y-2">
              <div className="flex justify-between items-center gap-x-2">
                <a href="" className="text-darkgreen underline">
                  West London Apartments
                </a>
                <i className="bi-arrow-right text-black font-semibold"></i>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <a href="" className="text-darkgreen underline">
                  Riverside Apartments
                </a>
                <i className="bi-arrow-right text-black font-semibold"></i>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <a href="" className="text-darkgreen underline">
                  Apartments in Finance Sector City of London
                </a>
                <i className="bi-arrow-right text-black font-semibold"></i>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <a href="" className="text-darkgreen underline">
                  Apartments in Soho, Fitrovia
                </a>
                <i className="bi-arrow-right text-black font-semibold"></i>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <a href="" className="text-darkgreen underline">
                  East London Aaprtments
                </a>
                <i className="bi-arrow-right text-black font-semibold"></i>
              </div>
            </div>
            <div className="grid gap-y-2">
              <div className="flex justify-between items-center gap-x-2">
                <a href="" className="text-darkgreen underline">
                  Suitable for Families or Groups
                </a>
                <i className="bi-arrow-right text-black font-semibold"></i>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <a href="" className="text-darkgreen underline">
                  Apartments with Parking
                </a>
                <i className="bi-arrow-right text-black font-semibold"></i>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <a href="" className="text-darkgreen underline">
                  Apartments with Elevator
                </a>
                <i className="bi-arrow-right text-black font-semibold"></i>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <a href="" className="text-darkgreen underline">
                  Apartments suitable for physical disabilities
                </a>
                <i className="bi-arrow-right text-black font-semibold"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section
        className="w-full h-96 pr-5 pt-20 my-10 mb-20 sm:grid sm:place-items-center sm:p-0"
        style={{
          backgroundImage: "url(/givingkey.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="grid gap-y-2 bg-white rounded-r-2xl p-5 sm:w-72 sm:rounded-2xl sm:rounded-bl-md sm:p-10">
          <p className="text-xl font-semibold text-black sm:text-3xl">
            Dictum nunc
          </p>
          <p className="text-black text-sm sm:text-xs">
            Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis
            proin fermentum, consectetur cursus.
          </p>
          <button className="px-5 py-2 flex items-center justify-between text-white text-sm rounded-full bg-darkgreen mt-5">
            <p>Choose city</p>
            <i className="bi-chevron-down"></i>
          </button>
        </div>
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
