// import { useSettingsStore } from "@/store/settings";
import Image from "../Core/Image";
import { useTranslations } from "next-intl";
import { Each } from "../Core/Each";
import Link from "next/link";
import { links } from "../SideBar/links";
import { cn } from "@/utils/cn";

export default function Footer() {
  const t = useTranslations();
  const data: {
    id: number;
    title: string;
    link: string;
    icon: string;
  }[] = [
    {
      id: 1,
      title: "+966 12 345 6789",
      link: "tel:+966123456789",
      icon: "phone.svg",
    },
    {
      id: 2,
      title: "info@um-allughat.com",
      link: "mailto:info@um-allughat.com",
      icon: "email.svg",
    },
    {
      id: 3,
      title: "King Fahd Road, Riyadh, Saudi Arabia",
      link: "https://maps.app.goo.gl/1234567890",
      icon: "marker.svg",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <div className=" bg-secondary footer flex  items-center pt-14">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <div className="site-info">
            <Image src="/images/logo/logo.svg" width={95} height={50} />
            <p className="text-[#99A1AF] text-sm font-normal mt-4 leading-[26px]">
              {t("descriptions.footer_description")}
            </p>
          </div>
          <div className="site-links">
            <h3 className="text-light text-base font-bold mb-5">
              {t("titles.quick_links")}
            </h3>

            <ul className="flex flex-col gap-2.5">
              <Each
                of={links}
                render={(item) => (
                  <>
                    <li>
                      <Link
                        href={item.to}
                        className={cn(
                          "capitalize text-[#99A1AF] p-0 transition-all ease-linear text-sm font-normal duration-300 rounded-lg hover:text-primary"
                        )}
                      >
                        {t(`titles.${item.title}`)}
                      </Link>
                    </li>
                  </>
                )}
              />
            </ul>
          </div>
          <div className="site-contact">
            <h3 className="text-light text-base font-bold mb-5">
              {t("titles.contact_us")}
            </h3>
            <ul className="contact-info-list flex flex-col gap-6">
              <Each
                of={data}
                render={(item) => (
                  <li className="group contact-info-item">
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex items-center gap-3"
                    >
                      <span className=" group-hover:bg-secondary w-9 h-9 rounded-lg bg-light/10 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                        <Image
                          src={`/images/icons/${item.icon}`}
                          alt={item.title}
                          width={17}
                          height={17}
                        />
                      </span>
                      <h4 className="text-[#99A1AF] text-sm font-light gap-1 group-hover:text-primary transition-all duration-300">
                        {item.title}
                      </h4>
                    </Link>
                  </li>
                )}
              />
            </ul>
          </div>
        </div>
        <p className="text-[#99A1AF] font-medium text-sm text-center border-t border-t-[#364153] py-6 mt-14">
           ©{year} {t("app.name")}. {t("app.copyright")}
        </p>
      </div>
    </div>
  );
}
