import { useTranslations } from "next-intl";
import HeadSection from "../../Core/HeadSection";
import { Each } from "../../Core/Each";
import Image from "../../Core/Image";
import Link from "next/link";
import { FormWrapper } from "../../Fields/FormWrapper";
import useFormActions from "./FormActions/hooks/useFormActions";
import { schema } from "./FormActions/validation";
import Input from "../../Fields/Input";
import CoreLazyImage from "@/components/Core/LazyImage";
import Select from "@/components/Fields/Select/index";
import TextArea from "@/components/Fields/TextArea";
import Button from "@/components/Button";
export default function StatisticSection() {
  const t = useTranslations();
  const { formRef, loading, onSubmit, defaultValues, permissions, isLoading } =
    useFormActions();
  const data: {
    id: number;
    label: string;
    title: string;
    link: string;
    icon: string;
  }[] = [
    {
      id: 1,
      label: t("labels.phone"),
      title: "+966 12 345 6789",
      link: "tel:+966123456789",
      icon: "phone.svg",
    },
    {
      id: 2,
      label: t("labels.email"),
      title: "info@um-allughat.com",
      link: "mailto:info@um-allughat.com",
      icon: "email.svg",
    },
    {
      id: 3,
      label: t("labels.address"),
      title: "King Fahd Road, Riyadh, Saudi Arabia",
      link: "https://maps.app.goo.gl/1234567890",
      icon: "marker.svg",
    },
  ];
  const options = [
    {
      label: "Subject 1",
      value: "subject1",
    },
    {
      label: "Subject 2",
      value: "subject2",
    },
    {
      label: "Subject 3",
      value: "subject3",
    },
    {
      label: "Subject 4",
      value: "subject4",
    },
    {
      label: "Subject 5",
      value: "subject5",
    },
    {
      label: "Subject 6",
      value: "subject6",
    },
    {
      label: "Subject 7",
      value: "subject7",
    },
    {
      label: "Subject 8",
      value: "subject8",
    },
    {
      label: "Subject 9",
      value: "subject9",
    },
  ];
  return (
    <section
      className={`contact-section w-full rounded-lg shadow-3xl lg:py-16 py-10`}
    >
      <div className="container">
        <HeadSection
          title={t("titles.get_in_touch")}
          description={t("descriptions.get_in_touch_description")}
          className="!items-start !text-start lg:w-[50%]"
        />
        {/* <CoreLazyImage
          src="/images/general/become_a_teacher.webp"
          alt="example"
          minHeight={300}
          className="rounded-xl"
          
        /> */}
        {/* <CoreLazyImage src="/images/general/become_a_teacher.webp" alt="test" /> */}
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 items-center">
          <div className="lg:col-span-4 col-span-1">
            <div className="contact-info rounded-2xl p-8 min-h-[640px] relative overflow-hidden isolate">
              <h3 className="text-light text-2xl font-bold mb-4">
                {t("titles.contact_info_title")}
              </h3>
              <p className="text-light/80 text-sm font-normal mb-8">
                {t("descriptions.contact_info_description")}
              </p>
              <ul className="contact-info-list flex flex-col gap-6">
                <Each
                  of={data}
                  render={(item) => (
                    <li className="group contact-info-item">
                      <Link
                        href={item.link}
                        target="_blank"
                        className="flex items-start gap-3"
                      >
                        <span className=" group-hover:bg-secondary w-9 h-9 rounded-lg bg-light/10 group-hover:bg-light/20 flex items-center justify-center transition-all duration-300">
                          <Image
                            src={`/images/icons/${item.icon}`}
                            alt={item.label}
                            width={17}
                            height={17}
                          />
                        </span>
                        <h4 className="text-light text-sm font-semibold flex flex-col gap-1">
                          {item.label}
                          <span className="text-light  font-light">
                            {item.title}
                          </span>
                        </h4>
                      </Link>
                    </li>
                  )}
                />
              </ul>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-1">
            <div className="contact-form rounded-2xl p-8 min-h-[640px] main-shadow bg-light">
              <FormWrapper
                ref={formRef}
                schema={schema()}
                onSubmit={onSubmit}
                defaultValues={defaultValues}
              >
                <div className="mb-4">
                  <Input
                    name="name"
                    label="full_name"
                    placeholder="enter_your_full_name"
                    appendIcon={() => (
                      <Image
                        src="/images/form/user.svg"
                        width={18}
                        height={18}
                      />
                    )}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    name="email"
                    label="email_address"
                    placeholder="enter_your_email"
                    appendIcon={() => (
                      <Image
                        src="/images/form/email.svg"
                        width={18}
                        height={18}
                      />
                    )}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    name="phone"
                    label="phone_number"
                    placeholder="enter_your_phone"
                    type="tel"
                    appendIcon={() => (
                      <Image
                        src="/images/form/phone.svg"
                        width={18}
                        height={18}
                      />
                    )}
                  />
                </div>
                <div className="mb-4">
                  <Select
                    name="subject"
                    label="subject"
                    placeholder="select_subject"
                    options={options}
                    loading={false}
                    appendIcon={() => (
                      <Image
                        src="/images/form/phone.svg"
                        width={18}
                        height={18}
                      />
                    )}
                  />
                </div>
                <div className="mb-8">
                  <TextArea
                    name="message"
                    label="message"
                    placeholder="enter_your_message"
                    appendIcon={() => (
                      <Image
                        src="/images/form/message.svg"
                        width={18}
                        height={18}
                      />
                    )}
                  />
                </div>
                <Button type="submit" loading={loading} variant="default" className="!w-full !gap-2 !font-medium">
                  {t("buttons.send_message")}
                  <Image
                    src="/images/form/send.svg"
                    width={18}
                    height={18}
                    className="btn-icon"
                  />
                </Button>
              </FormWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
