import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../utils/recipes-schema";
import type { Drink, SearchFilter } from "../types";
import api from "../lib/axios";

export async function getCategories() {
  const { data } = await api("/list.php", { params: { c: "list" } });
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) return result.data;
}

export async function getRecipes(searchFilters: SearchFilter) {
  const { data } = await api("/filter.php", {
    params: { i: searchFilters.ingredient, c: searchFilters.category },
  });
  const result = DrinksAPIResponse.safeParse(data);
  if (result.success) return result.data;
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const { data } = await api("/lookup.php", { params: { i: id } });
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (result.success) return result.data;
}
