import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Spinner } from 'shared/ui/Spinner/Spinner';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Spinner />
    </div>
  );
};
