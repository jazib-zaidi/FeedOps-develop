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
const columns = [
  { key: "itemId", label: "Item ID", checkbox: true, sticky: true },
  { key: "title", label: "Product Title" },
  { key: "description", label: "Description" },
  { key: "brand", label: "Brand" },
  { key: "gpc", label: "Google Product Category" },
  { key: "color", label: "Colour" },
  { key: "material", label: "Material" },
  { key: "ageGroup", label: "Age Group" },
  { key: "condition", label: "Condition" },
  { key: "size", label: "Size" },
  { key: "pattern", label: "Pattern" },
  { key: "gender", label: "Gender" },
  { key: "price", label: "Price" },
  { key: "quantity", label: "Quantity" },
  { key: "availability", label: "Availability" },
  { key: "gtin", label: "GTIN" },
  { key: "itemGroupId", label: "Item Group ID" },
  { key: "productType", label: "Product Type" },
  { key: "weight", label: "Weight" },
  { key: "images", label: "Images" },
  ...Array.from({ length: 9 }).map((_, i) => ({
    key: `label${i + 1}`,
    label: `Label ${i + 1}`,
  })),
];

export function ProductTable({ isFullscreen }: { isFullscreen?: boolean }) {
  const navigate = useNavigate();
  const [productStates, setProductStates] = useState<boolean[]>(
    products.map((p) => p.enabled),
  );
  const DragHandle = () => (
    <svg
      className="opacity-0 group-hover:opacity-100 transition-opacity mr-1"
      width="6"
      height="19"
      viewBox="0 0 6 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        d="M0 1H2V3H0V1ZM4 1H6V3H4V1ZM0 5H2V7H0V5ZM4 5H6V7H4V5ZM0 9H2V11H0V9ZM4 9H6V11H4V9ZM0 13H2V15H0V13ZM4 13H6V15H4V13ZM0 17H2V19H0V17ZM4 17H6V19H4V17Z"
        fill="black"
      />{" "}
    </svg>
  );
  const ColumnMenu = ({
    index,
    frozenIndex,
    setFrozenIndex,
    openHeaderFor,
    setOpenHeaderFor,
    showRawTitle,
    setShowRawTitle,
  }) => (
    <div className="relative">
      {/* 3-dot button */}
      <button
        onClick={() => setOpenHeaderFor((v) => (v === index ? null : index))}
        aria-label="Column options"
        className="p-1 rounded bg-[#EAF0F7] border border-gray-200 hover:bg-white"
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <circle cx="8" cy="2" r="1.5" fill="#374151" />
          <circle cx="8" cy="8" r="1.5" fill="#374151" />
          <circle cx="8" cy="14" r="1.5" fill="#374151" />
        </svg>
      </button>

      {/* Dropdown */}
      {openHeaderFor === index && (
        <div className="absolute right-0 top-9 w-48 bg-white border rounded shadow p-2 z-50 text-sm font-normal">
          {/* Freeze / Unfreeze */}
          <button
            className="w-full flex items-center gap-2 p-2 text-left hover:hover-bg rounded"
            onClick={() => {
              setFrozenIndex((fi) => (fi === index ? null : index));
              setOpenHeaderFor(null);
            }}
          >
            {frozenIndex === index ? (
              <>
                {/* UNFREEZE ICON */}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <g clip-path="url(#clip0_11_17)">
                    {" "}
                    <path
                      d="M1.8335 8.70833C1.8335 7.37312 1.8335 6.70517 2.24858 6.29008C2.66366 5.875 3.33091 5.875 4.66683 5.875H10.3335C11.6694 5.875 12.3367 5.875 12.7517 6.29008C13.1668 6.70517 13.1668 7.37312 13.1668 8.70833V10.125C13.1668 12.1289 13.1668 13.1305 12.5442 13.7531C11.9223 14.375 10.92 14.375 8.91683 14.375H6.0835C4.08033 14.375 3.07804 14.375 2.45612 13.7531C1.8335 13.1297 1.8335 12.1289 1.8335 10.125V8.70833Z"
                      stroke="black"
                      stroke-width="1.41667"
                    />{" "}
                    <path
                      d="M10.6875 5.87497L10.7428 5.4358C10.841 4.65107 10.699 3.85499 10.3353 3.15268C9.97171 2.45038 9.40362 1.87488 8.70609 1.50217C8.00857 1.12946 7.2144 0.977083 6.42846 1.06515C5.64252 1.15321 4.90177 1.47758 4.30403 1.99542L3.72461 2.49763"
                      stroke="black"
                      stroke-width="1.41667"
                      stroke-linecap="round"
                    />{" "}
                    <path
                      d="M7.50016 11.5416C8.28257 11.5416 8.91683 10.9074 8.91683 10.125C8.91683 9.34258 8.28257 8.70831 7.50016 8.70831C6.71776 8.70831 6.0835 9.34258 6.0835 10.125C6.0835 10.9074 6.71776 11.5416 7.50016 11.5416Z"
                      fill="black"
                    />{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_11_17">
                      {" "}
                      <rect width="15" height="15" fill="white" />{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </svg>
                Unfreeze column
              </>
            ) : (
              <>
                {/* FREEZE ICON */}
                <svg
                  width="11"
                  height="14"
                  viewBox="0 0 11 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <g clip-path="url(#clip0_11_13)">
                    {" "}
                    <path
                      d="M0.865234 7.38432C0.865234 7.03315 1.00473 6.69637 1.25305 6.44805C1.50136 6.19974 1.83814 6.06024 2.18931 6.06024H8.80968C9.16084 6.06024 9.49763 6.19974 9.74594 6.44805C9.99425 6.69637 10.1338 7.03315 10.1338 7.38432V11.3565C10.1338 11.7077 9.99425 12.0445 9.74594 12.2928C9.49763 12.5411 9.16084 12.6806 8.80968 12.6806H2.18931C1.83814 12.6806 1.50136 12.5411 1.25305 12.2928C1.00473 12.0445 0.865234 11.7077 0.865234 11.3565V7.38432Z"
                      stroke="black"
                      stroke-width="1.32407"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      d="M2.85156 6.06021V3.41206C2.85156 2.70973 3.13056 2.03616 3.62719 1.53954C4.12381 1.04292 4.79738 0.763916 5.49971 0.763916C6.20204 0.763916 6.87561 1.04292 7.37223 1.53954C7.86886 2.03616 8.14786 2.70973 8.14786 3.41206V6.06021M4.83767 9.3704C4.83767 9.54598 4.90742 9.71437 5.03158 9.83853C5.15574 9.96268 5.32413 10.0324 5.49971 10.0324C5.67529 10.0324 5.84369 9.96268 5.96784 9.83853C6.092 9.71437 6.16175 9.54598 6.16175 9.3704C6.16175 9.19481 6.092 9.02642 5.96784 8.90227C5.84369 8.77811 5.67529 8.70836 5.49971 8.70836C5.32413 8.70836 5.15574 8.77811 5.03158 8.90227C4.90742 9.02642 4.83767 9.19481 4.83767 9.3704Z"
                      stroke="black"
                      stroke-width="1.32407"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_11_13">
                      {" "}
                      <rect width="11" height="13.4444" fill="white" />{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </svg>
                Freeze column
              </>
            )}
          </button>

          {/* Add column */}
          <button className="w-full flex items-center gap-2 p-2 text-left  hover:hover-bg rounded">
            <svg width="12" height="12" viewBox="0 0 32 32">
              <path d="M3.85 17.79h10.33v10.38a1.82 1.82 0 0 0 3.64 0V17.84h10.33a1.82 1.82 0 0 0 0-3.64H17.82V3.82a1.82 1.82 0 0 0-3.64 0v10.33H3.85a1.82 1.82 0 0 0 0 3.64Z" />
            </svg>
            Add column
          </button>

          {/* Show row data (title raw toggle) */}
          <button
            className="w-full flex items-center gap-2 p-2 text-left  hover:hover-bg rounded"
            onClick={() => {
              // Only toggle raw for the title column (index 1)

              setShowRawTitle(() =>
                index === 1 ? !showRawTitle : showRawTitle,
              );

              setOpenHeaderFor(null);
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M5.24984 2.60168C5.8157 2.4219 6.40611 2.33137 6.99984 2.33334C9.43934 2.33334 11.0995 3.79168 12.0894 5.07734C12.5853 5.72251 12.8332 6.04393 12.8332 7.00001C12.8332 7.95668 12.5853 8.27809 12.0894 8.92268C11.0995 10.2083 9.43934 11.6667 6.99984 11.6667C4.56034 11.6667 2.90017 10.2083 1.91025 8.92268C1.41442 8.27868 1.1665 7.95609 1.1665 7.00001C1.1665 6.04334 1.41442 5.72193 1.91025 5.07734C2.21271 4.68232 2.54944 4.31476 2.9165 3.97893"
                stroke="black"
                stroke-width="0.875"
                stroke-linecap="round"
              />{" "}
              <path
                d="M8.75 7C8.75 7.46413 8.56563 7.90925 8.23744 8.23744C7.90925 8.56563 7.46413 8.75 7 8.75C6.53587 8.75 6.09075 8.56563 5.76256 8.23744C5.43437 7.90925 5.25 7.46413 5.25 7C5.25 6.53587 5.43437 6.09075 5.76256 5.76256C6.09075 5.43437 6.53587 5.25 7 5.25C7.46413 5.25 7.90925 5.43437 8.23744 5.76256C8.56563 6.09075 8.75 6.53587 8.75 7Z"
                stroke="black"
                stroke-width="0.875"
              />{" "}
            </svg>
            {showRawTitle && index === 1 ? "Hide Raw Data" : "Show Raw Data"}
          </button>

          <hr />

          {/* Remove column */}
          <button className="w-full flex items-center gap-2 p-2 text-left  hover:hover-bg rounded">
            <svg width="11" height="11" viewBox="0 0 32 32">
              <path d="M2.57 29.48 16.03 18.5l11 10.98a1.75 1.75 0 1 0 2.48-2.48l-11-10.98 10.98-11A1.74 1.74 0 1 0 26.53 2.5L16.03 13.48 5.03 2.5a1.74 1.74 0 1 0-2.46 2.45l10.98 11-10.97 11a1.74 1.74 0 0 0 0 2.46Z" />
            </svg>
            Remove column
          </button>
        </div>
      )}
    </div>
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
  const MAX_COL_WIDTH = 1000;
  const [candidateIndex, setCandidateIndex] = useState<number | null>(null);
  const [frozenIndex, setFrozenIndex] = useState<number | null>(null);
  const cellRefs = useRef<Record<string, HTMLElement | null>>({});
  const [isTruncatedMap, setIsTruncatedMap] = useState<Record<string, boolean>>(
    {},
  );
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const [openHeaderFor, setOpenHeaderFor] = useState<number | null>(null);
  const [showRawTitle, setShowRawTitle] = useState<boolean>(false);

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

  // Detect truncated cells (title/description) by comparing element height to two-line height
  useEffect(() => {
    const checkAll = () => {
      const next: Record<string, boolean> = {};
      Object.keys(cellRefs.current).forEach((key) => {
        const el = cellRefs.current[key];
        if (!el) return;
        // Compute the height of two lines using the element's computed line-height
        const style = window.getComputedStyle(el);
        const lineHeight =
          parseFloat(style.lineHeight || "0") ||
          parseFloat(style.fontSize || "0") * 1.2;
        const twoLineHeight = lineHeight * 2 + 1; // small tolerance

        // If the element's scrollHeight is greater than twoLineHeight, it overflows beyond 2 lines
        const isTruncated = el.scrollHeight > twoLineHeight;
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
    const startWidth = colWidths[index] ?? 180;
    resizingRef.current = { index, startX: clientX as number, startWidth };
    document.body.style.userSelect = "none";
  };

  const onPointerMove = (e: MouseEvent | TouchEvent) => {
    const cur = resizingRef.current;
    if (!cur) return;
    const clientX =
      (e as MouseEvent).clientX ?? (e as TouchEvent).touches?.[0]?.clientX;
    if (clientX == null) return;
    const delta = (clientX as number) - cur.startX;
    const newWidth = Math.max(
      MIN_COL_WIDTH,
      Math.min(MAX_COL_WIDTH, cur.startWidth + delta),
    );
    setColWidths((prev) => {
      const next = [...prev];
      if (cur.index >= 0 && cur.index < next.length) {
        next[cur.index] = newWidth;
      }
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
            className={`bg-[#F8F9FA] border-b border-gray-200 ${
              isFullscreen ? "sticky top-0 z-40" : ""
            }`}
          >
            <tr>
              {columns.map((col, index) => (
                <th
                  key={col.key}
                  className={`group relative text-left py-3 px-4 border-r border-gray-100 bg-[#F8F9FA]
    ${index === 0 ? "sticky z-40" : ""}
    ${frozenIndex === index && index !== 0 ? "sticky z-30" : ""}
  `}
                  style={{
                    ...(index === 0
                      ? {
                          left: 0,
                          width: "200px",
                          minWidth: "200px",
                          maxWidth: "200px",
                        }
                      : frozenIndex === index
                        ? {
                            left: `${colWidths[0]}px`,
                          }
                        : {}),
                    ...(index !== 0 && colWidths[index]
                      ? { width: colWidths[index] }
                      : {}),
                  }}
                >
                  <div className="flex items-center gap-2">
                    {/* Drag */}
                    {index === 0 ? null : <DragHandle />}

                    {/* Label */}
                    <div className="text-sm font-bold whitespace-nowrap">
                      {col.label}
                      {col.key === "description" && (
                        <span className="ml-2 inline-block align-middle">
                          <Tooltip>
                            <TooltipTrigger>
                              <button
                                aria-label="Description info"
                                className="p-1 rounded hover:bg-gray-100"
                              >
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.5 8.5H6.5V5.5H5.5V8.5ZM6 4.5C6.14167 4.5 6.2605 4.452 6.3565 4.356C6.4525 4.26 6.50033 4.14133 6.5 4C6.49967 3.85867 6.45167 3.74 6.356 3.644C6.26033 3.548 6.14167 3.5 6 3.5C5.85833 3.5 5.73967 3.548 5.644 3.644C5.54833 3.74 5.50033 3.85867 5.5 4C5.49967 4.14133 5.54767 4.26017 5.644 4.3565C5.74033 4.45283 5.859 4.50067 6 4.5ZM6 11C5.30833 11 4.65833 10.8687 4.05 10.606C3.44167 10.3433 2.9125 9.98717 2.4625 9.5375C2.0125 9.08783 1.65633 8.55867 1.394 7.95C1.13167 7.34133 1.00033 6.69133 1 6C0.999667 5.30867 1.131 4.65867 1.394 4.05C1.657 3.44133 2.01317 2.91217 2.4625 2.4625C2.91183 2.01283 3.441 1.65667 4.05 1.394C4.659 1.13133 5.309 1 6 1C6.691 1 7.341 1.13133 7.95 1.394C8.559 1.65667 9.08817 2.01283 9.5375 2.4625C9.98683 2.91217 10.3432 3.44133 10.6065 4.05C10.8698 4.65867 11.001 5.30867 11 6C10.999 6.69133 10.8677 7.34133 10.606 7.95C10.3443 8.55867 9.98817 9.08783 9.5375 9.5375C9.08683 9.98717 8.55767 10.3435 7.95 10.6065C7.34233 10.8695 6.69233 11.0007 6 11ZM6 10C7.11667 10 8.0625 9.6125 8.8375 8.8375C9.6125 8.0625 10 7.11667 10 6C10 4.88333 9.6125 3.9375 8.8375 3.1625C8.0625 2.3875 7.11667 2 6 2C4.88333 2 3.9375 2.3875 3.1625 3.1625C2.3875 3.9375 2 4.88333 2 6C2 7.11667 2.3875 8.0625 3.1625 8.8375C3.9375 9.6125 4.88333 10 6 10Z"
                                    fill="black"
                                  />
                                </svg>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="text-sm font-medium">
                                Choose how descriptions are formatted for each
                                channel.
                                <div className="text-xs text-gray-500 mt-1">
                                  Manage this in{" "}
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
                        </span>
                      )}
                    </div>

                    <div className="flex-1" />

                    {index === 0 ? null : (
                      <ColumnMenu
                        index={index}
                        frozenIndex={frozenIndex}
                        setFrozenIndex={setFrozenIndex}
                        openHeaderFor={openHeaderFor}
                        setOpenHeaderFor={setOpenHeaderFor}
                        showRawTitle={showRawTitle}
                        setShowRawTitle={setShowRawTitle}
                      />
                    )}
                  </div>

                  {/* Resize handle */}
                  <div
                    onMouseDown={(e) => startResize(index, e)}
                    onTouchStart={(e) => startResize(index, e)}
                    className="absolute top-0 right-0 h-full w-3 -mr-1 cursor-col-resize opacity-0 group-hover:opacity-100"
                    style={{ touchAction: "none" }}
                  >
                    <div className="absolute right-1 top-1/4 h-1/2 w-px bg-gray-200" />
                  </div>
                </th>
              ))}
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
                        <a className="text-blue-500">{`...${String(product.id).slice(-4)}`}</a>
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
                        className="flex gap-1"
                        style={{
                          position: "relative",
                          height: showRawTitle ? "83px" : "auto",
                        }}
                      >
                        <div
                          ref={setCellRef(`title-${index}`)}
                          className={`text-[#101828]  text-sm`}
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: expandedMap[`title-${index}`]
                              ? undefined
                              : 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          <span className="ai-label flex  rounded-sm">
                            {product.short_title}
                          </span>

                          {showRawTitle && (
                            <span className="text-gray-600 text-[12px]  p-1 flex items-center gap-1 mt-2 w-max rounded-sm">
                              <svg
                                width="3"
                                height="15"
                                viewBox="0 0 3 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_814_102)">
                                  <rect width="3" height="21" fill="#C6C6C6" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_814_102">
                                    <rect
                                      width="3"
                                      height="15"
                                      rx="1.5"
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>

                              {product.short_title
                                .split(" ")
                                .slice(0, 5)
                                .join(" ")}
                            </span>
                          )}
                        </div>
                        {isTruncatedMap[`title-${index}`] ? (
                          <button
                            className="p-1 rounded hover:bg-gray-100  right-0 top-0"
                            onClick={() => toggleExpanded(`title-${index}`)}
                            aria-label={
                              expandedMap[`title-${index}`]
                                ? "Collapse title"
                                : "Expand title"
                            }
                          >
                            {expandedMap[`title-${index}`] ? (
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.609375 3.45312C0.447759 3.45313 0.292762 3.51733 0.178482 3.63161C0.0642018 3.74589 0 3.90088 0 4.0625C0 4.22412 0.0642018 4.37911 0.178482 4.49339C0.292762 4.60767 0.447759 4.67188 0.609375 4.67188H12.3906C12.5522 4.67187 12.7072 4.60767 12.8215 4.49339C12.9358 4.37911 13 4.22412 13 4.0625C13 3.90088 12.9358 3.74589 12.8215 3.63161C12.7072 3.51733 12.5522 3.45313 12.3906 3.45312H0.609375ZM7.92188 8.32812C7.76026 8.32812 7.60526 8.39233 7.49098 8.50661C7.3767 8.62089 7.3125 8.77588 7.3125 8.9375C7.3125 9.09912 7.3767 9.25411 7.49098 9.36839C7.60526 9.48267 7.76026 9.54688 7.92188 9.54688H12.3906C12.5522 9.54688 12.7072 9.48267 12.8215 9.36839C12.9358 9.25411 13 9.09912 13 8.9375C13 8.77588 12.9358 8.62089 12.8215 8.50661C12.7072 8.39233 12.5522 8.32812 12.3906 8.32812H7.92188ZM4.21688 8.32812L3.42875 7.54C3.32111 7.42448 3.26251 7.2717 3.2653 7.11383C3.26808 6.95596 3.33203 6.80533 3.44368 6.69368C3.55533 6.58203 3.70596 6.51808 3.86383 6.51529C4.0217 6.51251 4.17448 6.57111 4.29 6.67875L6.11813 8.50688L6.54875 8.9375L6.11813 9.36812L4.29 11.1962C4.17448 11.3039 4.0217 11.3625 3.86383 11.3597C3.70596 11.3569 3.55533 11.293 3.44368 11.1813C3.33203 11.0697 3.26808 10.919 3.2653 10.7612C3.26251 10.6033 3.32111 10.4505 3.42875 10.335L4.21688 9.54688H0.609375C0.447759 9.54688 0.292762 9.48267 0.178482 9.36839C0.0642018 9.25411 0 9.09912 0 8.9375C0 8.77588 0.0642018 8.62089 0.178482 8.50661C0.292762 8.39233 0.447759 8.32812 0.609375 8.32812H4.21688Z"
                                  fill="#2F2F2F"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                ></path>
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
                                ></path>
                              </svg>
                            )}
                          </button>
                        ) : null}
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
                          className="flex gap-1"
                          style={{ position: "relative" }}
                        >
                          <div
                            ref={setCellRef(`desc-${index}`)}
                            className="text-[#101828] text-sm"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: expandedMap[`desc-${index}`]
                                ? undefined
                                : 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {product.description}
                          </div>
                          {isTruncatedMap[`desc-${index}`] ? (
                            <button
                              className="p-1 rounded hover:bg-gray-100  right-0 top-0"
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
                                    d="M0.609375 3.45312C0.447759 3.45313 0.292762 3.51733 0.178482 3.63161C0.0642018 3.74589 0 3.90088 0 4.0625C0 4.22412 0.0642018 4.37911 0.178482 4.49339C0.292762 4.60767 0.447759 4.67188 0.609375 4.67188H12.3906C12.5522 4.67187 12.7072 4.60767 12.8215 4.49339C12.9358 4.37911 13 4.22412 13 4.0625C13 3.90088 12.9358 3.74589 12.8215 3.63161C12.7072 3.51733 12.5522 3.45313 12.3906 3.45312H0.609375ZM7.92188 8.32812C7.76026 8.32812 7.60526 8.39233 7.49098 8.50661C7.3767 8.62089 7.3125 8.77588 7.3125 8.9375C7.3125 9.09912 7.3767 9.25411 7.49098 9.36839C7.60526 9.48267 7.76026 9.54688 7.92188 9.54688H12.3906C12.5522 9.54688 12.7072 9.48267 12.8215 9.36839C12.9358 9.25411 13 9.09912 13 8.9375C13 8.77588 12.9358 8.62089 12.8215 8.50661C12.7072 8.39233 12.5522 8.32812 12.3906 8.32812H7.92188ZM4.21688 8.32812L3.42875 7.54C3.32111 7.42448 3.26251 7.2717 3.2653 7.11383C3.26808 6.95596 3.33203 6.80533 3.44368 6.69368C3.55533 6.58203 3.70596 6.51808 3.86383 6.51529C4.0217 6.51251 4.17448 6.57111 4.29 6.67875L6.11813 8.50688L6.54875 8.9375L6.11813 9.36812L4.29 11.1962C4.17448 11.3039 4.0217 11.3625 3.86383 11.3597C3.70596 11.3569 3.55533 11.293 3.44368 11.1813C3.33203 11.0697 3.26808 10.919 3.2653 10.7612C3.26251 10.6033 3.32111 10.4505 3.42875 10.335L4.21688 9.54688H0.609375C0.447759 9.54688 0.292762 9.48267 0.178482 9.36839C0.0642018 9.25411 0 9.09912 0 8.9375C0 8.77588 0.0642018 8.62089 0.178482 8.50661C0.292762 8.39233 0.447759 8.32812 0.609375 8.32812H4.21688Z"
                                    fill="#2F2F2F"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                  ></path>
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
                                  ></path>
                                </svg>
                              )}
                            </button>
                          ) : null}
                        </div>
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
                    <div>
                      <div
                        className="flex gap-1"
                        style={{ position: "relative" }}
                      >
                        <div
                          ref={setCellRef(`gcat-${index}`)}
                          className={`text-sm text-[#101828]`}
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: expandedMap[`gcat-${index}`]
                              ? undefined
                              : 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {product.google_product_category}
                        </div>
                        {isTruncatedMap[`gcat-${index}`] ? (
                          <button
                            className="p-1 rounded hover:bg-gray-100  right-0 top-0"
                            onClick={() => toggleExpanded(`gcat-${index}`)}
                            aria-label={
                              expandedMap[`gcat-${index}`]
                                ? "Collapse category"
                                : "Expand category"
                            }
                          >
                            {expandedMap[`gcat-${index}`] ? (
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.609375 3.45312C0.447759 3.45313 0.292762 3.51733 0.178482 3.63161C0.0642018 3.74589 0 3.90088 0 4.0625C0 4.22412 0.0642018 4.37911 0.178482 4.49339C0.292762 4.60767 0.447759 4.67188 0.609375 4.67188H12.3906C12.5522 4.67187 12.7072 4.60767 12.8215 4.49339C12.9358 4.37911 13 4.22412 13 4.0625C13 3.90088 12.9358 3.74589 12.8215 3.63161C12.7072 3.51733 12.5522 3.45313 12.3906 3.45312H0.609375ZM7.92188 8.32812C7.76026 8.32812 7.60526 8.39233 7.49098 8.50661C7.3767 8.62089 7.3125 8.77588 7.3125 8.9375C7.3125 9.09912 7.3767 9.25411 7.49098 9.36839C7.60526 9.48267 7.76026 9.54688 7.92188 9.54688H12.3906C12.5522 9.54688 12.7072 9.48267 12.8215 9.36839C12.9358 9.25411 13 9.09912 13 8.9375C13 8.77588 12.9358 8.62089 12.8215 8.50661C12.7072 8.39233 12.5522 8.32812 12.3906 8.32812H7.92188ZM4.21688 8.32812L3.42875 7.54C3.32111 7.42448 3.26251 7.2717 3.2653 7.11383C3.26808 6.95596 3.33203 6.80533 3.44368 6.69368C3.55533 6.58203 3.70596 6.51808 3.86383 6.51529C4.0217 6.51251 4.17448 6.57111 4.29 6.67875L6.11813 8.50688L6.54875 8.9375L6.11813 9.36812L4.29 11.1962C4.17448 11.3039 4.0217 11.3625 3.86383 11.3597C3.70596 11.3569 3.55533 11.293 3.44368 11.1813C3.33203 11.0697 3.26808 10.919 3.2653 10.7612C3.26251 10.6033 3.32111 10.4505 3.42875 10.335L4.21688 9.54688H0.609375C0.447759 9.54688 0.292762 9.48267 0.178482 9.36839C0.0642018 9.25411 0 9.09912 0 8.9375C0 8.77588 0.0642018 8.62089 0.178482 8.50661C0.292762 8.39233 0.447759 8.32812 0.609375 8.32812H4.21688Z"
                                  fill="#2F2F2F"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                ></path>
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
                                ></path>
                              </svg>
                            )}
                          </button>
                        ) : null}
                      </div>
                    </div>
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
                    <div>
                      <div
                        className="flex gap-1"
                        style={{ position: "relative" }}
                      >
                        <div
                          ref={setCellRef(`ptype-${index}`)}
                          className={`text-sm text-[#101828]`}
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: expandedMap[`ptype-${index}`]
                              ? undefined
                              : 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {product.product_type ?? "-"}
                        </div>
                        {isTruncatedMap[`ptype-${index}`] ? (
                          <button
                            className="p-1 rounded hover:bg-gray-100  right-0 top-0"
                            onClick={() => toggleExpanded(`ptype-${index}`)}
                            aria-label={
                              expandedMap[`ptype-${index}`]
                                ? "Collapse product type"
                                : "Expand product type"
                            }
                          >
                            {expandedMap[`ptype-${index}`] ? (
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
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
                        ) : null}
                      </div>
                    </div>
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

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-1 h-5 bg-[#c6c6c6] rounded-sm" />
            <span>Source Data</span>
          </div>
        </div>
      </div>
    </div>
  );
}
