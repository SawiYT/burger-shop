import Image from "next/image";
import Header from "./components/header";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Bestsellers from "./components/bestsellers";



const inter = Inter({
  weight: ['400', '700'],
  style: ['normal', 'normal'],
  subsets: ['latin'],
})

export default function Home() {

  return (
    <div className={inter.className}>
      <Navbar/>
      <Header/>
      <Main/>
      <Bestsellers/>
    </div>
  );
}
