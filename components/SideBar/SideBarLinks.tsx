import { usePathname } from "next/navigation";
import { Each } from "../Core/Each";
import { links } from "./links";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function SideBarLinks() {
  const t = useTranslations();
  const pathname = usePathname();
  // const isActive = pathname === href;
  return (
    <ul className="flex gap-6">
      <Each
        of={links}
        render={(item) => (
          <>
            <li>
              <Link
                href={item.to}
                className={cn(
                  "capitalize text-dark-gray p-0 transition-all ease-linear duration-300 rounded-lg hover:text-primary",
                  pathname === item.to && "next-active-link text-primary"
                )}
              >
                {t(`titles.${item.title}`)}
              </Link>
            </li>
          </>
        )}
      />
    </ul>
  );
}
