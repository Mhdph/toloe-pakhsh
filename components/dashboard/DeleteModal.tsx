'use client';
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/AlertDialog';
import Button from '@/components/ui/Button';

interface DeleteModalProps {
  deleteFn: VoidFunction;
}

function DeleteModal({deleteFn}: DeleteModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>پاک کردن</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>آیا مطمعن هستید؟</AlertDialogTitle>
          <AlertDialogDescription>با انجام این عملیات داده ها پاک شده و قابل دسترسی نخواهند بود</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex items-center gap-2'>
          <AlertDialogCancel>بازگشت</AlertDialogCancel>
          <AlertDialogAction onClick={deleteFn}>ادامه</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteModal;
