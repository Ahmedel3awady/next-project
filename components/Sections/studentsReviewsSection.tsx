import { useTranslations } from "next-intl";
import HeadSection from "../Core/HeadSection";
import { Each } from "../Core/Each";
import Card from "../Shared/Card/review";
export default function StudentsReviewsSection() {
  const t = useTranslations();
  const data: {
    id: number;
    comment: string;
    rate: string | number;
    user: {
      name: string;
      image: string;
      job: string;
    };
  }[] = [
    {
      id: 1,
      comment: t("descriptions.review_1"),
      rate: 4.5,
      user: {
        name: "Jesse Pinkman",
        image: "student_1.png",
        job: "United Kingdom",
      },
    },
    {
      id: 2,
      comment: t("descriptions.review_2"),
      rate: 5,
      user: {
        name: "Walter White",
        image: "student_2.png",
        job: "United States",
      },
    },
    {
      id: 3,
      comment: t("descriptions.review_3"),
      rate: 3.5,
      user: {
        name: "Mike Ehrmantraut",
        image: "student_3.png",
        job: "France",
      },
    },
   
  ];
  return (
    <section
      className={`students-reviews-section w-full rounded-lg shadow-3xl lg:py-16 py-10`}
    >
      <div className="container">
        <HeadSection
          title={t("titles.students_reviews")}
          description={t("descriptions.students_reviews_description")}
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <Each
            of={data}
            render={(item) => (
              <Card
                key={item.id}
                comment={item.comment}
                rate={Number(item.rate)}
                user={item.user}
              ></Card>
            )}
          />
        </div>
      </div>
    </section>
  );
}
