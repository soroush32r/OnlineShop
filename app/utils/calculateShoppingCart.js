

export const calculateShoppingCart = (cart) => {
  return (
    cart.reduce((pre, cur) => (pre += (cur.count * cur.price)),0)
  )
}

export default calculateShoppingCart