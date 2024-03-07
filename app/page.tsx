import * as React from "react";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="">
          <Divider orientation="vertical" className="mx-1 bg-black" />
        </div>
        <div className="w-[1400px] h-[900px] mt-14 rounded-md  flex justify-center items-center bg-cover bg-[url('https://i.ibb.co/Kh9LyVr/gwen-league-of-legends-art-10809.jpg')]">
          <div className="h-[800px] w-[1300px] bg-cover rounded-md  bg-[url('https://www.xtrafondos.com/wallpapers/gwen-league-of-legends-art-10809.jpg')]"></div>
        </div>
        <div className="">
          <Divider orientation="vertical" className="mx-1 bg-black" />
        </div>
      </div>
    </>
  );
}
