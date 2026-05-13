import PayFastButton from "./PayFastButton";

function Cart({ cart, removeFromCart, clearCart }) {
  const whatsappNumber = "27727174892";

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const message = `Hi 3G Fragrances, I would like to place this order:

${cart
  .map(
    (item) =>
      `${item.name} (${item.variant}) - ${item.size} - R${item.price} x ${item.quantity}`
  )
  .join("\n")}

Total: R${total}`;

  const checkoutLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <h1>Your Cart</h1>

        <p>Your cart is currently empty.</p>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <h3>{item.name}</h3>

              <p>{item.variant}</p>

              <p>{item.size}</p>

              <p>
                R{item.price} x {item.quantity}
              </p>
            </div>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: R{total}</h2>

        <a
          href={checkoutLink}
          target="_blank"
          rel="noreferrer"
        >
          Checkout on WhatsApp
        </a>

        <PayFastButton cart={cart} />

        <button onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </section>
  );
}

export default Cart;