import CartCounter from './counter'

export default function CartItem({ product, setProducts }) {
  const handleUpdateQuantity = (amount) => {
    setProducts((draft) => {
      const updateProduct = draft.find((p) => p.id === product.id)
      updateProduct.quantity += amount
    })
  }

  return (
    <li className="flex gap-2 justify-between py-2 px-0.5 text-[18px]">
      <p className="flex gap-1.5 items-center">
        <img
          src={`/products/${product.imageUrl}`}
          alt=""
          className="size-8 rounded-full"
        />
        <strong>{product.name}</strong> {product.price.toLocaleString()} 원
      </p>
      <CartCounter
        quantity={product.quantity}
        updateQuantity={handleUpdateQuantity}
        inventory={product.inventory}
      />
    </li>
  )
}
