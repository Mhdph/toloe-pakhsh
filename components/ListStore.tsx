'use client';
import React, {useEffect} from 'react';
import ListItems from './ListItems';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import {useQuery} from '@tanstack/react-query';
import Loading from './ui/Loading';
interface ListStoreProps {
  categoryName: string;
  urlName: string;
}

function ListStore({categoryName, urlName}: ListStoreProps) {
  useEffect(() => {
    document.title = 'فروشگاه طلوع پخش';
  }, []);

  const getProductData = async () => {
    const response = await axios.get(`${baseUrl}/product?categoryName=${categoryName}`);
    return response.data;
  };

  const {data, isLoading} = useQuery({
    queryKey: ['productCa', categoryName],
    queryFn: getProductData,
  });
  if (isLoading) return <Loading />;
  return <ListItems title={categoryName} link={urlName} data={data.data} />;
}

export default ListStore;
