import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { PageLoader } from 'widgets/PageLoader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<PageLoader />}>
        <LoginForm />
      </Suspense>
    </Modal>
  );
};
