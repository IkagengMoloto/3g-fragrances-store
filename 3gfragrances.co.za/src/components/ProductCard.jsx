.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  margin-top: 30px;
}

.product-card {
  background: linear-gradient(180deg, #181818, #0b0b0b);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.35s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  border-color: #d4af37;
  box-shadow: 0 28px 65px rgba(212, 175, 55, 0.18);
}

.product-image-wrap {
  height: 250px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.product-image-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95),
    rgba(0, 0, 0, 0.25)
  );
}

.category-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.78);
  color: #d4af37;
  border: 1px solid rgba(212, 175, 55, 0.5);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 900;
}

.product-body {
  padding: 24px;
}

.product-body h3 {
  font-size: 24px;
  margin: 0 0 14px;
  color: #ffffff;
}

.inspired,
.variant {
  color: #cfcfcf;
  line-height: 1.6;
  font-size: 14px;
}

.product-footer {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.product-footer strong {
  display: block;
  color: #d4af37;
  font-size: 28px;
}

.product-footer small {
  color: #aaa;
  font-weight: 700;
}

.product-footer a {
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: #06130c;
  text-decoration: none;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 900;
  transition: 0.25s ease;
}

.product-footer a:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
}