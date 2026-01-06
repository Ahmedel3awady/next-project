import { useTranslations } from "next-intl";
import HeadSection from "../Core/HeadSection";
import { Each } from "../Core/Each";
import CardThumb from "../Shared/Card/howWork";
import Card from "../Shared/Card/bigHowWork";
import Slider from "../Slider/thumbs";
export default function HowWorkSection() {
  const t = useTranslations();
  const data: {
    id: number;
    title: string;
    icon: string;
    title_step: string;
    description: string;
    image: string;
  }[] = [
    {
      id: 1,
      title: t("titles.step_1"),
      icon: "user_plus.svg",
      title_step: t("titles.title_step_1"),
      description: t("descriptions.step_1_description"),
      image: "how_work.webp",
    },
    {
      id: 2,
      title: t("titles.step_2"),
      icon: "search.svg",
      title_step: t("titles.title_step_2"),
      description: t("descriptions.step_2_description"),
      image: "how_work.webp",
    },
    {
      id: 3,
      title: t("titles.step_3"),
      icon: "credit.svg",
      title_step: t("titles.title_step_3"),
      description: t("descriptions.step_3_description"),
      image: "how_work.webp",
    },
    {
      id: 4,
      title: t("titles.step_4"),
      icon: "video.svg",
      title_step: t("titles.title_step_4"),
      description: t("descriptions.step_4_description"),
      image: "how_work.webp",
    },
  ];
  return (
    <section
      className={`how-work-section w-full rounded-lg shadow-3xl lg:py-16 py-10`}
    >
      <div className="container">
        <HeadSection
          title={t("titles.how_it_works")}
          description={t("descriptions.how_it_works_description")}
        />

        <Slider
          items={data}
          slidesPerView={1}
          renderItemThumb={(item) => (
            <CardThumb
              key={item.id}
              icon={item.icon}
              title={item.title}
            ></CardThumb>
          )}
          renderItem={(item, index) => (
            <Card
              key={item.id}
              icon={item.icon}
              title_step={item.title_step}
              description={item.description}
              image={item.image}
              index={++index}
            ></Card>
          )}
        />
        {/* <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
          <Each
            of={data}
            render={(item) => (
              <Card key={item.id} icon={item.icon} title={item.title}></Card>
            )}
          />
        </div> */}
      </div>
    </section>
  );
}
