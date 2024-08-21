'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { saveMenu } from './menu';
import { saveDiscount } from './discount';

export async function AddMenu(formData: FormData): Promise<void> {
	const menu = {
		title: formData.get('title'),
		description: formData.get('description'),
		image_url: '/images/bg1.png',
	};

	const formType = formData.get('formType');

	console.log(menu);
	formType === 'meal' ? await saveMenu(menu) : saveDiscount(menu);
	revalidatePath('/menu');
	redirect('/menu');
}
