import { useTranslations } from "next-intl";
import HeadSection from "../Core/HeadSection";
import { Each } from "../Core/Each";
import Card from "../Shared/Card/statistic";
export default function StatisticSection() {
  const t = useTranslations();
  const data: {
    id: number;
    title: string;
    count: string | number;
    icon: string;
    decimals?: number;
    suffix?: string;
  }[] = [
    {
      id: 1,
      title: t("titles.expert_tutors"),
      count: 1000,
      icon: "expert_tutors.svg",
      suffix: "+",
    },
    {
      id: 2,
      title: t("titles.learning_sessions"),
      count: 1000,
      icon: "learning_sessions.svg",
      suffix: "+",
    },
    {
      id: 3,
      title: t("titles.active_students"),
      count: 1000,
      icon: "active_students.svg",
      suffix: "+",
    },
    {
      id: 4,
      title: t("titles.average_rating"),
      count: 4.8,
      icon: "average_rating.svg",
      decimals: 1,
    },
  ];
  return (
    <section
      className={`statistics-section w-full rounded-lg shadow-3xl lg:py-16 py-10`}
    >
      <div className="container">
        <HeadSection
          title={t("titles.statistic")}
          description={t("descriptions.statistic_description")}
        />
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
          <Each
            of={data}
            render={(item) => (
              <Card
                key={item.id}
                icon={item.icon}
                title={item.title}
                count={Number(item.count)}
                decimals={item.decimals || 0}
                suffix={item.suffix || ""}
              ></Card>
            )}
          />
        </div>
      </div>
    </section>
  );
}
