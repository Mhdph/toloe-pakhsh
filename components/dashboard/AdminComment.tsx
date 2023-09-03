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
  replay: string;
}

function AdminComment({id}: AdminCommentsProps) {
  const [replay, setReplay] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const token = Cookies.get('token');
  const {mutate, isLoading} = useMutation({
    mutationFn: (data: AddComment) => {
      return axios.patch(`${baseUrl}/comment/update/${id}`, data, {
        headers: {
          authorization: 'Bearer ' + `${token}`,
        },
      });
    },
  });

  const addComment = () => {
    mutate({
      replay,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <Textarea onChange={(e) => setReplay(e.target.value)} id='name' placeholder='پاسخ' />
        </div>
        <DialogFooter>
          <Button isLoading={isLoading} onClick={addComment} type='submit'>
            ذخیره تغییرات
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AdminComment;
