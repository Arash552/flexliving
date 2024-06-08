import Header from "@/app/(components)/header";
import Images from "./images";
import "./page.css";
export default function Property() {
  return (
    <body>
      <Header></Header>
      <section className="w-full h-96 md:h-auto relative mb-10">
        <Images></Images>
        <div className="absolute bottom-4 right-4 bg-[#fffc] text-black rounded-md grid place-items-center px-3 py-2 md:hidden">
          1/10
        </div>
        <i className="bi-arrow-left absolute top-4 left-4 text-white bg-darkgreen rounded-full p-2 grid place-items-center md:hidden"></i>
        <button className="text-white bg-darkgreen place-items-center rounded-full px-5 py-2 absolute left-4 bottom-4 text-sm hidden md:grid">
          View all photos
        </button>
      </section>
      <section className="grid gap-y-1 mb-10 md:hidden">
        <h1 className="text-2xl font-semibold text-center">
          Rhoncus suspendisse
        </h1>
        <p className="text-sm text-center">London, Notting Hill</p>
        <div className="bg-[#49735A] p-3 flex items-center justify-between text-white">
          <div className="grid gap-y-2">
            <p className="font-semibold">£3990 / Month</p>
            <div className="flex gap-x-2 items-center text-sm underline opacity-90">
              <p>31.12.2021</p>
              <p>31.02.2022</p>
            </div>
          </div>
          <button className="px-5 py-2 grid place-items-center rounded-full bg-darkgreen">
            Book
          </button>
        </div>
      </section>
      <main className="grid gap-y-10 px-5 text-black mb-20 md:gap-y-20 ">
        <div className="gap-x-10 hidden md:flex">
          <div className="w-1/2 lg:w-3/5 grid gap-y-10">
            <div className="gap-y-5 hidden md:grid">
              <div className="grid gap-y-2">
                <h1 className="text-3xl font-semibold">Rhoncus suspendisse</h1>
                <p className="text-sm">London, Notting Hill</p>
              </div>
              <div className="flex justify-between items-center flex-wrap">
                <div className="flex gap-x-4 text-sm">
                  <div className="flex gap-x-2">
                    <img
                      src="/fluent_bed-24-filled.png"
                      alt=""
                      className="w-5"
                    />
                    <p>2 bedrooms</p>
                  </div>
                  <div className="flex gap-x-2">
                    <img src="/fa-solid_bath.png" alt="" className="w-5" />
                    <p>2 baths</p>
                  </div>
                </div>
                <p className="text-sm">
                  500 sq.ft | City view | 3rd floor | Elevator{" "}
                </p>
              </div>
            </div>
            <div className="text-black text-start">
              <div className="mb-5">
                <p className="text-2xl font-semibold mb-2">Description</p>
                <p className="text-sm">
                  A truly global city, London has long been considered a
                  cutting-edge metropolis and hub for culture, style and
                  finance. With each borough, Tube zone and neighborhood of
                  London sporting its own vibe and lifestyle advantages, it can
                  be downright difficult to settle on where to look for a
                  furnished apartment in London . Whether you’re a digital nomad
                  looking for a studio apartment in London or just seeking a
                  month to month rental in London, Blueground has you covered.
                </p>
              </div>
              <div className="mb-5">
                <p className="text-xl font-semibold mb-2">In sed</p>
                <p className="text-sm">
                  In nullam eget urna suspendisse odio nunc. Eu sodales
                  vestibulum, donec rutrum justo, amet porttitor vitae et.
                  Interdum consectetur dictum mattis gravida sed vulputate.
                  Tempus sagittis cras sagittis viverra erat proin duis enim.
                </p>
              </div>
              <div className="mb-5">
                <p className="text-xl font-semibold mb-2">
                  Adipiscing risus, fermentum
                </p>
                <p className="text-sm">
                  Laoreet risus accumsan pellentesque lacus, in nulla eu
                  elementum. Mollis enim fringilla aenean diam tellus diam morbi
                  ipsum placerat.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 lg:w-2/5 grid gap-y-5 bg-[#F2F0F2] rounded-2xl p-5 text-black">
            <h1 className="text-2xl font-semibold text-center">
              £3990 / Month
            </h1>
            <div className="flex items-center justify-between gap-x-5">
              <div className="grid gap-y-2">
                <p className="text-sm">Move in</p>
                <div className="px-5 py-2 bg-white text-sm rounded-full gap-x-2 flex">
                  <img src="/eva_calendar-fill.png" alt="" className="w-5" />
                  <p>31.12.2021</p>
                </div>
              </div>
              <div className="grid gap-y-2">
                <p className="text-sm">Move out</p>
                <div className="px-5 py-2 bg-white text-sm rounded-full gap-x-2 flex">
                  <img src="/eva_calendar-fill.png" alt="" className="w-5" />
                  <p>31.02.2022</p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 items-center text-sm">
              <div className="flex gap-x-2">
                <img src="/icons/eva_people-fill.png" alt="" className="w-5" />
                <p className="font-semibold"></p>
              </div>
              <div className="flex gap-x-2 text-lg items-center">
                <p className="text-2xl">+</p>
                <p>1</p>
                <p className="text-2xl">-</p>
              </div>
            </div>
            <p className="">All utilities are included</p>
            <div className="flex justify-between">
              <p>Average monthy rent</p>
              <div className="grid gap-y-2">
                <p>£3700</p>
                <p className="text-sm">incl. VAT</p>
              </div>
            </div>
            <div className="flex justify-between font-semibold">
              <div className="flex gap-x-2">
                <p className="font-semibold">Pay upon booking</p>
                <img
                  src="/icons/eva_alert-circle-fill.png"
                  alt=""
                  className="w-5 h-5"
                />
              </div>
              <div className="grid gap-y-2">
                <p className="font-semibold">£3989.23</p>
                <p className="text-sm font-normal">incl. VAT</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="grid gap-y-1">
                <div className="flex gap-x-2">
                  <p>Total cost</p>
                  <img
                    src="/icons/eva_alert-circle-fill.png"
                    alt=""
                    className="w-5"
                  />
                </div>
                <p className="text-sm text-darkgreen">Show more</p>
              </div>
              <div className="grid gap-y-2">
                <p>£4001.70</p>
                <p className="text-sm">incl. VAT</p>
              </div>
            </div>
            <button className="px-5 py-2 text-white rounded-full bg-darkgreen">
              Continue booking
            </button>
            <p className="text-sm font-light">
              When you book this apartment, your reservation will be cofirmed
              instantly
            </p>
          </div>
        </div>
        <div className="gap-y-2 grid md:hidden">
          <p className="text-2xl font-semibold mb-2">Description</p>
          <p className="text-sm">
            A truly global city, London has long been considered a cutting-edge
            metropolis and hub for culture, style and finance. With each
            borough, Tube zone and neighborhood of London sporting its own vibe
            and lifestyle advantages, it can be downright difficult to settle on
            where to look for a furnished apartment in London . Whether you’re a
            digital nomad looking for a studio apartment in London or just
            seeking a month to month rental in London, Blueground has you
            covered.
          </p>
          <button className="text-white bg-darkgreen rounded-full px-5 py-2 w-40 mx-auto">
            Read more
          </button>
        </div>
        <div className="grid gap-y-4 text-black">
          <p className="text-2xl font-semibold text-center">Amenities</p>
          <div className="flex flex-col gap-4 items-center md:flex-row justify-around">
            <div className="grid gap-y-1">
              <div className="w-56 flex items-center justify-between text-sm">
                <p>TV</p>
                <img src="/icons/mdi_television.png" alt="" className="w-8" />
              </div>
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Fire Place</p>
                <img src="/icons/mdi_fireplace.png" alt="" className="w-8" />
              </div>
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Phone</p>
                <img
                  src="/icons/mdi_phone-classic.png"
                  alt=""
                  className="w-8"
                />
              </div>
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Work Place</p>
                <img
                  src="/icons/mdi_desktop-mac-dashboard.png"
                  alt=""
                  className="w-8"
                />
              </div>
            </div>
            <div className="grid gap-y-1">
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Fridge</p>
                <img src="/icons/mdi_fridge.png" alt="" className="w-8" />
              </div>
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Kettle</p>
                <img src="/icons/mdi_kettle.png" alt="" className="w-8" />
              </div>
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Coffe machine</p>
                <img src="/icons/mdi_coffee-maker.png" alt="" className="w-8" />
              </div>
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Dishes</p>
                <img src="/icons/Vector.png" alt="" className="w-8" />
              </div>
            </div>
            <div className="grid gap-y-1">
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Whashing machine</p>
                <img src="/icons/Vector (1).png" alt="" className="w-8" />
              </div>
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Dryer</p>
                <img src="/icons/Vector (2).png" alt="" className="w-8" />
              </div>
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Irob</p>
                <img src="/icons/Vector (3).png" alt="" className="w-8" />
              </div>
              <div className="w-56 flex items-center justify-between text-sm">
                <p>Wardobe</p>
                <img src="/icons/Vector (4).png" alt="" className="w-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="gap-y-10 text-black hidden md:grid">
          <h1 className="text-2xl font-semibold text-center">Neighbourhood</h1>
          <p className="text-sm">
            Ultricies etiam sit auctor aenean donec nunc, elementum etiam nisl.
            Sed arcu, sed elit egestas faucibus pellentesque. Morbi faucibus
            faucibus nam volutpat arcu lorem pharetra a. Pretium dolor nunc,
            dolor elit lectus sit amet sit. Elit enim mi ornare id ultricies
            accumsan proin amet. Molestie amet, pretium eu massa a, pharetra.
            Tellus quisque sollicitudin tristique maecenas vitae fames eget ut.
            Nisl commodo lacinia ultrices ut odio dui at. Adipiscing ac auctor
            hac urna dictum. Urna quis enim lobortis vel dignissim sed posuere.
            Semper lectus neque leo mollis pellentesque auctor pharetra, sed.
            Varius facilisis in sem tristique. Mauris condimentum pellentesque
            non commodo, quisque eget dolor. Et ultrices id placerat accumsan.
            Consectetur consectetur libero orci dolor dolor sagittis. Leo, augue
            sit sem adipiscing purus ut at malesuada. Dolor, eu dignissim
            adipiscing eget sed metus.
          </p>
        </div>
      </main>
      <section className="grid gap-y-5 mb-20 md:px-10">
        <p className="text-2xl text-black font-semibold text-center">
          Location
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5269991.758801123!2d16.446533140624993!3d49.83798234879425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1716969668970!5m2!1sen!2sde"
          className="w-full h-56 md:h-96 border-none outline-none"
          loading="lazy"
        ></iframe>
      </section>
      <main className="grid gap-y-10 px-5 text-black mb-20 md:gap-y-20 ">
        <div className="grid gap-y-5">
          <p className="text-2xl font-semibold text-center">Policy detail</p>
          <div className="flex flex-col items-center gap-10 text-center mb-10 md:flex-row md:justify-around">
            <ul className="list-none text-sm grid gap-y-2 whitespace-nowrap">
              <p className="text-lg font-semibold">House rules</p>
              <li className="flex items-center gap-x-2">
                <img src="/icons/eva_clock-fill.png" alt="" className="h-5" />
                <p>Cheking time</p>
              </li>
              <li className="flex items-center gap-x-2">
                <img src="/icons/eva_clock-fill.png" alt="" className="h-5" />
                <p>Checkout time</p>
              </li>
              <li className="flex items-center gap-x-2">
                <img src="/icons/Vector (9).png" alt="" className="h-5" />
                <p>No smoking</p>
              </li>
              <li className="flex items-center gap-x-2">
                <img src="/icons/ic_twotone-pets.png" alt="" className="h-5" />
                <p>No pets</p>
              </li>
              <li className="flex items-center gap-x-2">
                <img src="/icons/bx_bxs-party.png" alt="" className="h-5" />
                <p>No party</p>
              </li>
            </ul>
            <ul className="list-none text-sm grid gap-y-2">
              <p className="text-lg font-semibold">Cancellation Policy</p>
              <li className="flex items-center gap-x-2">
                <img
                  src="/icons/eva_close-circle-fill.png"
                  alt=""
                  className="h-5"
                />
                <p className="md:w-56">Free Cancellation up to 24hrs before checkin</p>
              </li>
            </ul>
            <ul className="list-none text-sm grid gap-y-2">
              <p className="text-lg font-semibold">Health & Safty</p>
              <li className="flex items-center gap-x-2">
                <img src="/icons/Vector (8).png" alt="" className="h-5" />
                <p className="md:w-56">Cleaner in accordance with our COVID safe cleaning policy</p>
              </li>
            </ul>
          </div>
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
