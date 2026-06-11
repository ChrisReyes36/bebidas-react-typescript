import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
} from "../utils/recipes-schema";
import type { SearchFilter } from "../types";

const URL = "https://www.thecocktaildb.com/api/json/v1/1";

export async function getCategories() {
  const { data } = await axios(`${URL}/list.php`, { params: { c: "list" } });
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) return result.data;
}

export async function getRecipes(searchFilters: SearchFilter) {
  const { data } = await axios(`${URL}/filter.php`, {
    params: { i: searchFilters.ingredient, c: searchFilters.category },
  });
  const result = DrinksAPIResponse.safeParse(data);
  if (result.success) return result.data;
}
