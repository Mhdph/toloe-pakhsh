import React from 'react';
import Pagination from 'rc-pagination';
import './Pagination.css';
interface PaginationProps {
  pageCount: number | undefined;
  onPageChange: any;
  page: number;
}
const ITEM_NUMBER = 10;
export const PaginationList: React.FC<PaginationProps> = ({pageCount, onPageChange, page}) => {
  return (
    <Pagination onChange={onPageChange} current={page} pageSize={ITEM_NUMBER} total={pageCount} showTitle={false} />
  );
};
