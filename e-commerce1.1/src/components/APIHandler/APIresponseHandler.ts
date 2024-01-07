import axios,{ AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { APIResponseType } from './types';

const APIResponseHandler=(res:AxiosError | APIResponseType, message?:string):void=>{
if(axios.isAxiosError(res)){

    Swal.fire({
      title: res?.name,
      text: res?.message,
      icon: 'error',
      showCancelButton: true,
      cancelButtonColor: '#FF0000',
      showConfirmButton:false,
    });

}

else Swal.fire({
    title: "Success",
    text: message,
    icon: 'success',
    showConfirmButton:true,
    confirmButtonColor:"#048029"
  }).then(()=>
  // Redirect to the login page ...using this since not a functional component. otherwise, usenavigate hook
  {if(window.location.href==="/registration")
  window.location.href = '/'
})
}

export {APIResponseHandler};


