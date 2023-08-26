'use client';
import Button from '@/components/ui/Button';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/Select';
import useAddCategory from '@/service/category/useAddCategory';
import {addChildCategorySchema} from '@/validation/category';
import {zodResolver} from '@hookform/resolvers/zod';
import {DialogTitle} from '@radix-ui/react-dialog';
import Cookies from 'js-cookie';
import {SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';
import {Form, FormControl, FormField, FormItem, FormMessage} from '../ui/Form';
import useGetCategoriesAndChilds from '@/service/category/useGetCategoriesandChilds';
import useAddChildCategory from '@/service/category/useAddChildCategory';

type CategorySchema = z.infer<typeof addChildCategorySchema>;

export function AddChildCategories() {
  const {data} = useGetCategoriesAndChilds();

  const form = useForm<CategorySchema>({
    resolver: zodResolver(addChildCategorySchema),
  });

  const {mutate, isLoading} = useAddChildCategory();

  const addCategory: SubmitHandler<CategorySchema> = async (data) => {
    mutate({
      chaildCategoryId: +data.chaildCategoryId,
      parentCategoryId: +data.parentCategoryId,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'> افزودن زیر مجموعه دسته بندی</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogTitle className='mt-2 text-base font-semibold text-main-red'>ایجاد دسته بندی جدید</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(addCategory)} className='space-y-8'>
            <div className='grid gap-4 py-4'>
              <FormField
                control={form.control}
                name='parentCategoryId'
                render={({field}) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder=' مشخص کردن کتگوری اصلی' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {data?.data.map((item) => (
                          <SelectItem key={item.id} value={item.id.toString()}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='chaildCategoryId'
                render={({field}) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='مشخص کردن کتگوری زیر شاخه' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {data?.data.map((item) => (
                          <SelectItem key={item.id} value={item.id.toString()}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button disabled={isLoading} type='submit'>
                ذخیره تغییرات
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
