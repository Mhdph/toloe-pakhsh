'use client';
import React from 'react';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import Button from '../ui/Button';
import {Label} from '../ui/Label';
import {Textarea} from '../ui/TextArea';
import Cookies from 'js-cookie';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {baseUrl} from '@/lib/config';

interface AdminCommentsProps {
  id: number;
}
interface AddComment {
  star: number;
  text: string;
}

function AdminComment({id}: AdminCommentsProps) {
  const [text, setText] = React.useState('');
  const [star, setStar] = React.useState(5);
  const token = Cookies.get('token');
  const {mutate} = useMutation({
    mutationFn: (data: AddComment) => {
      return axios.post(`${baseUrl}/comment/add/${id}`, data, {
        headers: {
          authorization: 'Bearer ' + `${token}`,
        },
      });
    },
  });

  const addComment = () => {
    mutate({
      text,
      star,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-28' variant='outline'>
          پاسخ دادن
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <div className='flex flex-col gap-2 pt-4'>
          <Label htmlFor='name' className='text-right'>
            پاسخ شما{' '}
          </Label>
          <Textarea id='name' placeholder='پاسخ' />
        </div>
        <DialogFooter>
          <Button onClick={addComment} type='submit'>
            ذخیره تغییرات
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AdminComment;
