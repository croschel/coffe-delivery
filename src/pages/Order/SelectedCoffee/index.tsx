import { pageLabels } from '@/constants/labels';
import styles from './index.module.scss';
import { CoffeeItem } from './CoffeeItem';
import { formatCurrencyReal } from '@/utils/format';
import { Button } from '@/components/Button';
import { useContext, useMemo } from 'react';
import { OrderContext } from '@/contexts/OrderContext';
import { useFormContext } from 'react-hook-form';
import { OrderForm } from '@/models/interfaces/orderForm';
import { Order } from '@/models/interfaces/order';
import { createNewId } from '@/utils/generators';

export const SelectedCoffee = () => {
  const { handleSubmit, formState } = useFormContext();
  const { orderList, paymentMethod } = useContext(OrderContext);

  const orderIsReady = useMemo(
    () =>
      Object.values(formState.errors).length === 0 &&
      paymentMethod.length > 0 &&
      orderList.length > 0,
    [orderList, paymentMethod, formState.errors],
  );

  const handleSubmitOrder = (formAddressValues: unknown) => {
    if (!orderIsReady) return;
    const newOrder: Order = {
      id: createNewId(),
      coffeeList: orderList,
      address: formAddressValues as OrderForm,
      payment: paymentMethod,
    };
    console.log(newOrder);
  };
  return (
    <div className={styles.selectedCoffee}>
      <h2 className={styles.coffeeSectionTitle}>
        {pageLabels.order.selectedCoffees}
      </h2>
      <section className={styles.sectionConfirm}>
        <div className={styles.coffeeList}>
          {orderList.map((coffee) => (
            <CoffeeItem key={coffee.id} coffee={coffee} />
          ))}
        </div>
        <div className={styles.totalOrder}>
          <div className={styles.regularOrderRow}>
            <span>{pageLabels.order.totalItens}</span>
            <p>{formatCurrencyReal(29.7)}</p>
          </div>
          <div className={styles.regularOrderRow}>
            <span>{pageLabels.order.delivery}</span>
            <p>{formatCurrencyReal(3.5)}</p>
          </div>
          <div className={styles.boldOrderRow}>
            <span>{pageLabels.order.total}</span>
            <p>{formatCurrencyReal(33.2)}</p>
          </div>
        </div>
        <Button
          label="confirmar pedido"
          size="M"
          type="primary"
          onClick={handleSubmit(handleSubmitOrder)}
          disabled={orderList.length === 0}
        />
      </section>
    </div>
  );
};
