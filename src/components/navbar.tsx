'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../../public/images/logo.png';
import { signIn, signOut, useSession } from 'next-auth/react';
import { IconMenu2, IconX } from '@tabler/icons-react';

function AuthButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<Link className='w-full bg-yellow-500 font-semibold px-4 py-2 text-center rounded-lg' href='/dashboard'>
					Dashboard
				</Link>
			</>
		);
	}
	return (
		<>
			<button onClick={() => signIn()} className='bg-yellow-500 text-white px-4 py-2 rounded-lg'>
				Sign in
			</button>
		</>
	);
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-white w-full h-24 z-50 fixed top-0 text-black shadow-md'>
			<div className='max-w-7xl mx-auto flex justify-between items-center h-full px-6'>
				<div className='flex items-center'>
					<div className='md:hidden'>
						<button onClick={() => setIsOpen(!isOpen)} className='text-black focus:outline-none'>
							{isOpen ? <IconX className='h-6 w-6' /> : <IconMenu2 className='h-6 w-6' />}
						</button>
					</div>
					<div className='hidden md:flex space-x-6 font-semibold'>
						<Link href='/'>Home</Link>
						<Link href='/menu'>Menu</Link>
						<Link href='https://www.facebook.com/'>Facebook</Link>
					</div>
				</div>

				<div className='absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold'>
					<Link href='/'>
						<Image width={90} src={logo} alt='logo' />
					</Link>
				</div>

				<div className='hidden md:flex space-x-4'>
					<AuthButton />
				</div>
			</div>

			{isOpen && (
				<div className='md:hidden bg-white shadow-lg border-t border-gray-200'>
					<div className='flex flex-col items-center space-y-4 mt-4 py-4'>
						<Link href='/' className='text-lg font-semibold'>
							Home
						</Link>
						<Link href='/menu' className='text-lg font-semibold'>
							Menu
						</Link>
						<AuthButton />
					</div>
				</div>
			)}
		</nav>
	);
}
