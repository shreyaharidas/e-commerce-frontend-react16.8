import React from 'react';
import { Pagination, Container } from 'react-bootstrap';
import { CustomPaginationProps } from './types';



const CustomPagination  = ({ setOffset, offset,count }:CustomPaginationProps) => {
  return (
    <Pagination>
    <Pagination.Prev onClick={()=>setOffset((prev)=>prev-10)} disabled={offset===0?true:false}></Pagination.Prev>
    <Pagination.Next onClick={()=>setOffset((prev)=>prev+10)} disabled={offset===count || (offset>count && count+10>offset)?true:false}></Pagination.Next>
  </Pagination>
  );
};

export default CustomPagination;
