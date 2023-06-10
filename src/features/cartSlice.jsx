import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products";
const initialState = {
  products: products,
  cartItems: [
    {
      id: "alien-ware-monitor-t-46",
      brand: "samsung",
      images: [
        "alien-ware-monitor-t-46-1.webp",
        "alien-ware-monitor-t-46-2.webp",
        "alien-ware-monitor-t-46-3.webp",
        "alien-ware-monitor-t-46-4.webp",
      ],
      name: "Alien ware Monitor T 46",
      type: "Monitors",
      sku: "1120550231151",
      description:
        "Exceptional Full HD IPS 21.5 Inch Ultra Thin Display : Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles I Zero Frame Design.Connectivity Ports includes 1 x VGA Port, 1 x HDMI, 1 Audio-In Port, with Inbox HDMI and VGA Cable abc",
      options: ["size", ["32-inches", "28-inches"]],
      price: 800.0,
      comments: [],
      rate: 4.5,
      seller: 223,
      stock: true,
      option: 0,
      quantity: 1,
    },
    {
      id: "alienware-gameing-monitor-t-45",
      brand: "acer",
      images: [
        "alienware-gameing-monitor-t-45-1.webp",
        "alienware-gameing-monitor-t-45-2.webp",
        "alienware-gameing-monitor-t-45-3.webp",
      ],
      name: "Alienware Gameing Monitor T 45",
      type: "Monitors",
      sku: "1130550231151",
      description:
        "Exceptional Full HD IPS 21.5 Inch Ultra Thin Display : Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles I Zero Frame Design.Connectivity Ports includes 1 x VGA Port, 1 x HDMI, 1 Audio-In Port, with Inbox HDMI and VGA Cable",
      options: ["size", ["21.5-inches", "25-inches"]],
      price: 560.0,
      comments: [],
      rate: 5,
      seller: 184,
      stock: true,
      option: 1,
      quantity: 4,
    },
    {
      id: "alienware-monitor-d-152",
      brand: "acer",
      images: [
        "alienware-monitor-d-152-1.webp",
        "alienware-monitor-d-152-2.webp",
        "alienware-monitor-d-152-3.webp",
      ],
      name: "Alienware Monitor D 152",
      type: "Monitors",
      sku: "1130550231153",
      description:
        "Exceptional Full HD IPS 21.5 Inch Ultra Thin Display : Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles I Zero Frame Design.Connectivity Ports includes 1 x VGA Port, 1 x HDMI, 1 Audio-In Port, with Inbox HDMI and VGA Cable",
      options: ["size", ["30 inches", "32.5 inches"]],
      price: 752.0,
      comments: [],
      rate: 5,
      seller: 188,
      stock: false,
      option: 1,
      quantity: 2,
    },
    {
      id: "cloud-alpha-gaming-headset",
      brand: "HyperX",
      images: [
        "cloud-alpha-gaming-headset-1.webp",
        "cloud-alpha-gaming-headset-2.webp",
        "cloud-alpha-gaming-headset-3.webp",
      ],
      name: "Cloud Alpha Gaming Headset",
      type: "Headset",
      sku: "1140550231151",
      description:
        "HyperX Dual Chamber Drivers for more distinction and less distortion. Signature Award-Winning HyperX comfort. Durable aluminum frame with an expanded headband. Detachable braided cable with convenient in-line audio control. Detachable noise cancellation microphone.",
      options: ["color", ["red", "black"]],
      price: 530.0,
      comments: [],
      rate: 4.8,
      seller: 421,
      stock: true,
      option: 0,
      quantity: 1,
    },
    {
      id: "cloud-alpha-gaming-headset",
      brand: "HyperX",
      images: [
        "cloud-alpha-gaming-headset-1.webp",
        "cloud-alpha-gaming-headset-2.webp",
        "cloud-alpha-gaming-headset-3.webp",
      ],
      name: "Cloud Alpha Gaming Headset",
      type: "Headset",
      sku: "1140550231151",
      description:
        "HyperX Dual Chamber Drivers for more distinction and less distortion. Signature Award-Winning HyperX comfort. Durable aluminum frame with an expanded headband. Detachable braided cable with convenient in-line audio control. Detachable noise cancellation microphone.",
      options: ["color", ["red", "black"]],
      price: 530.0,
      comments: [],
      rate: 4.8,
      seller: 421,
      stock: true,
      option: 0,
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
