import orderCheck from '../../assets/images/check_mark.png';

import styles from './order-details.module.css';

export function OrderDetails({ orderNumber }) {
  return (
    <>
      <p className={`${styles.order_number} text text_type_digits-large mt-30`}>
        {orderNumber}
      </p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>

      <p className={`${styles.order_check} mt-15 mb-15`}>
        <img src={orderCheck} alt="Заказ принят" width={120} height={120} />
      </p>

      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}
