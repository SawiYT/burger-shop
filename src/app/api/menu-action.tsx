'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { saveMenu } from './menu';
import { saveDiscount } from './discount';

interface Menu {
	id?: number;
	title: string;
	description: string;
	image_url: string | File;
  }

export async function AddMenu(formData: FormData): Promise<void> {
  const title = formData.get('title') as string | null;
  const description = formData.get('description') as string | null;
  const imageUrl = formData.get('image_url') as File | string | null;

  if (!title || !description || !imageUrl) {
    throw new Error('Missing required fields');
  }

  const menu: Menu = {
    title,
    description,
    image_url: imageUrl,
  };

  const formType = formData.get('formType');

  if (formType === 'meal') {
    await saveMenu(menu);
  } else {
    await saveDiscount(menu);
  }

  revalidatePath('/menu');
  redirect('/menu');
}
