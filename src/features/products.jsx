const products = [
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
  },
  {
    id: "colossus-ergonomic-gaming-office-chair",
    brand: "Kepler Brooks",
    images: [
      "colossus-ergonomic-gaming-office-chair-1.webp",
      "colossus-ergonomic-gaming-office-chair-2.webp",
      "colossus-ergonomic-gaming-office-chair-3.webp",
      "colossus-ergonomic-gaming-office-chair-4.webp",
      "colossus-ergonomic-gaming-office-chair-5.webp",
      "colossus-ergonomic-gaming-office-chair-6.webp",
      "colossus-ergonomic-gaming-office-chair-7.webp",
      "colossus-ergonomic-gaming-office-chair-8.webp",
    ],
    name: "Colossus Ergonomic Gaming Office Chair",
    type: "Chair",
    sku: "1140550231142",
    description:
      "ERGONOMICALLY DESIGNED FOR HARDCORE GAMING : From its unique contours and angled seat edges, to its fully adjustable recline, tilt, and height, the Dr Luxur Colossus supports a healthy sitting posture so you can game for hours in comfort",
    options: ["color", ["white", "green"]],
    price: 356.0,
    comments: [],
    rate: 5,
    seller: 455,
    stock: true,
  },
  {
    id: "dualsense-wireless-controllers",
    brand: "Sony PS5",
    images: [
      "dualsense-wireless-controllers-1.webp",
      "dualsense-wireless-controllers-2.webp",
      "dualsense-wireless-controllers-3.webp",
      "dualsense-wireless-controllers-4.webp",
      "dualsense-wireless-controllers-5.webp",
      "dualsense-wireless-controllers-6.webp",
      "dualsense-wireless-controllers-7.webp",
      "dualsense-wireless-controllers-8.webp",
      "dualsense-wireless-controllers-9.webp",
    ],
    name: "DualSense Wireless Controllers",
    type: "Remote",
    sku: "1140560231142",
    description:
      "Bring gaming worlds to life - a) Feel your in-game actions and environment simulated through haptic feedback2, b)Experience varying force and tension at your fingertips with adaptive triggers2. Chat online through the built-in microphone3, connect a headset directly via the 3.5mm jack, Switch voice capture on and off using the dedicated mute button, record broadcast",
    options: ["color", ["white", "black"]],
    price: 646.0,
    comments: [],
    rate: 4.5,
    seller: 189,
    stock: true,
  },
  {
    id: "electrobot-xtreme-gaming-series-pc",
    brand: "Electrobot",
    images: [
      "electrobot-xtreme-gaming-series-pc-1.webp",
      "electrobot-xtreme-gaming-series-pc-2.webp",
      "electrobot-xtreme-gaming-series-pc-3.webp",
    ],
    name: "Electrobot Xtreme Gaming Series PC",
    type: "Game PCs",
    sku: "9140570231161",
    description:
      "Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly with ease. Preloaded with Windows 10 64-bit OS for enhanced productivity and multitasking.",
    options: ["size", ["128 GB", "256 GB"]],
    price: 786.0,
    comments: [],
    rate: 4.2,
    seller: 124,
    stock: true,
  },
  {
    id: "g-series-curved-va-monitor",
    brand: "Lenovo",
    images: [
      "g-series-curved-va-monitor-1.webp",
      "g-series-curved-va-monitor-2.webp",
      "g-series-curved-va-monitor-3.webp",
      "g-series-curved-va-monitor-4.webp",
      "g-series-curved-va-monitor-5.webp",
      "g-series-curved-va-monitor-6.webp",
    ],
    name: "G-Series Curved VA Monitor",
    type: "Monitors",
    sku: "9140570231185",
    description:
      "Lenovo Smart Artery Software: Self-learning software auto-adjusts display | Crosshair feature for FPS games | View Frame Rate and Timer | Create customized gaming modes.Eyesafe Certified Display | TUV Low Blue Light (Hardware solution) | TUV Rheinland Eye Comfort",
    options: ["color", ["gray", "blue", "black"]],
    price: 453,
    comments: [],
    rate: 4.2,
    seller: 189,
    stock: true,
  },
  {
    id: "gaming-chair-for-gamers-with-lumbar",
    brand: "Kepler Brooks",
    images: [
      "gaming-chair-for-gamers-with-lumbar-",
      "gaming-chair-for-gamers-with-lumbar-",
      "gaming-chair-for-gamers-with-lumbar-",
      "gaming-chair-for-gamers-with-lumbar-",
    ],
    name: "Gaming Chair for Gamers with Lumbar",
    type: "Chair",
    sku: "9140570231152",
    description:
      "Have back issues or don’t want to develop them? This adjustable office chair includes Cushion Foam Padded support and a recline feature that allows you to tilt the backrest back or sit straight. Now you can quickly find a position that makes your back feel the most comfortable!",
    options: ["size", ["50D x 66W x 131H", "52D x 66W x 131H"]],
    price: 580.0,
    comments: [],
    rate: 3.5,
    seller: 146,
    stock: false,
  },
  {
    id: "htc-vive-tracker-3-0-pc-",
    brand: "XFX",
    images: [
      "htc-vive-tracker-3-0-pc-1.webp",
      "htc-vive-tracker-3-0-pc-2.webp",
      "htc-vive-tracker-3-0-pc-3.webp",
      "htc-vive-tracker-3-0-pc-4.webp",
    ],
    name: "HTC Vive Tracker (3.0) - PC",
    type: "Console",
    sku: "9140570231161",
    description:
      "Body tracking-track the physical presence of your entire body within the virtual environment. Capture full-body motions with as few as 3 trackers.Accessory tracking-enable the tracking of real-world objects to Increase the realism of your simulation or training experience.Data port sharing in addition to providing power, the USB port can be used to input Controller button events",
    options: ["color", ["black", "blue"]],
    price: 320.0,
    comments: [],
    rate: 4.2,
    seller: 188,
    stock: true,
  },
  {
    id: "hyper-clutch-gaming-controller",
    brand: "Sony PS5",
    images: [
      "hyper-clutch-gaming-controller-1.webp",
      "hyper-clutch-gaming-controller-2.webp",
      "hyper-clutch-gaming-controller-3.webp",
    ],
    name: "Hyper Clutch Gaming Controller",
    type: "Remote",
    sku: "9140570231162",
    description:
      "Bring gaming worlds to life Feel your in-game actions and environment simulated through haptic feedback Experience varying force and tension at your fingertips with adaptive triggers2. Chat online through the built-in microphone3, connect a headset directly via the 3.5mm jack, Switch voice capture on and off using the dedicated mute button, record broadcast.",
    options: ["color", ["black"]],
    price: 630.0,
    comments: [],
    rate: 3.5,
    seller: 176,
    stock: false,
  },
  {
    id: "kd-dmtr-gaming-desktop-pc",
    brand: "KandE",
    images: [
      "kd-dmtr-gaming-desktop-pc-1.webp",
      "kd-dmtr-gaming-desktop-pc-2.webp",
      "kd-dmtr-gaming-desktop-pc-3.webp",
      "kd-dmtr-gaming-desktop-pc-4.webp",
      "kd-dmtr-gaming-desktop-pc-5.webp",
    ],
    name: "KD DMTR Gaming Desktop PC",
    type: "Game PCs",
    sku: "9140570251101",
    description:
      "Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly with ease. Preloaded with Windows 10 64-bit OS for enhanced productivity and multitasking.",
    options: ["size", ["236 GB", "365 GB"]],
    price: 865.0,
    comments: [],
    rate: 4.2,
    seller: 156,
    stock: true,
  },
  {
    id: "kepler-brooks-gaming-chair",
    brand: "Kepler Brooks",
    images: [
      "kepler-brooks-gaming-chair-1.webp",
      "kepler-brooks-gaming-chair-2.webp",
      "kepler-brooks-gaming-chair-3.webp",
      "kepler-brooks-gaming-chair-4.webp",
    ],
    name: "Kepler Brooks Gaming Chair",
    type: "Chair",
    sku: "9140570231171",
    description:
      "Premium Material: PU Leather Upholstery made with High density foam and added seat cushion, more comfort and long-time use; High Tensile steel frame, more sturdy and stable; lumbar & headrest pillows offer added support and comfort. Heavy-duty base and nylon smooth-rolling casters for super stability and mobility.",
    options: ["size", ["52D x 66W x 131H", "50D x 65W x 130H"]],
    price: 563.0,
    comments: [],
    rate: 4.3,
    seller: 231,
    stock: true,
  },
  {
    id: "multi-functional-ergonomic-gaming-chair-",
    brand: "Kepler Brooks",
    images: [
      "multi-functional-ergonomic-gaming-chair-.webp",
      "multi-functional-ergonomic-gaming-chair-.webp",
      "multi-functional-ergonomic-gaming-chair-.webp",
      "multi-functional-ergonomic-gaming-chair-.webp",
      "multi-functional-ergonomic-gaming-chair-.webp",
    ],
    name: "Multi-Functional Ergonomic Gaming Chair",
    type: "Chairs",
    sku: "9140570231124",
    description:
      "ERGONOMIC DESIGN: Feel less fatigued over long periods with the lumbar curve that gently supports your lower back and encourages sitting in a neutral position. 110-degree shoulder arches and wide 54-cm seat base ensure optimal weight distribution for long-lasting comfort during gaming marathons.",
    options: ["color", ["black"]],
    price: 560.0,
    comments: [],
    rate: 5,
    seller: 183,
    stock: false,
  },
  {
    id: "radeon-rx-120-gts-graphics-card-",
    brand: "XFX",
    images: [
      "radeon-rx-120-gts-graphics-card-.webp",
      "radeon-rx-120-gts-graphics-card-.webp",
      "radeon-rx-120-gts-graphics-card-.webp",
      "radeon-rx-120-gts-graphics-card-.webp",
    ],
    name: "Radeon RX 120 GTS Graphics Card",
    type: "Cards",
    sku: "9140560231161",
    description:
      "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR technology delivers a virtually stutter-free, low latency experience, essential for remarkable virtual reality environments.",
    options: ["size", ["3 GB", "6 GB"]],
    price: 1,
    comments: [],
    rate: 5,
    seller: 483,
    stock: true,
  },
  {
    id: "radeon-rx-590-gts-graphics-card",
    brand: "XFX",
    images: [
      "radeon-rx-590-gts-graphics-card-1.webp",
      "radeon-rx-590-gts-graphics-card-2.webp",
      "radeon-rx-590-gts-graphics-card-3.webp",
      "radeon-rx-590-gts-graphics-card-4.webp",
      "radeon-rx-590-gts-graphics-card-5.webp",
      "radeon-rx-590-gts-graphics-card-6.webp",
      "radeon-rx-590-gts-graphics-card-7.webp",
      "radeon-rx-590-gts-graphics-card-8.webp",
      "radeon-rx-590-gts-graphics-card-9.webp",
      "radeon-rx-590-gts-graphics-card-10.webp",
    ],
    name: "Radeon RX 590 GTS Graphics Card",
    type: "Cards",
    sku: "9140560231182",
    description:
      "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR technology delivers a virtually stutter-free, low latency experience, essential for remarkable virtual reality environments.",
    options: ["color", ["red", "black"]],
    price: 890,
    comments: [],
    rate: 5,
    seller: 487,
    stock: true,
  },
  {
    id: "radeon-rx-680-gts-graphics-card",
    brand: "XFX",
    images: [
      "radeon-rx-680-gts-graphics-card-1.webp",
      "radeon-rx-680-gts-graphics-card-2.webp",
      "radeon-rx-680-gts-graphics-card-3.webp",
    ],
    name: "Radeon RX 680 GTS Graphics Card",
    type: "Cards",
    sku: "9140560231181",
    description:
      "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR technology delivers a virtually stutter-free, low latency experience, essential for remarkable virtual reality environments.",
    options: ["color", ["black"]],
    price: 365.0,
    comments: [],
    rate: 3.8,
    seller: 16,
    stock: false,
  },
  {
    id: "radeon™-rx-750-xt-speedster-merc",
    brand: "XFX",
    images: [
      "radeon™-rx-750-xt-speedster-merc-1.webp",
      "radeon™-rx-750-xt-speedster-merc-2.webp",
      "radeon™-rx-750-xt-speedster-merc-3.webp",
    ],
    name: "Radeon™ RX 750 XT SPEEDSTER MERC",
    type: "Cards",
    sku: "9140560231156",
    description:
      "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR technology delivers a virtually stutter-free, low latency experience, essential for remarkable virtual reality environments.",
    options: ["size", ["RX 750"]],
    price: 560,
    comments: [],
    rate: 4.3,
    seller: 222,
    stock: false,
  },
  {
    id: "radeon™-rx-750-xt-speedster-merc-1",
    brand: "XFX",
    images: [
      "radeon™-rx-750-xt-speedster-merc-1-1.webp",
      "radeon™-rx-750-xt-speedster-merc-1-2.webp",
      "radeon™-rx-750-xt-speedster-merc-1-3.webp",
      "radeon™-rx-750-xt-speedster-merc-1-4.webp",
    ],
    name: "Radeon™ RX 750 XT SPEEDSTER MERC",
    type: "Cards",
    sku: "9140560231111",
    description:
      "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR technology delivers a virtually stutter-free, low latency experience, essential for remarkable virtual reality environments.",
    options: ["color", ["black", "white"]],
    price: 900.0,
    comments: [],
    rate: 5,
    seller: 4.2,
    stock: true,
  },
  {
    id: "raptor-gameing-z95",
    brand: "Electrobot",
    images: [
      "raptor-gameing-z95-1.webp",
      "raptor-gameing-z95-2.webp",
      "raptor-gameing-z95-3.webp",
      "raptor-gameing-z95-4.webp",
    ],
    name: "Raptor Gameing Z95",
    type: "Game PCs",
    sku: "9140560231128",
    description:
      "Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly with ease. Preloaded with Windows 10 64-bit OS for enhanced productivity and multitasking.",
    options: ["size", ["364 GB"]],
    price: 896.0,
    comments: [],
    rate: 4.5,
    seller: 232,
    stock: true,
  },
  {
    id: "refurbished-xbox-series-x-1tb-console",
    brand: "XFX",
    images: [
      "refurbished-xbox-series-x-1tb-console-1.webp",
      "refurbished-xbox-series-x-1tb-console-2.webp",
      "refurbished-xbox-series-x-1tb-console-3.webp",
      "refurbished-xbox-series-x-1tb-console-4.webp",
    ],
    name: "Refurbished Xbox Series X 1TB Console",
    type: "Console",
    sku: "9140560231126",
    description:
      "Compatibility; Glass Screen Protector Compatible with Nintendo Switch. 9H Hardness; Tempered glass durability rated at 9H hardness to protect from everyday scratches. Case friendly; Made case compatible with Spigen case",
    options: ["color", ["black", "white"]],
    price: 700.0,
    comments: [],
    rate: 5,
    seller: 453,
    stock: true,
  },
  {
    id: "rubber-keycaps",
    brand: "Vulture",
    images: [
      "rubber-keycaps-1.webp",
      "rubber-keycaps-2.webp",
      "rubber-keycaps-3.webp",
      "rubber-keycaps-4.webp",
      "rubber-keycaps-5.webp",
      "rubber-keycaps-5.avif",
    ],
    name: "Rubber Keycaps",
    type: "Keycaps",
    sku: "9140560231148",
    description:
      "Our Rubber Keycaps are designed to fit any gaming keyboard with any Cherry MX Switches or any new switches that have a + under your keycaps. Installing our Keycaps on your Mechanical keyboard couldn't be easier! Just pull out the old keycaps with our included Key puller and pop in ours! The durability of rubber materials is influenced by several environmental factors, it depends on how and in what way users rub the keycaps.",
    options: ["color", ["green", "red"]],
    price: 128.0,
    comments: [],
    rate: 3.8,
    seller: 178,
    stock: true,
  },
  {
    id: "vr-headset-with-headphones",
    brand: "XFX",
    images: [
      "vr-headset-with-headphones-.webp",
      "vr-headset-with-headphones-.webp",
      "vr-headset-with-headphones-.webp",
      "vr-headset-with-headphones-.webp",
      "vr-headset-with-headphones-.webp",
    ],
    name: "VR Headset with Headphones",
    type: "Console",
    sku: "1140560231148",
    description:
      "40MM HD optical resin lens with Focal and IPD adjustments with FOV up to 110 provides best VR Experience.Best-in-class headphones With 3.5mm Jack and removable front panel for ventilation gives best vr experience with the VR Headset",
    options: ["size", ["18 x 11.5 x 11", "20 x 12.5 x 13"]],
    price: 890.0,
    comments: [],
    rate: 1,
    seller: 1,
    stock: true,
  },
  {
    id: "nintendo-switch-lite-turquoise",
    brand: "XFX",
    images: [
      "nintendo-switch-lite-turquoise-1.webp",
      "nintendo-switch-lite-turquoise-2.webp",
      "nintendo-switch-lite-turquoise-3.webp",
      "nintendo-switch-lite-turquoise-4.webp",
      "nintendo-switch-lite-turquoise-5.webp",
      "nintendo-switch-lite-turquoise-6.webp",
    ],
    name: "Nintendo Switch Lite - Turquoise",
    type: "Console",
    sku: "9140570231131",
    description:
      "Compatibility; Glass Screen Protector Compatible with Nintendo Switch. 9H Hardness; Tempered glass durability rated at 9H hardness to protect from everyday scratches. Case friendly; Made case compatible with Spigen case",
    options: ["color", ["blue", "white"]],
    price: 443.0,
    comments: [],
    rate: 4.5,
    seller: 352,
    stock: true,
  },
];
