import React, { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';
import { useForm, FormProvider, FieldErrors, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface Props<T> {
  schema: any;
  onSubmit: (data: any) => void;
  defaultValues: T;
}

interface IFormContext {
  errors: FieldErrors;
}
export interface IFormWrapper extends UseFormReturn {
  setValues: (values: any) => void
}
export const FormContext = React.createContext<IFormContext | undefined>(undefined);

export const useFormWrapperContext = () => {
  const context = React.useContext(FormContext);
  if (!context?.errors) throw new Error('Please provide context');
  return { errors: context.errors };
};

export const FormWrapper = forwardRef(<T,>(
  { schema, onSubmit, children, defaultValues }: React.PropsWithChildren<Props<T>>,
  ref: ForwardedRef<any>
) => {
  type FormData = yup.InferType<typeof schema>;
  const [values, setValues] = useState<FormData>();

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { ...defaultValues },
    shouldFocusError: false,
    mode: 'all',
    values,
  });

  // const onSetValues = (formValues: FormData) => {
  //   setValues(formValues);
  // };

  // useEffect(() => {
  //   observer.subscribe('reset', methods.reset);
  //   observer.subscribe('setValues', onSetValues);
  //   return () => {
  //     observer.unsubscribe('reset');
  //     observer.unsubscribe('setValues');
  //   };
  // }, [methods.reset]);

  useImperativeHandle(ref, () => ({
    ...methods,
    setValues: (values: FormData) => {
      for (const key in values) {
        methods.setValue(key, values[key]);
      }
    }
  }));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormContext.Provider value={{ errors: methods.formState.errors }}>
          {React.Children.map(children, (child) =>
            React.isValidElement(child) ? React.cloneElement<any>(child) : child
          )}
        </FormContext.Provider>
      </form>
    </FormProvider>
  );
});

