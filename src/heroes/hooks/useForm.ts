import { useState } from "react";

export const useForm = (initialFormState: Record<string, any>) => {
  const [formState, setFormState] = useState<any>(initialFormState);

  const onInputChange = (event: any) => {
    const { value, name } = event.target;
    setFormState({
      ...formState,
      [name]: value, //   se agrega el valor a cambiar por propiedad computada
    });
  };
  const onSubmitForm = () => {
    return formState;
  };
  const onResetForm = () => {
    setFormState(initialFormState);
  };
  return {
    // Data
    ...formState,
    // Methods
    onResetForm,
    onInputChange,
    onSubmitForm,
  };
};
