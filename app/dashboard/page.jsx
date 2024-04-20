import NavigationTab from "../components/NavigationTab";
import HeroSection from "../hero-section/page";

export default function Dashboard() {
  return (
    <div className="w-screen h-full flex-row flex items-start justify-start bg-[#191B19] text-white fixed">
      <div className="w-1/6 h-full bg-[#16735C]/[.69]">
        <NavigationTab />
      </div>
        <HeroSection />
    </div>
  );
}