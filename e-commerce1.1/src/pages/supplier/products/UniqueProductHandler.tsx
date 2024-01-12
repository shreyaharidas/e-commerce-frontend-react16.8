import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UniqueProduct from './UniqueProduct';
import { ApiProductResponse } from './types';
import { getUniqueProduct } from './api/getUniqueProduct';



const UniqueProductHandler: React.FC = () => {
    const { _id } = useParams<{ _id: string }>();
    const [product, setProduct] = useState<ApiProductResponse['product'] | null>(null);

    const getProductData=async(_id:string)=>{
       let prod = await getUniqueProduct(_id?.replace(":","") as string);

        prod && setProduct(prod);
    }

    useEffect(() => {
   getProductData(_id as string);
    }, [_id]);

    return <UniqueProduct product={product} />;
};

export default UniqueProductHandler;
