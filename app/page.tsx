import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhySmartMirrors from "@/components/why-smart-mirrors"
import ProductCategories from "@/components/product-categories"
import TopProduct from "@/components/top-product"
import InteractiveDemo from "@/components/interactive-demo"
import VideoPresentation from "@/components/video-presentation"
import CustomerReviews from "@/components/customer-reviews"
import ModelComparison from "@/components/model-comparison"
import BlogSection from "@/components/blog-section"
import Newsletter from "@/components/newsletter"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <HeroSection />
      <WhySmartMirrors />
      <ProductCategories />
      <TopProduct />
      <InteractiveDemo />
      <VideoPresentation />
      <CustomerReviews />
      <ModelComparison />
      <BlogSection />
      <Newsletter />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
