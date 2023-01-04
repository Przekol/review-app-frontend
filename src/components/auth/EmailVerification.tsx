import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../Container';
import { Title } from '../form/Title';
import { Submit } from '../form/Submit';

const OTP_LENGTH = 6;
let currentOTPIndex: number;

export const EmailVerification = () => {
  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(''));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusNextInputField = (index: number) => {
    setActiveOtpIndex(index + 1);
  };

  const focusPrevInputField = (index: number) => {
    let nextIndex: number;
    const diff = index - 1;
    nextIndex = diff !== 0 ? diff : 0;
    setActiveOtpIndex(nextIndex);
  };

  const handleOtpChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    if (!value) {
      focusPrevInputField(currentOTPIndex);
    } else {
      focusNextInputField(currentOTPIndex);
    }
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[currentOTPIndex] = value.substring(value.length - 1, value.length);
      return [...newOtp];
    });
  };
  const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    currentOTPIndex = index;
    if (key === 'Backspace') {
      focusPrevInputField(currentOTPIndex);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
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
                  ref={activeOtpIndex === index ? inputRef : null}
                  key={index}
                  value={otp[index] || ''}
                  onChange={(e) => handleOtpChange(e)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
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
