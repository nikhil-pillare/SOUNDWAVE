import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

interface PaymentFormProps {
  onSubmit: (paymentData: any) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleVerificationCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isEmailVerified) {
      // Proceed with payment submission
      const paymentData = {
        email,
        verificationCode,
      };
      onSubmit(paymentData);
    } else {
      try {
        // Send the email to get OTP
        // (Your backend API endpoint to send OTP)
        // const response = await axios.post('http://localhost:5000/send-otp', { email });
        // if (response.data.message === 'OTP sent successfully') {
        //   setIsEmailVerified(true);
        // }
        setIsEmailVerified(true); // For demo purposes only; Replace this with actual API call
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box maxW="400px" m="0 auto" p="20px" borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl mb="10px">
          <FormLabel>Email:</FormLabel>
          <Input type="email" value={email} onChange={handleEmailChange} required />
        </FormControl>
        {isEmailVerified ? (
          <FormControl mb="10px">
            <FormLabel>Verification Code:</FormLabel>
            <Input type="text" value={verificationCode} onChange={handleVerificationCodeChange} required />
          </FormControl>
        ) : (
          <Button type="submit" colorScheme="blue" mb="10px" width="100%">
            Verify Email
          </Button>
        )}
        <Button type="submit" colorScheme="blue" width="100%">
          Submit Payment
        </Button>
      </form>
    </Box>
  );
};

export default PaymentForm;
