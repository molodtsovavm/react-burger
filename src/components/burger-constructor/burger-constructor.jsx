import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

import Modal from '../modal/modal.jsx';
import { OrderDetails } from '../order-details/order-details.jsx';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  console.log(ingredients);

  const bun = ingredients.find((ingredient) => ingredient.type === 'bun');
  const otherIngredients = ingredients.filter((ingredient) => ingredient.type !== 'bun');
  const totalPrice =
    (bun?.price ?? 0) * 2 +
    otherIngredients.reduce((sum, ingredient) => sum + ingredient.price, 0);

  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <section className={`${styles.burger_constructor} pl-4`}>
      {bun && (
        <div className={'ml-8'}>
          <ConstructorElement
            isLocked
            price={bun.price}
            text={`${bun.name} (верх)`}
            thumbnail={bun.image_mobile}
            type="top"
          />
        </div>
      )}

      <ul className={`${styles.other_ingredients} custom-scroll`}>
        {otherIngredients.map((ingredient) => (
          <li key={ingredient._id} className={styles.order_row}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image_mobile}
            />
          </li>
        ))}
      </ul>

      {bun && (
        <div className={'ml-8'}>
          <ConstructorElement
            isLocked
            price={bun.price}
            text={`${bun.name} (низ)`}
            thumbnail={bun.image_mobile}
            type="bottom"
          />
        </div>
      )}

      <div className={`${styles.footer} mt-10`}>
        <span className="text text_type_digits-medium mr-2">{totalPrice}</span>
        <CurrencyIcon type="primary" />
        <Button
          type="primary"
          size="large"
          htmlType="button"
          extraClass={'ml-10'}
          onClick={() => setIsOrderOpen(true)}
        >
          Оформить заказ
        </Button>
      </div>

      {isOrderOpen && (
        <Modal variant="order" onClose={() => setIsOrderOpen(false)}>
          <OrderDetails orderNumber="034536" />
        </Modal>
      )}
    </section>
  );
};
