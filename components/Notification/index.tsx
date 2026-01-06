import { observer } from '@/utils/observer';
import { ToastContainer, toast } from 'react-toastify';
export interface INotify {
  message: string;
  type: 'error' | 'success',
}

export default function Notification() {
  const notify = ({ message, type }: INotify) => toast(message, {
    position: "top-center",
    type,
    autoClose: 2000

  });

  observer.subscribe('notify', notify)

  return (
    <div>
      <ToastContainer />
    </div>
  )
}
