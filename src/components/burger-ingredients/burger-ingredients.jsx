import { Counter, CurrencyIcon, Tab } from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

import { IngredientDetails } from '../ingredient-details/ingredient-details.jsx';
import Modal from '../modal/modal.jsx';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  console.log(ingredients);

  const categories = [
    { type: 'bun', title: 'Булки' },
    { type: 'main', title: 'Начинки' },
    { type: 'sauce', title: 'Соусы' },
  ];

  const ingredientsByType = {
    bun: ingredients.filter((ingredient) => ingredient.type === 'bun'),
    main: ingredients.filter((ingredient) => ingredient.type === 'main'),
    sauce: ingredients.filter((ingredient) => ingredient.type === 'sauce'),
  };

  const [activeType, setActiveType] = useState('bun');
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  function selectCategory(type) {
    setActiveType(type);
    document
      .getElementById(`ingredients-${type}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            active={activeType === 'bun'}
            onClick={() => selectCategory('bun')}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={activeType === 'main'}
            onClick={() => selectCategory('main')}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={activeType === 'sauce'}
            onClick={() => selectCategory('sauce')}
          >
            Соусы
          </Tab>
        </ul>
      </nav>

      <section className={`${styles.catalog} mt-10 custom-scroll`}>
        {categories.map(({ type, title }) => (
          <section key={type} id={`ingredients-${type}`}>
            <h2 className="text text_type_main-medium">{title}</h2>
            <ul className={`${styles.cards} mt-6 mb-10 pr-4 pl-4`}>
              {ingredientsByType[type].map((ingredient) => (
                <li key={ingredient._id} className={styles.card}>
                  <Counter count={1} size="default" />
                  <button
                    type="button"
                    className={styles.card_button}
                    onClick={() => setSelectedIngredient(ingredient)}
                  >
                    <img src={ingredient.image} alt={ingredient.name} />
                    <div className={`${styles.price} mt-1 mb-1`}>
                      <span className="text text_type_digits-default">
                        {ingredient.price}
                      </span>
                      <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-default">{ingredient.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      {selectedIngredient && (
        <Modal title="Детали ингредиента" onClose={() => setSelectedIngredient(null)}>
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      )}
    </section>
  );
};
