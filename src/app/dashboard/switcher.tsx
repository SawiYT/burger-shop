'use client';
import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { IconArrowLeft, IconBrandTabler, IconClipboardPlus } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Link from 'next/link';
import AddMeal from './add-meal';
import Dashboard from './dashboard';
import { signOut, useSession } from 'next-auth/react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Switcher() {
	const links = [
		{
			label: 'Dashboard',
			scene: 'dashboard',
			icon: <IconBrandTabler className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />,
		},
		{
			label: 'Add Product',
			scene: 'add-product',
			icon: <IconClipboardPlus className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />,
		},
		{
			label: 'Logout',
			scene: 'logout',
			icon: <IconArrowLeft className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />,
		},
	];

	const [open, setOpen] = useState(false);
	const [currentScene, setCurrentScene] = useState('dashboard');
	const { data: session } = useSession();

	const handleLinkClick = (scene: 'dashboard' | 'add-product' | 'logout') => {
		setCurrentScene(scene);
		setOpen(false);
	};

	return (
		<div className='flex h-screen'>
			<div
				className={cn(
					'rounded-md flex flex-col md:flex-row pt-[100px] bg-cover bg-center w-full flex-1 mx-auto',
					'',
					'absolute inset-0'
				)}>
				<Sidebar open={open} setOpen={setOpen}>
					<SidebarBody className='justify-between gap-10'>
						<div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
							<Logo />
							<div className='mt-8 flex flex-col gap-2'>
								{links.map((link, idx) => (
									<SidebarLink
										key={idx}
										// @ts-ignore
										onClick={() => handleLinkClick(link.scene)}
										link={{
											...link,
											href: '#',
										}}
									/>
								))}
							</div>
						</div>
						<div>
							<SidebarLink
								link={{
									label: session?.user?.name || 'User',
									href: '#',
									icon: (
										<Image
											src={session?.user?.image || '/images/default-avatar.png'}
											className='h-7 w-7 flex-shrink-0 rounded-full'
											width={50}
											height={50}
											alt='Avatar'
										/>
									),
								}}
							/>
						</div>
					</SidebarBody>
				</Sidebar>
				<div className='flex-1 p-4 md:p-10'>
					{currentScene === 'dashboard' && <Dashboard />}
					{currentScene === 'add-product' && <AddMeal />}
					{currentScene === 'logout' && (
						<button
							onClick={() => signOut()} // Sign out user
							className='px-4 py-2 bg-red-500 text-white rounded'>
							Logout
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

const Logo = () => (
	<Link href='#' className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'>
		<div className='h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='font-medium text-black dark:text-white whitespace-pre'>
			Burger Joint
		</motion.span>
	</Link>
);

const Logout = () => <div>Logout Component Here</div>;
