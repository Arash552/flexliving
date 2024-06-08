import Link from "next/link";
import "./page.css";
import Header from "../(components)/header";
export default function Blog() {
  return (
    <body>
      <Header></Header>
      <section className="mb-20">
        <h1 className="text-black text-3xl font-semibold text-center mb-5">
          Flex Living Insites
        </h1>
        <ul className="list-none items-center gap-x-5 justify-center text-black mb-5 hidden sm:flex">
          <li className="text-darkgreen">View all</li>
          <li>Destination guide</li>
          <li>Remote working</li>
          <li>Propery investing</li>
          <li>Property insights</li>
        </ul>
        <div
          className="w-full h-96 pt-10 pr-5 sm:p-0 sm:flex sm:items-center"
          style={{
            backgroundImage: "url(/blogBackLarge.png)",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-white rounded-r-2xl p-5 grid gap-y-5 sm:w-72 sm:p-10">
            <p className="text-2xl text-black font-semibold sm:text-3xl">
              We rent your property
            </p>
            <p className="text-sm text-black sm:text-xs">
              Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis
              proin fermentum, consectetur cursus.{" "}
            </p>
          </div>
        </div>
      </section>
      <main className="grid gap-y-20 px-5">
        <div className="grid gap-y-10">
          <div className="flex items-center gap-x-5 text-black text-2xl font-semibold overflow-scroll disableScroll whitespace-nowrap sm:hidden">
            <p>View all</p>
            <p>Property Insights</p>
            <p>Property Insights</p>
            <p>Property Insights</p>
          </div>
          <div className="flex flex-wrap gap-7 justify-around">
            <div className="w-72 bg-[#F2F0F2] rounded-2xl grid gap-y-2">
              <div className="relative">
                <img src="/weblog.png" alt="" className="w-full" />
                <div className="w-full absolute bottom-[-16px] grid place-items-center">
                  <p className="px-10 py-2 grid place-items-center text-black bg-green rounded-2xl">
                    Relocation
                  </p>
                </div>
              </div>
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
            </div>
            <div className="w-72 bg-[#F2F0F2] rounded-2xl grid gap-y-2">
              <div className="relative">
                <img src="/weblog1.png" alt="" className="w-full" />
                <div className="w-full absolute bottom-[-16px] grid place-items-center">
                  <p className="px-10 py-2 grid place-items-center text-black bg-green rounded-2xl">
                    Working remotly
                  </p>
                </div>
              </div>
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
            </div>
            <div className="w-72 bg-[#F2F0F2] rounded-2xl grid gap-y-2">
              <div className="relative">
                <img src="/weblog2.png" alt="" className="w-full" />
                <div className="w-full absolute bottom-[-16px] grid place-items-center">
                  <p className="px-10 py-2 grid place-items-center text-black bg-green rounded-2xl">
                    Guest experience
                  </p>
                </div>
              </div>
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
            </div>
            <div className="w-72 bg-[#F2F0F2] rounded-2xl grid gap-y-2">
              <div className="relative">
                <img src="/weblog3.png" alt="" className="w-full" />
                <div className="w-full absolute bottom-[-16px] grid place-items-center">
                  <p className="px-10 py-2 grid place-items-center text-black bg-green rounded-2xl">
                    Guest experience
                  </p>
                </div>
              </div>
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
            </div>
            <div className="w-72 bg-[#F2F0F2] rounded-2xl grid gap-y-2">
              <div className="relative">
                <img src="/weblog4.png" alt="" className="w-full" />
                <div className="w-full absolute bottom-[-16px] grid place-items-center">
                  <p className="px-10 py-2 grid place-items-center text-black bg-green rounded-2xl">
                    Apartment life style
                  </p>
                </div>
              </div>
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
            </div>
            <div className="w-72 bg-[#F2F0F2] rounded-2xl grid gap-y-2">
              <div className="relative">
                <img src="/weblog.png" alt="" className="w-full" />
                <div className="w-full absolute bottom-[-16px] grid place-items-center">
                  <p className="px-10 py-2 grid place-items-center text-black bg-green rounded-2xl">
                    Relocation
                  </p>
                </div>
              </div>
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
            </div>
            <div className="w-72 bg-[#F2F0F2] rounded-2xl grid gap-y-2">
              <div className="relative">
                <img src="/weblog4.png" alt="" className="w-full" />
                <div className="w-full absolute bottom-[-16px] grid place-items-center">
                  <p className="px-10 py-2 grid place-items-center text-black bg-green rounded-2xl">
                    Apartment life style
                  </p>
                </div>
              </div>
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
            </div>
            <div className="w-72 bg-[#F2F0F2] rounded-2xl grid gap-y-2">
              <div className="relative">
                <img src="/weblog2.png" alt="" className="w-full" />
                <div className="w-full absolute bottom-[-16px] grid place-items-center">
                  <p className="px-10 py-2 grid place-items-center text-black bg-green rounded-2xl">
                    Guest experience
                  </p>
                </div>
              </div>
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
            </div>
            <div className="w-72 bg-[#F2F0F2] rounded-2xl grid gap-y-2">
              <div className="relative">
                <img src="/weblog1.png" alt="" className="w-full" />
                <div className="w-full absolute bottom-[-16px] grid place-items-center">
                  <p className="px-10 py-2 grid place-items-center text-black bg-green rounded-2xl">
                    Working remotly
                  </p>
                </div>
              </div>
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
            </div>
          </div>
          <button className="px-5 py-2 grid place-items-center text-white` bg-darkgreen rounded-full text-white w-32 mx-auto">
            Load more
          </button>
        </div>
        <div className="grid gap-y-10">
          <p className="text-black text-2xl font-semibold text-center">
            Read our blogs
          </p>
          <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 overflow-scroll disableScroll">
            <Link href={"/blog"} className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]">
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
            <Link href={"/blog"} className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]">
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
            <Link href={"/blog"} className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]">
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
            <Link href={"/blog"} className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]">
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
            <Link href={"/blog"} className="bg-[#F2F0F2] rounded-2xl grid gap-y-2 sm:min-w-56 sm:h-[340px]">
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
      </main>
      <footer className="px-5 pb-5 flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:px-10 mt-10">
        <div className="grid gap-y-2 place-items-center sm:place-items-start">
          <img src="/Logo.png" alt="" className="h-10" />
          <div className="gap-y-2 hidden sm:grid">
            <p className="text-sm text-black sm:text-xs text-start">
              Contact number: 02033074477
            </p>
            <div className="flex justify-start items-center gap-x-5 text-darkgreen text-2xl">
              <i className="bi-in"></i>
              <i className="bi-facebook"></i>
              <i className="bi-twitter"></i>
            </div>
            <p className="text-sm text-black sm:text-xs text-start">
              © 2021 Flex Living
            </p>
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
          <p className="text-sm text-black sm:text-xs text-center">
            Contact number: 02033074477
          </p>
          <div className="flex justify-center items-center gap-x-5 text-darkgreen text-2xl">
            <i className="bi-in"></i>
            <i className="bi-facebook"></i>
            <i className="bi-twitter"></i>
          </div>
          <p className="text-sm text-black sm:text-xs text-center">
            © 2021 Flex Living
          </p>
        </div>
      </footer>
    </body>
  );
}
