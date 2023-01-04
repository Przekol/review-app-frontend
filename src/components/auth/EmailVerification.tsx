import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { Submit } from '../form/Submit';

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
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 space-y-6">
          <div>
            <Title>Please Enter the OTP to verify your account</Title>
            <p className="text-center text-dark-subtle">OTP has been send to your email</p>
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
                  className="w-12 h-12 border-2 border-dark-subtle focus:border-white rounded bg-transparent outline-none text-center text-white font-semibold text-xl spin-button-none"
                />
              );
            })}
          </div>
          <Submit value="Send Link" />
        </form>
      </Container>
    </div>
  );
};
