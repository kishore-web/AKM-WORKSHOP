import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-bgColor  text-txColor min-h-svh max-w-[1440px] m-auto">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
