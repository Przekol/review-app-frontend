import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { Submit } from '../form/Submit';
import { FormContainer } from '../form/FormContainer';
import { commonModalClasses } from '../../utils/theme';

const OTP_LENGTH = 6;

export const EmailVerification = () => {
  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(''));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusNextInputField = (index: number) => {
    setActiveOtpIndex(index + 1);
  };

  const focusPrevInputField = (index: number) => {
    if (index > 0) {
      setActiveOtpIndex(index - 1);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const currentInputIndex = inputRefs.current.indexOf(target);

    if (!value) {
      focusPrevInputField(currentInputIndex);
    } else {
      focusNextInputField(currentInputIndex);
    }
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[currentInputIndex] = value.substring(value.length - 1, value.length);
      return [...newOtp];
    });
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const currentInputIndex = inputRefs.current.indexOf(e.currentTarget);
      if (otp[currentInputIndex] !== '') {
        focusPrevInputField(currentInputIndex + 1);
      } else {
        focusPrevInputField(currentInputIndex);
      }
    }
  };

  useEffect(() => {
    inputRefs.current[activeOtpIndex]?.focus();
  }, [activeOtpIndex]);

  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses}>
          <div>
            <Title>Please Enter the OTP to verify your account</Title>
            <p className="text-center dark:text-dark-subtle text-light-subtle">OTP has been send to your email</p>
          </div>
          <div className="flex justify-center items-center space-x-4">
            {otp.map((_, index) => {
              return (
                <input
                  ref={(input) => input && (inputRefs.current[index] = input)}
                  key={index}
                  value={otp[index] || ''}
                  onChange={handleOtpChange}
                  onKeyDown={handleKeyDown}
                  type="number"
                  min="0"
                  max="9"
                  className="w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary rounded bg-transparent outline-none text-center dark:text-white text-primary font-semibold text-xl spin-button-none"
                />
              );
            })}
          </div>
          <Submit value="Send Link" />
        </form>
      </Container>
    </FormContainer>
  );
};
