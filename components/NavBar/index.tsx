"use client";
import { useRtl } from "@/hooks/useRtl";
import LangSwitcher from "../LangSwitcher";
import useNavBar from "./useNavBar";
import { cn } from "@/utils/cn";
import { observer } from "@/utils/observer";
import Image from "../Core/Image";
import SideBarLinks from "../SideBar/SideBarLinks";

export default function NavBar() {
  const { logout } = useNavBar();
  const isRtl = useRtl();
  const toggleDrawer = () => {
    observer.fire("toggleDrawer");
  };

  return (
    <nav className=" bg-light shadow-sm sticky top-0 z-10 h-[100px]">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Image src="/images/logo/logo.svg" alt="logo" width={95} height={50} className="w-[95px] h-[50px]" />
        <SideBarLinks />
        <LangSwitcher />
      </div>
    </nav>
  );
}
