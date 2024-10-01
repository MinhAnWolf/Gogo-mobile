import * as z from 'zod';
import { BaseStyles } from '../../../../common/base-styles';
import { InputType } from '../../../../type/type';

export const schemaRegister = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    rePassword: z.string().min(6)
  })
  .superRefine((data, context) => {
    if (data.rePassword !== data.password) {
      context.addIssue({
        path: ['rePassword'],
        message: 'Password not match',
        code: 'invalid_type',
        expected: 'string',
        received: typeof data.rePassword
      });
    }
  });

export type RegisterFormType = z.infer<typeof schemaRegister>;
export const registerFormDefaultValues: RegisterFormType = {
  email: '',
  password: '',
  rePassword: ''
};

// Declare input
export const RegisterFormInput: Record<keyof RegisterFormType, InputType> = {
  email: {
    name: 'email',
    styles: [BaseStyles.input, BaseStyles.mrBot15],
    required: true,
    secureTextEntry: false
  },
  password: {
    name: 'password',
    styles: [BaseStyles.input, BaseStyles.mrBot15],
    required: true,
    secureTextEntry: true
  },
  rePassword: {
    name: 'rePassword',
    styles: [BaseStyles.input, BaseStyles.mrBot15],
    required: true,
    secureTextEntry: true
  }
};
