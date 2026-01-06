"use client";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React, { useEffect } from "react";
import HeroSection from "@/components/Sections/heroSection";
import StatisticSection from "@/components/Sections/statisticSection";
import HowWorkSection from "@/components/Sections/howWorkSection";
import StudentsReviewsSection from "@/components/Sections/studentsReviewsSection";
import PackageSection from "@/components/Sections/packageSection";
import BecomeTeacherSection from "@/components/Sections/becomeTeacherSection";
import ContactSection from "@/components/Sections/contactSection/index";
import "aos/dist/aos.css";
import AOS from "aos";

export default function HomePage({locale}:{locale:string}) {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <main className="main-content" id="main-content">
      {/* START:: HERO SECTION */}
      <HeroSection />
      {/* END:: HERO SECTION */}

      {/* START:: STATISTIC SECTION */}
      <StatisticSection />
      {/* END:: STATISTIC SECTION */}

      {/* START:: HOW WORK SECTION */}
      <HowWorkSection />
      {/* END:: HOW WORK SECTION */}

      {/* START:: STUDENTS REVIEWS SECTION */}
      <StudentsReviewsSection />
      {/* END:: STUDENTS REVIEWS SECTION */}

      {/* START:: PACKAGE SECTION */}
      <PackageSection />
      {/* END:: PACKAGE SECTION */}

      {/* START:: BECOME TEACHER SECTION */}
      <BecomeTeacherSection />
      {/* END:: BECOME TEACHER SECTION */}

      {/* START:: CONTACT SECTION */}
      <ContactSection />
      {/* END:: CONTACT SECTION */}
    </main>
  );
}
