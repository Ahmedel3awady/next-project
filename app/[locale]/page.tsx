'use client';
import BecomeTeacherSection from '@/components/Sections/becomeTeacherSection';
import ContactSection from '@/components/Sections/contactSection/index';
import HeroSection from '@/components/Sections/heroSection';
import HowWorkSection from '@/components/Sections/howWorkSection';
import PackageSection from '@/components/Sections/packageSection';
import StatisticSection from '@/components/Sections/statisticSection';
import StudentsReviewsSection from '@/components/Sections/studentsReviewsSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
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
