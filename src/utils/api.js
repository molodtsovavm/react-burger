import { API_DOMAIN } from './const';

export async function getIngredients(signal) {
  const response = await fetch(`${API_DOMAIN}/api/ingredients`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}
