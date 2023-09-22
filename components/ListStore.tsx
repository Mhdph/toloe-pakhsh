'use client';
import React from 'react';
import ListItems from './ListItems';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import {useQuery} from '@tanstack/react-query';
import Loading from './ui/Loading';
interface ListStoreProps {
  categoryName: string;
}

function ListStore({categoryName}: ListStoreProps) {
  const getProductData = async () => {
    const response = await axios.get(`${baseUrl}/product?categoryName=${categoryName}`);
    return response.data;
  };

  const {data, isLoading} = useQuery({
    queryKey: ['productCa', categoryName],
    queryFn: getProductData,
  });
  if (isLoading) return <Loading />;
  return <ListItems title={categoryName} link={categoryName} data={data.data} />;
}

export default ListStore;
