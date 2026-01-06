import { useTranslations } from "next-intl";
import HeadSection from "../Core/HeadSection";
import { Each } from "../Core/Each";
import Image from "@/components/Core/Image";
import CountUp from "../Core/CountUp";
import Link from "next/link";

export default function BecomeTeacherSection() {
  const t = useTranslations();
  
  const data: {
    id: number;
    icon: string;
    title: string;
    description: string;
  }[] = [
    {
      id: 1,
      icon: "users.svg",
      title: t("titles.become_feature_1"),
      description: t("descriptions.become_feature_1"),
    },
    {
      id: 2,
      icon: "clock.svg",
      title: t("titles.become_feature_2"),
      description: t("descriptions.become_feature_2"),
    },
    {
      id: 3,
      icon: "dollar.svg",
      title: t("titles.become_feature_3"),
      description: t("descriptions.become_feature_3"),
    },
    {
      id: 4,
      icon: "support.svg",
      title: t("titles.become_feature_4"),
      description: t("descriptions.become_feature_4"),
    },
  ];
  const basicRequirementsData: {
    id: number;
    description: string;
  }[] = [
    {
      id: 1,
      description: t("descriptions.basic_requirements_description_1"),
    },
    {
      id: 2,
      description: t("descriptions.basic_requirements_description_2"),
    },
    {
      id: 3,
      description: t("descriptions.basic_requirements_description_3"),
    },
    {
      id: 4,
      description: t("descriptions.basic_requirements_description_4"),
    },
  ];
  return (
    <section
      className={`become-teacher-section w-full rounded-lg shadow-3xl lg:py-16 py-10`}
    >
      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        <div>
          <HeadSection
            title={t("titles.become_a_tutor")}
            description={t("descriptions.become_a_tutor_description")}
            className="!items-start !text-start"
          />
          <div className="become-teacher-features grid lg:grid-cols-2 grid-cols-1 gap-6">
            <Each
              of={data}
              render={(item) => (
                <div
                  className="become-teacher-feature flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Image
                    src={`/images/icons/${item.icon}`}
                    alt={item.title}
                    className="w-7 h-7"
                  />
                  <h3 className="text-gray2 text-base font-normal flex flex-col gap-1">
                    {item.title}
                    <span className="text-gray2 text-xs font-normal">
                      {item.description}
                    </span>
                  </h3>
                </div>
              )}
            />
          </div>
          <div
            className="become-teacher-basic-requirements bg-[#FFFAF3] p-6 rounded-xl  my-14"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-dark text-2xl font-bold mb-5">
              {t("titles.basic_requirements")}
            </h3>
            <ul>
              <Each
                of={basicRequirementsData}
                render={(item) => (
                  <li className="text-gray2 text-xs font-normal">
                    {item.description}
                  </li>
                )}
              />
            </ul>
          </div>
          <Link
            href={`/become-a-teacher`}
            className="btn default-btn min-w-[200px]"
            data-aos="fade-up"
            data-aos-delay="100"
            locale="en"
          >
            {t("buttons.apply_now")}
          </Link>
        </div>
        <div
          className="image-container-become-teacher h-[588px]  flex items-center justify-end"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="w-[calc(100%-24px)] h-full image-become-teacher">
            <Image
              src="/images/general/become_a_teacher.webp"
              alt="become-teacher"
              className="w-full h-full object-cover object-center rounded-[20px]"
            />
          </div>
          <div className="count_tutors bg-light rounded-xl main-shadow p-6 absolute bottom-[-1.5rem] left-[-1.5rem] animation_up_and_down">
            <CountUp
              value={50}
              suffix="+"
              className="!text-primary text-4xl font-bold !justify-start !mb-0"
            />
            <span className="text-gray2 text-sm font-normal">
              {t("titles.professional_tutors")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
