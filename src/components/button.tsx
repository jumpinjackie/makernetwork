import * as React from 'react';
import * as classNames from 'classnames';

interface IButtonProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
};

function Button({
  onClick = null,
  type = 'button',
  className = '',
  id = '',
  children = null,
  disabled = false
}: IButtonProps) {
  const buttonClasses = classNames('btn', 'btn-primary', className);

  return <button
    id={ id }
    type={ type }
    disabled={ disabled ? "disabled" : null }
    className={ buttonClasses }
    onClick={ onClick }>
    { children }
  </button>;
}

export default Button;
