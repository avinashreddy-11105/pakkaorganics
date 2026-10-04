# Pakka Organics website, version 3.1

A static site: plain HTML, CSS and JavaScript. No build step, no backend. Orders go through WhatsApp.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: headline, film, impact, how it works, story, featured products, media coverage, call to action |
| `story.html` | Story & Impact (Our Story and Sustainability merged): the problem, circular model, journey, impact, livelihoods, working with the city |
| `products.html` | All 14 products with category filter |
| `media.html` | Three YouTube videos, the film, press clippings, photos |
| `blog.html` + three `blog-*.html` | Blog and posts |
| `contact.html` | WhatsApp, email, Instagram, message form (opens WhatsApp) |
| `cart.html` | Cart and WhatsApp checkout |
| `sustainability.html` | Redirects to `story.html#impact`, so old links still work |

## Run it

```bash
python3 -m http.server 8000     # Windows: python -m http.server 8000
```

Then open `http://localhost:8000`. YouTube videos do not play from a double-clicked `file://` page.

## Put it online

Upload the **contents** of this folder so that `index.html` sits at the top level of the repository or site.

- GitHub Pages: upload to the `pakkaorganics` repository, then Settings, Pages, deploy from the `main` branch, folder `/ (root)`.
- Netlify: drag the folder onto https://app.netlify.com/drop

## Things you will change (all in `js/config.js`)

- **WhatsApp number**: `whatsappNumber` (digits only) and `phoneDisplay`. Keep the two the same number.
- **Email, Instagram, YouTube**: in `brand`. A link only appears when its value is filled in.
- **Footer legal line**: `brand.legal`. Set it to `''` to hide it.
- **Impact figure**: `impact.tonnes`.
- **Prices, names, pack sizes**: the `products` list.

## Adding product photos

1. Save the photo in `images/products/`, square, about 1000 × 1000 px, JPG or WebP.
2. In `js/config.js`, set that product's `image`, for example  
   `image: 'images/products/camphor-incense.jpg'`
3. The placeholder tile is replaced on every page, including the cart.

## Motion and effects

All of it lives at the end of `css/styles.css` and `js/main.js`, and all of it switches off for visitors whose device asks for reduced motion.

- Home headline rises in word by word; the film fades and scales in.
- Sections, cards and photos fade up as they scroll into view.
- The 19.8 figure counts up when it appears.
- Scrolling strip of brand lines under the hero (pauses on hover).
- Header gains a shadow on scroll, with a reading-progress bar and a back-to-top button.
- Hover lift and zoom on product cards, photos, press clippings and buttons.
- Cart badge bounces when an item is added; product grid animates when filtered.
- Journey timeline fills as you scroll; circular-model diagram animates.
- YouTube videos show a thumbnail with a play button and load the player on click, which keeps pages fast.
- Photos and clippings open in a lightbox.
- Pages cross-fade between each other in browsers that support it.

## Please confirm before launch

- **WhatsApp**: `whatsappNumber` is set to `919247546995` to match the phone number you gave.
- **Hyderabad waste figures** on Story & Impact and in one blog post come from your Circular Economy deck, with the deck's sources quoted. Check them against the original sources.
- **"6 to 8 women employed"** and **"since September 2025"** come from the same deck.
- **Footer legal line** (Talla Innovations LLP, Udyam number) comes from the deck's last slide.
- **Photo captions** describe what is visible in each photo. Correct any that are wrong.
- **Press clippings** belong to the newspapers. Check you are comfortable showing them in full.
- **Web address**: `sitemap.xml`, `robots.txt` and the page `<head>` tags use `https://avinashreddy-11105.github.io/pakkaorganics/`. If you use a different address, find and replace that text in all files.

## What was left out on purpose

- No reviews, ratings, awards or shipping promises, because none were supplied.
- Government and GHMC logos from the deck, so the site does not imply an endorsement beyond what your banners show.
- The deck's product pictures (white-background incense, cones, diyas, cow dung cakes): they look like generic web images. If they are your own photos, add them as product photos.
- Photos that show children.

## Media notes

- The film is your `IMG_9375.MOV` converted to `media/pakka-organics-film.mp4` (H.264, 720p, 13 MB).
- On the home page the film plays muted. Sound starts only when a visitor presses "Play with sound" or unmutes it.
- Each photo is used once across the site.
- Fonts (Bricolage Grotesque, Figtree) are in `fonts/` under the SIL Open Font License.
