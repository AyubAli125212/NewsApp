import React from "react";
import {
  Banner,
  Catagories,
  News,
  Container,
  NavBar,
  Footer,
  SearchBar,
} from "../components";

function Home() {
  return (
    <div className="dark:bg-[#171717] duration-100">
      <NavBar />
      <Banner />
      <Container>
        <div className="flex gap-10">
          <div className="hidden lg:flex flex-col gap-10 w-1/4">
            <SearchBar />
            <Catagories />
          </div>
          <div className="flex-1 w-full">
            <News />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
