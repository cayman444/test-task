import { useAppDispatch } from '@/app/store/store-hooks';
import { createProduct } from '@/features/products/model/products-slice';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type FormProductFields, productSchema } from '../schema';
import { encodeImageFile } from '../utils';

export const useProductCreateForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProductFields>({
    mode: 'onBlur',
    resolver: zodResolver(productSchema),
  });

  const onSubmit: SubmitHandler<FormProductFields> = async (data) => {
    const encodeFile = await encodeImageFile(data.image);

    dispatch(
      createProduct({
        name: data['product-name'],
        image: encodeFile,
        gender: data.gender,
        species: data.species,
        status: data.status,
        type: data.type,
        location: { name: data.location, url: '' },
        origin: { name: data.location, url: '' },
        episode: [],
        url: '',
        created: Date.now().toString(),
        isLiked: false,
        id: Date.now(),
      })
    );
  };

  return { control, errors, onSubmit, register, handleSubmit };
};
