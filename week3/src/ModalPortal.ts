import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface MyChildrenProps {
  children: ReactNode;
}
const ModalPortal = ({ children }: MyChildrenProps) => {
  const el = document.getElementById('modal') as HTMLElement;
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
