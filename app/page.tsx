import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { BulletinSection } from "@/components/bulletin-section"
import { AboutSection } from "@/components/about-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { SekbidSection } from "@/components/sekbid-section"
import { BidangSection } from "@/components/bidang-section"
import { CallToActionSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BulletinSection />
        <AboutSection />
        <VisionMissionSection />
        <SekbidSection />
        <BidangSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
