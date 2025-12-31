import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";

interface Product {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  colour?: string;
  material?: string;
  ageGroup: string;
  condition: string;
  size?: string;
  pattern?: string;
  gender: string;
  enabled: boolean;
}

const products: Product[] = [
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254717095&currency=USD",
    item_group_id: 8299804328103,
    id: 45858254717095,
    title:
      "Womens Aisha Linen Pant XXS Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    description:
      "100% Linen Yarn dyed stripe Elastic waistband Wide leg Full length pant Side seam pockets Slits at hem The Aisha Linen Pant is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a relaxed wide leg, full length pant. Features include an elasticated waistband, side seam pockets and slits at hem",
    availability: "out of stock",
    price: "130.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Linen > Stripe",
    brand: "Nude Lucy",
    gtin: 9356041449126,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XXS",
    custom_label_2: "NU25863-Amber-Stri-XXS",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254717095&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_006.jpg?v=1721403344",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_002.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_040.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_035.jpg?v=1721403344",
    ],
    short_title:
      "Womens Aisha Linen Pant XXS Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254749863&currency=USD",
    item_group_id: 8299804328103,
    id: 45858254749863,
    title:
      "Womens Aisha Linen Pant XS Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    description:
      "100% Linen Yarn dyed stripe Elastic waistband Wide leg Full length pant Side seam pockets Slits at hem The Aisha Linen Pant is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a relaxed wide leg, full length pant. Features include an elasticated waistband, side seam pockets and slits at hem",
    availability: "out of stock",
    price: "130.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Linen > Stripe",
    brand: "Nude Lucy",
    gtin: 9356041449133,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XS",
    custom_label_2: "NU25863-Amber-Stri-XS",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254749863&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_006.jpg?v=1721403344",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_002.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_040.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_035.jpg?v=1721403344",
    ],
    short_title:
      "Womens Aisha Linen Pant XS Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254782631&currency=USD",
    item_group_id: 8299804328103,
    id: 45858254782631,
    title:
      "Womens Aisha Linen Pant S Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    description:
      "100% Linen Yarn dyed stripe Elastic waistband Wide leg Full length pant Side seam pockets Slits at hem The Aisha Linen Pant is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a relaxed wide leg, full length pant. Features include an elasticated waistband, side seam pockets and slits at hem",
    availability: "out of stock",
    price: "130.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Linen > Stripe",
    brand: "Nude Lucy",
    gtin: 9356041449140,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "S",
    custom_label_2: "NU25863-Amber-Stri-S",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254782631&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_006.jpg?v=1721403344",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_002.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_040.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_035.jpg?v=1721403344",
    ],
    short_title:
      "Womens Aisha Linen Pant S Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254815399&currency=USD",
    item_group_id: 8299804328103,
    id: 45858254815399,
    title:
      "Womens Aisha Linen Pant M Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    description:
      "100% Linen Yarn dyed stripe Elastic waistband Wide leg Full length pant Side seam pockets Slits at hem The Aisha Linen Pant is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a relaxed wide leg, full length pant. Features include an elasticated waistband, side seam pockets and slits at hem",
    availability: "out of stock",
    price: "130.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Wide-leg > Linen",
    brand: "Nude Lucy",
    gtin: 9356041449157,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "M",
    custom_label_2: "NU25863-Amber-Stri-M",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254815399&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_006.jpg?v=1721403344",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_002.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_040.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_035.jpg?v=1721403344",
    ],
    short_title:
      "Womens Aisha Linen Pant M Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254848167&currency=USD",
    item_group_id: 8299804328103,
    id: 45858254848167,
    title:
      "Womens Aisha Linen Pant L Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    description:
      "100% Linen Yarn dyed stripe Elastic waistband Wide leg Full length pant Side seam pockets Slits at hem The Aisha Linen Pant is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a relaxed wide leg, full length pant. Features include an elasticated waistband, side seam pockets and slits at hem",
    availability: "out of stock",
    price: "130.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Wide-leg > Linen",
    brand: "Nude Lucy",
    gtin: 9356041449164,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "L",
    custom_label_2: "NU25863-Amber-Stri-L",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254848167&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_006.jpg?v=1721403344",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_002.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_040.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_035.jpg?v=1721403344",
    ],
    short_title:
      "Womens Aisha Linen Pant L Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254880935&currency=USD",
    item_group_id: 8299804328103,
    id: 45858254880935,
    title:
      "Womens Aisha Linen Pant XL Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    description:
      "100% Linen Yarn dyed stripe Elastic waistband Wide leg Full length pant Side seam pockets Slits at hem The Aisha Linen Pant is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a relaxed wide leg, full length pant. Features include an elasticated waistband, side seam pockets and slits at hem",
    availability: "out of stock",
    price: "130.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Wide-leg > Linen",
    brand: "Nude Lucy",
    gtin: 9356041449171,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XL",
    custom_label_2: "NU25863-Amber-Stri-XL",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254880935&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_006.jpg?v=1721403344",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_002.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_040.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_035.jpg?v=1721403344",
    ],
    short_title:
      "Womens Aisha Linen Pant XL Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254913703&currency=USD",
    item_group_id: 8299804328103,
    id: 45858254913703,
    title:
      "Womens Aisha Linen Pant XXL Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    description:
      "100% Linen Yarn dyed stripe Elastic waistband Wide leg Full length pant Side seam pockets Slits at hem The Aisha Linen Pant is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a relaxed wide leg, full length pant. Features include an elasticated waistband, side seam pockets and slits at hem",
    availability: "out of stock",
    price: "130.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Wide-leg > Linen",
    brand: "Nude Lucy",
    gtin: 9356041449188,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XXL",
    custom_label_2: "NU25863-Amber-Stri-XXL",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-pant-amber-stripe?variant=45858254913703&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_006.jpg?v=1721403344",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_002.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_040.jpg?v=1721403344",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S08_035.jpg?v=1721403344",
    ],
    short_title:
      "Womens Aisha Linen Pant XXL Linen Yarn Dyed Stripe Wide Leg Full Length Elastic Waistband Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049753255&currency=USD",
    item_group_id: 8299776737447,
    id: 45858049753255,
    title:
      "Womens Aisha Linen Shirt XXS Linen Yarn Dyed Stripe Oversized Drop Shoulder Button Front Pocket",
    description:
      "100% Linen Yarn dyed stripe Oversized Shirt Drop shoulder Button front Contrast Button detail Front patch pocket The Aisha Linen Shirt is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is oversized with a drop shoulder and length finishing below the hips. Features include classic shirt details, contrast coloured button detail and front patch pocket.",
    availability: "out of stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Oversized > Button-front",
    brand: "Nude Lucy",
    gtin: 9356041459095,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XXS",
    custom_label_2: "NU26133-Amber-Stri-XXS",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049753255&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_054.jpg?v=1721403891",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/10_8dcf3de5-69a6-4e44-963f-2ffb0e26a780.png?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_028.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_033.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_048.jpg?v=1721403891",
    ],
    short_title:
      "Womens Aisha Linen Shirt XXS Linen Yarn Dyed Stripe Oversized Drop Shoulder Button Front Pocket",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049786023&currency=USD",
    item_group_id: 8299776737447,
    id: 45858049786023,
    title:
      "Womens Aisha Linen Shirt XS Linen Yarn Dyed Stripe Oversized Drop Shoulder Button Front Pocket",
    description:
      "100% Linen Yarn dyed stripe Oversized Shirt Drop shoulder Button front Contrast Button detail Front patch pocket The Aisha Linen Shirt is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is oversized with a drop shoulder and length finishing below the hips. Features include classic shirt details, contrast coloured button detail and front patch pocket.",
    availability: "out of stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Oversized > Button-front",
    brand: "Nude Lucy",
    gtin: 9356041459101,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XS",
    custom_label_2: "NU26133-Amber-Stri-XS",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049786023&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_054.jpg?v=1721403891",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/10_8dcf3de5-69a6-4e44-963f-2ffb0e26a780.png?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_028.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_033.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_048.jpg?v=1721403891",
    ],
    short_title:
      "Womens Aisha Linen Shirt XS Linen Yarn Dyed Stripe Oversized Drop Shoulder Button Front Pocket",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049818791&currency=USD",
    item_group_id: 8299776737447,
    id: 45858049818791,
    title: "Womens Aisha Linen Shirt Linen Stripes Size S",
    description:
      "100% Linen Yarn dyed stripe Oversized Shirt Drop shoulder Button front Contrast Button detail Front patch pocket The Aisha Linen Shirt is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is oversized with a drop shoulder and length finishing below the hips. Features include classic shirt details, contrast coloured button detail and front patch pocket.",
    availability: "out of stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Oversized > Button-front",
    brand: "Nude Lucy",
    gtin: 9356041459118,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "S",
    custom_label_2: "NU26133-Amber-Stri-S",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049818791&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_054.jpg?v=1721403891",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/10_8dcf3de5-69a6-4e44-963f-2ffb0e26a780.png?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_028.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_033.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_048.jpg?v=1721403891",
    ],
    short_title: "Womens Aisha Linen Shirt Linen Stripes Size S",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049851559&currency=USD",
    item_group_id: 8299776737447,
    id: 45858049851559,
    title:
      "Womens Aisha Linen Shirt Oversized Yarn Dyed Stripe Linen Drop Shoulder Size M",
    description:
      "100% Linen Yarn dyed stripe Oversized Shirt Drop shoulder Button front Contrast Button detail Front patch pocket The Aisha Linen Shirt is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is oversized with a drop shoulder and length finishing below the hips. Features include classic shirt details, contrast coloured button detail and front patch pocket.",
    availability: "out of stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Oversized > Button-front",
    brand: "Nude Lucy",
    gtin: 9356041459125,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "M",
    custom_label_2: "NU26133-Amber-Stri-M",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049851559&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_054.jpg?v=1721403891",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/10_8dcf3de5-69a6-4e44-963f-2ffb0e26a780.png?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_028.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_033.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_048.jpg?v=1721403891",
    ],
    short_title:
      "Womens Aisha Linen Shirt Oversized Yarn Dyed Stripe Linen Drop Shoulder Size M",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049884327&currency=USD",
    item_group_id: 8299776737447,
    id: 45858049884327,
    title:
      "Womens Aisha Linen Shirt Oversized Yarn Dyed Stripe Linen Drop Shoulder Size L",
    description:
      "100% Linen Yarn dyed stripe Oversized Shirt Drop shoulder Button front Contrast Button detail Front patch pocket The Aisha Linen Shirt is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is oversized with a drop shoulder and length finishing below the hips. Features include classic shirt details, contrast coloured button detail and front patch pocket.",
    availability: "out of stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Oversized > Button-front",
    brand: "Nude Lucy",
    gtin: 9356041459132,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "L",
    custom_label_2: "NU26133-Amber-Stri-L",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049884327&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_054.jpg?v=1721403891",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/10_8dcf3de5-69a6-4e44-963f-2ffb0e26a780.png?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_028.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_033.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_048.jpg?v=1721403891",
    ],
    short_title:
      "Womens Aisha Linen Shirt Oversized Yarn Dyed Stripe Linen Drop Shoulder Size L",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049917095&currency=USD",
    item_group_id: 8299776737447,
    id: 45858049917095,
    title:
      "Womens Aisha Linen Shirt Oversized Yarn Dyed Stripe Linen Drop Shoulder Size XL",
    description:
      "100% Linen Yarn dyed stripe Oversized Shirt Drop shoulder Button front Contrast Button detail Front patch pocket The Aisha Linen Shirt is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is oversized with a drop shoulder and length finishing below the hips. Features include classic shirt details, contrast coloured button detail and front patch pocket.",
    availability: "out of stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Oversized > Button-front",
    brand: "Nude Lucy",
    gtin: 9356041459149,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XL",
    custom_label_2: "NU26133-Amber-Stri-XL",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049917095&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_054.jpg?v=1721403891",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/10_8dcf3de5-69a6-4e44-963f-2ffb0e26a780.png?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_028.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_033.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_048.jpg?v=1721403891",
    ],
    short_title:
      "Womens Aisha Linen Shirt Oversized Yarn Dyed Stripe Linen Drop Shoulder Size XL",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049949863&currency=USD",
    item_group_id: 8299776737447,
    id: 45858049949863,
    title:
      "Womens Aisha Linen Shirt Oversized Yarn Dyed Stripe Linen Drop Shoulder Size XXL",
    description:
      "100% Linen Yarn dyed stripe Oversized Shirt Drop shoulder Button front Contrast Button detail Front patch pocket The Aisha Linen Shirt is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is oversized with a drop shoulder and length finishing below the hips. Features include classic shirt details, contrast coloured button detail and front patch pocket.",
    availability: "out of stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Linen > Casual",
    brand: "Nude Lucy",
    gtin: 9356041459156,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XXL",
    custom_label_2: "NU26133-Amber-Stri-XXL",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-shirt-amber-stripe?variant=45858049949863&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_054.jpg?v=1721403891",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/10_8dcf3de5-69a6-4e44-963f-2ffb0e26a780.png?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_028.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_033.jpg?v=1721403891",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S06_048.jpg?v=1721403891",
    ],
    short_title:
      "Womens Aisha Linen Shirt Oversized Yarn Dyed Stripe Linen Drop Shoulder Size XXL",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008236199&currency=USD",
    item_group_id: 8299770151079,
    id: 45858008236199,
    title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size XXS",
    description:
      "100% Linen Yarn dyed stripe Tailored Short High Waist Fly Front Elasticated at Back Waistband Side Seam Pockets The Aisha Linen Short is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a classic tailored shape worn high on the waist and relaxed through hip and leg. Features include a functioning fly front, elasticated on the back waistband and front pleats.",
    availability: "out of stock",
    price: "100.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shorts",
    product_type: "Womens > Apparel > Shorts > Linen > Tailored",
    brand: "Nude Lucy",
    gtin: 9356041449195,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XXS",
    custom_label_2: "NU25864-Amber-Stri-XXS",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008236199&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_045.jpg?v=1721403419",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_011.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_019.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_028.jpg?v=1721403419",
    ],
    short_title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size XXS",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008268967&currency=USD",
    item_group_id: 8299770151079,
    id: 45858008268967,
    title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size XS",
    description:
      "100% Linen Yarn dyed stripe Tailored Short High Waist Fly Front Elasticated at Back Waistband Side Seam Pockets The Aisha Linen Short is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a classic tailored shape worn high on the waist and relaxed through hip and leg. Features include a functioning fly front, elasticated on the back waistband and front pleats.",
    availability: "out of stock",
    price: "100.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shorts",
    product_type: "Womens > Apparel > Shorts > Linen > High Waist",
    brand: "Nude Lucy",
    gtin: 9356041449201,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XS",
    custom_label_2: "NU25864-Amber-Stri-XS",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008268967&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_045.jpg?v=1721403419",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_011.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_019.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_028.jpg?v=1721403419",
    ],
    short_title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size XS",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008301735&currency=USD",
    item_group_id: 8299770151079,
    id: 45858008301735,
    title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size S",
    description:
      "100% Linen Yarn dyed stripe Tailored Short High Waist Fly Front Elasticated at Back Waistband Side Seam Pockets The Aisha Linen Short is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a classic tailored shape worn high on the waist and relaxed through hip and leg. Features include a functioning fly front, elasticated on the back waistband and front pleats.",
    availability: "out of stock",
    price: "100.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shorts",
    product_type: "Womens > Apparel > Shorts > Linen > Elasticated",
    brand: "Nude Lucy",
    gtin: 9356041449218,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "S",
    custom_label_2: "NU25864-Amber-Stri-S",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008301735&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_045.jpg?v=1721403419",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_011.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_019.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_028.jpg?v=1721403419",
    ],
    short_title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size S",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008334503&currency=USD",
    item_group_id: 8299770151079,
    id: 45858008334503,
    title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size M",
    description:
      "100% Linen Yarn dyed stripe Tailored Short High Waist Fly Front Elasticated at Back Waistband Side Seam Pockets The Aisha Linen Short is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a classic tailored shape worn high on the waist and relaxed through hip and leg. Features include a functioning fly front, elasticated on the back waistband and front pleats.",
    availability: "out of stock",
    price: "100.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shorts",
    product_type: "Womens > Apparel > Shorts > Linen > Pleated",
    brand: "Nude Lucy",
    gtin: 9356041449225,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "M",
    custom_label_2: "NU25864-Amber-Stri-M",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008334503&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_045.jpg?v=1721403419",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_011.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_019.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_028.jpg?v=1721403419",
    ],
    short_title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size M",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008367271&currency=USD",
    item_group_id: 8299770151079,
    id: 45858008367271,
    title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size L",
    description:
      "100% Linen Yarn dyed stripe Tailored Short High Waist Fly Front Elasticated at Back Waistband Side Seam Pockets The Aisha Linen Short is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a classic tailored shape worn high on the waist and relaxed through hip and leg. Features include a functioning fly front, elasticated on the back waistband and front pleats.",
    availability: "out of stock",
    price: "100.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shorts",
    product_type: "Womens > Apparel > Shorts > Casual > Tailored",
    brand: "Nude Lucy",
    gtin: 9356041449232,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "L",
    custom_label_2: "NU25864-Amber-Stri-L",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008367271&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_045.jpg?v=1721403419",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_011.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_019.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_028.jpg?v=1721403419",
    ],
    short_title:
      "Womens Aisha Linen Short Tailored Yarn Dyed Stripe Linen High Waist Size L",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008400039&currency=USD",
    item_group_id: 8299770151079,
    id: 45858008400039,
    title: "Womens Aisha Linen Short Linen Stripes Size Xl",
    description:
      "100% Linen Yarn dyed stripe Tailored Short High Waist Fly Front Elasticated at Back Waistband Side Seam Pockets The Aisha Linen Short is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a classic tailored shape worn high on the waist and relaxed through hip and leg. Features include a functioning fly front, elasticated on the back waistband and front pleats.",
    availability: "out of stock",
    price: "100.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shorts",
    product_type: "Womens > Apparel > Shorts > Linen > Comfort",
    brand: "Nude Lucy",
    gtin: 9356041449249,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XL",
    custom_label_2: "NU25864-Amber-Stri-XL",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008400039&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_045.jpg?v=1721403419",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_011.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_019.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_028.jpg?v=1721403419",
    ],
    short_title: "Womens Aisha Linen Short Linen Stripes Size Xl",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008432807&currency=USD",
    item_group_id: 8299770151079,
    id: 45858008432807,
    title:
      "Womens Aisha Linen Shorts Size XXL Tailored High Waist Fly Front Side Pockets Amber Stripe",
    description:
      "100% Linen Yarn dyed stripe Tailored Short High Waist Fly Front Elasticated at Back Waistband Side Seam Pockets The Aisha Linen Short is made from our premium linen fabrication in our exclusive Amber Stripe. The silhouette is a classic tailored shape worn high on the waist and relaxed through hip and leg. Features include a functioning fly front, elasticated on the back waistband and front pleats.",
    availability: "out of stock",
    price: "100.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shorts",
    product_type: "Womens > Apparel > Shorts > Linen > Classic",
    brand: "Nude Lucy",
    gtin: 9356041449256,
    condition: "new",
    age_group: "adult",
    colour: "Stripes",
    gender: "Female",
    material: "Linen",
    size: "XXL",
    custom_label_2: "NU25864-Amber-Stri-XXL",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aisha-linen-short-amber-stripe?variant=45858008432807&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_045.jpg?v=1721403419",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_011.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_019.jpg?v=1721403419",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S05_028.jpg?v=1721403419",
    ],
    short_title:
      "Womens Aisha Linen Shorts Size XXL Tailored High Waist Fly Front Side Pockets Amber Stripe",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alcott-bomber-bayleaf?variant=45858122465447&currency=USD",
    item_group_id: 8299787124903,
    id: 45858122465447,
    title:
      "Womens Alcott Bomber Jacket Size XS S Recycled Nylon Oversized Zipper Ribbed Cuffs Contrast Lining",
    description:
      "Recycled Nylon fabrication Oversized bomber jacket Zipper opening Gathered detail at back of sleeves Ribbed cuff and hem Fully lined in contrast colour with diamond shape quilting The Alcott Bomber is made from a lightweight recycled nylon and has lightweight padding. The silhouette is oversized with length finishing above the hips. Features include zipper opening at centre front, gathered detail on back sleeve and ribbed cuff and hem. The jacket is fully lined in contrast colour with diamond shape quilting.",
    availability: "out of stock",
    price: "200.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Bomber > Recycled",
    brand: "Nude Lucy",
    gtin: 9356041562320,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    size: "XS/S",
    custom_label_2: "NU26002-Bayleaf-XS/S",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alcott-bomber-bayleaf?variant=45858122465447&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_006.jpg?v=1721403732",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/231212_NUDELUCY_FEB_05_0738.jpg?v=1721403732",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_004.jpg?v=1721403732",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_012.jpg?v=1721403732",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_022.jpg?v=1721403732",
    ],
    short_title:
      "Womens Alcott Bomber Jacket Size XS S Recycled Nylon Oversized Zipper Ribbed Cuffs Contrast Lining",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alcott-bomber-bayleaf?variant=45858122498215&currency=USD",
    item_group_id: 8299787124903,
    id: 45858122498215,
    title:
      "Womens Alcott Bomber Jacket Size S M Recycled Nylon Oversized Zipper Ribbed Cuffs Contrast Lining",
    description:
      "Recycled Nylon fabrication Oversized bomber jacket Zipper opening Gathered detail at back of sleeves Ribbed cuff and hem Fully lined in contrast colour with diamond shape quilting The Alcott Bomber is made from a lightweight recycled nylon and has lightweight padding. The silhouette is oversized with length finishing above the hips. Features include zipper opening at centre front, gathered detail on back sleeve and ribbed cuff and hem. The jacket is fully lined in contrast colour with diamond shape quilting.",
    availability: "out of stock",
    price: "200.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Bomber > Quilted",
    brand: "Nude Lucy",
    gtin: 9356041487968,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    size: "S/M",
    custom_label_2: "NU26002-Bayleaf-S/M",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alcott-bomber-bayleaf?variant=45858122498215&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_006.jpg?v=1721403732",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/231212_NUDELUCY_FEB_05_0738.jpg?v=1721403732",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_004.jpg?v=1721403732",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_012.jpg?v=1721403732",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_022.jpg?v=1721403732",
    ],
    short_title:
      "Womens Alcott Bomber Jacket Size S M Recycled Nylon Oversized Zipper Ribbed Cuffs Contrast Lining",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alcott-bomber-bayleaf?variant=45858122530983&currency=USD",
    item_group_id: 8299787124903,
    id: 45858122530983,
    title:
      "Womens Alcott Bomber Jacket Size M L Recycled Nylon Oversized Zipper Ribbed Cuffs Contrast Lining",
    description:
      "Recycled Nylon fabrication Oversized bomber jacket Zipper opening Gathered detail at back of sleeves Ribbed cuff and hem Fully lined in contrast colour with diamond shape quilting The Alcott Bomber is made from a lightweight recycled nylon and has lightweight padding. The silhouette is oversized with length finishing above the hips. Features include zipper opening at centre front, gathered detail on back sleeve and ribbed cuff and hem. The jacket is fully lined in contrast colour with diamond shape quilting.",
    availability: "out of stock",
    price: "200.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Bomber > Outerwear",
    brand: "Nude Lucy",
    gtin: 9356041487975,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    size: "M/L",
    custom_label_2: "NU26002-Bayleaf-M/L",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alcott-bomber-bayleaf?variant=45858122530983&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_006.jpg?v=1721403732",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/231212_NUDELUCY_FEB_05_0738.jpg?v=1721403732",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_004.jpg?v=1721403732",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_012.jpg?v=1721403732",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S19_022.jpg?v=1721403732",
    ],
    short_title:
      "Womens Alcott Bomber Jacket Size M L Recycled Nylon Oversized Zipper Ribbed Cuffs Contrast Lining",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050867367&currency=USD",
    item_group_id: 8299776934055,
    id: 45858050867367,
    title:
      "Womens Alton Mesh Long Sleeve Top Size XXS Stretch Jersey High Cowl Neckline Front Seam Pink",
    description:
      "Stretch jersey fabric Long sleeve top The Alton Mesh LS Top is made from a stretch jersey which has a dry hand feel. The silhouette is fitted with long sleeves and length finishing above the hips. Features include a high cowl neckline and front seam detail.",
    availability: "out of stock",
    price: "90.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Ladies > apparel > LS Tops > Casual > Jersey",
    brand: "Nude Lucy",
    gtin: 9356041565147,
    condition: "new",
    age_group: "adult",
    colour: "Pinks",
    gender: "Female",
    size: "XXS",
    custom_label_2: "NU26226-Quartz-XXS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050867367&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240712_NUDE_LUCY_20_2481.jpg?v=1721745788",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0496.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0506.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0509.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0516.jpg?v=1721404361",
    ],
    short_title:
      "Womens Alton Mesh Long Sleeve Top Size XXS Stretch Jersey High Cowl Neckline Front Seam Pink",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050900135&currency=USD",
    item_group_id: 8299776934055,
    id: 45858050900135,
    title:
      "Womens Alton Mesh Long Sleeve Top Size XS Stretch Jersey High Cowl Neckline Front Seam Pink",
    description:
      "Stretch jersey fabric Long sleeve top The Alton Mesh LS Top is made from a stretch jersey which has a dry hand feel. The silhouette is fitted with long sleeves and length finishing above the hips. Features include a high cowl neckline and front seam detail.",
    availability: "out of stock",
    price: "90.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Ladies > apparel > LS Tops > Mesh > Stretch",
    brand: "Nude Lucy",
    gtin: 9356041565154,
    condition: "new",
    age_group: "adult",
    colour: "Pinks",
    gender: "Female",
    size: "XS",
    custom_label_2: "NU26226-Quartz-XS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050900135&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240712_NUDE_LUCY_20_2481.jpg?v=1721745788",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0496.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0506.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0509.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0516.jpg?v=1721404361",
    ],
    short_title:
      "Womens Alton Mesh Long Sleeve Top Size XS Stretch Jersey High Cowl Neckline Front Seam Pink",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050932903&currency=USD",
    item_group_id: 8299776934055,
    id: 45858050932903,
    title:
      "Womens Alton Mesh Long Sleeve Top Size S Stretch Jersey High Cowl Neckline Front Seam Pink",
    description:
      "Stretch jersey fabric Long sleeve top The Alton Mesh LS Top is made from a stretch jersey which has a dry hand feel. The silhouette is fitted with long sleeves and length finishing above the hips. Features include a high cowl neckline and front seam detail.",
    availability: "out of stock",
    price: "90.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Ladies > apparel > LS Tops > Mesh > Stretch",
    brand: "Nude Lucy",
    gtin: 9356041565161,
    condition: "new",
    age_group: "adult",
    colour: "Pinks",
    gender: "Female",
    size: "S",
    custom_label_2: "NU26226-Quartz-S",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050932903&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240712_NUDE_LUCY_20_2481.jpg?v=1721745788",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0496.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0506.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0509.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0516.jpg?v=1721404361",
    ],
    short_title:
      "Womens Alton Mesh Long Sleeve Top Size S Stretch Jersey High Cowl Neckline Front Seam Pink",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050965671&currency=USD",
    item_group_id: 8299776934055,
    id: 45858050965671,
    title:
      "Womens Alton Mesh Long Sleeve Top Size M Stretch Jersey High Cowl Neckline Front Seam Pink",
    description:
      "Stretch jersey fabric Long sleeve top The Alton Mesh LS Top is made from a stretch jersey which has a dry hand feel. The silhouette is fitted with long sleeves and length finishing above the hips. Features include a high cowl neckline and front seam detail.",
    availability: "out of stock",
    price: "90.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Ladies > apparel > LS Tops > Mesh > Stretch",
    brand: "Nude Lucy",
    gtin: 9356041565178,
    condition: "new",
    age_group: "adult",
    colour: "Pinks",
    gender: "Female",
    size: "M",
    custom_label_2: "NU26226-Quartz-M",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050965671&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240712_NUDE_LUCY_20_2481.jpg?v=1721745788",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0496.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0506.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0509.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0516.jpg?v=1721404361",
    ],
    short_title:
      "Womens Alton Mesh Long Sleeve Top Size M Stretch Jersey High Cowl Neckline Front Seam Pink",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050998439&currency=USD",
    item_group_id: 8299776934055,
    id: 45858050998439,
    title:
      "Womens Alton Mesh Long Sleeve Top Size L Stretch Jersey High Cowl Neckline Front Seam Pink",
    description:
      "Stretch jersey fabric Long sleeve top The Alton Mesh LS Top is made from a stretch jersey which has a dry hand feel. The silhouette is fitted with long sleeves and length finishing above the hips. Features include a high cowl neckline and front seam detail.",
    availability: "out of stock",
    price: "90.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Ladies > apparel > LS Tops > Mesh > Stretch",
    brand: "Nude Lucy",
    gtin: 9356041565185,
    condition: "new",
    age_group: "adult",
    colour: "Pinks",
    gender: "Female",
    size: "L",
    custom_label_2: "NU26226-Quartz-L",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858050998439&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240712_NUDE_LUCY_20_2481.jpg?v=1721745788",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0496.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0506.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0509.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0516.jpg?v=1721404361",
    ],
    short_title:
      "Womens Alton Mesh Long Sleeve Top Size L Stretch Jersey High Cowl Neckline Front Seam Pink",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858051031207&currency=USD",
    item_group_id: 8299776934055,
    id: 45858051031207,
    title: "Womens Alton Mesh Ls Top Pinks Size Xl",
    description:
      "Stretch jersey fabric Long sleeve top The Alton Mesh LS Top is made from a stretch jersey which has a dry hand feel. The silhouette is fitted with long sleeves and length finishing above the hips. Features include a high cowl neckline and front seam detail.",
    availability: "out of stock",
    price: "90.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Ladies > apparel > LS Tops > Mesh > Stretch",
    brand: "Nude Lucy",
    gtin: 9356041565192,
    condition: "new",
    age_group: "adult",
    colour: "Pinks",
    gender: "Female",
    size: "XL",
    custom_label_2: "NU26226-Quartz-XL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858051031207&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240712_NUDE_LUCY_20_2481.jpg?v=1721745788",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0496.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0506.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0509.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0516.jpg?v=1721404361",
    ],
    short_title: "Womens Alton Mesh Ls Top Pinks Size Xl",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858051063975&currency=USD",
    item_group_id: 8299776934055,
    id: 45858051063975,
    title:
      "Womens Alton Mesh LS Top Stretch Jersey Long Sleeve Fitted Pink Size XXL",
    description:
      "Stretch jersey fabric Long sleeve top The Alton Mesh LS Top is made from a stretch jersey which has a dry hand feel. The silhouette is fitted with long sleeves and length finishing above the hips. Features include a high cowl neckline and front seam detail.",
    availability: "out of stock",
    price: "90.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Ladies > apparel > LS Tops > Mesh > Stretch",
    brand: "Nude Lucy",
    gtin: 9356041565208,
    condition: "new",
    age_group: "adult",
    colour: "Pinks",
    gender: "Female",
    size: "XXL",
    custom_label_2: "NU26226-Quartz-XXL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/alton-mesh-ls-top-quartz?variant=45858051063975&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240712_NUDE_LUCY_20_2481.jpg?v=1721745788",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0496.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0506.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0509.jpg?v=1721404361",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S18-24474-Nude_Lucy-0516.jpg?v=1721404361",
    ],
    short_title:
      "Womens Alton Mesh LS Top Stretch Jersey Long Sleeve Fitted Pink Size XXL",
    enabled: true,
  },
  {
    quantity: 8,
    link: "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948729511&currency=USD",
    item_group_id: 8299761664167,
    id: 45857948729511,
    title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size XXS",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in white is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Maxi > Bias-Cut",
    brand: "Nude Lucy",
    gtin: 9356041447306,
    condition: "new",
    age_group: "adult",
    colour: "Whites",
    gender: "Female",
    material: "Linen",
    size: "XXS",
    custom_label_2: "NU25829-White-XXS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948729511&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1130.jpg?v=1722004761",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1128.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1132.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1141.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S12_004.jpg?v=1721403297",
    ],
    short_title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size XXS",
    enabled: true,
  },
  {
    quantity: 26,
    link: "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948762279&currency=USD",
    item_group_id: 8299761664167,
    id: 45857948762279,
    title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size XS",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in white is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Maxi > Bias-Cut",
    brand: "Nude Lucy",
    gtin: 9356041447313,
    condition: "new",
    age_group: "adult",
    colour: "Whites",
    gender: "Female",
    material: "Linen",
    size: "XS",
    custom_label_2: "NU25829-White-XS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948762279&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1130.jpg?v=1722004761",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1128.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1132.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1141.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S12_004.jpg?v=1721403297",
    ],
    short_title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size XS",
    enabled: true,
  },
  {
    quantity: 14,
    link: "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948795047&currency=USD",
    item_group_id: 8299761664167,
    id: 45857948795047,
    title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size S",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in white is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447320,
    condition: "new",
    age_group: "adult",
    colour: "Whites",
    gender: "Female",
    material: "Linen",
    size: "S",
    custom_label_2: "NU25829-White-S",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948795047&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1130.jpg?v=1722004761",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1128.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1132.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1141.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S12_004.jpg?v=1721403297",
    ],
    short_title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size S",
    enabled: true,
  },
  {
    quantity: 22,
    link: "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948827815&currency=USD",
    item_group_id: 8299761664167,
    id: 45857948827815,
    title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size M",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in white is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447337,
    condition: "new",
    age_group: "adult",
    colour: "Whites",
    gender: "Female",
    material: "Linen",
    size: "M",
    custom_label_2: "NU25829-White-M",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948827815&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1130.jpg?v=1722004761",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1128.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1132.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1141.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S12_004.jpg?v=1721403297",
    ],
    short_title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size M",
    enabled: true,
  },
  {
    quantity: 4,
    link: "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948860583&currency=USD",
    item_group_id: 8299761664167,
    id: 45857948860583,
    title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size L",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in white is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447344,
    condition: "new",
    age_group: "adult",
    colour: "Whites",
    gender: "Female",
    material: "Linen",
    size: "L",
    custom_label_2: "NU25829-White-L",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948860583&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1130.jpg?v=1722004761",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1128.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1132.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1141.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S12_004.jpg?v=1721403297",
    ],
    short_title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size L",
    enabled: true,
  },
  {
    quantity: 45,
    link: "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948893351&currency=USD",
    item_group_id: 8299761664167,
    id: 45857948893351,
    title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size XL",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in white is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447351,
    condition: "new",
    age_group: "adult",
    colour: "Whites",
    gender: "Female",
    material: "Linen",
    size: "XL",
    custom_label_2: "NU25829-White-XL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948893351&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1130.jpg?v=1722004761",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1128.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1132.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1141.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S12_004.jpg?v=1721403297",
    ],
    short_title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size XL",
    enabled: true,
  },
  {
    quantity: 67,
    link: "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948926119&currency=USD",
    item_group_id: 8299761664167,
    id: 45857948926119,
    title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size XXL",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in white is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447368,
    condition: "new",
    age_group: "adult",
    colour: "Whites",
    gender: "Female",
    material: "Linen",
    size: "XXL",
    custom_label_2: "NU25829-White-XXL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-white?variant=45857948926119&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1130.jpg?v=1722004761",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1128.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1132.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S45-24474-NudeLucy-1141.jpg?v=1721831832",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_JAN24_SCARLETT-S12_004.jpg?v=1721403297",
    ],
    short_title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband White Size XXL",
    enabled: true,
  },
  {
    quantity: 1,
    link: "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953579175&currency=USD",
    item_group_id: 8299762352295,
    id: 45857953579175,
    title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband Black Size XXS",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in black is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447238,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    material: "Linen",
    size: "XXS",
    custom_label_2: "NU25829-Black-XXS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953579175&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1108.jpg?v=1722004796",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1107.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1113.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1124.jpg?v=1722004797",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1126.jpg?v=1722004796",
    ],
    short_title:
      "Womens Amani Linen Bias Cut Maxi Skirt Encased Elasticated Waistband Black Size XXS",
    enabled: true,
  },
  {
    quantity: 33,
    link: "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953611943&currency=USD",
    item_group_id: 8299762352295,
    id: 45857953611943,
    title: "Womens Amani Linen Skirt Linen Blacks Size Xs",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in black is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447245,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    material: "Linen",
    size: "XS",
    custom_label_2: "NU25829-Black-XS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953611943&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1108.jpg?v=1722004796",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1107.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1113.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1124.jpg?v=1722004797",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1126.jpg?v=1722004796",
    ],
    short_title: "Womens Amani Linen Skirt Linen Blacks Size Xs",
    enabled: true,
  },
  {
    quantity: 55,
    link: "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953644711&currency=USD",
    item_group_id: 8299762352295,
    id: 45857953644711,
    title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size S",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in black is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Casual > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447252,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    material: "Linen",
    size: "S",
    custom_label_2: "NU25829-Black-S",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953644711&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1108.jpg?v=1722004796",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1107.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1113.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1124.jpg?v=1722004797",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1126.jpg?v=1722004796",
    ],
    short_title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size S",
    enabled: true,
  },
  {
    quantity: 17,
    link: "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953677479&currency=USD",
    item_group_id: 8299762352295,
    id: 45857953677479,
    title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size M",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in black is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447269,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    material: "Linen",
    size: "M",
    custom_label_2: "NU25829-Black-M",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953677479&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1108.jpg?v=1722004796",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1107.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1113.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1124.jpg?v=1722004797",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1126.jpg?v=1722004796",
    ],
    short_title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size M",
    enabled: true,
  },
  {
    quantity: 8,
    link: "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953710247&currency=USD",
    item_group_id: 8299762352295,
    id: 45857953710247,
    title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size L",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in black is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447276,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    material: "Linen",
    size: "L",
    custom_label_2: "NU25829-Black-L",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953710247&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1108.jpg?v=1722004796",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1107.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1113.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1124.jpg?v=1722004797",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1126.jpg?v=1722004796",
    ],
    short_title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size L",
    enabled: true,
  },
  {
    quantity: 4,
    link: "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953743015&currency=USD",
    item_group_id: 8299762352295,
    id: 45857953743015,
    title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size XL",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in black is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447283,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    material: "Linen",
    size: "XL",
    custom_label_2: "NU25829-Black-XL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953743015&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1108.jpg?v=1722004796",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1107.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1113.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1124.jpg?v=1722004797",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1126.jpg?v=1722004796",
    ],
    short_title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size XL",
    enabled: true,
  },
  {
    quantity: 17,
    link: "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953775783&currency=USD",
    item_group_id: 8299762352295,
    id: 45857953775783,
    title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size XXL",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in black is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041447290,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    material: "Linen",
    size: "XXL",
    custom_label_2: "NU25829-Black-XXL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-black?variant=45857953775783&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1108.jpg?v=1722004796",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1107.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1113.jpg?v=1722004796",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1124.jpg?v=1722004797",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S44-24474-NudeLucy-1126.jpg?v=1722004796",
    ],
    short_title:
      "Amani Womens Linen Skirt Bias Cut Maxi Black Encased Elasticated Waistband Size XXL",
    enabled: true,
  },
  {
    quantity: 7,
    link: "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012037287&currency=USD",
    item_group_id: 8299770708135,
    id: 45858012037287,
    title:
      "Amani Womens Linen Skirt Bias Cut Maxi Cream Encased Elasticated Waistband Size XXS",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in natural is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041459231,
    condition: "new",
    age_group: "adult",
    colour: "Creams",
    gender: "Female",
    material: "Linen",
    size: "XXS",
    custom_label_2: "NU25829-Natural-XXS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012037287&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1266.jpg?v=1721919065",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1267.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1271.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1274.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1273.jpg?v=1721919065",
    ],
    short_title:
      "Amani Womens Linen Skirt Bias Cut Maxi Cream Encased Elasticated Waistband Size XXS",
    enabled: true,
  },
  {
    quantity: 17,
    link: "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012070055&currency=USD",
    item_group_id: 8299770708135,
    id: 45858012070055,
    title:
      "Amani Womens Linen Skirt Bias Cut Maxi Cream Encased Elasticated Waistband Size XS",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in natural is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041459248,
    condition: "new",
    age_group: "adult",
    colour: "Creams",
    gender: "Female",
    material: "Linen",
    size: "XS",
    custom_label_2: "NU25829-Natural-XS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012070055&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1266.jpg?v=1721919065",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1267.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1271.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1274.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1273.jpg?v=1721919065",
    ],
    short_title:
      "Amani Womens Linen Skirt Bias Cut Maxi Cream Encased Elasticated Waistband Size XS",
    enabled: true,
  },
  {
    quantity: 21,
    link: "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012102823&currency=USD",
    item_group_id: 8299770708135,
    id: 45858012102823,
    title:
      "Amani Womens Linen Skirt Bias Cut Maxi Cream Encased Elasticated Waistband Size S",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in natural is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041459255,
    condition: "new",
    age_group: "adult",
    colour: "Creams",
    gender: "Female",
    material: "Linen",
    size: "S",
    custom_label_2: "NU25829-Natural-S",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012102823&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1266.jpg?v=1721919065",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1267.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1271.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1274.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1273.jpg?v=1721919065",
    ],
    short_title:
      "Amani Womens Linen Skirt Bias Cut Maxi Cream Encased Elasticated Waistband Size S",
    enabled: true,
  },
  {
    quantity: 18,
    link: "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012135591&currency=USD",
    item_group_id: 8299770708135,
    id: 45858012135591,
    title:
      "Amani Womens Linen Skirt Bias Cut Maxi Cream Encased Elasticated Waistband Size M",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in natural is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041459262,
    condition: "new",
    age_group: "adult",
    colour: "Creams",
    gender: "Female",
    material: "Linen",
    size: "M",
    custom_label_2: "NU25829-Natural-M",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012135591&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1266.jpg?v=1721919065",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1267.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1271.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1274.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1273.jpg?v=1721919065",
    ],
    short_title:
      "Amani Womens Linen Skirt Bias Cut Maxi Cream Encased Elasticated Waistband Size M",
    enabled: true,
  },
  {
    quantity: 5,
    link: "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012168359&currency=USD",
    item_group_id: 8299770708135,
    id: 45858012168359,
    title: "Womens Amani Linen Skirt Linen Creams Size L",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in natural is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041459279,
    condition: "new",
    age_group: "adult",
    colour: "Creams",
    gender: "Female",
    material: "Linen",
    size: "L",
    custom_label_2: "NU25829-Natural-L",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012168359&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1266.jpg?v=1721919065",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1267.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1271.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1274.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1273.jpg?v=1721919065",
    ],
    short_title: "Womens Amani Linen Skirt Linen Creams Size L",
    enabled: true,
  },
  {
    quantity: 4,
    link: "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012201127&currency=USD",
    item_group_id: 8299770708135,
    id: 45858012201127,
    title:
      "Amani Linen Skirt Womens XL Premium Linen Bias Cut Maxi Skirt Creams Elasticated Waistband",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in natural is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041459286,
    condition: "new",
    age_group: "adult",
    colour: "Creams",
    gender: "Female",
    material: "Linen",
    size: "XL",
    custom_label_2: "NU25829-Natural-XL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012201127&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1266.jpg?v=1721919065",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1267.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1271.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1274.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1273.jpg?v=1721919065",
    ],
    short_title:
      "Amani Linen Skirt Womens XL Premium Linen Bias Cut Maxi Skirt Creams Elasticated Waistband",
    enabled: true,
  },
  {
    quantity: 22,
    link: "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012233895&currency=USD",
    item_group_id: 8299770708135,
    id: 45858012233895,
    title:
      "Amani Linen Skirt Womens XXL Premium Linen Bias Cut Maxi Skirt Creams Elasticated Waistband",
    description:
      "Premium linen Bias cut maxi skirt Encased elasticated waistband Self cut draw string The Amani Linen Skirt in natural is made from a premium linen which has been washed for a smooth, soft hand feel. Cut on the bias, this silhouette finishes just above the ankles. Features include encased elasticated waistband with a self cut draw string at centre front.",
    availability: "in stock",
    price: "120.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Skirts",
    product_type: "Womens > Apparel > Skirts > Linen > Maxi",
    brand: "Nude Lucy",
    gtin: 9356041459293,
    condition: "new",
    age_group: "adult",
    colour: "Creams",
    gender: "Female",
    material: "Linen",
    size: "XXL",
    custom_label_2: "NU25829-Natural-XXL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/amani-linen-skirt-natural?variant=45858012233895&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1266.jpg?v=1721919065",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1267.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1271.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1274.jpg?v=1721919065",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S53-24474-NudeLucy-1273.jpg?v=1721919065",
    ],
    short_title:
      "Amani Linen Skirt Womens XXL Premium Linen Bias Cut Maxi Skirt Creams Elasticated Waistband",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814282407&currency=USD",
    item_group_id: 8299746197671,
    id: 45857814282407,
    title:
      "Ari Long Sleeve Cupro Shirt Womens XXS Premium Relaxed Black Shirt Classic Details Patch Pockets",
    description:
      "Premium cupro Relaxed shirt Classic shirt details Patch pockets The Ari Long Sleeve Cupro Shirt is made in our signature cupro with a soft, sueded hand feel. The silhouette is relaxed and oversized through the body with the length finishing below the hips. Features include classic shirt detailing with front patch pockets. Wear it open as a soft jacket or layering piece. Our cupro is washed in an intricate process which can result in slight variation in colour. We make our best effort to ensure the colours are consistent, however in some cases there may be slight variation.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Casual > Relaxed",
    brand: "Nude Lucy",
    gtin: 9356041482345,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "XXS",
    custom_label_2: "NU24833-Black-XXS",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814282407&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_005.jpg?v=1721403190",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_001.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_010.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_015.jpg?v=1721403189",
    ],
    short_title:
      "Ari Long Sleeve Cupro Shirt Womens XXS Premium Relaxed Black Shirt Classic Details Patch Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814315175&currency=USD",
    item_group_id: 8299746197671,
    id: 45857814315175,
    title:
      "Ari Long Sleeve Cupro Shirt Womens XS Premium Relaxed Black Shirt Classic Details Patch Pockets",
    description:
      "Premium cupro Relaxed shirt Classic shirt details Patch pockets The Ari Long Sleeve Cupro Shirt is made in our signature cupro with a soft, sueded hand feel. The silhouette is relaxed and oversized through the body with the length finishing below the hips. Features include classic shirt detailing with front patch pockets. Wear it open as a soft jacket or layering piece. Our cupro is washed in an intricate process which can result in slight variation in colour. We make our best effort to ensure the colours are consistent, however in some cases there may be slight variation.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Cupro > Oversized",
    brand: "Nude Lucy",
    gtin: 9356041482352,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "XS",
    custom_label_2: "NU24833-Black-XS",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814315175&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_005.jpg?v=1721403190",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_001.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_010.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_015.jpg?v=1721403189",
    ],
    short_title:
      "Ari Long Sleeve Cupro Shirt Womens XS Premium Relaxed Black Shirt Classic Details Patch Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814347943&currency=USD",
    item_group_id: 8299746197671,
    id: 45857814347943,
    title:
      "Ari Long Sleeve Cupro Shirt Womens S Premium Relaxed Black Shirt Classic Details Patch Pockets",
    description:
      "Premium cupro Relaxed shirt Classic shirt details Patch pockets The Ari Long Sleeve Cupro Shirt is made in our signature cupro with a soft, sueded hand feel. The silhouette is relaxed and oversized through the body with the length finishing below the hips. Features include classic shirt detailing with front patch pockets. Wear it open as a soft jacket or layering piece. Our cupro is washed in an intricate process which can result in slight variation in colour. We make our best effort to ensure the colours are consistent, however in some cases there may be slight variation.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Cupro > Oversized",
    brand: "Nude Lucy",
    gtin: 9356041482369,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "S",
    custom_label_2: "NU24833-Black-S",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814347943&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_005.jpg?v=1721403190",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_001.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_010.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_015.jpg?v=1721403189",
    ],
    short_title:
      "Ari Long Sleeve Cupro Shirt Womens S Premium Relaxed Black Shirt Classic Details Patch Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814380711&currency=USD",
    item_group_id: 8299746197671,
    id: 45857814380711,
    title:
      "Ari Long Sleeve Cupro Shirt Womens M Premium Relaxed Black Shirt Classic Details Patch Pockets",
    description:
      "Premium cupro Relaxed shirt Classic shirt details Patch pockets The Ari Long Sleeve Cupro Shirt is made in our signature cupro with a soft, sueded hand feel. The silhouette is relaxed and oversized through the body with the length finishing below the hips. Features include classic shirt detailing with front patch pockets. Wear it open as a soft jacket or layering piece. Our cupro is washed in an intricate process which can result in slight variation in colour. We make our best effort to ensure the colours are consistent, however in some cases there may be slight variation.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Cupro > Oversized",
    brand: "Nude Lucy",
    gtin: 9356041482376,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "M",
    custom_label_2: "NU24833-Black-M",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814380711&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_005.jpg?v=1721403190",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_001.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_010.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_015.jpg?v=1721403189",
    ],
    short_title:
      "Ari Long Sleeve Cupro Shirt Womens M Premium Relaxed Black Shirt Classic Details Patch Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814413479&currency=USD",
    item_group_id: 8299746197671,
    id: 45857814413479,
    title:
      "Ari Long Sleeve Cupro Shirt Womens L Premium Relaxed Black Shirt Classic Details Patch Pockets",
    description:
      "Premium cupro Relaxed shirt Classic shirt details Patch pockets The Ari Long Sleeve Cupro Shirt is made in our signature cupro with a soft, sueded hand feel. The silhouette is relaxed and oversized through the body with the length finishing below the hips. Features include classic shirt detailing with front patch pockets. Wear it open as a soft jacket or layering piece. Our cupro is washed in an intricate process which can result in slight variation in colour. We make our best effort to ensure the colours are consistent, however in some cases there may be slight variation.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Cupro > Oversized",
    brand: "Nude Lucy",
    gtin: 9356041482383,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "L",
    custom_label_2: "NU24833-Black-L",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814413479&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_005.jpg?v=1721403190",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_001.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_010.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_015.jpg?v=1721403189",
    ],
    short_title:
      "Ari Long Sleeve Cupro Shirt Womens L Premium Relaxed Black Shirt Classic Details Patch Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814446247&currency=USD",
    item_group_id: 8299746197671,
    id: 45857814446247,
    title:
      "Ari Long Sleeve Cupro Shirt Womens XL Premium Relaxed Black Shirt Classic Details Patch Pockets",
    description:
      "Premium cupro Relaxed shirt Classic shirt details Patch pockets The Ari Long Sleeve Cupro Shirt is made in our signature cupro with a soft, sueded hand feel. The silhouette is relaxed and oversized through the body with the length finishing below the hips. Features include classic shirt detailing with front patch pockets. Wear it open as a soft jacket or layering piece. Our cupro is washed in an intricate process which can result in slight variation in colour. We make our best effort to ensure the colours are consistent, however in some cases there may be slight variation.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Cupro > Oversized",
    brand: "Nude Lucy",
    gtin: 9356041482390,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "XL",
    custom_label_2: "NU24833-Black-XL",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814446247&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_005.jpg?v=1721403190",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_001.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_010.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_015.jpg?v=1721403189",
    ],
    short_title:
      "Ari Long Sleeve Cupro Shirt Womens XL Premium Relaxed Black Shirt Classic Details Patch Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814479015&currency=USD",
    item_group_id: 8299746197671,
    id: 45857814479015,
    title:
      "Ari Long Sleeve Cupro Shirt Womens XXL Premium Relaxed Black Shirt Classic Details Patch Pockets",
    description:
      "Premium cupro Relaxed shirt Classic shirt details Patch pockets The Ari Long Sleeve Cupro Shirt is made in our signature cupro with a soft, sueded hand feel. The silhouette is relaxed and oversized through the body with the length finishing below the hips. Features include classic shirt detailing with front patch pockets. Wear it open as a soft jacket or layering piece. Our cupro is washed in an intricate process which can result in slight variation in colour. We make our best effort to ensure the colours are consistent, however in some cases there may be slight variation.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Shirts & Tops",
    product_type: "Womens > Apparel > Shirts > Cupro > Oversized",
    brand: "Nude Lucy",
    gtin: 9356041482406,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "XXL",
    custom_label_2: "NU24833-Black-XXL",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/ari-l-s-cupro-shirt-black?variant=45857814479015&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_005.jpg?v=1721403190",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_001.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_010.jpg?v=1721403190",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S43_015.jpg?v=1721403189",
    ],
    short_title:
      "Ari Long Sleeve Cupro Shirt Womens XXL Premium Relaxed Black Shirt Classic Details Patch Pockets",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048344231&currency=USD",
    item_group_id: 8299776540839,
    id: 45858048344231,
    title: "Womens Aspen Trench Coat Blacks Size Xxs",
    description:
      "Heavyweight twill fabrication Classic trench coat silhouette Storm flap Nude Lucy branded buttons Waist tie with belt loops Side seam pockets Vent at centre back The Aspen Trench Coat is made from a heavyweight fabric with a twill finish. The silhouette is relaxed with wide, full length sleeves and length finishing below the knees. Features include front storm flap, Nude Lucy branded buttons, waist tie and side seam pockets.",
    availability: "out of stock",
    price: "220.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Outerwear > Trench",
    brand: "Nude Lucy",
    gtin: 9356041549543,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "XXS",
    custom_label_2: "NU26192-Black-XXS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048344231&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240606_NUDE_LUCY_JULY_CONTENT_09_0903.jpg?v=1721404016",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0170.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0171.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0181.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0178.jpg?v=1721404016",
    ],
    short_title: "Womens Aspen Trench Coat Blacks Size Xxs",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048376999&currency=USD",
    item_group_id: 8299776540839,
    id: 45858048376999,
    title:
      "Nude Lucy Womens Aspen Trench Coat Black XS Heavyweight Twill Classic Silhouette Storm Flap",
    description:
      "Heavyweight twill fabrication Classic trench coat silhouette Storm flap Nude Lucy branded buttons Waist tie with belt loops Side seam pockets Vent at centre back The Aspen Trench Coat is made from a heavyweight fabric with a twill finish. The silhouette is relaxed with wide, full length sleeves and length finishing below the knees. Features include front storm flap, Nude Lucy branded buttons, waist tie and side seam pockets.",
    availability: "out of stock",
    price: "220.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Trench > Twill",
    brand: "Nude Lucy",
    gtin: 9356041549550,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "XS",
    custom_label_2: "NU26192-Black-XS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048376999&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240606_NUDE_LUCY_JULY_CONTENT_09_0903.jpg?v=1721404016",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0170.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0171.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0181.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0178.jpg?v=1721404016",
    ],
    short_title:
      "Nude Lucy Womens Aspen Trench Coat Black XS Heavyweight Twill Classic Silhouette Storm Flap",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048409767&currency=USD",
    item_group_id: 8299776540839,
    id: 45858048409767,
    title:
      "Nude Lucy Womens Aspen Trench Coat Black S Heavyweight Twill Classic Silhouette Storm Flap",
    description:
      "Heavyweight twill fabrication Classic trench coat silhouette Storm flap Nude Lucy branded buttons Waist tie with belt loops Side seam pockets Vent at centre back The Aspen Trench Coat is made from a heavyweight fabric with a twill finish. The silhouette is relaxed with wide, full length sleeves and length finishing below the knees. Features include front storm flap, Nude Lucy branded buttons, waist tie and side seam pockets.",
    availability: "out of stock",
    price: "220.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Trench > Twill",
    brand: "Nude Lucy",
    gtin: 9356041549567,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "S",
    custom_label_2: "NU26192-Black-S",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048409767&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240606_NUDE_LUCY_JULY_CONTENT_09_0903.jpg?v=1721404016",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0170.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0171.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0181.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0178.jpg?v=1721404016",
    ],
    short_title:
      "Nude Lucy Womens Aspen Trench Coat Black S Heavyweight Twill Classic Silhouette Storm Flap",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048442535&currency=USD",
    item_group_id: 8299776540839,
    id: 45858048442535,
    title:
      "Nude Lucy Womens Aspen Trench Coat Black M Heavyweight Twill Classic Silhouette Storm Flap",
    description:
      "Heavyweight twill fabrication Classic trench coat silhouette Storm flap Nude Lucy branded buttons Waist tie with belt loops Side seam pockets Vent at centre back The Aspen Trench Coat is made from a heavyweight fabric with a twill finish. The silhouette is relaxed with wide, full length sleeves and length finishing below the knees. Features include front storm flap, Nude Lucy branded buttons, waist tie and side seam pockets.",
    availability: "out of stock",
    price: "220.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Trench > Twill",
    brand: "Nude Lucy",
    gtin: 9356041549574,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "M",
    custom_label_2: "NU26192-Black-M",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048442535&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240606_NUDE_LUCY_JULY_CONTENT_09_0903.jpg?v=1721404016",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0170.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0171.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0181.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0178.jpg?v=1721404016",
    ],
    short_title:
      "Nude Lucy Womens Aspen Trench Coat Black M Heavyweight Twill Classic Silhouette Storm Flap",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048475303&currency=USD",
    item_group_id: 8299776540839,
    id: 45858048475303,
    title:
      "Nude Lucy Womens Aspen Trench Coat Black L Heavyweight Twill Classic Silhouette Storm Flap",
    description:
      "Heavyweight twill fabrication Classic trench coat silhouette Storm flap Nude Lucy branded buttons Waist tie with belt loops Side seam pockets Vent at centre back The Aspen Trench Coat is made from a heavyweight fabric with a twill finish. The silhouette is relaxed with wide, full length sleeves and length finishing below the knees. Features include front storm flap, Nude Lucy branded buttons, waist tie and side seam pockets.",
    availability: "out of stock",
    price: "220.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Coat > Outerwear",
    brand: "Nude Lucy",
    gtin: 9356041549581,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "L",
    custom_label_2: "NU26192-Black-L",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048475303&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240606_NUDE_LUCY_JULY_CONTENT_09_0903.jpg?v=1721404016",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0170.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0171.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0181.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0178.jpg?v=1721404016",
    ],
    short_title:
      "Nude Lucy Womens Aspen Trench Coat Black L Heavyweight Twill Classic Silhouette Storm Flap",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048508071&currency=USD",
    item_group_id: 8299776540839,
    id: 45858048508071,
    title:
      "Nude Lucy Womens Aspen Trench Coat Black XL Heavyweight Twill Classic Silhouette Storm Flap",
    description:
      "Heavyweight twill fabrication Classic trench coat silhouette Storm flap Nude Lucy branded buttons Waist tie with belt loops Side seam pockets Vent at centre back The Aspen Trench Coat is made from a heavyweight fabric with a twill finish. The silhouette is relaxed with wide, full length sleeves and length finishing below the knees. Features include front storm flap, Nude Lucy branded buttons, waist tie and side seam pockets.",
    availability: "out of stock",
    price: "220.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Coat > Outerwear",
    brand: "Nude Lucy",
    gtin: 9356041549598,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "XL",
    custom_label_2: "NU26192-Black-XL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048508071&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240606_NUDE_LUCY_JULY_CONTENT_09_0903.jpg?v=1721404016",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0170.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0171.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0181.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0178.jpg?v=1721404016",
    ],
    short_title:
      "Nude Lucy Womens Aspen Trench Coat Black XL Heavyweight Twill Classic Silhouette Storm Flap",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048540839&currency=USD",
    item_group_id: 8299776540839,
    id: 45858048540839,
    title:
      "Nude Lucy Womens Aspen Trench Coat Black XXL Heavyweight Twill Classic Silhouette Storm Flap",
    description:
      "Heavyweight twill fabrication Classic trench coat silhouette Storm flap Nude Lucy branded buttons Waist tie with belt loops Side seam pockets Vent at centre back The Aspen Trench Coat is made from a heavyweight fabric with a twill finish. The silhouette is relaxed with wide, full length sleeves and length finishing below the knees. Features include front storm flap, Nude Lucy branded buttons, waist tie and side seam pockets.",
    availability: "out of stock",
    price: "220.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Jackets > Coat > Outerwear",
    brand: "Nude Lucy",
    gtin: 9356041549604,
    condition: "new",
    age_group: "adult",
    colour: "Blacks",
    gender: "Female",
    size: "XXL",
    custom_label_2: "NU26192-Black-XXL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/aspen-trench-coat-black?variant=45858048540839&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/240606_NUDE_LUCY_JULY_CONTENT_09_0903.jpg?v=1721404016",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0170.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0171.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0181.jpg?v=1721404016",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S6-24309-NudeLucy-0178.jpg?v=1721404016",
    ],
    short_title:
      "Nude Lucy Womens Aspen Trench Coat Black XXL Heavyweight Twill Classic Silhouette Storm Flap",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071019687&currency=USD",
    item_group_id: 8299780538535,
    id: 45858071019687,
    title:
      "Nude Lucy Womens Brisa Culotte Cotton Green XXS High Rise Cropped Pant Invisible Zipper",
    description:
      "Cotton twill fabrication Culotte pant Invisible zipper The Brisa Culotte is made from a heavyweight cotton twill fabrication which has a soft surface and smooth hand feel. The silhouette is high rise with cropped length. Featured include invisible zipper at centred back and contrast inside waistband.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Culottes > Twill",
    brand: "Nude Lucy",
    gtin: 9356041549772,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    material: "Cotton",
    size: "XXS",
    custom_label_2: "NU26200-Khaki-XXS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071019687&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0777.jpg?v=1721403666",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S41-NU26200_KHAKI-23782-NudeLucy-0174.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0776.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0784.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0791.jpg?v=1721403666",
    ],
    short_title:
      "Nude Lucy Womens Brisa Culotte Cotton Green XXS High Rise Cropped Pant Invisible Zipper",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071052455&currency=USD",
    item_group_id: 8299780538535,
    id: 45858071052455,
    title:
      "Nude Lucy Womens Brisa Culotte Cotton Green XS High Rise Cropped Pant Invisible Zipper",
    description:
      "Cotton twill fabrication Culotte pant Invisible zipper The Brisa Culotte is made from a heavyweight cotton twill fabrication which has a soft surface and smooth hand feel. The silhouette is high rise with cropped length. Featured include invisible zipper at centred back and contrast inside waistband.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Culotte > Bottoms",
    brand: "Nude Lucy",
    gtin: 9356041549789,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    material: "Cotton",
    size: "XS",
    custom_label_2: "NU26200-Khaki-XS",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071052455&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0777.jpg?v=1721403666",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S41-NU26200_KHAKI-23782-NudeLucy-0174.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0776.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0784.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0791.jpg?v=1721403666",
    ],
    short_title:
      "Nude Lucy Womens Brisa Culotte Cotton Green XS High Rise Cropped Pant Invisible Zipper",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071085223&currency=USD",
    item_group_id: 8299780538535,
    id: 45858071085223,
    title:
      "Nude Lucy Womens Brisa Culotte Cotton Green S High Rise Cropped Pant Invisible Zipper",
    description:
      "Cotton twill fabrication Culotte pant Invisible zipper The Brisa Culotte is made from a heavyweight cotton twill fabrication which has a soft surface and smooth hand feel. The silhouette is high rise with cropped length. Featured include invisible zipper at centred back and contrast inside waistband.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Culotte > Bottoms",
    brand: "Nude Lucy",
    gtin: 9356041549796,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    material: "Cotton",
    size: "S",
    custom_label_2: "NU26200-Khaki-S",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071085223&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0777.jpg?v=1721403666",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S41-NU26200_KHAKI-23782-NudeLucy-0174.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0776.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0784.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0791.jpg?v=1721403666",
    ],
    short_title:
      "Nude Lucy Womens Brisa Culotte Cotton Green S High Rise Cropped Pant Invisible Zipper",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071117991&currency=USD",
    item_group_id: 8299780538535,
    id: 45858071117991,
    title: "Womens Brisa Culotte Cotton Greens Size M",
    description:
      "Cotton twill fabrication Culotte pant Invisible zipper The Brisa Culotte is made from a heavyweight cotton twill fabrication which has a soft surface and smooth hand feel. The silhouette is high rise with cropped length. Featured include invisible zipper at centred back and contrast inside waistband.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Culotte > Bottoms",
    brand: "Nude Lucy",
    gtin: 9356041549802,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    material: "Cotton",
    size: "M",
    custom_label_2: "NU26200-Khaki-M",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071117991&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0777.jpg?v=1721403666",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S41-NU26200_KHAKI-23782-NudeLucy-0174.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0776.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0784.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0791.jpg?v=1721403666",
    ],
    short_title: "Womens Brisa Culotte Cotton Greens Size M",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071150759&currency=USD",
    item_group_id: 8299780538535,
    id: 45858071150759,
    title:
      "Brisa Womens Culotte Cotton Twill Pant Greens Size L High Rise Cropped Length Invisible Zipper",
    description:
      "Cotton twill fabrication Culotte pant Invisible zipper The Brisa Culotte is made from a heavyweight cotton twill fabrication which has a soft surface and smooth hand feel. The silhouette is high rise with cropped length. Featured include invisible zipper at centred back and contrast inside waistband.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Culotte > Bottoms",
    brand: "Nude Lucy",
    gtin: 9356041549819,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    material: "Cotton",
    size: "L",
    custom_label_2: "NU26200-Khaki-L",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071150759&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0777.jpg?v=1721403666",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S41-NU26200_KHAKI-23782-NudeLucy-0174.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0776.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0784.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0791.jpg?v=1721403666",
    ],
    short_title:
      "Brisa Womens Culotte Cotton Twill Pant Greens Size L High Rise Cropped Length Invisible Zipper",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071183527&currency=USD",
    item_group_id: 8299780538535,
    id: 45858071183527,
    title:
      "Brisa Womens Culotte Cotton Twill Pant Greens Size XL High Rise Cropped Length Invisible Zipper",
    description:
      "Cotton twill fabrication Culotte pant Invisible zipper The Brisa Culotte is made from a heavyweight cotton twill fabrication which has a soft surface and smooth hand feel. The silhouette is high rise with cropped length. Featured include invisible zipper at centred back and contrast inside waistband.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Culotte > Bottoms",
    brand: "Nude Lucy",
    gtin: 9356041549826,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    material: "Cotton",
    size: "XL",
    custom_label_2: "NU26200-Khaki-XL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071183527&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0777.jpg?v=1721403666",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S41-NU26200_KHAKI-23782-NudeLucy-0174.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0776.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0784.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0791.jpg?v=1721403666",
    ],
    short_title:
      "Brisa Womens Culotte Cotton Twill Pant Greens Size XL High Rise Cropped Length Invisible Zipper",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071216295&currency=USD",
    item_group_id: 8299780538535,
    id: 45858071216295,
    title:
      "Brisa Womens Culotte Cotton Twill Pant Greens Size XXL High Rise Cropped Length Invisible Zipper",
    description:
      "Cotton twill fabrication Culotte pant Invisible zipper The Brisa Culotte is made from a heavyweight cotton twill fabrication which has a soft surface and smooth hand feel. The silhouette is high rise with cropped length. Featured include invisible zipper at centred back and contrast inside waistband.",
    availability: "out of stock",
    price: "110.0 USD",
    google_product_category: "Apparel & Accessories > Clothing > Pants",
    product_type: "Womens > Apparel > Pants > Culottes > Twill",
    brand: "Nude Lucy",
    gtin: 9356041549833,
    condition: "new",
    age_group: "adult",
    colour: "Greens",
    gender: "Female",
    material: "Cotton",
    size: "XXL",
    custom_label_2: "NU26200-Khaki-XXL",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/brisa-culotte-khaki?variant=45858071216295&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0777.jpg?v=1721403666",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S41-NU26200_KHAKI-23782-NudeLucy-0174.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0776.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0784.jpg?v=1721403666",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/S28-24309-NudeLucy-0791.jpg?v=1721403666",
    ],
    short_title:
      "Brisa Womens Culotte Cotton Twill Pant Greens Size XXL High Rise Cropped Length Invisible Zipper",
    enabled: true,
  },
  {
    quantity: 0,
    link: "https://nudelucy.com/products/brisa-jacket-sky?variant=45857984118951&currency=USD",
    item_group_id: 8299766349991,
    id: 45857984118951,
    title:
      "Brisa Womens Jacket Cotton Twill Blues Size XXS Oversized Short Sleeve Metal Press Studs Side Pockets",
    description:
      "Heavyweight cotton twill fabrication Oversized silhouette Short sleeves Metal press studs Side seam pockets The Brisa Jacket in sky is made from a heavyweight cotton twill fabrication which has a soft surface and smooth hand feel. The silhouette is an oversized, boxy fit with sleeves finishing at the elbow and length finishing below the hips. Features include classic shirting details, metal press studs and hidden pockets at side seams.",
    availability: "out of stock",
    price: "130.0 USD",
    google_product_category:
      "Apparel & Accessories > Clothing > Outerwear > Coats & Jackets",
    product_type: "Womens > Apparel > Tops > Jackets > Outerwear",
    brand: "Nude Lucy",
    gtin: 9356041485292,
    condition: "new",
    age_group: "adult",
    colour: "Blues",
    gender: "Female",
    material: "Cotton",
    size: "XXS",
    custom_label_2: "NU25948-Sky-XXS",
    custom_label_3: "Sale",
    shipping_weight: "0.0 kg",
    ads_redirect:
      "https://nudelucy.com/products/brisa-jacket-sky?variant=45857984118951&currency=USD",
    image_link:
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S35_006.jpg?v=1721403576",
    additional_image_link: [
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/11_854e9f86-3ca1-4f4b-9f0e-fa9e488c024f.png?v=1721403576",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S35_004.jpg?v=1721403576",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_FRANZIE-S35_009.jpg?v=1721403576",
      "https://cdn.shopify.com/s/files/1/0649/5512/1831/files/NUDELUCY_ECOM_FEB24_MAR24_GRACIE-S16_074.jpg?v=1721403576",
    ],
    short_title:
      "Brisa Womens Jacket Cotton Twill Blues Size XXS Oversized Short Sleeve Metal Press Studs Side Pockets",
    enabled: true,
  },
];

