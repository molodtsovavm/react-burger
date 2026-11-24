import styles from './ingredient-details.module.css';

export function IngredientDetails({ ingredient }) {
  const composition = [
    ['Калории, ккал', ingredient.calories],
    ['Белки, г', ingredient.proteins],
    ['Жиры, г', ingredient.fat],
    ['Углеводы, г', ingredient.carbohydrates],
  ];

  return (
    <section className={`${styles.details} mb-15`}>
      <img className={styles.image} src={ingredient.image_large} alt="" />

      <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>

      <div className={`${styles.composition} text_color_inactive`}>
        {composition.map(([label, value]) => (
          <p key={label} className={`text ${styles.composition_item}`}>
            <span className="text_type_main-default">{label}</span>
            <span className="text_type_digits-default mt-2">{value}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
