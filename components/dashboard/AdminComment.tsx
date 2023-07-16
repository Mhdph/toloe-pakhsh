import React from 'react';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import {Button} from '../ui/Button';
import {Label} from '../ui/Label';
import {Textarea} from '../ui/TextArea';

function AdminComment() {
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
          <Button type='submit'>ذخیره تغییرات</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AdminComment;
