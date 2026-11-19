import apiRequest from './api';

export function getCategories() {
  return apiRequest('products/categories/');
}

export function getFeaturedProducts() {
  return apiRequest('products/featured/');
}