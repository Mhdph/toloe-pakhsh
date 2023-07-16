import React, {useState} from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import {DialogClose} from '@radix-ui/react-dialog';
import {Button} from '../ui/Button';

type DeleteModalProps = {
  handleRemove: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({handleRemove}) => {
  const [open, setOpen] = useState(true);

  const handleAction = () => {
    setOpen(false);
    handleRemove();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>حذف</Button>
        </DialogTrigger>
        {open ? (
          <DialogContent className='mt-60 sm:max-w-[425px] md:mt-0'>
            <DialogHeader>
              <DialogTitle>ایا از انجام این عملیات مطمعن هستید؟</DialogTitle>
              <DialogDescription>
                با تایید این عملیات ممکن است داده ها از سرور پاک شود و قابل بازگشت نباشد
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className='flex flex-col gap-2 md:flex-row'>
              <DialogClose asChild>
                <Button variant='outline' type='submit'>
                  انصراف
                </Button>
              </DialogClose>
              <Button onClick={handleAction} type='submit'>
                ذخیره تغییرات{' '}
              </Button>
            </DialogFooter>
          </DialogContent>
        ) : null}
      </Dialog>
    </div>
  );
};
export default DeleteModal;
