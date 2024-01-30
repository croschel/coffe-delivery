import { Header } from '@/components/Header';
import { AddditionalForm } from './AdditionalForm';
import styles from './index.module.scss';
import { SelectedCoffee } from './SelectedCoffee';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { additionalFormValidation } from '@/utils/validationSchemas';
import { OrderForm } from '@/models/enum/orderForm';

export const Order = () => {
  const additionalForm = useForm({
    resolver: zodResolver(additionalFormValidation),
    defaultValues: {
      [OrderForm.CEP]: '',
      [OrderForm.RUA]: '',
      [OrderForm.NUMERO]: '',
      [OrderForm.COMPLEMENTO]: '',
      [OrderForm.BAIRRO]: '',
      [OrderForm.CIDADE]: '',
      [OrderForm.UF]: '',
    },
  });

  return (
    <>
      <Header />
      <main className={styles.mainOrder}>
        <FormProvider {...additionalForm}>
          <AddditionalForm />
          <SelectedCoffee />
        </FormProvider>
      </main>
    </>
  );
};
