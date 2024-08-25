import Image from 'next/image';
import Header from '../components/header';
import { Inter } from 'next/font/google';
import Main from '../components/main';
import Bestsellers from '../components/bestsellers';
import Footer from '../components/footer';

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
}