export function ProductTable({ isFullscreen }: { isFullscreen?: boolean }) {
  const navigate = useNavigate();
  const [productStates, setProductStates] = useState<boolean[]>(
    products.map((p) => p.enabled),
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const bottomBarRef = useRef<HTMLDivElement | null>(null);
  const [bottomInnerWidth, setBottomInnerWidth] = useState<number>(0);
  const [showRightShadow, setShowRightShadow] = useState(false);
  const tableRef = useRef<HTMLTableElement | null>(null);
  const [colWidths, setColWidths] = useState<number[]>([]);
  const resizingRef = useRef<{
    index: number;
    startX: number;
    startWidth: number;
  } | null>(null);
  const MIN_COL_WIDTH = 100;
  const MAX_COL_WIDTH = 500;
  const [candidateIndex, setCandidateIndex] = useState<number | null>(null);
  const [frozenIndex, setFrozenIndex] = useState<number | null>(null);
  const cellRefs = useRef<Record<string, HTMLElement | null>>({});
  const [isTruncatedMap, setIsTruncatedMap] = useState<Record<string, boolean>>(
    {},
  );
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const el = scrollRef.current;
    const table = tableRef.current;
    if (!el || !table) return;

    const calcWidthsAndCandidate = () => {
      const ths = Array.from(
        table.querySelectorAll("thead th"),
      ) as HTMLElement[];

      // Try to load persisted widths from localStorage first
      const stored = (() => {
        try {
          const raw = localStorage.getItem("productTable.colWidths");
          if (!raw) return null;
          const parsed = JSON.parse(raw) as number[];
          if (!Array.isArray(parsed)) return null;
          return parsed;
        } catch (e) {
          return null;
        }
      })();

      const widths =
        stored && stored.length === ths.length
          ? stored
          : ths.map((t, i) => {
              // Default 250px for Product Title (1), Description (2),
              // and Gender/Price/Quantity (11,12,13)
              if (i === 1 || i === 2 || i === 11 || i === 12 || i === 13) {
                return 250;
              }
              return t.offsetWidth;
            });
      setColWidths(widths);

      const scRect = el.getBoundingClientRect();
      const firstColWidth = widths[0] || 0;
      const frozenExtra =
        frozenIndex != null && widths[frozenIndex] ? widths[frozenIndex] : 0;
      const frozenAreaWidth = firstColWidth + frozenExtra;
      let candidate: number | null = null;
      for (let i = 1; i < ths.length; i++) {
        const rect = ths[i].getBoundingClientRect();
        // If the header's left edge is at/just past the frozen area, show candidate
        if (
          rect.left <= scRect.left + frozenAreaWidth + 6 &&
          rect.right > scRect.left + frozenAreaWidth
        ) {
          candidate = i;
          break;
        }
      }
      setCandidateIndex(candidate);
      setShowRightShadow(el.scrollLeft + el.clientWidth < el.scrollWidth);
      // keep the bottom scrollbar synced when the main scroll area moves
      try {
        if (bottomBarRef.current)
          bottomBarRef.current.scrollLeft = el.scrollLeft;
      } catch (e) {
        // ignore
      }
    };

    calcWidthsAndCandidate();
    const onScroll = () => calcWidthsAndCandidate();
    el.addEventListener("scroll", onScroll);
    window.addEventListener("resize", calcWidthsAndCandidate);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calcWidthsAndCandidate);
    };
  }, []);

  // Keep the bottom scrollbar inner width in sync and wire scroll syncing
  useEffect(() => {
    const tb = tableRef.current;
    const s = scrollRef.current;
    const b = bottomBarRef.current;
    if (!tb || !s || !b) return;

    const updateWidth = () => {
      setBottomInnerWidth(tb.scrollWidth);
    };

    updateWidth();
    const ro = new ResizeObserver(() => updateWidth());
    ro.observe(tb);

    const onMainScroll = () => {
      if (b) b.scrollLeft = s!.scrollLeft;
    };
    const onBottomScroll = () => {
      if (s) s.scrollLeft = b!.scrollLeft;
    };

    s.addEventListener("scroll", onMainScroll);
    b.addEventListener("scroll", onBottomScroll);

    window.addEventListener("resize", updateWidth);

    return () => {
      ro.disconnect();
      s.removeEventListener("scroll", onMainScroll);
      b.removeEventListener("scroll", onBottomScroll);
      window.removeEventListener("resize", updateWidth);
    };
  }, [tableRef.current, scrollRef.current, bottomBarRef.current]);

  // Detect truncated cells (title/description) whenever column widths change or on resize
  useEffect(() => {
    const checkAll = () => {
      const next: Record<string, boolean> = {};
      Object.keys(cellRefs.current).forEach((key) => {
        const el = cellRefs.current[key];
        if (!el) return;
        // If expanded, it's not considered truncated
        if (expandedMap[key]) {
          next[key] = false;
          return;
        }
        // check if content overflows horizontally when not wrapped
        const isTruncated = el.scrollWidth > el.clientWidth + 1;
        next[key] = isTruncated;
      });
      setIsTruncatedMap(next);
    };

    checkAll();
    window.addEventListener("resize", checkAll);
    return () => window.removeEventListener("resize", checkAll);
  }, [colWidths, expandedMap]);

  const setCellRef = (key: string) => (node: HTMLElement | null) => {
    cellRefs.current[key] = node;
  };

  const toggleExpanded = (key: string) => {
    setExpandedMap((p) => {
      const next = { ...p, [key]: !p[key] };
      return next;
    });
  };

  // Persist widths whenever they change
  useEffect(() => {
    try {
      if (colWidths && colWidths.length) {
        localStorage.setItem(
          "productTable.colWidths",
          JSON.stringify(colWidths),
        );
      }
    } catch (e) {
      // ignore
    }
  }, [colWidths]);

  // Pointer handlers for resizing
  const startResize = (
    index: number,
    e: React.MouseEvent | React.TouchEvent,
  ) => {
    const clientX =
      (e as React.MouseEvent).clientX ??
      (e as React.TouchEvent).touches?.[0]?.clientX;
    const startWidth = colWidths[index] ?? 120;
    resizingRef.current = { index, startX: clientX as number, startWidth };
    document.body.style.userSelect = "none";
  };

  const onPointerMove = (e: MouseEvent | TouchEvent) => {
    if (!resizingRef.current) return;
    const clientX =
      (e as MouseEvent).clientX ?? (e as TouchEvent).touches?.[0]?.clientX;
    const delta = (clientX as number) - resizingRef.current.startX;
    const newWidth = Math.max(
      MIN_COL_WIDTH,
      Math.min(MAX_COL_WIDTH, resizingRef.current.startWidth + delta),
    );
    setColWidths((prev) => {
      const next = [...prev];
      next[resizingRef?.current!.index] = newWidth;
      return next;
    });
  };

  const onPointerUp = () => {
    resizingRef.current = null;
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchmove", onPointerMove, {
      passive: false,
    } as any);
    window.addEventListener("touchend", onPointerUp);
    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchmove", onPointerMove as any);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, [colWidths]);

  // Pagination state
  const pageSizeOptions = [50, 100, 250, 500];
  const [pageSize, setPageSize] = useState<number>(50);
  const [page, setPage] = useState<number>(1);
  const [showAllEnabled, setShowAllEnabled] = useState<boolean>(false);

  const total = products.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(total, startIndex + pageSize);

  const toggleProduct = (index: number) => {
    const newStates = [...productStates];
    newStates[index] = !newStates[index];
    setProductStates(newStates);
  };

  return (
    <div
      className={
        "rounded-[10px] border border-gray-200 shadow-sm transition-all duration-200 flex flex-col min-h-0" +
        (isFullscreen ? " h-full" : "")
      }
      style={isFullscreen ? { borderRadius: 0, height: "100vh" } : undefined}
    >
      <div
        ref={scrollRef as any}
        className="flex-1 min-h-0 overflow-auto"
        style={{ paddingBottom: 76 }}
        onScroll={() => {
          const el = scrollRef.current;
          if (!el) return;
          setShowRightShadow(el.scrollLeft + el.clientWidth < el.scrollWidth);
        }}
      >
        <table
          ref={tableRef as any}
          className="w-full min-w-[2650px]"
          style={{ tableLayout: colWidths.length ? "fixed" : undefined }}
        >
          {colWidths && colWidths.length ? (
            <colgroup>
              {colWidths.map((w, i) => (
                <col key={i} style={w ? { width: `${w}px` } : undefined} />
              ))}
            </colgroup>
          ) : null}
          <thead
            className={`bg-[#F8F9FA] border-b border-gray-200 ${isFullscreen ? "sticky top-0 z-40" : ""}`}
          >
            <tr>
              <th
                className="group text-left py-3 px-4 border-r border-gray-100 sticky left-0 z-20 bg-[#F8F9FA] relative"
                style={
                  showRightShadow
                    ? {
                        boxShadow: "6px 0 12px rgba(16,24,40,0.06)",
                        width: colWidths[0],
                      }
                    : colWidths[0]
                      ? { width: colWidths[0] }
                      : undefined
                }
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <div>
                    <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                      Item ID
                    </div>
                  </div>
                </div>
                {/* Resize handle for column 0 (checkbox / Item ID) */}
                <div
                  onMouseDown={(e) => startResize(0, e)}
                  onTouchStart={(e) => startResize(0, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`group text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 1 ? "sticky z-30" : ""}`}
                style={
                  frozenIndex === 1 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : undefined
                }
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Product Title
                </div>
                {candidateIndex === 1 ? (
                  <button
                    className="absolute top-2 right-2 px-2 py-0.5 text-xs bg-white border rounded shadow-sm"
                    onClick={() =>
                      setFrozenIndex((fi) => (fi === 1 ? null : 1))
                    }
                  >
                    {frozenIndex === 1 ? "Unfreeze" : "Freeze"}
                  </button>
                ) : null}
                <div className="text-[#101828] text-[9px] flex items-center gap-1 mt-1">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded border-gray-300"
                  />
                  <span>Show Raw Data</span>
                </div>
                <div
                  onMouseDown={(e) => startResize(1, e)}
                  onTouchStart={(e) => startResize(1, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 2 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 2 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[2] ? { width: colWidths[2] } : {}),
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                    Description
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="w-4 h-4 flex items-center justify-center rounded text-gray-500 hover:bg-gray-100">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16V12C13 11.7167 12.904 11.4793 12.712 11.288C12.52 11.0967 12.2827 11.0007 12 11C11.7173 10.9993 11.48 11.0953 11.288 11.288C11.096 11.4807 11 11.718 11 12V16C11 16.2833 11.096 16.521 11.288 16.713C11.48 16.905 11.7173 17.0007 12 17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C12.9993 7.71733 12.9033 7.48 12.712 7.288C12.5207 7.096 12.2833 7 12 7C11.7167 7 11.4793 7.096 11.288 7.288C11.0967 7.48 11.0007 7.71733 11 8C10.9993 8.28267 11.0953 8.52033 11.288 8.713C11.4807 8.90567 11.718 9.00133 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <div className="text-sm font-medium">
                        Descriptions are processed as HTML / rich text
                        <div className="text-xs text-gray-500 mt-1">
                          Rich text may be stripped or transformed.{" "}
                          <a
                            href="/settings"
                            className="text-blue-600 underline"
                          >
                            Description settings
                          </a>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
                {candidateIndex === 2 ? (
                  <button
                    className="absolute top-2 right-2 px-2 py-0.5 text-xs bg-white border rounded shadow-sm"
                    onClick={() =>
                      setFrozenIndex((fi) => (fi === 2 ? null : 2))
                    }
                  >
                    {frozenIndex === 2 ? "Unfreeze" : "Freeze"}
                  </button>
                ) : null}
                <div
                  onMouseDown={(e) => startResize(2, e)}
                  onTouchStart={(e) => startResize(2, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 3 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 3 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[3] ? { width: colWidths[3] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Brand
                </div>
                {candidateIndex === 3 ? (
                  <button
                    className="absolute top-2 right-2 px-2 py-0.5 text-xs bg-white border rounded shadow-sm"
                    onClick={() =>
                      setFrozenIndex((fi) => (fi === 3 ? null : 3))
                    }
                  >
                    {frozenIndex === 3 ? "Unfreeze" : "Freeze"}
                  </button>
                ) : null}
                <div className="text-[#101828] text-[9px] flex items-center gap-1 mt-1">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded border-gray-300"
                  />
                  <span>Show Raw Data</span>
                </div>
                <div
                  onMouseDown={(e) => startResize(3, e)}
                  onTouchStart={(e) => startResize(3, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 4 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 4 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[4] ? { width: colWidths[4] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Google Product Category
                </div>
                <div
                  onMouseDown={(e) => startResize(4, e)}
                  onTouchStart={(e) => startResize(4, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 5 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 5 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[5] ? { width: colWidths[5] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  colour
                </div>
                <div
                  onMouseDown={(e) => startResize(5, e)}
                  onTouchStart={(e) => startResize(5, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 6 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 6 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[6] ? { width: colWidths[6] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Material
                </div>
                <div
                  onMouseDown={(e) => startResize(6, e)}
                  onTouchStart={(e) => startResize(6, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 7 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 7 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[7] ? { width: colWidths[7] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Age Group
                </div>
                <div
                  onMouseDown={(e) => startResize(7, e)}
                  onTouchStart={(e) => startResize(7, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 8 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 8 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[8] ? { width: colWidths[8] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Condition
                </div>
                <div
                  onMouseDown={(e) => startResize(8, e)}
                  onTouchStart={(e) => startResize(8, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 9 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 9 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[9] ? { width: colWidths[9] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Size
                </div>
                <div
                  onMouseDown={(e) => startResize(9, e)}
                  onTouchStart={(e) => startResize(9, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 10 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 10 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[10] ? { width: colWidths[10] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Pattern
                </div>
                <div
                  onMouseDown={(e) => startResize(10, e)}
                  onTouchStart={(e) => startResize(10, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 11 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 11 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[11] ? { width: colWidths[11] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Gender
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 12 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 12 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[12] ? { width: colWidths[12] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Price
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 13 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 13 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[13] ? { width: colWidths[13] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Quantity
                </div>
                <div
                  onMouseDown={(e) => startResize(13, e)}
                  onTouchStart={(e) => startResize(13, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 14 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 14 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[14] ? { width: colWidths[14] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Availability
                </div>
                <div
                  onMouseDown={(e) => startResize(14, e)}
                  onTouchStart={(e) => startResize(14, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 15 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 15 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[15] ? { width: colWidths[15] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  GTIN
                </div>
                <div
                  onMouseDown={(e) => startResize(15, e)}
                  onTouchStart={(e) => startResize(15, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 16 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 16 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[16] ? { width: colWidths[16] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Item Group ID
                </div>
                <div
                  onMouseDown={(e) => startResize(16, e)}
                  onTouchStart={(e) => startResize(16, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 17 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 17 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[17] ? { width: colWidths[17] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Product Type
                </div>
                <div
                  onMouseDown={(e) => startResize(17, e)}
                  onTouchStart={(e) => startResize(17, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 18 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 18 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[18] ? { width: colWidths[18] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Shipping Weight
                </div>
                <div
                  onMouseDown={(e) => startResize(18, e)}
                  onTouchStart={(e) => startResize(18, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 relative ${frozenIndex === 19 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 19 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[19] ? { width: colWidths[19] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold whitespace-nowrap">
                  Images
                </div>
                <div
                  onMouseDown={(e) => startResize(19, e)}
                  onTouchStart={(e) => startResize(19, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 20 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 20 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[20] ? { width: colWidths[20] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Custome Lebel 1
                </div>
                <div
                  onMouseDown={(e) => startResize(20, e)}
                  onTouchStart={(e) => startResize(20, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 20 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 20 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[20] ? { width: colWidths[20] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Custome Lebel 2
                </div>
                <div
                  onMouseDown={(e) => startResize(20, e)}
                  onTouchStart={(e) => startResize(20, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 20 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 20 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[20] ? { width: colWidths[20] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Custome Lebel 3
                </div>
                <div
                  onMouseDown={(e) => startResize(20, e)}
                  onTouchStart={(e) => startResize(20, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 20 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 20 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[20] ? { width: colWidths[20] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Custome Lebel 4
                </div>
                <div
                  onMouseDown={(e) => startResize(20, e)}
                  onTouchStart={(e) => startResize(20, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 20 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 20 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[20] ? { width: colWidths[20] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Custome Lebel 5
                </div>
                <div
                  onMouseDown={(e) => startResize(20, e)}
                  onTouchStart={(e) => startResize(20, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 20 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 20 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[20] ? { width: colWidths[20] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Custome Lebel 6
                </div>
                <div
                  onMouseDown={(e) => startResize(20, e)}
                  onTouchStart={(e) => startResize(20, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 20 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 20 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[20] ? { width: colWidths[20] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Custome Lebel 7
                </div>
                <div
                  onMouseDown={(e) => startResize(20, e)}
                  onTouchStart={(e) => startResize(20, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 20 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 20 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[20] ? { width: colWidths[20] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Custome Lebel 8
                </div>
                <div
                  onMouseDown={(e) => startResize(20, e)}
                  onTouchStart={(e) => startResize(20, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
              <th
                className={`text-left py-3 px-4 border-r border-gray-100 relative ${frozenIndex === 20 ? "sticky z-30" : ""}`}
                style={{
                  ...(frozenIndex === 20 && colWidths.length
                    ? { left: `${colWidths[0]}px`, background: "#F8F9FA" }
                    : {}),
                  ...(colWidths[20] ? { width: colWidths[20] } : {}),
                }}
              >
                <div className="text-[#101828] text-sm font-bold">
                  Custome Lebel 9
                </div>
                <div
                  onMouseDown={(e) => startResize(20, e)}
                  onTouchStart={(e) => startResize(20, e)}
                  className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ touchAction: "none" }}
                >
                  <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.slice(startIndex, endIndex).map((product, idx) => {
              const index = startIndex + idx;
              return (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                >
                  <td
                    className="py-3 px-4 border-r border-gray-100 sticky left-0 z-10 bg-white"
                    style={colWidths[0] ? { width: colWidths[0] } : undefined}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <Switch
                        checked={productStates[index]}
                        onCheckedChange={() => toggleProduct(index)}
                      />
                      <span className="text-[#101828] text-sm flex items-center gap-2">
                        <img
                          src={product.image_link}
                          alt=""
                          className="w-8 h-8 object-cover rounded"
                        />
                        {`...${String(product.id).slice(-4)}`}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 1 ? "sticky z-20" : ""}`}
                    style={
                      frozenIndex === 1 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : undefined
                    }
                  >
                    <div>
                      <div
                        ref={setCellRef(`title-${index}`)}
                        className={`text-[#101828] text-sm whitespace-normal`}
                        style={{ whiteSpace: "normal" }}
                      >
                        {product.short_title}
                      </div>
                    </div>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 2 ? "sticky z-20" : ""}`}
                    style={
                      frozenIndex === 2 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : undefined
                    }
                  >
                    <div>
                      <div className="flex items-start gap-2">
                        <div
                          ref={setCellRef(`desc-${index}`)}
                          className={`text-[#101828] text-sm ${expandedMap[`desc-${index}`] ? "whitespace-normal" : "truncate"}`}
                          style={
                            expandedMap[`desc-${index}`]
                              ? { whiteSpace: "normal" }
                              : {
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }
                          }
                        >
                          {product.description}
                        </div>
                        <button
                          className="p-1 rounded hover:bg-gray-100"
                          onClick={() => toggleExpanded(`desc-${index}`)}
                          aria-label={
                            expandedMap[`desc-${index}`]
                              ? "Collapse description"
                              : "Expand description"
                          }
                        >
                          {expandedMap[`desc-${index}`] ? (
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.609375 3.45312C0.447759 3.45313 0.292762 3.51733 0.178482 3.63161C0.0642018 3.74589 0 3.90088 0 4.0625C0 4.22412 0.0642018 4.37911 0.178482 4.49339C0.292762 4.60767 0.447759 4.67188 0.609375 4.67188H12.3906C12.5522 4.67187 12.7072 4.60767 12.8215 4.49339C12.9358 4.37911 13 4.22412 13 4.0625C13 3.90088 12.9358 3.74589 12.8215 3.63161C12.7072 3.51733 12.5522 3.45313 12.3906 3.45312H0.609375ZM7.92188 8.32812C7.76026 8.32812 7.60526 8.39233 7.49098 8.50661C7.3767 8.62089 7.3125 8.77588 7.3125 8.9375C7.3125 9.09912 7.3767 9.25411 7.49098 9.36839C7.60526 9.48267 7.76026 9.54688 7.92188 9.54688H12.3906C12.5522 9.54688 12.7072 9.48267 12.8215 9.36839C12.9358 9.25411 13 9.09912 13 8.9375C13 8.77588 12.9358 8.62089 12.8215 8.50661C12.7072 8.39233 12.5522 8.32812 12.3906 8.32812H7.92188ZM4.21688 8.32812L3.42875 7.54C3.32111 7.42448 3.26251 7.2717 3.2653 7.11383C3.26808 6.95596 3.33203 6.80533 3.44368 6.69368C3.55533 6.58203 3.70596 6.51808 3.86383 6.51529C4.0217 6.51251 4.17448 6.57111 4.29 6.67875L6.11813 8.50688L6.54875 8.9375L6.11813 9.36812L4.29 11.1962C4.17448 11.3039 4.0217 11.3625 3.86383 11.3597C3.70596 11.3569 3.55533 11.293 3.44368 11.1813C3.33203 11.0697 3.26808 10.919 3.2653 10.7612C3.26251 10.6033 3.32111 10.4505 3.42875 10.335L4.21688 9.54688H0.609375C0.447759 9.54688 0.292762 9.48267 0.178482 9.36839C0.0642018 9.25411 0 9.09912 0 8.9375C0 8.77588 0.0642018 8.62089 0.178482 8.50661C0.292762 8.39233 0.447759 8.32812 0.609375 8.32812H4.21688Z"
                                fill="#2F2F2F"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.5 19C5.35733 19 5.23833 18.952 5.143 18.856C5.04767 18.76 5 18.6413 5 18.5V5.50001C5 5.35801 5.048 5.23934 5.144 5.14401C5.24 5.04867 5.359 5.00067 5.501 5.00001C5.643 4.99934 5.76167 5.04734 5.857 5.14401C5.95233 5.24067 6 5.35934 6 5.50001V18.5C6 18.642 5.952 18.7607 5.856 18.856C5.76 18.9513 5.642 18.9993 5.5 19ZM18.499 19C18.3577 19 18.239 18.952 18.143 18.856C18.047 18.76 17.9993 18.6413 18 18.5V5.50001C18 5.35801 18.048 5.23934 18.144 5.14401C18.24 5.04867 18.359 5.00067 18.501 5.00001C18.643 4.99934 18.7617 5.04734 18.857 5.14401C18.9523 5.24067 19 5.35934 19 5.50001V18.5C19 18.642 18.952 18.7607 18.856 18.856C18.76 18.9513 18.641 18.9993 18.499 19ZM10.509 16.479L8.596 14.566C8.43467 14.404 8.354 14.2153 8.354 14C8.354 13.7847 8.43467 13.5963 8.596 13.435L10.535 11.521C10.625 11.4317 10.738 11.385 10.874 11.381C11.0093 11.377 11.127 11.4237 11.227 11.521C11.3183 11.6103 11.364 11.724 11.364 11.862C11.364 12 11.317 12.116 11.223 12.21L9.933 13.5H12.731C13.435 13.5 14.0277 13.2593 14.509 12.778C14.9903 12.2967 15.2307 11.704 15.23 11C15.2293 10.296 14.9887 9.70334 14.508 9.22201C14.0273 8.74067 13.4347 8.50001 12.73 8.50001H8.269C8.12767 8.50001 8.009 8.45201 7.913 8.35601C7.817 8.26001 7.769 8.14101 7.769 7.99901C7.769 7.85701 7.817 7.73834 7.913 7.64301C8.009 7.54767 8.12767 7.50001 8.269 7.50001H12.731C13.703 7.50001 14.5293 7.84034 15.21 8.52101C15.89 9.20167 16.23 10.028 16.23 11C16.23 11.972 15.89 12.7983 15.21 13.479C14.53 14.1597 13.7033 14.5 12.73 14.5H9.934L11.224 15.79C11.3173 15.8807 11.364 15.994 11.364 16.13C11.364 16.2653 11.3173 16.3817 11.224 16.479C11.1267 16.589 11.0077 16.6407 10.867 16.634C10.727 16.628 10.6083 16.5763 10.511 16.479"
                                fill="black"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 3 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 3 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[3] ? { width: colWidths[3] } : {}),
                    }}
                  >
                    <span className="text-[#101828] text-sm whitespace-nowrap">
                      {product.brand}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 4 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 4 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[4] ? { width: colWidths[4] } : {}),
                    }}
                  >
                    <span className="text-[#101828] text-sm">
                      {product.google_product_category}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 5 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 5 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[5] ? { width: colWidths[5] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.colour ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      {product.colour || "Empty"}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 6 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 6 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[6] ? { width: colWidths[6] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.material ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      {product.material || "Empty"}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 7 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 7 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[7] ? { width: colWidths[7] } : {}),
                    }}
                  >
                    <span className="text-[#101828] text-sm whitespace-nowrap">
                      {product.age_group}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 8 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 8 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[8] ? { width: colWidths[8] } : {}),
                    }}
                  >
                    <span className="text-[#101828] text-sm whitespace-nowrap">
                      {product.condition}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 9 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 9 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[9] ? { width: colWidths[9] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.size ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      {product.size || "Empty"}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 10 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 10 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[10] ? { width: colWidths[10] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      {product.pattern || "Empty"}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4 border-r border-gray-100"
                    style={colWidths[11] ? { width: colWidths[11] } : undefined}
                  >
                    <span className="text-[#101828] text-sm block truncate">
                      {product.gender}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4 border-r border-gray-100"
                    style={colWidths[12] ? { width: colWidths[12] } : undefined}
                  >
                    <span className="text-[#101828] text-sm block truncate">
                      {product.price}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4 border-r border-gray-100"
                    style={colWidths[13] ? { width: colWidths[13] } : undefined}
                  >
                    <span className="text-[#101828] text-sm block truncate">
                      {product.quantity ?? "-"}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4 border-r border-gray-100"
                    style={colWidths[14] ? { width: colWidths[14] } : undefined}
                  >
                    <span className="text-sm text-[#101828] whitespace-nowrap">
                      {product.availability ?? "-"}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4 border-r border-gray-100"
                    style={colWidths[15] ? { width: colWidths[15] } : undefined}
                  >
                    <span className="text-sm text-[#101828] whitespace-nowrap">
                      {product.gtin ?? "-"}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4 border-r border-gray-100"
                    style={colWidths[16] ? { width: colWidths[16] } : undefined}
                  >
                    <span className="text-sm text-[#101828] whitespace-nowrap">
                      {product.item_group_id ?? "-"}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4 border-r border-gray-100"
                    style={colWidths[17] ? { width: colWidths[17] } : undefined}
                  >
                    <span className="text-sm text-[#101828]">
                      {product.product_type ?? "-"}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4 border-r border-gray-100"
                    style={colWidths[18] ? { width: colWidths[18] } : undefined}
                  >
                    <span className="text-sm text-[#101828] whitespace-nowrap">
                      {product.shipping_weight ?? "-"}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4"
                    style={colWidths[19] ? { width: colWidths[19] } : undefined}
                  >
                    <span className="text-sm text-[#101828] whitespace-nowrap">
                      {Array.isArray(product.additional_image_link)
                        ? product.additional_image_link.length
                        : 0}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 20 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 20 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[20] ? { width: colWidths[20] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      Empty
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 20 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 20 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[20] ? { width: colWidths[20] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      Empty
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 20 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 20 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[20] ? { width: colWidths[20] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      Empty
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 20 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 20 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[20] ? { width: colWidths[20] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      Empty
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 20 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 20 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[20] ? { width: colWidths[20] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      Empty
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 20 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 20 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[20] ? { width: colWidths[20] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      Empty
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 20 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 20 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[20] ? { width: colWidths[20] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      Empty
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 20 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 20 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[20] ? { width: colWidths[20] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      Empty
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border-r border-gray-100 ${frozenIndex === 20 ? "sticky z-20" : ""}`}
                    style={{
                      ...(frozenIndex === 20 && colWidths.length
                        ? { left: `${colWidths[0]}px`, background: "white" }
                        : {}),
                      ...(colWidths[20] ? { width: colWidths[20] } : {}),
                    }}
                  >
                    <span
                      className={`text-sm whitespace-nowrap ${product.pattern ? "text-[#101828]" : "text-[#99A1AF] italic"}`}
                    >
                      Empty
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Sticky bottom scrollbar synced with table scroll */}
      <div className="sticky bottom-12 z-40 px-4">
        <div
          ref={bottomBarRef as any}
          onScroll={() => {
            const b = bottomBarRef.current;
            const s = scrollRef.current;
            if (!b || !s) return;
            s.scrollLeft = b.scrollLeft;
          }}
          className="overflow-x-auto overflow-y-hidden w-full"
          style={{ height: 12 }}
        >
          <div
            style={{
              width: bottomInnerWidth || (tableRef.current?.scrollWidth ?? 0),
              height: 1,
            }}
          />
        </div>
      </div>

      {/* Pagination footer */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: 100,
        }}
        className="px-4 py-3 border-t border-[#E5E7EB] bg-white flex items-center justify-between"
      >
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Rows per page:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              setPageSize(newSize);
              setPage(1);
              setShowAllEnabled(false);
            }}
            className="border rounded px-2 py-1 text-sm"
          >
            {[50, 100, 250, 500].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            {startIndex + 1}-{endIndex} of {showAllEnabled ? total : "many"}
          </div>
          <div className="flex items-center gap-2">
            {showAllEnabled ? (
              <>
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50"
                >
                  Next
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAllEnabled(true)}
                className="text-sm text-blue-600 underline"
              >
                Load More
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* AI Optimized */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-1 h-5 bg-[#6D5BD0] rounded-sm" />
            <span>AI Optimized</span>
          </div>

          {/* Automated Rules */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-1 h-5 bg-[#4CAF7D] rounded-sm" />
            <span>Automated Rules</span>
          </div>

          {/* Manual Edit */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-1 h-5 bg-[#F79009] rounded-sm" />
            <span>Manual Edit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
