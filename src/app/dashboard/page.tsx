'use client';
import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '@/app/components/ui/sidebar';
import { IconArrowLeft, IconBrandTabler, IconClipboardPlus } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '../lib/utils';
import { fetchDiscountsCount, fetchMenuItemsCount } from '../components/products';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Link from 'next/link';
import AddMeal from './add-meal';
import Dashboard from './dashboard';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Page() {
	// Links with scene definitions
	const links = [
		{
			label: 'Dashboard',
			scene: 'dashboard',
			icon: <IconBrandTabler className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />,
		},
		{
			label: 'Add Meal',
			scene: 'add-meal',
			icon: <IconClipboardPlus className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />,
		},
		{
			label: 'Add Discount',
			scene: 'add-discount',
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

	// Handle scene changes
	const handleLinkClick = scene => {
		setCurrentScene(scene);
		setOpen(false); // Optionally close the sidebar
	};

	return (
		<div className=''>
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
										onClick={() => handleLinkClick(link.scene)}
										link={{
											...link,
											href: '#', // Prevent default link behavior
										}}
									/>
								))}
							</div>
						</div>
						<div>
							<SidebarLink
								link={{
									label: 'Manu Arora',
									href: '#',
									icon: (
										<Image
											src='/images/bg1.png'
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
					{currentScene === 'add-meal' && <AddMeal />}
					{currentScene === 'add-discount' && <AddDiscount />}
					{currentScene === 'logout' && <Logout />}
				</div>
			</div>
		</div>
	);
}

// Logo Component
const Logo = () => (
	<Link href='#' className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'>
		<div className='h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='font-medium text-black dark:text-white whitespace-pre'>
			Acet Labs
		</motion.span>
	</Link>
);

// Dashboard Component

// Placeholder Components for other scenes
const AddDiscount = () => <div>Add Discount Form Here</div>;
const Logout = () => <div>Logout Component Here</div>;
