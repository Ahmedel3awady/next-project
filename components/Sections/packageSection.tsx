import { useTranslations } from "next-intl";
import HeadSection from "../Core/HeadSection";
import { Each } from "../Core/Each";
import Card from "../Shared/Card/package";
export default function StudentsReviewsSection() {
  const t = useTranslations();
  const data: {
    id: number;
    icon: string;
    title: string;
    type: string;
    price: string | number;
    duration: string;
    features: string[];
    mostPopular?: boolean;
  }[] = [
    {
      id: 1,
      icon: "basic.svg",
      title: t("titles.basic_package"),
      type: t("titles.basic_package_type"),
      price: 99,
      duration: t("titles.package_duration"),
      features: [
        t("features.basic_package_1"),
        t("features.basic_package_2"),
        t("features.basic_package_3"),
        t("features.basic_package_4"),
        t("features.basic_package_5"),
      ],
      mostPopular: false,
    },
    {
      id: 2,
      icon: "premium.svg",
      title: t("titles.premium_package"),
      type: t("titles.premium_package_type"),
      price: 199,
      duration: t("titles.package_duration"),
      features: [
        t("features.premium_package_1"),
        t("features.premium_package_2"),
        t("features.premium_package_3"),
        t("features.premium_package_4"),
        t("features.premium_package_5"),
        t("features.premium_package_6"),
        t("features.premium_package_7"),
      ],
      mostPopular: true,
    },
    {
      id: 3,
      icon: "professional.svg",
      title: t("titles.professional_package"),
      type: t("titles.professional_package_type"),
      price: 349,
      duration: t("titles.package_duration"),
      features: [
        t("features.professional_package_1"),
        t("features.professional_package_2"),
        t("features.professional_package_3"),
        t("features.professional_package_4"),
        t("features.professional_package_5"),
        t("features.professional_package_6"),
        t("features.professional_package_7"),
        t("features.professional_package_8"),
      ],
      mostPopular: false,
    },
  ];
  return (
    <section
      className={`package-section w-full rounded-lg shadow-3xl lg:py-16 py-10`}
    >
      <div className="container">
        <HeadSection
          title={t("titles.choose_your_package")}
          description={t("descriptions.packages")}
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <Each
            of={data}
            render={(item) => (
              <Card
                key={item.id}
                icon={item.icon}
                title={item.title}
                type={item.type}
                price={item.price}
                duration={item.duration}
                features={item.features}
                mostPopular={item.mostPopular}
              ></Card>
            )}
          />
        </div>
        <h4 className="text-sm text-gray2 font-medium text-center mt-12">
          {t("descriptions.packages_description")}
        </h4>
      </div>
    </section>
  );
}
