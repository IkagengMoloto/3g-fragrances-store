function PayFastButton({ cart }) {
  const merchantId = "10000100"; // sandbox merchant ID
  const merchantKey = "46f0cd694581a"; // sandbox merchant key

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemName =
    cart.length === 1
      ? cart[0].name
      : `3G Fragrances Order - ${cart.length} items`;

  return (
    <form
      action="https://sandbox.payfast.co.za/eng/process"
      method="post"
    >
      <input type="hidden" name="merchant_id" value={merchantId} />
      <input type="hidden" name="merchant_key" value={merchantKey} />

      <input
        type="hidden"
        name="return_url"
        value="http://localhost:5173/cart"
      />
      <input
        type="hidden"
        name="cancel_url"
        value="http://localhost:5173/cart"
      />

      <input type="hidden" name="amount" value={total.toFixed(2)} />
      <input type="hidden" name="item_name" value={itemName} />

      <button type="submit" className="payfast-btn">
        Pay with PayFast
      </button>
    </form>
  );
}

export default PayFastButton;