/* =========================================================
   PAKKA ORGANICS — site configuration
   Everything you are likely to change lives in this file:
   contact details, the impact figure and the product list.
   ========================================================= */

const CONFIG = {
  // WhatsApp number: country code + number, no "+" and no spaces
  whatsappNumber: '919247546995',

  brand: {
    name: 'Pakka Organics',
    tagline: 'We give flowers a second life',
    phoneDisplay: '+91 92475 46995',
    email: 'info@pakkaorganics.com',
    city: 'Hyderabad, Telangana, India',
    instagram: 'https://www.instagram.com/pakkaorganics',
    youtube: 'https://www.youtube.com/@PakkaOrganics1',
    legal: 'Talla Innovations LLP · UDYAM-TS-06-0036189',   // shown in the footer; set to '' to hide
    currency: '₹'
  },

  impact: {
    tonnes: '19.8',
    label: 'tonnes of flowers recycled'
  },

  categories: [
    { id: 'incense', name: 'Incense sticks' },
    { id: 'dhoop',   name: 'Dhoop' },
    { id: 'bath',    name: 'Bath care' },
    { id: 'puja',    name: 'Puja essentials' },
    { id: 'colours', name: 'Natural colours' }
  ],

  /* PRODUCTS
     To add a product photo: save it in images/products/ and put its path in `image`,
     e.g. image: 'images/products/camphor-incense.jpg'
     Square photos (1:1), about 1000 × 1000 px, work best.
     While `image` is empty the site shows a placeholder tile. */
  products: [
    { id: 'camphor-incense',     name: 'Camphor incense',     pack: '15 sticks', price: 59,  category: 'incense', image: '' },
    { id: 'kasturi-incense',     name: 'Kasturi incense',     pack: '15 sticks', price: 59,  category: 'incense', image: '' },
    { id: 'kacha-bella-incense', name: 'Kacha Bella incense', pack: '15 sticks', price: 59,  category: 'incense', image: '' },
    { id: 'incense-combo',       name: 'Combo: Camphor, Kacha Bella and Kasturi', pack: '45 sticks', price: 165, category: 'incense', image: '', featured: true },
    { id: 'lavender-incense-15', name: 'Lavender incense',    pack: '15 sticks', price: 89,  category: 'incense', image: '', featured: true },
    { id: 'lavender-incense-40', name: 'Lavender incense',    pack: '40 sticks', price: 199, category: 'incense', image: '' },
    { id: 'dhoop-sticks',        name: 'Dhoop sticks',        pack: '20 pieces', price: 99,  category: 'dhoop',   image: '', featured: true },
    { id: 'rose-bath-salt',      name: 'Rose-blend bath salt', pack: '200 g',    price: 159, category: 'bath',    image: '', featured: true },
    { id: 'bath-powder',         name: 'Bath powder',         pack: '200 g',     price: 129, category: 'bath',    image: '' },
    { id: 'lavender-incense-25', name: 'Big pack lavender incense', pack: '25 sticks', price: 149, category: 'incense', image: '' },
    { id: 'cow-dung-cakes',      name: 'Cow dung cakes',      pack: '12 pieces', price: 99,  category: 'puja',    image: '' },
    { id: 'gau-theertam',        name: 'Gau Theertam',        pack: '100 ml',    price: 99,  category: 'puja',    image: '' },
    { id: 'panchagavya-diyas',   name: 'Panchagavya Diyas',   pack: '14 pieces', price: 99,  category: 'puja',    image: '' },
    // price: null  →  sold on enquiry (minimum order quantity), no cart button
    { id: 'natural-colours',     name: 'Natural colours',     pack: 'Available on an MOQ basis', price: null, category: 'colours', image: '' }
  ],

  cartKey: 'pakka_cart_v3'
};

/* ---------- helpers ---------- */

function money(n) { return CONFIG.brand.currency + Number(n).toLocaleString('en-IN'); }
function productById(id) { return CONFIG.products.find(p => p.id === id); }
function productLabel(p) { return p.price === null ? p.name : `${p.name} (${p.pack})`; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

/* ---------- cart (saved in the visitor's browser) ---------- */

const Cart = {
  _memory: [],
  _listeners: [],
  get() {
    try {
      const raw = JSON.parse(localStorage.getItem(CONFIG.cartKey));
      if (Array.isArray(raw)) return raw.filter(i => { const p = productById(i.id); return p && p.price !== null && i.qty > 0; });
    } catch (e) { /* storage unavailable: fall through */ }
    return this._memory.slice();
  },
  save(items) {
    this._memory = items;
    try { localStorage.setItem(CONFIG.cartKey, JSON.stringify(items)); } catch (e) { /* keep in memory only */ }
    this._listeners.forEach(fn => fn());
  },
  add(id, qty = 1) {
    const p = productById(id);
    if (!p || p.price === null) return;
    const items = this.get();
    const found = items.find(i => i.id === id);
    if (found) found.qty = Math.min(99, found.qty + qty); else items.push({ id, qty });
    this.save(items);
  },
  setQty(id, qty) {
    if (qty <= 0) return this.remove(id);
    const items = this.get();
    const found = items.find(i => i.id === id);
    if (found) { found.qty = Math.min(99, qty); this.save(items); }
  },
  remove(id) { this.save(this.get().filter(i => i.id !== id)); },
  count() { return this.get().reduce((s, i) => s + i.qty, 0); },
  total() { return this.get().reduce((s, i) => s + productById(i.id).price * i.qty, 0); },
  onChange(fn) { this._listeners.push(fn); }
};

/* ---------- WhatsApp links ---------- */

function whatsappUrl(message) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function whatsappCartOrder() {
  const items = Cart.get();
  if (!items.length) return whatsappUrl('Hello Pakka Organics, I would like to place an order.');
  const lines = items.map((i, n) => {
    const p = productById(i.id);
    return `${n + 1}. ${productLabel(p)}\n   ${money(p.price)} x ${i.qty} = ${money(p.price * i.qty)}`;
  }).join('\n');
  return whatsappUrl(
`Hello Pakka Organics, I would like to order:

${lines}

Total: ${money(Cart.total())} (before shipping)

Name:
Delivery address and PIN code:`);
}

function whatsappEnquiry(p) {
  return whatsappUrl(`Hello Pakka Organics, I would like to know more about ${p.name} — minimum order quantity, shades available and pricing.`);
}
