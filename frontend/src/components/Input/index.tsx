import { InputHTMLAttributes, ComponentType, useCallback, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}

export function Input({
  icon: Icon,
  isPassword = false,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        {...rest}
        type={isPassword ? (isPasswordVisible ? 'text' : 'password') : 'text'}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isPassword && (isPasswordVisible ? (
        <FaEye
          onClick={() => setIsPasswordVisible
            (!isPasswordVisible)}
          color="#00e676" size={20}
          className='icon-click'
        />
      ) : (
        <FaEyeSlash
          onClick={() => setIsPasswordVisible
            (!isPasswordVisible)}
          color="#00e676" size={20}
          className='icon-click'
        />
      ))}
    </Container>
  );
}
