'use client';
import React, { useState, useEffect } from 'react';
import { fetchDiscountsCount, fetchMenuItemsCount } from '../../components/products';
import { Bar } from 'react-chartjs-2';
import HasPermission from '@/components/has-permission';

export default function Dashboard() {
	const [discountsCount, setDiscountsCount] = useState(0);
	const [menuCount, setMenuCount] = useState(0);
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const discounts = await fetchDiscountsCount();
			const menuItems = await fetchMenuItemsCount();
			setDiscountsCount(discounts);
			setMenuCount(menuItems);
		};

		fetchData();

		const timer = setInterval(() => {
			setCurrentTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const data = {
		labels: ['Menu Items', 'Discounts'],
		datasets: [
			{
				label: 'Count',
				data: [menuCount, discountsCount],
				backgroundColor: ['#4F9D69', '#FF6F61'],
				borderColor: ['#2D6A4F', '#D9534F'],
				borderWidth: 1,
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return (
		<div className='flex flex-1 p-4 md:p-10'>
			<div className='rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-800 dark:bg-neutral-900 flex flex-col gap-4 flex-1 w-full h-full'>
				<div className='flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6'>
					<div className='flex flex-col justify-between flex-1'>
						<div className='flex justify-between items-center'>
							<div className='text-lg font-bold dark:text-white'>👋 Hello!</div>
							<div className='text-lg dark:text-gray-300'>
								<p>{currentTime || 'Loading...'}</p>
							</div>
						</div>
						<div className='mt-4 p-4 bg-yellow-100 dark:bg-yellow-800 rounded-lg'>
							<div className='font-semibold text-yellow-900 dark:text-yellow-200'>Notifications</div>
							<p className='mt-2 text-gray-700 dark:text-gray-300'>
								Check the latest updates and notifications about activity in the system.
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4 md:gap-6 p-4'>
					<div className='flex gap-4 flex-col md:flex-row'>
						<div className='h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 p-4'>
							<div className='flex flex-col gap-6'>
								<div className='text-xl font-semibold text-gray-700 dark:text-gray-300'>
									<span>📊</span>
									<span>Statistics</span>
								</div>
								<div className='h-60'>
									<Bar data={data} options={options} />
								</div>
							</div>
						</div>
						<div className='h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 p-4'>
							<div className='flex flex-col gap-6'>
								<div className='text-xl font-semibold text-gray-700 dark:text-gray-300'>
									<h2>Welcome to Your Dashboard!</h2>
								</div>
								<p className='text-gray-600 dark:text-gray-400'>
									Here you will find a description of the chart and additional information that will help you fully
									understand the output on the dashboard. Our goal is to provide you with clear and actionable insights.
									If you have any questions or need assistance, please don't hesitate to reach out to our support team.
									We're here to help you make the most of your data!
								</p>
							</div>
						</div>
					</div>
					<div className='p-4 bg-blue-100 dark:bg-blue-800 rounded-lg'>
						<div className='font-semibold text-blue-900 dark:text-blue-200'>Recent Activities</div>
						<ul className='mt-2 text-gray-700 dark:text-gray-300'>
							<li>📝 Added a new menu item</li>
							<li>🔧 Updated system settings</li>
							<li>📊 Generated sales report</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
