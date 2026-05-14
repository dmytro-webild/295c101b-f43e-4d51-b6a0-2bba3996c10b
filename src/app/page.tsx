"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="large"
        background="fluid"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Product", id: "product" },
        { name: "Collection", id: "collection" },
        { name: "FAQ", id: "faq" },
        { name: "Waitlist", id: "waitlist" }
      ]}
      brandName="RoyalPop Select"
      button={{
        text: "Join Drop",        href: "#waitlist"}}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="From pendant to wrist."
      description="Premium compatible wrist straps and styling accessories designed for every Royal Pop color. Independent compatible accessories for Royal Pop owners."
      buttons={[
        {
          text: "Join the First Drop",          href: "#waitlist"},
        {
          text: "View Concept",          href: "#product"},
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114219-egmfoyoy.png",          imageAlt: "Royal Pop White Strap"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-n5455ijh.png",          imageAlt: "Royal Pop Pink Strap"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-m8ctdibr.png",          imageAlt: "Royal Pop Green Strap"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-g6ub0i5e.png",          imageAlt: "Royal Pop Black Strap"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-otdsk11w.png",          imageAlt: "Royal Pop Orange Strap"},
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Royal Pop was made to be styled. We are making it wearable."},
      ]}
    />
  </div>

  <div id="product" data-section="product">
      <FeatureCardMedia
      animationType="blur-reveal"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Secure Fit",          description: "Designed to hold your Royal Pop with confidence.",          tag: "01",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114219-egmfoyoy.png"},
        {
          id: "f2",          title: "Color-Matched Design",          description: "Straps created to complement every Royal Pop color.",          tag: "02",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-n5455ijh.png"},
        {
          id: "f3",          title: "Clean Styling",          description: "A minimal wearable look made for everyday use.",          tag: "03",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-m8ctdibr.png"},
        {
          id: "f4",          title: "Independent Accessory",          description: "Designed by RoyalPop Select as a compatible concept.",          tag: "04",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-g6ub0i5e.png"},
      ]}
      title="The Wrist Kit"
      description="A premium compatible wrist strap system designed to turn your Royal Pop into a wrist statement."
    />
  </div>

  <div id="collection" data-section="collection">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "c1",          name: "Raspberry Pink",          price: "Concept",          variant: "Pink",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-n5455ijh.png"},
        {
          id: "c2",          name: "Turquoise Mint",          price: "Concept",          variant: "Green",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-m8ctdibr.png"},
        {
          id: "c3",          name: "Midnight Charcoal",          price: "Concept",          variant: "Black",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114220-g6ub0i5e.png"},
        {
          id: "c4",          name: "Silver Ivory",          price: "Concept",          variant: "White",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DiHVpvKtHQYrAXbIa9LZ6hs5Mg/uploaded-1778758114219-egmfoyoy.png"},
      ]}
      title="Designed for every Royal Pop color."
      description="A curated range of colors to match your unique Royal Pop piece."
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "01",          title: "Attach",          items: [
            "Align your Royal Pop piece with the attachment system."],
        },
        {
          id: "m2",          value: "02",          title: "Secure",          items: [
            "The precision holder ensures a stable, confident fit."],
        },
        {
          id: "m3",          value: "03",          title: "Wear",          items: [
            "Style your Royal Pop on the wrist, your way."],
        },
      ]}
      title="A cleaner way to wear Royal Pop."
      description="Three steps to transform your piece into a wrist statement."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Is RoyalPop Select an official Swatch or Audemars Piguet product?",          content: "No. RoyalPop Select is an independent accessory brand and is not affiliated with, endorsed by, or sponsored by Swatch, Audemars Piguet, or any related brands."},
        {
          id: "q2",          title: "What is RoyalPop Select creating?",          content: "We are developing premium compatible wrist straps, holders, and styling accessories designed for Royal Pop owners."},
        {
          id: "q3",          title: "When will the first drop launch?",          content: "The first drop is currently in development. Join the waitlist to receive early access and launch updates."},
        {
          id: "q4",          title: "Will the straps match different Royal Pop colors?",          content: "Yes. The concept is to create color-matched compatible straps designed around each Royal Pop color."},
        {
          id: "q5",          title: "Is the product shown final?",          content: "Some visuals may be concept visuals while the product is in development. Final product details may vary."},
      ]}
      title="Frequently Asked Questions"
      description="Answers to common questions about our development and concept."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="waitlist" data-section="waitlist">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Be first to access the drop."
      description="Join the waitlist for early access, updates, and availability. No spam, only launch news."
      inputs={[
        {
          name: "email",          type: "email",          placeholder: "Enter your email",          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/black-wallpaper-pattern-circle-white_1258-281.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="RoyalPop Select"
      copyrightText="From pendant to wrist. RoyalPop Select is an independent accessory brand. Not affiliated with Swatch or Audemars Piguet."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
