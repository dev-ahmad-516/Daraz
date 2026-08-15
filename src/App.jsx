import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';
import './App.css';

const productsData = [
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/49e73a6ee9dd108be5c9433b3ba422dc.png_200x200q80.png_.avif",
    productName: "H -Gold Fortified Milk Full Cream Powder.",
    productPrice: "RS.1,449",
    discount: "-19%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 368,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/7dd08ff97e65e4c9616b95cc8346e750.jpg_200x200q80.jpg_.avif",
    productName: "TRACKSUIT - New Trendy Black & White Fire Printe...",
    productPrice: "RS.767",
    discount: "-23%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 227,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/b3af1348df2133ea3236b7c61b485b3f.jpg_200x200q80.jpg_.avif",
    productName: "T9 Vintage Hair Trimmer For Men I T9...",
    productPrice: "RS.778",
    discount: "-51%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 2625,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/51a53b6289e842c0b8be0b4b27c415de.jpg_200x200q80.jpg_.avif",
    productName: "Cat Neck Rainbow Ribbon Adjustable Collar",
    productPrice: "RS.239",
    discount: "-68%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 62,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/4fcae7f0d2b8b7f397de17a2a35d18df.png_200x200q80.png_.avif",
    productName: "Silicone Gel Heel Pad Socks For Pain Relief An.„",
    productPrice: "RS.97",
    discount: "-46%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 301,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/ed081006feb11bc4e6a9ee261a0e178a.jpg_200x200q80.jpg_.avif",
    productName: "Mini Slim Smart Card Holder - Slim Smart Wall...",
    productPrice: "RS.145",
    discount: "-59%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 412,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/278d16e4e17d402094ed2533f5a542c0.jpg_200x200q80.jpg_.avif",
    productName: "1 pair Silicone Elastic Moisturizing Foot Socks,„",
    productPrice: "RS.186",
    discount: "-70%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 622,
  },
{
    productImage: "https://img.drz.lazcdn.com/static/pk/p/520439f3380265b0cc855e873f89804a.png_200x200q80.avif",
    productName: "5.5 Quart Digital Air Fryer with 10 Presets - Black",
    productPrice: "RS.7,899",
    discount: "-35%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 205,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/985425fdd8337a981496e050045a15a2.jpg_200x200q80.avif",
    productName: "AuraFit Pro Smart Watch - GPS & Heart Rate Monitoring",
    productPrice: "RS.4,599",
    discount: "-15%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 1422,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/77d9fe4aee3bfa1c0b6eb63752746ac0.jpg_200x200q80.avif",
    productName: "Compact Automatic Espresso Machine - 15 Bar Pressure",
    productPrice: "RS.19,999",
    discount: "-25%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 855,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/S1b0acc84336e4f99a1d43dc6b605304ce.jpg_200x200q80.avif",
    productName: "Mechanical Gaming Keyboard - Brown Switches, RGB Backlit",
    productPrice: "RS.6,200",
    discount: "-18%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 350,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/e278c53ee59920216a8fd46af2d515b7.jpg_200x200q80.avif",
    productName: "Waterproof Portable Bluetooth Speaker - 12 Hour Battery",
    productPrice: "RS.3,200",
    discount: "-50%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 987,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/c123c24662e3f6a4ba3f46549199cf2e.jpg_200x200q75.avif",
    productName: "Premium Whey Protein Isolate - Vanilla Flavor (1KG)",
    productPrice: "RS.5,499",
    discount: "-10%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 1200,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/e33363981ae89820fc82bb1d640ee983.jpg_200x200q75.avif",
    productName: "Deluxe 5-Piece Stainless Steel Gardening Tool Set with Case",
    productPrice: "RS.1,850",
    discount: "",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 210,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/S72a40c268abc40adad20ccd947b7cedfQ.png_200x200q75.avif",
    productName: "Ergonomic Wireless Gaming Mouse - Adjustable DPI & RGB",
    productPrice: "RS.1,199",
    discount: "-40%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 3050,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/4baa4846c8e321cec32165d29de9eb3b.jpg_200x200q75.avif",
    productName: "Dimmable LED Desk Lamp with USB Charging Port",
    productPrice: "RS.2,550",
    discount: "-22%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 177,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/390e4ef61c2e9ec7d1df1313d70b0e31.png_200x200q75.avif",
    productName: "Mega Build 100-Piece Magnetic Building Blocks Set",
    productPrice: "RS.2,999",
    discount: "-20%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 567,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/4afa79c5929ddfc7a7bd940405186890.jpg_200x200q75.avif",
    productName: "Luxury 6-Piece Turkish Cotton Bath Towel Set - White",
    productPrice: "RS.4,100",
    discount: "-30%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 630,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/39463a19093aee226fb637d6b2b0baa6.jpg_200x200q75.avif",
    productName: "Extra Thick Non-Slip TPE Yoga Mat with Carrying Strap",
    productPrice: "RS.1,499",
    discount: "-30%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 789,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/30b465833d18f5edddaae581a2ec66a7.jpg_200x200q75.avif",
    productName: "The Shadow Realms: A Fantasy Novel (Hardcover Edition)",
    productPrice: "RS.850",
    discount: "-10%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 45,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/cf4566ced1a429c652e8c2bd3100ab4a.jpg_200x200q75.avif",
    productName: "Sonic Electric Toothbrush - 5 Modes & Travel Case",
    productPrice: "RS.3,899",
    discount: "-28%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 1640,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/9265e6e8e18eccacb55bee2b2c4fb8bb.jpg_200x200q80.avif",
    productName: "1TB Portable External SSD - USB 3.1 High Speed",
    productPrice: "RS.15,500",
    discount: "-12%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 412,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/899162e7c4414aaba60ee4a9fb7b9b93.jpg_200x200q80.avif",
    productName: "Premium Faux Leather Biker Jacket for Men - Black",
    productPrice: "RS.6,999",
    discount: "-40%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 310,
  },
  {
    productImage: "data:image/png;base64,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",
    productName: "HD Foldable Camera Drone with 30-Min Flight Time",
    productPrice: "RS.11,250",
    discount: "-25%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 132,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/51645a23cb7856e9d457b7085eac7d7d.png_200x200q80.avif",
    productName: "Professional 12-Piece Vegan Makeup Brush Set",
    productPrice: "RS.2,150",
    discount: "-45%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 1520,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/a23cb842f939ea2a0e1c18e073fa19bf.png_200x200q80.avif",
    productName: "Activated Carbon Water Filter Pitcher - 10 Cup Capacity",
    productPrice: "RS.1,650",
    discount: "-15%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 726,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/7087979dcd1234d0b2408d26719c1d8b.jpg_200x200q80.avif",
    productName: "Pre-Seasoned 10 Inch Cast Iron Skillet/Frying Pan",
    productPrice: "RS.3,499",
    discount: "-30%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 890,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/Sf4d13d10b31f4b3d9799f93521b782e4O.jpg_200x200q80.avif",
    productName: "Quiet Pet Grooming Clippers for Dogs & Cats - Cordless",
    productPrice: "RS.2,300",
    discount: "-38%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 353,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/86cc0d18f0aaf2ddb8d7381ceabb8691.jpg_200x200q80.avif",
    productName: "10x6 Inch Digital Drawing Tablet with Pressure Pen",
    productPrice: "RS.5,700",
    discount: "-20%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 170,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/Sf051d876f6e84d5d90c4a4a424ba949fn.jpg_200x200q80.avif",
    productName: "Large Abstract Canvas Wall Art Print - 3 Panels",
    productPrice: "RS.8,999",
    discount: "-50%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 42,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/5cbf373438e771fb5a3047398bf3e3b7.jpg_200x200q80.avif",
    productName: "Anti-Theft Travel Backpack with USB Charging Port",
    productPrice: "RS.3,199",
    discount: "-44%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 2448,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/Sc02c214d5de74e26aaf213129852989bL.jpg_200x200q80.avif",
    productName: "5-Speed Electric Hand Mixer with Stainless Steel Attachments",
    productPrice: "RS.1,999",
    discount: "-35%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 394,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/b5db9bd4d3895450e3fd76227c47c0c9.jpg_200x200q80.avif",
    productName: "500ml Stainless Steel Vacuum Insulated Water Bottle/Thermos",
    productPrice: "RS.1,150",
    discount: "-30%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 283,
  },
  {
    productImage: "https://img.drz.lazcdn.com/g/kf/S47c0c82e00db4481b00d3ab5d1b4df55W.jpg_200x200q80.avif",
    productName: "1080p Wi-Fi Home Security Camera - Two-Way Audio",
    productPrice: "RS.4,200",
    discount: "-40%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 109,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/dafe09843e63d695024640d622b7fd0f.png_200x200q80.avif",
    productName: "7-Piece Non-Stick Cookware Set - Granite Finish",
    productPrice: "RS.9,500",
    discount: "-45%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 180,
  },
  {
    productImage: "https://img.drz.lazcdn.com/static/pk/p/e314f9efa89155078672b171b389870d.jpg_200x200q80.avif",
    productName: "Lightweight Men's Running Shoes - Mesh Breathable Design",
    productPrice: "RS.4,999",
    discount: "-30%",
    productRating: (
      <span>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    ),
    Comments: 5,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main>
        <ProductList products={productsData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
