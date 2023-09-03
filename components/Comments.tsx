'use client';
import React from 'react';
import {Textarea} from './ui/TextArea';
import Button from './ui/Button';
import {useParams} from 'next/navigation';
import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import Rectangl from '@/assets/tempImages/Rectangl.png';
import Image from 'next/image';
import ReactStars from 'react-stars';
import Cookies from 'js-cookie';
import Loading from './ui/Loading';
import {toast} from 'react-hot-toast';

interface AddComment {
  star: number;
  text: string;
}

function Comments() {
  const {id} = useParams();
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
    onSuccess(data) {
      toast.success('نظر شما با موفقیت ثبت شد و پس از تایید نمایش داده خواهد شد');
    },
  });
  const getCommentsFn = async () => {
    const response = await axios.get(`${baseUrl}/comment/product/` + id);
    return response.data;
  };
  const {data, isLoading} = useQuery({
    queryKey: ['comments', id],
    queryFn: getCommentsFn,
  });

  const addComment = () => {
    mutate({
      text,
      star,
    });
  };
  const ratingChanged = (newRating: number) => {
    setStar(newRating);
  };

  if (isLoading) return <Loading />;
  return (
    <>
      <div className=''>
        <div className='pl-8 pr-2'>
          <Textarea onChange={(e) => setText(e.target.value)} className='w-full' />
          <ReactStars count={5} className='mt-1.5' onChange={ratingChanged} size={24} color2={'#F34834'} />
          <Button onClick={addComment} className='mt-4 w-28 rounded-md'>
            ثبت
          </Button>
        </div>
        {data.data.map((item: any) => (
          <div key={item.id} className='mt-6 flex flex-col gap-y-3 border-b border-black border-opacity-10 px-2'>
            <div className='flex items-center justify-between'>
              <ReactStars count={5} value={item.star} size={24} color2={'#F34834'} />
              <div className='flex flex-row-reverse items-center gap-2'>
                <Image src={Rectangl} alt='' className='h-9 w-9 rounded-full' />
                <p className='text-sm'>{item.userFirstName + ' ' + item.userLastName}</p>
                <p className='text-xs text-slate-500'>کاربر</p>
              </div>
            </div>
            <p className='flex flex-row-reverse text-sm text-black-items'>{item.text} </p>
            <div className='mt-4 pr-20'>
              <div className='flex items-center justify-between'>
                <div></div>{' '}
                <div className='flex flex-row-reverse items-center gap-2'>
                  <Image src={Rectangl} alt='' className='h-9 w-9 rounded-full' />
                  <p className='text-sm'>ادمین</p>
                </div>
              </div>
              <p className='mr-2 mt-3 flex flex-row-reverse text-sm text-black-items'>{item.replay} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Comments;
