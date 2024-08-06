import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button, Input } from 'react-daisyui';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

export function HookForm() {
  const [disabled, setDisabled] = useState(false);
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    disabled,
  });

  const onSuccess = (data: FormData) => {
    console.log('success');
    console.log(data);
  };
  const onError = (errors: any) => {
    console.log('error');
    console.log(errors);
  };

  const onSubmit = handleSubmit(onSuccess, onError);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Hook Form</h1>
      <form
        className="flex flex-col gap-4 w-1/2 mx-auto bg-slate-500 p-4"
        onSubmit={onSubmit}
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input placeholder="Enter your name" {...field} />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input placeholder="Enter your email" {...field} />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input placeholder="Enter your password" {...field} />
          )}
        />
        <Button>Submit</Button>
      </form>
      <Button onClick={() => setDisabled(!disabled)}>Disable Form</Button>
    </div>
  );
}
