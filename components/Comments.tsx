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
  });

  const {data} = useQuery({
    queryKey: ['todos', id],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/comment/product/` + id);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
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

  console.log(data);

  return (
    <>
      <div className=''>
        <div className='pl-8 pr-2'>
          <Textarea onChange={(e) => setText(e.target.value)} className='w-full' />
          <ReactStars count={5} onChange={ratingChanged} size={24} color2={'#F34834'} />
          <Button onClick={addComment} className='mt-4 w-28 rounded-md'>
            ثبت
          </Button>
        </div>
        <div className='mt-6 flex flex-col gap-y-3 border-b border-black border-opacity-10 px-2'>
          <div className='flex flex-row-reverse items-center gap-2'>
            <Image src={Rectangl} alt='' className='h-9 w-9 rounded-full' />
            <p className='text-sm'>مهدی پریوش</p>
            <p className='text-xs text-slate-500'>دو هفته پیش</p>
          </div>
          <p className='flex flex-row-reverse text-sm text-black-items'>
            لورم یاسنگسنمتبسن سنبس گسن س منصضثگضن زضنثمض زن گضثننش ثضنثم ضنصثنضث ن نضصثمضنثنضمث{' '}
          </p>
        </div>
      </div>
    </>
  );
}

export default Comments;
