import React from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};
const TTForms: React.FC<TFormProps> = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default TTForms;
