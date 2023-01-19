const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

console.log(createProduct(1, 200, false));
console.log(createProduct(20, undefined, false));
