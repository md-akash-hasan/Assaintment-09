import BookingSection from "@/components/BookingSection";
import Choose from "@/components/Choose";
import Feature from "@/components/Feature";
import HeroPage from "@/components/Hero";
import PementSistem from "@/components/PementSistem";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <Feature />
      <Choose />
      <BookingSection />
      <PementSistem />
    </div>
  );
}
