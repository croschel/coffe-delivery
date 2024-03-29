import { InputText } from '@/components/InputText';
import { Select } from '@/components/Select';
import { pageLabels } from '@/constants/labels';
import { OrderForm as OrderFormEnum } from '@/models/enum/orderForm';
import { PaymentMethods } from '@/models/enum/paymentMethods';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react';
import styles from './index.module.scss';
import { useFormContext } from 'react-hook-form';
import { useContext } from 'react';
import { OrderContext } from '@/contexts/OrderContext';

export const AddditionalForm = () => {
  const { register, formState } = useFormContext();
  const { paymentMethod, handleSelectPayment } = useContext(OrderContext);
  return (
    <div className={styles.form}>
      <h2 className={styles.formSectionTitle}>
        {pageLabels.order.completeOrder}
      </h2>
      <section className={styles.formSection}>
        <div className={styles.titleBox}>
          <MapPinLine size={22} color="#c47f17" />
          <div className={styles.title}>
            <h3>{pageLabels.order.address}</h3>
            <span>{pageLabels.order.addressInfo}</span>
          </div>
        </div>
        <div className={styles.formFields}>
          <InputText
            name={OrderFormEnum.CEP}
            disabled={false}
            placeholder="CEP"
            required
            controlled={false}
            width={200}
            register={register}
            hasError={formState.errors[OrderFormEnum.CEP] !== undefined}
          />
          <InputText
            name={OrderFormEnum.RUA}
            disabled={false}
            placeholder="Rua"
            required
            controlled={false}
            register={register}
            hasError={formState.errors[OrderFormEnum.RUA] !== undefined}
          />
          <div className={styles.formRow}>
            <InputText
              name={OrderFormEnum.NUMERO}
              disabled={false}
              placeholder="Número"
              required
              controlled={false}
              width={200}
              register={register}
              hasError={formState.errors[OrderFormEnum.NUMERO] !== undefined}
            />
            <InputText
              name={OrderFormEnum.COMPLEMENTO}
              disabled={false}
              placeholder="Complemento"
              required={false}
              controlled={false}
              register={register}
            />
          </div>
          <div className={styles.formRow}>
            <InputText
              name={OrderFormEnum.BAIRRO}
              disabled={false}
              placeholder="Bairro"
              required
              controlled={false}
              width={200}
              register={register}
              hasError={formState.errors[OrderFormEnum.BAIRRO] !== undefined}
            />
            <InputText
              name={OrderFormEnum.CIDADE}
              disabled={false}
              placeholder="Cidade"
              required
              controlled={false}
              register={register}
              hasError={formState.errors[OrderFormEnum.CIDADE] !== undefined}
            />
            <InputText
              name={OrderFormEnum.UF}
              disabled={false}
              placeholder="uf"
              required
              controlled={false}
              width={60}
              register={register}
              hasError={formState.errors[OrderFormEnum.UF] !== undefined}
            />
          </div>
        </div>
      </section>
      <section className={styles.formSection}>
        <div className={styles.titleBox}>
          <CurrencyDollar size={22} color="#8047f8" />
          <div className={styles.title}>
            <h3>{pageLabels.order.payment}</h3>
            <span>{pageLabels.order.paymentInfo}</span>
          </div>
        </div>
        <div className={styles.paymentBox}>
          <Select
            label={PaymentMethods.CREDIT}
            onSelect={handleSelectPayment}
            selected={paymentMethod === PaymentMethods.CREDIT}
            icon={<CreditCard size={16} color="#8047f8" />}
          />
          <Select
            label={PaymentMethods.DEBIT}
            onSelect={handleSelectPayment}
            selected={paymentMethod === PaymentMethods.DEBIT}
            icon={<Bank size={16} color="#8047f8" />}
          />
          <Select
            label={PaymentMethods.MONEY}
            onSelect={handleSelectPayment}
            selected={paymentMethod === PaymentMethods.MONEY}
            icon={<Money size={16} color="#8047f8" />}
          />
        </div>
      </section>
    </div>
  );
};
