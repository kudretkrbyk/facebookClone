import logo from "./logo.svg";
import "./App.css";
import { FaFacebook } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { FaUserFriends } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { AiTwotoneShop } from "react-icons/ai";
import { MdGroups2 } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";
import { GoBellFill } from "react-icons/go";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import profilpics from "./images/1.jpg";
import reelsPics1 from "./images/profile_av.jpg";
import reelsPics2 from "./images/team_3.jpg";
import reelsPics3 from "./images/team_2.jpg";
import reelsPics4 from "./images/team_4.jpg";
import { MdOutlineChangeCircle } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoMenu } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { BsEmojiTear } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";

function App() {
  return (
    <div className="main-div ">
      <div className="navbar  grid sm:grid-cols-2  md:grid-cols-4 p-4 w-screen gap-2    bg-red-300">
        <div className="ikon-ve-arama-ekranı  sm:col-span-1 w-full flex items-center justify-center gap-2 bg-blue-500">
          {" "}
          <FaFacebook className=" size-10" />
          <div>
            <label className="flex items-center justify-start w-full  ">
              <input
                type="text"
                name="name"
                className="border-2 w-full rounded-full  bg-gray-300 size-10 "
              />
              <IoIosSearch className="absolute px-2 size-10" />
            </label>
          </div>
        </div>

        <div className=" orta-ikonlar hidden md:inline md:col-span-2  bg-green-500">
          <div className="flex gap-5 w-full   items-center justify-center">
            {" "}
            <div className="hover:bg-slate-200 ">
              {" "}
              <TiHome className="size-10 text-gray-500" />
            </div>
            <div>
              <FaUserFriends className="size-10 text-gray-500" />
            </div>
            <div>
              <FaPlay className="size-10 text-gray-500" />
            </div>
            <div>
              <AiTwotoneShop className="size-10 text-gray-500" />
            </div>
            <div>
              <MdGroups2 className=" size-10 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="sag-navbar-icons  sm:col-span-1 flex  gap-4 w-full h-full px-12 bg-yellow-500">
          <div className=" md:inline lg:hidden ">
            <IoMenu className=" size-10 text-gray-500  " />
          </div>
          <div className="bg-gray-300 size-10 rounded-full">
            <PiDotsNineBold className="size-10 p-1" />
          </div>
          <div className="bg-gray-300 size-10 rounded-full">
            <BiSolidMessageRoundedCheck className="size-10 p-1" />
          </div>
          <div className="bg-gray-300 size-10 rounded-full">
            <GoBellFill className="size-10 p-1" />
          </div>
          <div className="flex items-end justify-end relative rounded-full size-10 bg-[url('https://scontent.fesb3-2.fna.fbcdn.net/v/t39.30808-1/320221573_1109277629745130_2827570157848169051_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OatUqLubHKcAb4o4LO6&_nc_oc=AdjDrMgNXX7Pnw_TdpTV448fTDvISN7D97sQwK7X13Oksrz_h61jvhUc8Mkp-0swy8Q&_nc_ht=scontent.fesb3-2.fna&oh=00_AfBwkE_gBVe5LhrGWERGrBR0xePZ1LLkp77O3qsrcMty7A&oe=6631CE87')]">
            <FaArrowAltCircleDown className="absolute " />
          </div>
        </div>
      </div>
      <div className="navbarAltiDiv w-full h-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-start justify-between bg-slate-300 p-2">
        <div className="solDiv hidden lg:inline   p-2  w-full h-full lg:col-span-1">
          <div className=" flex flex-col bg-slate-200  w-full h-full gap-2 ">
            <div className="flex items-center justify-start w-full  gap-2">
              {" "}
              <div className=" rounded-full size-10 bg-[url('https://scontent.fesb3-2.fna.fbcdn.net/v/t39.30808-1/320221573_1109277629745130_2827570157848169051_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OatUqLubHKcAb4o4LO6&_nc_oc=AdjDrMgNXX7Pnw_TdpTV448fTDvISN7D97sQwK7X13Oksrz_h61jvhUc8Mkp-0swy8Q&_nc_ht=scontent.fesb3-2.fna&oh=00_AfBwkE_gBVe5LhrGWERGrBR0xePZ1LLkp77O3qsrcMty7A&oe=6631CE87')]">
                {" "}
              </div>
              <div>kudret kirbiyik</div>
            </div>
            <div className="w-full ">gf</div>
            <div className="w-full ">gf</div>
            <div className="w-full ">gf</div>
            <div className="w-full ">gf</div>
            <div className="w-full ">gf</div>
            <div className="w-full ">gf</div>
            <div className="w-full ">gf</div>
          </div>
        </div>

        <div className="ortaDiv w-full flex flex-col gap-4 p-2  sm:col-span-1 md:col-span-2 ">
          <div className="durumlar flex items-center justify-start gap-2">
            <div className="  w-1/4 h-56 bg-slate-500 rounded-xl"></div>
            <div
              className="   w-1/4 h-56 rounded-xl relative flex flex-col gap-12 items-start justify-between bg-cover bg-no-repeat p-2 "
              style={{ backgroundImage: `url(${reelsPics2})` }}
            >
              {" "}
              <div
                className="size-8 rounded-full bg-cover  p-4 bg-no-repeat"
                style={{ backgroundImage: `url(${profilpics})` }}
              ></div>
              <div className="px-4 p-2">SeyuMedia</div>
            </div>
            <div className="   w-1/4 h-56 bg-slate-500 rounded-xl">
              <div
                className="   w-1/4 h-56 rounded-xl relative flex flex-col gap-12 items-start justify-between bg-cover bg-no-repeat p-2 "
                style={{ backgroundImage: `url(${reelsPics1})` }}
              >
                {" "}
                <div
                  className="size-8 rounded-full bg-cover  p-4 bg-no-repeat"
                  style={{ backgroundImage: `url(${profilpics})` }}
                ></div>
                <div className="px-4 p-2">SeyuMedia</div>
              </div>
            </div>
            <div className="  w-1/4 h-56 bg-slate-500 rounded-xl">
              <div
                className="   w-1/4 h-56 rounded-xl relative flex flex-col gap-12 items-start justify-between bg-cover bg-no-repeat p-2 "
                style={{ backgroundImage: `url(${reelsPics3})` }}
              >
                {" "}
                <div
                  className="size-8 rounded-full bg-cover  p-4 bg-no-repeat"
                  style={{ backgroundImage: `url(${profilpics})` }}
                ></div>
                <div className="px-4 p-2">SeyuMedia</div>
              </div>
            </div>
          </div>
          <div className="neDusunuyorsun bg-white shadow-md rounded-lg w-full  flex flex-col items-center justify-start gap-2 p-4 ">
            <div className=" flex items-center  justify-center gap-4 w-full  p-4">
              <div
                className="rounded-full bg-no-repeat 
                size-10 
                bg-[url('https://scontent.fesb3-2.fna.fbcdn.net/v/t39.30808-1/320221573_1109277629745130_2827570157848169051_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OatUqLubHKcAb4o4LO6&_nc_oc=AdjDrMgNXX7Pnw_TdpTV448fTDvISN7D97sQwK7X13Oksrz_h61jvhUc8Mkp-0swy8Q&_nc_ht=scontent.fesb3-2.fna&oh=00_AfBwkE_gBVe5LhrGWERGrBR0xePZ1LLkp77O3qsrcMty7A&oe=6631CE87')]"
              ></div>
              <div className=" w-full ">
                {" "}
                <label>
                  <input
                    value=" Ne düşünüyorsun,kudret?"
                    className="w-full rounded-full bg-gray-200 p-4"
                  ></input>
                </label>
              </div>
            </div>
            <div className=" border-b border-black w-full "></div>
            <div className="flex  gap-5 items-center justify-around w-full p-4">
              <div className="flex items-center justify-center gap-2">
                <IoVideocam className="size-8 " />
                <div>Canlı Video</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <IoVideocam className="size-8 " />
                <div>Canlı Video</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <IoVideocam className="size-8 " />
                <div>Canlı Video</div>
              </div>
            </div>
          </div>
          <div className="gonderiler bg-white shadow-md w-full rounded-md">
            <div className="gonderi-div w-full">
              <div className=" w-full ">
                <div className="flex items-center justify-start p-4 gap-4 w-full">
                  <div className="flex items-end justify-start">
                    <img
                      className="size-10 rounded-xl "
                      src={require("./images/1.jpg")}
                      alt="1"
                    ></img>
                    <img
                      className="absolute size-5 rounded-full ml-6"
                      src={require("./images/team_3.jpg")}
                      alt="1"
                    ></img>
                  </div>
                  <div className="flex items-start justify-between w-full">
                    <div>
                      {" "}
                      <div className="gönderi-name text-xl  text-gray-800 font-bold  ">
                        TAMİRAT TADİLAT USTALIK
                      </div>
                      <div className="flex items-end justify-start w-full gap-3">
                        {" "}
                        <div className="gönderen-adi text-gray-500">
                          {" "}
                          Hidayet Demir
                        </div>
                        <div className="text-xl">.</div>
                        <div className="  text-gray-500">19s</div>
                      </div>
                    </div>
                    <div className="flex gap-2 p-2">
                      <HiDotsHorizontal className="size-5" />
                      <MdClose className="size-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full p-2">
                <p>
                  Merhaba , duvarin icinde buat cok geride kaldigi icin normal
                  prizlerin kasalari buati tutmuyor. Birkac priz
                  denedim..ucundan tuttugundan bir süre sonra atiyor.. nasil bir
                  cözüm üretebilirim?
                </p>
              </div>
              <div className=" w-full flex">
                <img
                  className="object-contain h-48 w-96 "
                  src={require("./images/fb2.jpg")}
                  alt="1"
                ></img>
                <img
                  className=" h-48 w-96 object-fill"
                  src={require("./images/fb1.jpg")}
                  alt="1"
                ></img>
                ?????
              </div>
              <div className="b w-full flex items-center justify-between p-2">
                <div className="flex p-2">
                  <BsEmojiTear />
                  <BsEmojiTear />
                  <BsEmojiTear />
                </div>
                <div className="text-gray-500"> 71 yorum</div>
              </div>
              <div className="w-full border-b border-t border-black flex items-center justify-around p-4">
                <div className="flex items-center">
                  <BiSolidLike />
                  Beğen
                </div>
                <div className="flex items-center">
                  <BiSolidLike />
                  Yorum Yap
                </div>
                <div className="flex items-center">
                  <BiSolidLike />
                  Paylaş
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sagDiv  hidden md:inline  w-full md:col-span-1  bg-blue-500 ">
          <div className="flex flex-col items-center justify-end gap-2 p-2 w-full ">
            <div className="border-b border-black w-full h-full flex flex-col gap-2">
              {" "}
              <div className="flex items-center justify-between gap-3 w-full h-full ">
                {" "}
                <div> Sayfaların ve profillerin</div>
                <HiDotsHorizontal className="p" />
              </div>
              <div className="flex items-center justify-start gap-3 px-2 w-full h-full">
                <div
                  className="size-8 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profilpics})` }}
                ></div>
                <div>SeyuMedia</div>
              </div>
              <div className="flex items-center gap-2 justify-start w-full h-full px-6 text-gray-500">
                <MdOutlineChangeCircle className="size-5" />
                Sayfaya geç
              </div>
              <div className="flex items-center gap-2 justify-start w-full h-full px-6 text-gray-500 ">
                <TfiAnnouncement className="size-5" />
                Tanıtım Oluştur
              </div>
            </div>
          </div>

          <div className="flex  items-center justify-between w-full h-full">
            <div className="col-span-2 ">Kişiler</div>
            <div className="flex gap-2">
              {" "}
              <IoIosSearch className="p " />
              <HiDotsHorizontal className="p " />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 px-2 w-full h-full">
            <div className="flex gap-2 items-start justify-center p-2">
              {" "}
              <div
                className="size-8 rounded-full bg-cover flex"
                style={{ backgroundImage: `url(${profilpics})` }}
              ></div>
              <div>SeyuMedia</div>
            </div>
            <div className="flex gap-2 items-start justify-center p-2">
              {" "}
              <div
                className="size-8 rounded-full bg-cover flex"
                style={{ backgroundImage: `url(${profilpics})` }}
              ></div>
              <div>SeyuMedia</div>
            </div>
            <div className="flex gap-2 items-start justify-center p-2">
              {" "}
              <div
                className="size-8 rounded-full bg-cover flex"
                style={{ backgroundImage: `url(${profilpics})` }}
              ></div>
              <div>SeyuMedia</div>
            </div>{" "}
            <div className="flex gap-2 items-start justify-center p-2">
              {" "}
              <div
                className="size-8 rounded-full bg-cover flex"
                style={{ backgroundImage: `url(${profilpics})` }}
              ></div>
              <div>SeyuMedia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
