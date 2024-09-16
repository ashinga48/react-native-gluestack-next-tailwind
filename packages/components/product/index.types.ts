export enum PRODUCT_SORT_OPTION {
  biggest_discount,
  lowest_price,
  highest_price,
}

export enum PRODUCT_SORT_OPTION_LABELS {
  biggest_discount = 'Biggest discount',
  lowest_price = 'Lowest Price',
  highest_price = 'Highest Price',
}

export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    discount: number;
    discountedPrice: number;
    discountPercentage: number;
    savingAmount: number;
    rating: {
      rate: number;
      count: number;
    }
  }
  