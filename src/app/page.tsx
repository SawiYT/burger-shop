<<<<<<< HEAD
import Image from 'next/image';
import Header from './components/header';
import { Inter } from 'next/font/google';
import Main from './components/main';
import Bestsellers from './components/bestsellers';
import Footer from './components/footer';

const inter = Inter({
	weight: ['400', '700'],
	style: ['normal', 'normal'],
	subsets: ['latin'],
});

export default function Home() {
	return (
		<div className={inter.className}>
			<Header />
			<Main />
			<Bestsellers />
			<Footer />
		</div>
	);
=======
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
>>>>>>> dadaee69509c9eeb453152b68db855081e5895e6
}
