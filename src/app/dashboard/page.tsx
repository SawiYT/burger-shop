import { getServerSession } from 'next-auth';
import Switcher from './switcher';
import Footer from '@/components/footer';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function Page() {
	const session = await getServerSession();
	if (!session) {
		redirect('/api/auth/signin');
	}

	if (session.user?.email !== process.env.EMAIL) {
		return (
			<div className='flex text-black flex-col max-w-7xl mx-auto items-center justify-center min-h-screen pt-[120p-h text-center px-4'>
				<h1 className='text-4xl font-bold mb-4'>Access Denied</h1>
				<p className='text-lg mb-2'>You do not have access to this page.</p>
				<p className='text-lg mb-6'>
					However, if you're interested in joining our team, we encourage you to apply! Please send your resume to{' '}
					<a href='mailto:recruitment@yourcompany.com' className='text-blue-500 underline'>
						recruitment@burgerjoint.com
					</a>
					.
				</p>
				<div className='mb-10'>
					<Image
						src='/images/employees.jpg'
						alt='Happy employees'
						width={500}
						height={300}
						className='rounded-lg shadow-lg'
					/>
				</div>
			</div>
		);
	}

	return (
		<div className='relative'>
			<Switcher />
		</div>
	);
}
