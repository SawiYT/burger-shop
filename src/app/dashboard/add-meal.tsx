import React, { useState } from 'react';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { cn } from '@/app/lib/utils';
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from '@tabler/icons-react';
import { FileUpload } from '@/app/components/ui/file-upload';
import { AddMenu } from '../api/menu-action';

export default function AddMeal() {
	const [formType, setFormType] = useState<'discount' | 'meal'>('meal');
	const [files, setFiles] = useState<File[]>([]);

	const handleFileUpload = (files: File[]) => {
		setFiles(files);
		console.log(files);
	};

	return (
		<div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl md:p-8 shadow-input bg-white dark:bg-black'>
			<h2 className='font-bold text-xl text-black dark:text-white'>Welcome to Aceternity</h2>
			<p className='text-black text-sm max-w-sm mt-2 dark:text-gray-300'>
				Login to aceternity if you can because we don&apos;t have a login flow yet
			</p>

			<form className='my-8' action={AddMenu}>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='title' className='text-black dark:text-white'>
							Title
						</Label>
						<Input
							id='title'
							placeholder='Double Cheeseburger'
							type='text'
							name='title'
							className='bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600'
						/>
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor='description' className='text-black dark:text-white'>
							Description
						</Label>
						<Input
							id='description'
							placeholder='Delicious burger'
							name='description'
							type='text'
							className='bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600'
						/>
					</LabelInputContainer>
				</div>

				<div className='mb-4'>
					<Label htmlFor='formType' className='text-black dark:text-white'>
						Select Type
					</Label>
					<select
						id='formType'
						name='formType'
						value={formType}
						onChange={e => setFormType(e.target.value as 'discount' | 'meal')}
						className='w-full mt-1 bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md p-2'>
						<option value='meal'>Meal</option>
						<option value='discount'>Discount</option>
					</select>
				</div>

				<div className='w-full max-w-4xl mx-auto min-h-96 border mb-5 border-dashed bg-white dark:bg-black border-gray-300 dark:border-gray-600 rounded-lg'>
					<FileUpload onChange={handleFileUpload} />
				</div>

				<button
					className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
					type='submit'>
					Sign up &rarr;
					<BottomGradient />
				</button>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	);
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>;
};
