import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import PhoneFooterMenu from "./components/PhoneFooterMenu";
import Results from "./components/Results";

export default function Home() {
  return (
    <main className="flex min-h-screen text-zinc-500 flex-col items-center bg-black font-mono">
      <div className="flex w-full h-full flex-col items-center min-w-screen min-h-screen from-black via-zinc-600/20 to-black bg-gradient-to-tl">
        <Header />
        <div className="w-full mt-4 h-px block bg-gradient-to-r from-zinc-300/0 via-fuchsia-950 to-zinc-300/0" />{" "}
        <FilterBar />
        <div className="flex w-full mt-4">
          {/* <LeftMenu /> */}
          <Results />
        </div>
        <Footer />
        <PhoneFooterMenu />
      </div>
    </main>
  );
}
