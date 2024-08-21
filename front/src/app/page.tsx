import FooterPadelCarousel from "@/components/FooterComponent/FooterPadelCarousel";
import HomeReception from "@/components/MainPages/HomeView/HomeReception";

export default function Home() {
  return (
    <>

      <div className="p-8 m-8">
        <HomeReception />
        <FooterPadelCarousel/>
      </div>

    </>
  );
}
