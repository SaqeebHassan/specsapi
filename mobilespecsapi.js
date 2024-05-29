const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3100;

app.use(cors());

// All Mobiles Brands Names
const mobileBrands = [
  { brandName: "Acer" },
  { brandName: "alcatel" },
  { brandName: "Apple" },
  { brandName: "Asus" },
  { brandName: "BlackBerry" },
  { brandName: "Google" },
  { brandName: "Honor" },
  { brandName: "HTC" },
  { brandName: "Huawei" },
  { brandName: "Infinix" },
  { brandName: "itel" },
  { brandName: "Lenovo" },
  { brandName: "LG" },
  { brandName: "Meizu" },
  { brandName: "Micromax" },
  { brandName: "Microsoft" },
  { brandName: "Motorola" },
  { brandName: "Nokia" },
  { brandName: "Nothing" },
  { brandName: "OnePlus" },
  { brandName: "Oppo" },
  { brandName: "QMobile" },
  { brandName: "Realme" },
  { brandName: "Samsung" },
  { brandName: "Sony" },
  { brandName: "Tecno" },
  { brandName: "vivo" },
  { brandName: "ZTE" },
];

// All Brand and All Brand Modesl and their Infos
const phoneModels = {
  Apple: {
    iphone15promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 15 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716658956/iphone/iphone15/uoup5oo5y121boklmgcr.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "159.9 x 76.7 x 8.3 mm (6.30 x 3.02 x 0.33 in)",
        bodyWeight: "221 g (7.80 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), titanium frame (grade 5)",
      },
      DisplayDetails: {
        displayType:
          "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
        displaySize: "6.7 inches, 110.2 cm2 (~89.8% screen-to-body ratio)",
        displayResolution:
          "1290 x 2796 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
        displayOther1: "Always-On display",
      },
      PlatformDetails: {
        platformChipset: "Apple A17 Pro (3 nm)",
        platformCpu: "Hexa-core (2x3.78 GHz + 4x2.11 GHz)",
        platformGpu: "Apple GPU (6-core graphics)",
        platformOs: "iOS 17, upgradable to iOS 17.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "256GB 8GB RAM, 512GB 8GB RAM, 1TB 8GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "48 MP, f/1.8, 24mm (wide), 1/1.28\u0022, 1.22\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.8, 120mm (periscope telephoto), 1/3.06\u0022, 1.12\u00b5m, dual pixel PDAF, 3D sensor\u2011shift OIS, 5x optical zoom\n 12 MP, f/2.2, 13mm, 120\u02da (ultrawide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), 3D (spatial) video, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@24/30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF, OIS\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "USB Type-C 3.2 Gen 2, DisplayPort",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband 2 (UWB) support",
        featureCall: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 15W wireless (Qi2) - requires iOS 17.2 update\n 4.5W reverse wired",
        batteryType: "Li-Ion 4441 mAh, non-removable",
      },
      MiscDetails: {
        miscColors:
          "Black Titanium, White Titanium, Blue Titanium, Natural Titanium",
        miscModels: "A2849, A3105, A3106, A3108, iPhone16,2",
        miscPrice:
          "$\u20091,149.00 / \u00a3\u20091,149.00 / \u20ac\u20091,369.00 / \u20b9\u2009156,900",
      },
      TestsDetails: {
        testsPerformance: "AnTuTu: 1487203 (v10)\n GeekBench: 7237 (v6.0)",
      },
    },
    iphone15pro: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 15 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716659883/iphone/iphone15/cr0va8lliv5rk22ca8fl.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "146.6 x 70.6 x 8.3 mm (5.77 x 2.78 x 0.33 in)",
        bodyWeight: "187 g (6.60 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), titanium frame (grade 5)",
      },
      DisplayDetails: {
        displayType:
          "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
        displaySize: "6.1 inches, 91.3 cm2 (~88.2% screen-to-body ratio)",
        displayResolution:
          "1179 x 2556 pixels, 19.5:9 ratio (~461 ppi density)/ Always-On display",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A17 Pro (3 nm)",
        platformCpu: "Hexa-core (2x3.78 GHz + 4x2.11 GHz)",
        platformGpu: "Apple GPU (6-core graphics)",
        platformOs: "iOS 17, upgradable to iOS 17.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM, 1TB 8GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "48 MP, f/1.8, 24mm (wide), 1/1.28\u0022, 1.22\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.8, 77mm (telephoto), 1/3.5\u0022, 1.0\u00b5m, PDAF, OIS, 3x optical zoom\n 12 MP, f/2.2, 13mm, 120\u02da (ultrawide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), 3D (spatial) video, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@24/30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF, OIS\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "USB Type-C 3.2 Gen 2, DisplayPort",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, hotspot",
      },
      FeaturesDetails: {
        featuresOther1: "Ultra Wideband 2 (UWB) support",
        featuresOther2: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 15W wireless (Qi2) - requires iOS 17.2 update\n 4.5W reverse wired",
        batteryType: "Li-Ion 3274 mAh, non-removable",
      },
      MiscDetails: {
        miscColors:
          "Black Titanium, White Titanium, Blue Titanium, Natural Titanium",
        miscModels: "A2848, A3101, A3102, A3104, iPhone16,1",
        miscPrice:
          "$\u2009891.45 / \u00a3\u2009949.00 / \u20ac\u20091,129.00 / \u20b9\u2009130,990",
      },
    },
    iphone15: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 15",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716809500/iphone/iphone15/j3wkrp5azolwpib0qhif.png",
      },
      gsmNetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "147.6 x 71.6 x 7.8 mm (5.81 x 2.82 x 0.31 in)",
        bodyWeight: "171 g (6.03 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 1000 nits (HBM), 2000 nits (peak)",
        displaySize: "6.1 inches, 91.3 cm2 (~86.4% screen-to-body ratio)",
        displayResolution:
          "1179 x 2556 pixels, 19.5:9 ratio (~461 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A16 Bionic (4 nm)",
        platformCpu: "Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 17, upgradable to iOS 17.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "48 MP, f/1.6, 26mm (wide), 1/1.56\u0022, 1.0\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.4, 13mm, 120\u02da (ultrawide)",
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), Cinematic mode (4K@30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "USB Type-C 2.0, DisplayPort",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featuresOther1: "Ultra Wideband 2 (UWB) support",
        featuresOther2: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 15W wireless (Qi2) - requires iOS 17.2 update\n 4.5W reverse wired",
        batteryType: "Li-Ion 3349 mAh, non-removable",
      },
      MiscDetails: {
        miscColors: "Black, Blue, Green, Yellow, Pink",
        miscModels: "A3090, A2846, A3089, A3092, iPhone15,4",
        miscPrice:
          "$\u2009704.95 / \u00a3\u2009749.00 / \u20ac\u2009879.99 / \u20b9\u200972,990",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 1354651 (v10)\n GeekBench: 6526 (v6)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone15plus: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 15 Plus",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716810379/iphone/iphone15/j07akb1d7l8bm10ftptr.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "160.9 x 77.8 x 7.8 mm (6.33 x 3.06 x 0.31 in)",
        bodyWeight: "201 g (7.09 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 1000 nits (HBM), 2000 nits (peak)",
        displaySize: "6.7 inches, 110.2 cm2 (~88.0% screen-to-body ratio)",
        displayResolution:
          "1290 x 2796 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A16 Bionic (4 nm)",
        platformCpu: "Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 17, upgradable to iOS 17.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "48 MP, f/1.6, 26mm (wide), 1/1.56\u0022, 1.0\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.4, 13mm, 120\u02da (ultrawide)",
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), Cinematic mode (4K@30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "USB Type-C 2.0, DisplayPort",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featuresOther1: "Ultra Wideband 2 (UWB) support",
        featuresOther2: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 15W wireless (Qi2) - requires iOS 17.2 update\n 4.5W reverse wired",
        batteryType: "Li-Ion 4383 mAh, non-removable",
      },
      MiscDetails: {
        miscColors: "Black, Blue, Green, Yellow, Pink",
        miscModels: "A3094, A2847, A3093, A3096, iPhone15,5",
        miscPrice:
          "$\u2009727.95 / \u00a3\u2009849.00 / \u20ac\u20091,019.00 / \u20b9\u200982,990",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 1385649 (v10)\n GeekBench: 6618 (v6)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone14promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 14 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716810688/iphone/iphone14/sbxfqi0q8nstlyvdvwoi.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)",
        bodyWeight: "240 g (8.47 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
        displaySize: "6.7 inches, 110.2 cm2 (~88.3% screen-to-body ratio)",
        displayResolution:
          "1290 x 2796 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
        displayOther1: "Always-On display",
      },
      PlatformDetails: {
        platformChipset: "Apple A16 Bionic (4 nm)",
        platformCpu: "Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 16, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "48 MP, f/1.8, 24mm (wide), 1/1.28\u0022, 1.22\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.8, 77mm (telephoto), 1/3.5\u0022, PDAF, OIS, 3x optical zoom\n 12 MP, f/2.2, 13mm, 120\u02da (ultrawide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@24/30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF, OIS (unconfirmed)\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband (UWB) support",
        featureCall: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 4323 mAh, non-removable (16.68 Wh)",
      },
      MiscDetails: {
        miscColors: "Space Black, Silver, Gold, Deep Purple",
        miscModels: "A2894, A2651, A2893, A2895, iphone15,3",
        miscPrice:
          "\u20ac\u20091,449.00 / $\u20091,099.99 / \u00a3\u20091,199.00 / \u20b9\u2009139,900",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 955884 (v9)\n GeekBench: 5423 (v5.1)\n GFXBench: 54fps (ES 3.1 onscreen)",
      },
    },
    iphone14pro: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 14 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716810689/iphone/iphone14/btuaic6esimowvzhdyyy.png",
      },
      gsmNetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "147.5 x 71.5 x 7.9 mm (5.81 x 2.81 x 0.31 in)",
        bodyWeight: "206 g (7.27 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
        displaySize: "6.1 inches, 91.7 cm2 (~87.0% screen-to-body ratio)",
        displayResolution:
          "1179 x 2556 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
        displayOther1: "Always-On display",
      },
      PlatformDetails: {
        platformChipset: "Apple A16 Bionic (4 nm)",
        platformCpu: "Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 16, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "48 MP, f/1.8, 24mm (wide), 1/1.28\u0022, 1.22\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.8, 77mm (telephoto), 1/3.5\u0022, PDAF, OIS, 3x optical zoom\n 12 MP, f/2.2, 13mm, 120\u02da (ultrawide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@24/30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF, OIS (unconfirmed)\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband (UWB) support",
        featureCall: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 3200 mAh, non-removable (12.38 Wh)",
      },
      MiscDetails: {
        miscColors: "Space Black, Silver, Gold, Deep Purple",
        miscModels: "A2890, A2650, A2889, A2892, iphone15,2",
        miscPrice: "\u20ac\u20091,299.00 / $\u2009999.99 / \u20b9\u2009129,900",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 968412 (v9)\n GeekBench: 5346 (v5.1)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone14: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 14",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716810690/iphone/iphone14/jgn1fvlstrb9n1lfy6du.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "146.7 x 71.5 x 7.8 mm (5.78 x 2.81 x 0.31 in)",
        bodyWeight: "172 g (6.07 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)",
        displayResolution:
          "1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A15 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 16, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.5, 26mm (wide), 1/1.7\u0022, 1.9\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.4, 13mm, 120\u02da (ultrawide)",
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), Cinematic mode (4K@30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband (UWB) support",
        featureCall: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 3279 mAh, non-removable (12.68 Wh)",
      },
      MiscDetails: {
        miscColors: "Midnight, Purple, Starlight, Blue, Red",
        miscModels: "A2882, A2649, A2881, A2884, A2883, iphone14,7",
        miscPrice:
          "\u20ac\u2009948.97 / $\u2009774.99 / \u00a3\u2009800.00 / \u20b9\u200978,740",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 817125 (v9)\n GeekBench: 4761 (v5.1)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone14plus: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 14 Plus",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716810688/iphone/iphone14/hjqy1zpkqpjhpjwth4b9.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "160.8 x 78.1 x 7.8 mm (6.33 x 3.07 x 0.31 in)",
        bodyWeight: "203 g (7.16 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)",
        displayResolution:
          "1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A15 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 16, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.5, 26mm (wide), 1/1.7\u0022, 1.9\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.4, 13mm, 120\u02da (ultrawide)",
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), Cinematic mode (4K@30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband (UWB) support",
        featureCall: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 4323 mAh, non-removable (16.68 Wh)",
      },
      MiscDetails: {
        miscColors: "Midnight, Purple, Starlight, Blue, Red",
        miscModels: "A2886, A2632, A2885, A2896, A2887, iphone14,8",
        miscPrice:
          "\u20ac\u20091,039.00 / $\u2009899.99 / \u00a3\u2009929.00 / \u20b9\u200988,490",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 797976 (v9)\n GeekBench: 4582 (v5.1)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone13promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 13 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811073/iphone/iphone13/mpmdsltwwbm0alwqcgfx.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in)",
        bodyWeight: "240 g (8.47 oz)",
        bodySim: "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (HBM), 1200 nits (peak)",
        displaySize: "6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)",
        displayResolution:
          "1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A15 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 15, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.5, 26mm (wide), 1/1.7\u0022, 1.9\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.8, 77mm (telephoto), PDAF, 1/3.5\u0022, OIS, 3x optical zoom\n 12 MP, f/1.8, 13mm, 120\u02da (ultrawide), 1/3.5\u0022, PDAF\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (1080p@30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 4352 mAh, non-removable (16.75 Wh)",
      },
      MiscDetails: {
        miscColors: "Graphite, Gold, Silver, Sierra Blue, Alpine Green",
        miscModels: "A2643, A2484, A2641, A2644, A2645, iphone14,3",
        miscPrice:
          "$\u2009775.00 / \u20ac\u20091,624.42 / \u00a3\u20091,279.00 / \u20b9\u2009119,900 / Rp\u200923,681,736",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 801691 (v9)\n GeekBench: 4706 (v5.1)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone13pro: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 13 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811073/iphone/iphone13/guqdxw3q22lxn6rtdngs.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)",
        bodyWeight: "204 g (7.20 oz)",
        bodySim: "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (HBM), 1200 nits (peak)",
        displaySize: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)",
        displayResolution:
          "1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A15 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 15, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.5, 26mm (wide), 1/1.7\u0022, 1.9\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.8, 77mm (telephoto), PDAF, 1/3.5\u0022, OIS, 3x optical zoom\n 12 MP, f/1.8, 13mm, 120\u02da (ultrawide), 1/3.5\u0022, PDAF\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, 10\u2011bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (1080p@30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 3095 mAh, non-removable (12.11 Wh)",
      },
      MiscDetails: {
        miscColors: "Graphite, Gold, Silver, Sierra Blue, Alpine Green",
        miscModels: "A2638, A2483, A2636, A2639, A2640, iPhone14,2",
        miscPrice:
          "$\u2009892.00 / \u20ac\u20091,580.09 / \u00a3\u20091,149.00 / \u20b9\u2009107,900 / Rp\u200919,390,000",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 794348 (v9)\n GeekBench: 4687 (v5.1)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone13: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 13",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811078/iphone/iphone13/fst4cpkpkelnhdddkzxt.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)",
        bodyWeight: "174 g (6.14 oz)",
        bodySim: "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)",
        displayResolution:
          "1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A15 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 15, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.6, 26mm (wide), 1.7\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.4, 120\u02da, 13mm (ultrawide)",
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
      },
      MiscDetails: {
        miscColors: "Starlight, Midnight, Blue, Pink, Red, Green",
        miscModels: "A2633, A2482, A2631, A2634, A2635, iphone14,5",
        miscPrice:
          "$\u2009799.99 / \u20ac\u2009831.15 / \u00a3\u2009705.00 / \u20b9\u200962,999 / Rp\u200916,614,000",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 775519 (v9)\n GeekBench: 4645 (v5.1)\n GFXBench: 59fps (ES 3.1 onscreen)",
      },
    },
    iphone13mini: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 13 mini",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811071/iphone/iphone13/fbdbiepdyrikwy2ki5nc.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "131.5 x 64.2 x 7.7 mm (5.18 x 2.53 x 0.30 in)",
        bodyWeight: "141 g (4.97 oz)",
        bodySim: "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "5.4 inches, 71.9 cm2 (~85.1% screen-to-body ratio)",
        displayResolution:
          "1080 x 2340 pixels, 19.5:9 ratio (~476 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A15 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 15, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.6, 26mm (wide), 1.7\u00b5m, dual pixel PDAF, sensor-shift OIS\\n 12 MP, f/2.4, 120\u02da, 13mm (ultrawide)",
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\\n 15W wireless (MagSafe)\\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 2438 mAh, non-removable (9.34 Wh)",
      },
      MiscDetails: {
        miscColors: "Starlight, Midnight, Blue, Pink, Red, Green",
        miscModels: "A2628, A2481, A2626, A2629, A2630, iphone14,4",
        miscPrice:
          "$\u2009630.45 / \u20ac\u2009751.93 / \u00a3\u2009639.00 / \u20b9\u200974,900 / Rp\u200914,566,220",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 772512 (v9)\\n GeekBench: 4681 (v5.1)\\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone12promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 12 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811622/iphone/iphone12/olnrlvfvqx7lebx78wjf.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "160.8 x 78.1 x 7.4 mm (6.33 x 3.07 x 0.29 in)",
        bodyWeight: "228 g (8.04 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)",
        displayResolution:
          "1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A14 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 14.1, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.6, 26mm (wide), 1.7\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.2, 65mm (telephoto), 1/3.4\u0022, 1.0\u00b5m, PDAF, OIS, 2.5x optical zoom\n 12 MP, f/2.4, 13mm, 120\u02da (ultrawide), 1/3.6\u0022\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, 10\u2011bit HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 3687 mAh, non-removable (14.13 Wh)",
      },
      MiscDetails: {
        miscColors: "Silver, Graphite, Gold, Pacific Blue",
        miscModels: "A2411, A2342, A2410, A2412, iPhone13,4",
        miscPrice: "$\u2009599.00 / Rp\u200920,299,000",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 638584 (v8)\n GeekBench: 4240 (v5.1)\n GFXBench: 55fps (ES 3.1 onscreen)",
      },
    },
    iphone12pro: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 12 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811622/iphone/iphone12/xxmjupxwlg4jjhg0q5me.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "146.7 x 71.5 x 7.4 mm (5.78 x 2.81 x 0.29 in)",
        bodyWeight: "189 g (6.67 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)",
        displayResolution:
          "1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A14 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 14.1, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.6, 26mm (wide), 1.4\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.0, 52mm (telephoto), 1/3.4\u0022, 1.0\u00b5m, PDAF, OIS, 2x optical zoom\n 12 MP, f/2.4, 13mm, 120\u02da (ultrawide), 1/3.6\u0022\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, 10\u2011bit HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 2815 mAh, non-removable (10.78 Wh)",
      },
      MiscDetails: {
        miscColors: "Silver, Graphite, Gold, Pacific Blue",
        miscModels: "A2407, A2341, A2406, A2408, iPhone13,3",
        miscPrice:
          "\u20ac\u20091,448.89 / $\u2009599.00 / \u00a3\u2009589.99 / C$\u2009999.99",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 596244 (v8)\n GeekBench: 4056 (v5.1)\n GFXBench: 58fps (ES 3.1 onscreen)",
      },
    },
    iphone12: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 12",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811622/iphone/iphone12/lqi1e9jwp2p6dm57apty.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "146.7 x 71.5 x 7.4 mm (5.78 x 2.81 x 0.29 in)",
        bodyWeight: "164 g (5.78 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 625 nits (HBM), 1200 nits (peak)",
        displaySize: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)",
        displayResolution:
          "1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A14 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 14.1, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.6, 26mm (wide), 1.4\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.4, 13mm, 120\u02da (ultrawide), 1/3.6\u0022",
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 2815 mAh, non-removable (10.78 Wh)",
      },
      MiscDetails: {
        miscColors: "Black, White, Red, Green, Blue, Purple",
        miscModels: "A2403, A2172, A2402, A2404, iPhone13,2",
        miscPrice:
          "\u20ac\u2009719.99 / $\u2009429.00 / \u00a3\u2009598.00 / \u20b9\u200949,900 / Rp\u200912,275,000",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 568674 (v8)\n GeekBench: 4067 (v5.1)\n GFXBench: 58fps (ES 3.1 onscreen)",
      },
    },
    iphone12mini: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 12 mini",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811622/iphone/iphone12/zzkpoikjigp52axitrwx.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "131.5 x 64.2 x 7.4 mm (5.18 x 2.53 x 0.29 in)",
        bodyWeight: "135 g (4.76 oz)",
        bodySim: "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 625 nits (HBM), 1200 nits (peak)",
        displaySize: "5.4 inches, 71.9 cm2 (~85.1% screen-to-body ratio)",
        displayResolution:
          "1080 x 2340 pixels, 19.5:9 ratio (~476 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A14 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 14.1, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.6, 26mm (wide), 1.4\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.4, 13mm, 120\u02da (ultrawide), 1/3.6\u0022",
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 2227 mAh, non-removable (8.57 Wh)",
      },
      gsmMiscDetails: {
        miscColors: "Black, White, Red, Green, Blue, Purple",
        miscModels: "A2399, A2176, A2398, A2400, A2399, iPhone13,1",
        miscPrice:
          "\u20ac\u2009656.66 / $\u2009350.00 / \u00a3\u2009679.00 / \u20b9\u200954,900 / Rp\u200910,285,000",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 589616 (v8)\n GeekBench: 4174 (v5.1)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone11promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 11 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716812258/iphone/iphone11/lws5ece5lauln577s5cw.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed: "HSPA, LTE-A 1.6 Gbps DL, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "158 x 77.8 x 8.1 mm (6.22 x 3.06 x 0.32 in)",
        bodyWeight: "226 g (7.97 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "6.5 inches, 102.9 cm2 (~83.7% screen-to-body ratio)",
        displayResolution:
          "1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Scratch-resistant glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A13 Bionic (7 nm+)",
        platformCpu: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 13, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.8, 26mm (wide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.0, 52mm (telephoto), 1/3.4\u0022, 1.0\u00b5m, PDAF, OIS, 2x optical zoom\n 12 MP, f/2.4, 120\u02da, 13mm (ultrawide), 1/3.6\u0022",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n Wireless (Qi)",
        batteryType: "Li-Ion 3969 mAh, non-removable (15.04 Wh)",
      },
      MiscDetails: {
        miscColors:
          "Matte Space Gray, Matte Silver, Matte Gold, Matte Midnight Green",
        miscModels: "A2218, A2161, A2220, iPhone12.5",
        miscPrice: "$\u2009419.00",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 459713 (v7), 536883 (v8)\n GeekBench: 13870 (v4.4), 3503 (v5.1)\n GFXBench: 57fps (ES 3.1 onscreen)",
      },
    },
    iphone11pro: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 11 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716812259/iphone/iphone11/wqlhph1fn4onjnxmuan8.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed: "HSPA, LTE-A 1.6 Gbps DL, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "144 x 71.4 x 8.1 mm (5.67 x 2.81 x 0.32 in)",
        bodyWeight: "188 g (6.63 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "5.8 inches, 84.4 cm2 (~82.1% screen-to-body ratio)",
        displayResolution:
          "1125 x 2436 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Scratch-resistant glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A13 Bionic (7 nm+)",
        platformCpu: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 13, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.8, 26mm (wide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.0, 52mm (telephoto), 1/3.4\u0022, 1.0\u00b5m, PDAF, OIS, 2x optical zoom\n 12 MP, f/2.4, 120\u02da, 13mm (ultrawide), 1/3.6\u0022",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n Wireless (Qi)",
        batteryType: "Li-Ion 3046 mAh, non-removable (11.67 Wh)",
      },
      MiscDetails: {
        miscColors:
          "Matte Space Gray, Matte Silver, Matte Gold, Matte Midnight Green",
        miscModels: "A2215, A2160, A2217, iPhone12,3",
        miscPrice:
          "\u20ac\u2009459.99 / $\u2009399.00 / \u00a3\u2009939.00 / Rp\u20099,999,000",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 460784 (v7)\n GeekBench: 13829 (v4.4)\n GFXBench: 57fps (ES 3.1 onscreen)",
      },
    },
    iphone11: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 11",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716812259/iphone/iphone11/us5if2d5mb0za2mklnvz.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (CA) Cat16 1024/150 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)",
        bodyWeight: "194 g (6.84 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame (7000 series)",
      },
      DisplayDetails: {
        displayType: "Liquid Retina IPS LCD, 625 nits (typ)",
        displaySize: "6.1 inches, 90.3 cm2 (~79.0% screen-to-body ratio)",
        displayResolution: "828 x 1792 pixels, 19.5:9 ratio (~326 ppi density)",
        displayProtection: "Scratch-resistant glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A13 Bionic (7 nm+)",
        platformCpu: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 13, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.8, 26mm (wide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.4, 120\u02da, 13mm (ultrawide), 1/3.6\u0022",
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n Wireless (Qi)",
        batteryType: "Li-Ion 3110 mAh, non-removable (11.91 Wh)",
      },
      MiscDetails: {
        miscColors: "Black, Green, Yellow, Purple, Red, White",
        miscModels: "A2221, A2111, A2223, iPhone12,1",
        miscPrice:
          "\u20ac\u2009542.34 / $\u2009299.00 / \u00a3\u2009317.99 / \u20b9\u200940,999 / Rp\u20094,809,000",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 419453 (v7)\n GeekBench: 13882 (v4.4)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphonexsmas: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone XS Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716812316/iphone/iphonex/bftjby2ti6kqjuin7qwa.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (4CA) Cat16 1024/150 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "157.5 x 77.4 x 7.7 mm (6.20 x 3.05 x 0.30 in)",
        bodyWeight: "208 g (7.34 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType: "Super Retina OLED, HDR10, Dolby Vision, 625 nits (HBM)",
        displaySize: "6.5 inches, 102.9 cm2 (~84.4% screen-to-body ratio)",
        displayResolution:
          "1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Scratch-resistant glass",
        displayOther1: "3D Touch",
      },
      PlatformDetails: {
        platformChipset: "Apple A12 Bionic (7 nm)",
        platformCpu: "Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 12, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.8, 26mm (wide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.4, 52mm (telephoto), 1/3.4\u0022, 1.0\u00b5m, PDAF, OIS, 2x optical zoom",
        mainCameraFeatures: "Quad-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "7 MP, f/2.2, 32mm (standard)\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "1080p@30/60fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "15W wired, PD2.0, 50% in 30 min (advertised)\n Wireless (Qi)",
        batteryType: "Li-Ion 3174 mAh, non-removable (12.08 Wh)",
      },
      MiscDetails: {
        miscColors: "Space Gray, Silver, Gold",
        miscModels: "A1921, A2101, A2102, A2104, Phone11,6",
        miscPrice: "About 570 EUR",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 353210 (v7)\n GeekBench: 11432 (v4.4)\n GFXBench: 47fps (ES 3.1 onscreen)",
      },
    },
    iphonexs: {
      phoneDetails: {
        yearValue: "2018",
        brandValue: "Apple",
        modelValue: "iPhone XS",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716812315/iphone/iphonex/sqixjozc7ls5qtawmxmq.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (4CA) Cat16 1024/150 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
        bodyWeight: "177 g (6.24 oz)",
        bodySim: "Nano-SIM and eSIM",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType: "Super Retina OLED, HDR10, Dolby Vision, 625 nits (HBM)",
        displaySize: "5.8 inches, 84.4 cm2 (~82.9% screen-to-body ratio)",
        displayResolution:
          "1125 x 2436 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Scratch-resistant glass",
        displayOther1: "3D Touch",
      },
      PlatformDetails: {
        platformChipset: "Apple A12 Bionic (7 nm)",
        platformCpu: "Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 12, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.8, 26mm (wide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.4, 52mm (telephoto), 1/3.4\u0022, 1.0\u00b5m, PDAF, OIS, 2x optical zoom",
        mainCameraFeatures: "Quad-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "7 MP, f/2.2, 32mm (standard)\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "1080p@30/60fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryCharging:
          "15W wired, PD2.0, 50% in 30 min (advertised)\n Wireless (Qi)",
        batteryType: "Li-Ion 2658 mAh, non-removable (10.13 Wh)",
      },
      MiscDetails: {
        miscColors: "Space Gray, Silver, Gold",
        miscModels: "A2097, A1920, A2100, A2098, Phone11,2",
        miscPrice: "About 380 EUR",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 346379 (v7)\n GeekBench: 11472 (v4.4)\n GFXBench: 47fps (ES 3.1 onscreen)",
      },
    },
    iphonex: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone X",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716812315/iphone/iphonex/erscatki4m2dj4aq1x1m.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / HSPA / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (3CA) Cat12 600/150 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
        bodyWeight: "174 g (6.14 oz)",
        bodySim: "Nano-SIM",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType: "Super Retina OLED, HDR10, Dolby Vision, 625 nits (HBM)",
        displaySize: "5.8 inches, 84.4 cm2 (~82.9% screen-to-body ratio)",
        displayResolution:
          "1125 x 2436 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Scratch-resistant glass",
        displayOther1: "3D Touch",
      },
      PlatformDetails: {
        platformChipset: "Apple A11 Bionic (10 nm)",
        platformCpu: "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
        platformGpu: "Apple GPU (three-core graphics)",
        platformOs: "iOS 11.1.1, up to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 3GB RAM, 256GB 3GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraDual:
          "12 MP, f/1.8, 28mm (wide), 1/3\u0022, 1.22\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.4, 52mm (telephoto), 1/3.4\u0022, 1.0\u00b5m, PDAF, OIS, 2x optical zoom",
        mainCameraFeatures:
          "Quad-LED dual-tone flash, HDR (photo/panorama), panorama, HDR",
        mainCameraVideo: "4K@24/30/60fps, 1080p@30/60/120/240fps",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "7 MP, f/2.2, 32mm (standard)\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "1080p@30fps",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "15W wired, PD2.0, 50% in 30 min (advertised)\n Wireless (Qi)",
        batteryTalkTime: "Up to 21 h (3G)",
        batteryType: "Li-Ion 2716 mAh, non-removable (10.35 Wh)",
      },
      MiscDetails: {
        miscColors: "Space Gray, Silver",
        miscModels: "A1865, A1901, A1902, A1903, iPhone10,3, iPhone10,6",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 233100 (v7)\n GeekBench: 10215 (v4.4)\n GFXBench: 28fps (ES 3.1 onscreen)",
      },
    },
    iphonexr: {
      phoneDetails: {
        yearValue: "2018",
        brandValue: "Apple",
        modelValue: "iPhone XR",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716812315/iphone/iphonex/w6q3rxsfqxbsvlsgtlkm.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed: "HSPA, LTE-A, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)",
        bodyWeight: "194 g (6.84 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame (7000 series)",
      },
      DisplayDetails: {
        displayType: "Liquid Retina IPS LCD, 625 nits (HBM)",
        displaySize: "6.1 inches, 90.3 cm2 (~79.0% screen-to-body ratio)",
        displayResolution: "828 x 1792 pixels, 19.5:9 ratio (~326 ppi density)",
        displayProtection: "Scratch-resistant glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A12 Bionic (7 nm)",
        platformCpu: "Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 12, upgradable to iOS 16.2",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 3GB RAM, 128GB 3GB RAM, 256GB 3GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Quad-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraSingle:
          "12 MP, f/1.8, 26mm (wide), 1/2.55\u0022, 1.4\u00b5m, PDAF, OIS",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "7 MP, f/2.2, 32mm (standard)\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "1080p@60fps",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "15W wired, PD2.0, 50% in 30 min (advertised)\n Wireless (Qi)",
        batteryType: "Li-Ion 2942 mAh, non-removable (11.16 Wh)",
      },
      MiscDetails: {
        miscColors: "Black, Red, Yellow, Blue, Coral, White",
        miscModels: "A2105, A1984, A2107, A2108, A2106, iPhone11,8",
        miscPrice: "About 310 EUR",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 341196 (v7), 422465 (v8)\n GeekBench: 11437 (v4.4), 2690 (v5.1)\n GFXBench: 58fps (ES 3.1 onscreen)",
      },
    },
    iphone8plus: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 8 Plus",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716660154/iphone/iphone8/tmy37ghfesrekt33tb2p.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (3CA) Cat9 450/50 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "158.4 x 78.1 x 7.5 mm (6.24 x 3.07 x 0.30 in)",
        bodyWeight: "202 g (7.13 oz)",
        bodySim: "Nano-SIM",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType: "Retina IPS LCD, 625 nits (typ)",
        displaySize: "5.5 inches, 83.4 cm2 (~67.4% screen-to-body ratio)",
        displayResolution: "1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
        displayProtection: "Ion-strengthened glass, oleophobic coating",
      },
      PlatformDetails: {
        platformChipset: "Apple A11 Bionic (10 nm)",
        platformCpu: "Hexa-core (2x Monsoon + 4x Mistral)",
        platformGpu: "Apple GPU (three-core graphics)",
        platformOs: "iOS 11, upgradable to iOS 16.4",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 3GB RAM, 256GB 3GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Quad-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.8, 28mm (wide), PDAF, OIS\n12 MP, f/2.8, 57mm (telephoto), PDAF, OIS, 2x optical zoom",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle: "7 MP, f/2.2, 32mm (standard)",
        selfieCameraVideo: "1080p@30fps",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes (Apple Pay only)",
        communicationsUsb: "2.0, proprietary reversible connector",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 2691 mAh, non-removable (10.28 Wh)",
      },
      MiscDetails: {
        miscColors: "Space Gray, Silver, Gold, Red",
        miscModels: "A1864, A1897, A1898",
        miscPrice:
          "$\u2009670.00 / \u00a3\u2009679.00 / \u20ac\u2009789.00 / \u20b9\u200963,999",
      },
    },
    iphone8: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 8",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716660156/iphone/iphone8/trmc1mo7qflc3gymugpw.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (3CA) Cat12 600/150 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "138.4 x 67.3 x 7.3 mm (5.45 x 2.65 x 0.29 in)",
        bodyWeight: "148 g (5.22 oz)",
        bodySim: "Nano-SIM",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
      },
      DisplayDetails: {
        displayType: "Retina IPS LCD, 625 nits (typ)",
        displaySize: "4.7 inches, 60.9 cm2 (~65.4% screen-to-body ratio)",
        displayResolution: "750 x 1334 pixels, 16:9 ratio (~326 ppi density)",
        displayProtection: "Ion-strengthened glass, oleophobic coating",
      },
      PlatformDetails: {
        platformChipset: "Apple A11 Bionic (10 nm)",
        platformCpu: "Hexa-core (2x Monsoon + 4x Mistral)",
        platformGpu: "Apple GPU (three-core graphics)",
        platformOs: "iOS 11, upgradable to iOS 16.4.1",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 2GB RAM, 256GB 2GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Quad-LED dual-tone flash, HDR",
        mainCameraTriple: "12 MP, f/1.8, 28mm (wide), 1/3\u0022, OIS, PDAF",
        mainCameraVideo: "4K@24/30/60fps, 1080p@30/60/120/240fps",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle: "7 MP, f/2.2, 32mm (standard)",
        selfieCameraVideo: "1080p@30fps",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "2.0, proprietary reversible connector",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryCharging: "Wired, 50% in 30 min (advertised)\n15W wireless (Qi)",
        batteryType: "Li-Ion 1821 mAh, non-removable (6.96 Wh)",
      },
      MiscDetails: {
        miscColors: "Silver, Space Gray, Gold, Red",
        miscModels: "A1863, A1905, A1906, iPhone10,4, iPhone10,1",
        miscPrice: "$\u2009699 / \u00a3\u2009679 / \u20ac\u2009799",
      },
    },
    iphone7plus: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 7 Plus",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716658627/iphone/iphone7/yrce236aubfypyakftnn.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (3CA) Cat9 450/50 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "158.2 x 77.9 x 7.3 mm (6.23 x 3.07 x 0.29 in)",
        bodyWeight: "188 g (6.63 oz)",
        bodySim: "Nano-SIM",
        bodyBuild: "Glass front (Gorilla Glass), aluminum back, aluminum frame",
      },
      DisplayDetails: {
        displayType: "IPS LCD, 625 nits (typ)",
        displaySize: "5.5 inches, 83.4 cm2 (~67.7% screen-to-body ratio)",
        displayResolution: "1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
        displayProtection: "Ion-strengthened glass, oleophobic coating",
      },
      PlatformDetails: {
        platformChipset: "Apple A10 Fusion (16 nm)",
        platformCpu: "Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)",
        platformGpu: "PowerVR Series7XT Plus (six-core graphics)",
        platformOs: "iOS 10.0.1, upgradable to iOS 15.7.6",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "32GB 3GB RAM, 128GB 3GB RAM, 256GB 3GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Quad-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          '12 MP, f/1.8, 28mm (wide), 1/3", OIS, PDAF\n12 MP, f/2.8, 56mm (telephoto), 1/3.6", AF, 2x optical zoom',
        mainCameraVideo:
          "4K@30fps, 1080p@30/60/120fps, 720p@240fps, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Face detection, HDR, panorama",
        selfieCameraSingle: "7 MP, f/2.2, 32mm (standard)",
        selfieCameraVideo: "1080p@30fps, 720p@240fps",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "4.2, A2DP, LE",
        communicationsNfc: "Yes (Apple Pay only)",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryCharging: "Wired, 50% in 30 min (advertised)",
        batteryType: "Li-Ion 2900 mAh, non-removable (11.1 Wh)",
      },
      MiscDetails: {
        miscColors: "Jet Black, Black, Silver, Gold, Rose Gold, Red",
        miscModels: "A1661, A1784, A1785, A1786",
        miscPrice:
          "$\u2009369.00 / \u00a3\u2009349.00 / \u20ac\u2009499.00 / \u20b9\u200934,999",
      },
    },
    iphone7: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 7",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716658816/iphone/iphone7/xq5j1kzaxbje3vr40xrn.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (3CA) Cat9 450/50 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)",
        bodyWeight: "138 g (4.87 oz)",
        bodySim: "Nano-SIM",
        bodyBuild: "Glass front (Gorilla Glass), aluminum back, aluminum frame",
      },
      DisplayDetails: {
        displayType: "Retina IPS LCD, 625 nits (typ)",
        displaySize: "4.7 inches, 60.9 cm2 (~65.6% screen-to-body ratio)",
        displayResolution: "750 x 1334 pixels, 16:9 ratio (~326 ppi density)",
        displayProtection: "Ion-strengthened glass, oleophobic coating",
      },
      PlatformDetails: {
        platformChipset: "Apple A10 Fusion (16 nm)",
        platformCpu: "Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)",
        platformGpu: "PowerVR Series7XT Plus (six-core graphics)",
        platformOs: "iOS 10.0.1, upgradable to iOS 15.7.3",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "32GB 2GB RAM, 128GB 2GB RAM, 256GB 2GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Quad-LED dual-tone flash, HDR",
        mainCameraTriple: '12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, PDAF, OIS',
        mainCameraVideo: "4K@30fps, 1080p@30/60/120fps, 720p@240fps",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Face detection, HDR, panorama",
        selfieCameraSingle: "7 MP, f/2.2, 32mm (standard)",
        selfieCameraVideo: "1080p@30fps, 720p@240fps",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "4.2, A2DP, LE",
        communicationsNfc: "Yes (Apple Pay only)",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryCharging: "Wired, 50% in 30 min (advertised)",
        batteryType: "Li-Ion 1960 mAh, non-removable (7.45 Wh)",
      },
      MiscDetails: {
        miscColors: "Jet Black, Black, Silver, Gold, Rose Gold, Red",
        miscModels: "A1660, A1778, A1779, A1780",
        miscPrice: "$\u2009399.00 / \u00a3\u2009499.00 / \u20ac\u2009529.00",
      },
    },
    iphone6: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 6",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716661316/iphone/iphone6/z6xzvtzvlrmwi5qoh382.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (3CA) Cat4 150/50 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "138.1 x 67 x 6.9 mm (5.44 x 2.64 x 0.27 in)",
        bodyWeight: "129 g (4.55 oz)",
        bodySim: "Nano-SIM",
        bodyBuild: "Front glass, aluminum body",
      },
      DisplayDetails: {
        displayType: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
        displaySize: "4.7 inches, 60.9 cm2 (~65.8% screen-to-body ratio)",
        displayResolution: "750 x 1334 pixels, 16:9 ratio (~326 ppi density)",
        displayProtection: "Ion-strengthened glass, oleophobic coating",
      },
      PlatformDetails: {
        platformChipset: "Apple A8 (20 nm)",
        platformCpu: "Dual-core 1.4 GHz Typhoon (ARM v8-based)",
        platformGpu: "PowerVR GX6450 (quad-core graphics)",
        platformOs: "iOS 8, upgradable to iOS 12.5.5",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "16GB 1GB RAM, 32GB 1GB RAM, 64GB 1GB RAM, 128GB 1GB RAM",
      },
      MainCameraDetails: {
        mainCameraFeatures:
          "True-tone flash, phase detection autofocus, HDR (photo/panorama)",
        mainCameraSingle: '8 MP, f/2.2, 29mm (standard), 1/3", 1.5µm, PDAF',
        mainCameraVideo: "1080p@60fps, 720p@240fps",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Face detection, HDR, panorama",
        selfieCameraSingle: "1.2 MP, f/2.2, 31mm (standard)",
        selfieCameraVideo: "720p@30fps",
      },
      SoundDetails: {
        sound35MmJack: "Yes",
        soundLoudspeaker: "Yes",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "4.0, A2DP, LE",
        communicationsNfc: "Yes (Apple Pay only)",
        communicationsUsb: "USB 2.0, proprietary reversible connector",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryCharging:
          "Fast charging 18W, 50% in 30 min (advertised) - USA, Japan, China\n Qi wireless charging",
        batteryType: "Non-removable Li-Ion 1810 mAh battery (6.9 Wh)",
      },
      MiscDetails: {
        miscColors: "Space Gray, Silver, Gold",
        miscModels: "A1549, A1586, iPhone7,2",
        miscPrice: "$299 / £259 / €699 / ₹31,999",
      },
    },
    iphone6plus: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 6 Plus",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716661323/iphone/iphone6/ycjorg90fpbqvgd9pggh.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (3CA) Cat6 300/50 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "158.1 x 77.8 x 7.1 mm (6.22 x 3.06 x 0.28 in)",
        bodyWeight: "172 g (6.07 oz)",
        bodySim: "Nano-SIM",
        bodyBuild: "Front glass, aluminum body",
      },
      DisplayDetails: {
        displayType: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
        displaySize: "5.5 inches, 83.4 cm2 (~67.8% screen-to-body ratio)",
        displayResolution: "1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
        displayProtection: "Ion-strengthened glass, oleophobic coating",
      },
      PlatformDetails: {
        platformChipset: "Apple A8 (20 nm)",
        platformCpu: "Dual-core 1.4 GHz Typhoon (ARM v8-based)",
        platformGpu: "PowerVR GX6450 (quad-core graphics)",
        platformOs: "iOS 8, upgradable to iOS 12.5.5",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "16GB 1GB RAM, 32GB 1GB RAM, 64GB 1GB RAM, 128GB 1GB RAM",
      },
      MainCameraDetails: {
        mainCameraFeatures:
          "Digital zoom up to 5x, optical image stabilization, face detection, panorama, HDR",
        mainCameraSingle: '8 MP, f/2.2, 29mm (standard), 1/3", 1.5µm, PDAF',
        mainCameraVideo: "1080p@60fps, 720p@240fps",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Face detection, HDR",
        selfieCameraSingle: "1.2 MP, f/2.2, 31mm (standard)",
        selfieCameraVideo: "720p@30fps",
      },
      SoundDetails: {
        sound35MmJack: "Yes",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "4.0, A2DP, LE",
        communicationsNfc: "Yes (Apple Pay only)",
        communicationsUsb: "USB 2.0, proprietary reversible connector",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryCharging:
          "Fast charging 18W, 50% in 30 min (advertised), USB Power Delivery 2.0, Qi wireless charging",
        batteryType: "Li-Ion 2915 mAh, non-removable",
      },
      MiscDetails: {
        miscColors: "Space Gray, Silver, Gold",
        miscModels: "A1522, A1524",
        miscPrice: "$299.00 / £239.00 / €299.00",
      },
    },
    iphone6s: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 6s",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716661316/iphone/iphone6/swxcrjzlcagoutlwb4kz.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat6 300/50 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)",
        bodyWeight: "143 g (5.04 oz)",
        bodySim: "Nano-SIM",
        bodyBuild: "Front glass, aluminum body",
      },
      DisplayDetails: {
        displayType: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
        displaySize: "4.7 inches, 60.9 cm2 (~65.6% screen-to-body ratio)",
        displayResolution: "750 x 1334 pixels, 16:9 ratio (~326 ppi density)",
        displayProtection: "Ion-strengthened glass, oleophobic coating",
      },
      PlatformDetails: {
        platformChipset: "Apple A9 (14 nm)",
        platformCpu: "Dual-core 1.84 GHz Twister",
        platformGpu: "PowerVR GT7600 (six-core graphics)",
        platformOs: "iOS 9, upgradable to iOS 15.4",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "16GB 2GB RAM, 32GB 2GB RAM, 64GB 2GB RAM, 128GB 2GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR",
        mainCameraSingle: '12 MP, f/2.2, 29mm (standard), 1/3", 1.22µm, PDAF',
        mainCameraVideo: "4K@30fps, 1080p@60fps, 1080p@120fps, 720p@240fps",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Face detection, HDR, panorama",
        selfieCameraSingle: "5 MP, f/2.2, 31mm (standard)",
        selfieCameraVideo: "1080p@30fps, 720p@240fps",
      },
      SoundDetails: {
        sound35MmJack: "Yes",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "4.2, A2DP, LE",
        communicationsNfc: "Yes (Apple Pay only)",
        communicationsUsb: "2.0, proprietary reversible connector",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryCharging:
          "Fast charging 18W, 50% in 30 min (advertised), USB Power Delivery 2.0, Qi wireless charging",
        batteryType: "Li-Ion 1715 mAh, non-removable (6.91 Wh)",
      },
      MiscDetails: {
        miscColors: "Space Gray, Silver, Gold, Rose Gold",
        miscModels: "A1633, A1688, A1691, A1700, iPhone8,1",
        miscPrice: "$649 / £539 / €739 / ₹42,900",
      },
    },
    iphone6splus: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 6s Plus",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716661315/iphone/iphone6/ut3ljbrgn0vei5fevroh.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat6 300/50 Mbps, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "158.2 x 77.9 x 7.3 mm (6.23 x 3.07 x 0.29 in)",
        bodyWeight: "192 g (6.77 oz)",
        bodySim: "Nano-SIM",
        bodyBuild: "Front glass, aluminum body",
      },
      DisplayDetails: {
        displayType: "IPS LCD capacitive touchscreen, 16M colors",
        displaySize: "5.5 inches, 83.4 cm2 (~67.7% screen-to-body ratio)",
        displayResolution: "1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
        displayProtection: "Ion-strengthened glass, oleophobic coating",
      },
      PlatformDetails: {
        platformChipset: "Apple A9 (14 nm)",
        platformCpu: "Dual-core 1.84 GHz Twister",
        platformGpu: "PowerVR GT7600 (six-core graphics)",
        platformOs: "iOS 9, upgradable to iOS 15.4",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "16GB 2GB RAM, 32GB 2GB RAM, 64GB 2GB RAM, 128GB 2GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR",
        mainCameraSingle:
          '12 MP, f/2.2, 29mm (standard), 1/3", 1.22µm, PDAF, OIS',
        mainCameraVideo: "4K@30fps, 1080p@30/60/120fps, 720p@240fps",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Face detection, HDR, panorama",
        selfieCameraSingle: "5 MP, f/2.2, 31mm (standard)",
        selfieCameraVideo: "1080p@30fps",
      },
      SoundDetails: {
        sound35MmJack: "Yes",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "4.2, A2DP, LE",
        communicationsNfc: "Yes (Apple Pay only)",
        communicationsUsb: "2.0, proprietary reversible connector",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryCharging:
          "Fast charging 18W, 50% in 30 min (advertised)\n Qi wireless charging",
        batteryType: "Li-Ion 2750 mAh, non-removable",
      },
      MiscDetails: {
        miscColors: "Space Gray, Silver, Gold, Rose Gold",
        miscModels: "A1634, A1687",
        miscPrice: "$\u2009649.00 / £619.00 / €659.00 / ₹39,900",
      },
    },
  },
  Huawei: {
    pura70ultra: {
      phoneDetails: {
        yearValue: "2024",
        brandValue: "Huawei",
        modelValue: "Pura 70 Ultra",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755093/common/q8tkxcj6etzh93ylxfgj.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / CDMA2000 / LTE / 5G",
      },
      BodyDetails: {
        bodyDimensions: "162.6 x 75.1 x 8.4 mm (6.40 x 2.96 x 0.33 in)",
        bodyWeight: "226 g (7.97 oz)",
        bodySim: "Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild:
          "Glass front, aluminum frame, silicone polymer back (eco leather)",
        bodyProtection: "IP68 dust/water resistant (up to 2m for 30 min)",
      },
      DisplayDetails: {
        displayType: "LTPO OLED, 1B colors, HDR, 120Hz, 2500 nits (peak)",
        displaySize: "6.8 inches, 109.0 cm2 (~89.3% screen-to-body ratio)",
        displayResolution: "1260 x 2844 pixels (~460 ppi density)",
        displayProtection: "Kunlun Glass (Basalt-tempered)",
      },
      PlatformDetails: {
        platformOs: "EMUI 14.2 (International), HarmonyOS 4.2 (China)",
        platformChipset: "Kirin 9010 (7 nm)",
        platformCpu:
          "Octa-core (1x2.3 GHz Taishan Big & 3x2.18 GHz Taishan Mid & 4x1.55 GHz Cortex-A510)",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "512GB 16GB RAM, 1TB 16GB RAM",
      },
      MainCameraDetails: {
        mainCameraFeatures: "LED flash, panorama, HDR",
        mainCameraTriple:
          '50 MP, f/1.6-4.0, 23mm (wide), 1.0"-type, PDAF, Laser AF, sensor-shift OIS, retractable lens\n50 MP, f/2.1, 90mm (telephoto), PDAF (5cm - ∞), OIS, 3.5x optical zoom\n40 MP, f/2.2, 13mm (ultrawide), AF',
        mainCameraVideo: "4K, 1080p, HDR, gyro-EIS, OIS",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, panorama",
        selfieCameraSingle: "13 MP, f/2.4, (ultrawide), AF",
        selfieCameraVideo: "Yes, HDR",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE, L2HC",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (L1), BDS (B1I+B1c+B2a+B2b), GALILEO (E1+E5a+E5b), QZSS (L1+L5), NavIC",
        communicationsNfc: "Yes; NFC-SIM, HCE",
        communicationsInfrared: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1, OTG, DisplayPort 1.2",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (under display, optical), accelerometer, proximity, gyro, compass, color spectrum",
        featureCall: "BDS Satellite Calling and Message",
      },
      BatteryDetails: {
        batteryType: "Li-Po 5200 mAh, non-removable",
        batteryCharging:
          "100W wired\n80W wireless\n20W reverse wireless\n18W reverse wired",
      },
      MiscDetails: {
        miscColors: "Black, White, Brown, Green",
        miscModels: "HBP-LX9, HBP-AL00",
        miscPrice: "$ 1,656.00 / € 1,499.00",
      },
      TestsDetails: {
        testsLoudspeaker: "-28.3 LUFS (Average)",
      },
    },
    p60pro: {
      phoneDetails: {
        yearValue: "2023",
        brandValue: "Huawei",
        modelValue: "P60 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755093/common/ahqxybnxel01ivyaje2g.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / CDMA2000 / LTE",
      },
      BodyDetails: {
        bodyDimensions: "161 x 74.5 x 8.3 mm (6.34 x 2.93 x 0.33 in)",
        bodyWeight: "200 g (7.05 oz)",
        bodySim:
          "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild: "IP68 dust/water resistant (up to 1.5m for 30 min)",
        bodyProtection: "Kunlun Glass",
      },
      DisplayDetails: {
        displayType: "LTPO OLED, 1B colors, 120Hz",
        displaySize: "6.67 inches, 107.7 cm2 (~89.8% screen-to-body ratio)",
        displayResolution: "1220 x 2700 pixels (~444 ppi density)",
        displayProtection: "Kunlun Glass",
        displayOther1: "Always-on display",
      },
      PlatformDetails: {
        platformOs:
          "HarmonyOS 3.1 (China), EMUI 13.1 (Europe), no Google Play Services",
        platformChipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)",
        platformCpu:
          "Octa-core (1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x2.0 GHz Cortex-A510)",
        platformGpu: "Adreno 730",
      },
      MemoryDetails: {
        memoryCardSlot: "NM (Nano Memory), up to 256GB (uses shared SIM slot)",
        memoryInternal: "256GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM",
        memoryType: "UFS",
      },
      MainCameraDetails: {
        mainCameraFeatures: "LED flash, HDR, panorama",
        mainCameraTriple:
          "48 MP, f/1.4-f/4.0, 25mm (wide), PDAF, Laser AF, OIS\n48 MP, f/2.1, 90mm (telephoto), PDAF, sensor-shift OIS, 3.5x optical zoom\n13 MP, f/2.2, 13mm (ultrawide), AF",
        mainCameraVideo: "4K@30/60fps, 1080p@30/60fps, 1080p@960fps; gyro-EIS",
      },
      SelfieCameraDetails: {
        selfieCameraSingle: "13 MP, f/2.4, (ultrawide)",
        selfieCameraFeatures: "Panorama, HDR",
        selfieCameraVideo: "4K@30/60fps, 1080p@30fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (B1I+B1c+B2a), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5), NavIC",
        communicationsNfc: "Yes; NFC-SIM, HCE",
        communicationsInfrared: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1, OTG",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum",
        featureCall: "BDS Satellite Calling",
      },
      BatteryDetails: {
        batteryType: "Li-Po 4815 mAh, non-removable",
        batteryCharging: "88W wired\n50W wireless\nReverse wireless",
      },
      MiscDetails: {
        miscColors: "Black, Green, Violet, Rococo Pearl",
        miscModels: "MNA-AL00, MNA-LX9",
        miscPrice: "$ 1,120.00 / € 928.12 / £ 1,049.32",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 1030473 (v9)\nGeekBench: 4422 (v6)\nGFXBench: 65fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: Infinite (nominal)",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "-27.3 LUFS (Good)",
      },
    },
    p50pro: {
      phoneDetails: {
        yearValue: "2021",
        brandValue: "Huawei",
        modelValue: "P50 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755093/common/xumw1kzatl8kbjz9bzyi.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / CDMA2000 / LTE",
      },
      BodyDetails: {
        bodyDimensions: "158.8 x 72.8 x 8.5 mm (6.25 x 2.87 x 0.33 in)",
        bodyWeight: "195 g (6.88 oz)",
        bodyBuild: "Glass front, glass back, aluminum frame",
        bodySim:
          "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)",
        bodyProtection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType: "OLED, 1B colors, 120Hz",
        displaySize: "6.6 inches, 105.4 cm2 (~91.2% screen-to-body ratio)",
        displayResolution: "1228 x 2700 pixels (~450 ppi density)",
      },
      PlatformDetails: {
        platformOs:
          "HarmonyOS 2.0 (China), EMUI 12 (Europe), no Google Play Services",
        platformChipset:
          "Kirin 9000 (5 nm), Qualcomm SM8350 Snapdragon 888 4G (5 nm)",
        platformCpu:
          "Octa-core (1x3.13 GHz Cortex-A77 & 3x2.54 GHz Cortex-A77 & 4x2.05 GHz Cortex-A55), Octa-core (1x2.84 GHz Cortex-X1 & 3x2.42 GHz Cortex-A78 & 4x1.80 GHz Cortex-A55)",
        platformGpu: "Mali-G78 MP24, Adreno 660",
      },
      MemoryDetails: {
        memoryCardSlot: "NM (Nano Memory), up to 256GB (uses shared SIM slot)",
        memoryInternal:
          "128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM, 512GB 12GB RAM",
        memoryType: "UFS 4.0",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Leica optics, dual-LED flash, panorama, HDR",
        mainCameraQuad:
          "50 MP, f/1.8, 23mm (wide), PDAF, Laser AF, OIS\n64 MP, f/3.5, 90mm (periscope telephoto), PDAF, OIS, 3.5x optical zoom, 7x lossless zoom\n13 MP, f/2.2, 13mm (ultrawide), AF\n40 MP, f/1.6, 23mm (B/W), AF",
        mainCameraVideo: "4K@30/60fps, 1080p@30/60fps, 1080p@960fps; gyro-EIS",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Panorama, HDR",
        selfieCameraSingle: "13 MP, f/2.4, (wide), AF",
        selfieCameraVideo: "4K@30fps, 1080p@30/60/240fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (L1), BDS (B1I+B1c+B2a+B2b), GALILEO (E1+E5a+E5b), QZSS (L1+L5), NavIC",
        communicationsNfc: "Yes",
        communicationsInfrared: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1, OTG",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, barometer, color spectrum",
      },
      BatteryDetails: {
        batteryType: "Li-Po 4360 mAh, non-removable",
        batteryCharging: "66W wired, 50W wireless, Reverse wireless charging",
      },
      MiscDetails: {
        miscColors: "Golden Black, Cocoa Gold, Pearl White, Charm Pink",
        miscModels: "JAD-AL50, JAD-LX9, JAD-AL00",
        miscPrice: "€ 719.99",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 793876 (v8), 786215 (v9)\nGeekBench: 3145 (v5.1)\nGFXBench: 44fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: Infinite (nominal)",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "-27.3 LUFS (Good)",
      },
    },
    p40pro: {
      phoneDetails: {
        yearValue: "2020",
        brandValue: "Huawei",
        modelValue: "P40 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755092/common/kxxzwxsrzmfxtekeytno.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / HSPA / LTE / 5G",
      },
      BodyDetails: {
        bodyDimensions: "158.2 x 72.6 x 9 mm (6.23 x 2.86 x 0.35 in)",
        bodyWeight: "209 g (7.37 oz)",
        build: "Glass front, glass back, aluminum frame",
        sim: "Nano-SIM and eSIM or Hybrid Dual SIM (Nano-SIM, dual stand-by)",
        protection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType: "OLED, 90Hz, HDR10",
        displaySize: "6.58 inches, 105.2 cm2 (~91.6% screen-to-body ratio)",
        displayResolution: "1200 x 2640 pixels (~441 ppi density)",
      },
      PlatformDetails: {
        os: "Android 10, EMUI 10.1, no Google Play Services",
        chipset: "Kirin 990 5G (7 nm+)",
        cpu: "Octa-core (2x2.86 GHz Cortex-A76 & 2x2.36 GHz Cortex-A76 & 4x1.95 GHz Cortex-A55)",
        gpu: "Mali-G76 MP16",
      },
      MemoryDetails: {
        cardSlot: "NM (Nano Memory), up to 256GB (uses shared SIM slot)",
        internal: "128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM",
        type: "UFS 3.0",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Leica optics, LED flash, panorama, HDR",
        mainCameraTriple:
          '50 MP, f/1.9, 23mm (wide), 1/1.28", 1.22µm, dual pixel PDAF, OIS\n12 MP, f/3.4, 125mm (periscope telephoto), PDAF, OIS, 5x optical zoom\n40 MP, f/1.8, 18mm (ultrawide), 1/1.54", PDAF\nTOF 3D, (depth)',
        mainCameraVideo:
          "4K@30/60fps, 1080p@30/60fps, 720@7680fps, 1080p@960fps, HDR; gyro-EIS",
      },
      SelfieCameraDetails: {
        selfieCameraSingle: '32 MP, f/2.2, 26mm (wide), 1/2.8", 0.8µm, AF',
        selfieCameraFeatures: "HDR",
        selfieCameraVideo: "4K@30/60fps, 1080p@30/60fps",
      },
      SoundDetails: {
        loudspeaker: "Yes",
        jack: "No",
        audioFeatures: "32-bit/384kHz audio",
      },
      CommunicationsDetails: {
        wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        bluetooth: "5.1, A2DP, LE",
        positioning:
          "GPS (L1+L5), GLONASS (L1), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5), NavIC",
        nfc: "Yes",
        infrared: "Yes",
        radio: "No",
        usb: "USB Type-C 3.1, OTG",
      },
      FeaturesDetails: {
        featureSensor:
          "Infrared Face ID, fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum",
      },
      BatteryDetails: {
        batteryType: "Li-Po 4200 mAh, non-removable",
        batteryCharging: "40W wired\n27W wireless\n27W reverse wireless",
      },
      MiscDetails: {
        colors: "Silver Frost, Blush Gold, Deep Sea Blue, Ice White, Black",
        models: "ELS-NX9, ELS-N04, ELS-AN00, ELS-TN00",
        price: "$495.00 / €395.01 / £471.99",
      },
      TestsDetails: {
        performance:
          "AnTuTu: 496356 (v8)\nGeekBench: 12848 (v4.4), 3197 (v5.1)\nGFXBench: 31fps (ES 3.1 onscreen)",
        display: "Contrast ratio: Infinite (nominal)",
        camera: "Photo / Video",
        loudspeaker: "-27.5 LUFS (Good)",
      },
    },
    mate50pro: {
      phoneDetails: {
        yearValue: "2022",
        brandValue: "Huawei",
        modelValue: "Mate 50 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755092/common/b612gfll1vbe7p34duaq.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / CDMA2000 / LTE",
      },
      BodyDetails: {
        bodyDimensions: "162.1 x 75.5 x 8.5 mm (6.38 x 2.97 x 0.33 in)",
        bodyWeight: "205 g / 209 g (7.23 oz)",
        bodySim:
          "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)",
        bodyProtection: "IP68 dust/water resistant (up to 6m for 30 min)",
      },
      DisplayDetails: {
        displayType: "OLED, 1B colors, 120Hz",
        displaySize: "6.74 inches, 111.8 cm2 (~91.3% screen-to-body ratio)",
        displayResolution:
          "1212 x 2616 pixels, 19.5:9 ratio (~428 ppi density)",
        displayProtection: "Huawei Kunlun Glass",
      },
      PlatformDetails: {
        platformOs: "EMUI 13 (International); HarmonyOS 3.0 (China)",
        platformChipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)",
        platformCpu:
          "Octa-core (1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x2.0 GHz Cortex-A510)",
        platformGpu: "Adreno 730",
      },
      MemoryDetails: {
        memoryCardSlot: "NM (Nano Memory), up to 256GB (uses shared SIM slot)",
        memoryInternal: "256GB 8GB RAM, 512GB 8GB RAM",
        memoryType: "UFS 3.1",
      },
      MainCameraDetails: {
        mainCameraFeatures: "LED flash, panorama, HDR",
        mainCameraTriple:
          "50 MP, f/1.4-f/4.0, 24mm (wide), PDAF, Laser AF, OIS\n64 MP, f/3.5, 90mm (periscope telephoto), PDAF, OIS, 3.5x optical zoom\n13 MP, f/2.2, 13mm, 120˚ (ultrawide), PDAF",
        mainCameraVideo:
          "4K@30/60fps, 1080p@30/60/120/240/480fps, 720p@960fps, 720p@3840fps, HDR, gyro-EIS",
      },
      SelfieCameraDetails: {
        selfieCameraSingle:
          "13 MP, f/2.4, 18mm (ultrawide)\nTOF 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@30/60fps, 1080p@30/60/240fps",
        selfieCameraFeatures: "HDR, panorama",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
        soundOtherFeatures: "32-bit/384kHz audio",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (L1), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5), NavIC (L5)",
        communicationsNfc: "Yes",
        communicationsInfraredPort: "Yes",
        communicationsUsb: "USB Type-C 3.1, OTG, Display Port 1.2",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, fingerprint (under display, optical), accelerometer, gyro, proximity, barometer, compass, color spectrum",
        featureCall: "BDS Satellite Message (sending only)",
      },
      BatteryDetails: {
        batteryType: "Li-Po 4700 mAh, non-removable",
        batteryCharging: "66W wired\n50W wireless\n5W reverse wireless",
      },
      MiscDetails: {
        miscColors: "Black, Silver, Purple, Orange",
        miscModels: "DCO-AL00, DCO-LX9",
        miscPrice: "$ 775.00 / € 424.99 / £ 1,279.77",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 979921 (v9)\nGeekBench: 3839 (v5.1)\nGFXBench: 68fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: Infinite (nominal)",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "-24.8 LUFS (Very good)",
      },
    },
  },
  Google: {
    pixel8pro: {
      phoneDetails: {
        yearValue: "2023",
        brandValue: "Google",
        modelValue: "Pixel 8 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716825701/pixels/pixel8/oxxq1mu5ndaqkj0z9fj0.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / HSPA / LTE / 5G",
      },
      BodyDetails: {
        bodyDimensions: "162.6 x 76.5 x 8.8 mm (6.40 x 3.01 x 0.35 in)",
        bodyWeight: "213 g (7.51 oz)",
        bodySim: "Nano-SIM and eSIM",
        bodyBuild:
          "Glass front (Gorilla Glass Victus 2), glass back (Gorilla Glass Victus 2), aluminum frame",
        bodyProtection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType:
          "LTPO OLED, 120Hz, HDR10+, 1600 nits (HBM), 2400 nits (peak)",
        displaySize: "6.7 inches, 108.7 cm2 (~87.4% screen-to-body ratio)",
        displayResolution: "1344 x 2992 pixels, 20:9 ratio (~489 ppi density)",
        displayProtection: "Corning Gorilla Glass Victus 2",
        displayOther1: "Always-on display",
      },
      PlatformDetails: {
        platformOs: "Android 14",
        platformChipset: "Google Tensor G3 (4 nm)",
        platformCpu:
          "Nona-core (1x3.0 GHz Cortex-X3 & 4x2.45 GHz Cortex-A715 & 4x2.15 GHz Cortex-A510)",
        platformGpu: "Immortalis-G715s MC10",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "128GB 12GB RAM, 256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM",
        memoryType: "UFS 3.1",
      },
      MainCameraDetails: {
        mainCameraFeatures:
          "Dual-LED flash, Pixel Shift, Ultra-HDR, panorama, Best Take",
        mainCameraTriple:
          '50 MP, f/1.7, 25mm (wide), 1/1.31", 1.2µm, dual pixel PDAF, multi-zone Laser AF, OIS\n48 MP, f/2.8, 113mm (telephoto), 1/2.55", 0.7µm, dual pixel PDAF, OIS, 5x optical zoom\n48 MP, f/2.0, 126˚ (ultrawide), 0.8µm, dual pixel PDAF',
        mainCameraVideo:
          "4K@30/60fps, 1080p@24/30/60/120/240fps; gyro-EIS, OIS, 10-bit HDR",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Auto-HDR, panorama",
        selfieCameraSingle:
          '10.5 MP, f/2.2, 20mm (ultrawide), 1/3.1", 1.22µm, PDAF',
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
        communicationsBluetooth: "5.3, A2DP, LE, aptX HD",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (G1), GALILEO (E1+E5a), QZSS (L1+L5)",
        communicationsNfc: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.2",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband (UWB) support",
        featureSensors:
          "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, barometer, thermometer (skin temperature)",
      },
      BatteryDetails: {
        batteryType: "Li-Ion 5050 mAh, non-removable",
        batteryCharging:
          "30W wired, PD3.0, PPS, 50% in 30 min (advertised)\n23W wireless\nReverse wireless",
      },
      MiscDetails: {
        miscColors: "Obsidian, Porcelain, Bay, Mint",
        miscModels: "GC3VE, G1MNW",
        miscPrice: "$ 619.99 / € 819.90 / £ 649.99 / ₹ 81,960",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 924853 (v9), 1151243 (v10)\nGeekBench: 3613 (v5), 4462 (v6)\nGFXBench: 49fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: Infinite (nominal)",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "-26.6 LUFS (Good)",
      },
    },
    pixel7pro: {
      phoneDetails: {
        yearValue: "2022",
        brandValue: "Google",
        modelValue: "Pixel 7 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716825726/pixels/pixel7/gc4jyez5i67rdxgwbh2z.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
      },
      BodyDetails: {
        bodyDimensions: "162.9 x 76.6 x 8.9 mm (6.41 x 3.02 x 0.35 in)",
        bodyWeight: "212 g (7.48 oz)",
        bodySim: "Nano-SIM and eSIM",
        bodyBuild:
          "Glass front (Gorilla Glass Victus), glass back (Gorilla Glass Victus), aluminum frame",
        bodyProtection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType:
          "LTPO AMOLED, 120Hz, HDR10+, 1000 nits (HBM), 1500 nits (peak)",
        displaySize: "6.7 inches, 110.6 cm2 (~88.7% screen-to-body ratio)",
        displayResolution:
          "1440 x 3120 pixels, 19.5:9 ratio (~512 ppi density)",
        displayProtection: "Corning Gorilla Glass Victus",
        displayOther1: "Always-on display",
      },
      PlatformDetails: {
        platformOs: "Android 13, upgradable to Android 14",
        platformChipset: "Google Tensor G2 (5 nm)",
        platformCpu:
          "Octa-core (2x2.85 GHz Cortex-X1 & 2x2.35 GHz Cortex-A78 & 4x1.80 GHz Cortex-A55)",
        platformGpu: "Mali-G710 MP7",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "128GB 8GB RAM, 256GB 8GB RAM, 128GB 12GB RAM, 256GB 12GB RAM, 512GB 12GB RAM",
        memoryType: "UFS 3.1",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED flash, Pixel Shift, Auto-HDR, panorama",
        mainCameraTriple:
          '50 MP, f/1.9, 25mm (wide), 1/1.31", 1.2µm, dual pixel PDAF, Laser AF, OIS\n48 MP, f/3.5, 120mm (telephoto), 1/2.55", 0.7µm, dual pixel PDAF, OIS, 5x optical zoom\n12 MP, f/2.2, 126˚ (ultrawide), 1/2.9", 1.25µm, AF',
        mainCameraVideo:
          "4K@30/60fps, 1080p@30/60/120/240fps; gyro-EIS, OIS, 10-bit HDR",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Auto-HDR, panorama",
        selfieCameraSingle: '10.8 MP, f/2.2, 21mm (ultrawide), 1/3.1", 1.22µm',
        selfieCameraVideo: "4K@30/60fps, 1080p@30/60fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6e, tri-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE, aptX HD",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (G1), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5)",
        communicationsNfc: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.2",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband (UWB) support",
        featureSensors:
          "Fingerprint (under display, optical), accelerometer, gyro, compass, ultrasound proximity",
      },
      BatteryDetails: {
        batteryType: "Li-Ion 5000 mAh, non-removable",
        batteryCharging:
          "23W wired, PD3.0, 50% in 30 min (advertised)\n23W wireless\nReverse wireless",
      },
      MiscDetails: {
        miscColors: "Obsidian, Snow, Hazel",
        miscModels: "GP4BC, GE2AE, GFE4J",
        miscSar: "",
        miscPrice: "$ 294.99 / € 380.78 / £ 318.00",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 796369 (v9)\nGeekBench: 3187 (v5.1)\nGFXBench: 34fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: Infinite (nominal)",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "-24.8 LUFS (Very good)",
      },
    },
    pixel6pro: {
      phoneDetails: {
        yearValue: "2021",
        brandValue: "Google",
        modelValue: "Pixel 6 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716825748/pixels/pixel6/xv3eb2m7dfl1iy7xbs9p.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        network2GBands:
          "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (Dual SIM model only)\\nCDMA 800 / 1900 & TD-SCDMA",
        network3GBands:
          "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100\\nCDMA2000 1xEV-DO",
        network4GBands:
          "1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 32, 38, 39, 40, 41, 66 - International\\n1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 18, 19, 20, 25, 26, 28, 29, 30, 38, 39, 40, 41, 46, 48, 66, 71 - USA",
        network5GBands:
          "1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 38, 40, 41, 66, 75, 77, 78 SA/NSA/Sub6 - International\\n1, 3, 5, 7, 8, 20, 28, 38, 41, 66, 71, 260, 261 SA/NSA/Sub6/mmWave - USA",
        networkSpeed:
          "HSPA 42.2/5.76 Mbps, LTE-A (7CA) Cat20 2000/200 Mbps, 5G (5+ Gbps DL)",
      },
      BodyDetails: {
        bodyDimensions: "163.9 x 75.9 x 8.9 mm (6.45 x 2.99 x 0.35 in)",
        bodyWeight: "210 g (7.41 oz)",
        bodySim: "Nano-SIM and eSIM",
        bodyBuild:
          "Glass front (Gorilla Glass Victus), glass back (Gorilla Glass Victus), aluminum frame",
        bodyProtection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType: "LTPO AMOLED, 120Hz, HDR10+",
        displaySize: "6.7 inches, 110.6 cm2 (~88.9% screen-to-body ratio)",
        displayResolution:
          "1440 x 3120 pixels, 19.5:9 ratio (~512 ppi density)",
        displayProtection: "Corning Gorilla Glass Victus",
        displayOther1: "Always-on display",
      },
      PlatformDetails: {
        platformOs: "Android 12, upgradable to Android 14",
        platformChipset: "Google Tensor (5 nm)",
        platformCpu:
          "Octa-core (2x2.80 GHz Cortex-X1 & 2x2.25 GHz Cortex-A76 & 4x1.80 GHz Cortex-A55)",
        platformGpu: "Mali-G78 MP20",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 12GB RAM, 256GB 12GB RAM, 512GB 12GB RAM",
        memoryType: "UFS 3.1",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED flash, Pixel Shift, Auto-HDR, panorama",
        mainCameraTriple:
          '50 MP, f/1.9, 25mm (wide), 1/1.31", 1.2µm, dual pixel PDAF, Laser AF, OIS\n48 MP, f/3.5, 104mm (telephoto), 1/2.0", 0.8µm, PDAF, OIS, 4x optical zoom\n12 MP, f/2.2, 17mm, 114˚ (ultrawide), 1.25µm',
        mainCameraVideo: "4K@30/60fps, 1080p@30/60/120/240fps; gyro-EIS, OIS",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Auto-HDR, panorama",
        selfieCameraSingle: "11.1 MP, f/2.2, 20mm (ultrawide), 1.22µm",
        selfieCameraVideo: "4K@30fps, 1080p@30/60fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE, aptX HD",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (G1), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5)",
        communicationsNfc: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband (UWB) support",
        featureSensors:
          "Fingerprint (under display, optical), accelerometer, gyro, compass, ultrasound proximity",
      },
      BatteryDetails: {
        batteryType: "Li-Ion 5003 mAh, non-removable",
        batteryCharging:
          "23W wired, PD3.0, 50% in 30 min (advertised)\n23W wireless\nReverse wireless",
      },
      MiscDetails: {
        miscColors: "Cloudy White, Sorta Sunny, Stormy Black",
        miscModels: "GLUOG, G8VOU, GF5KQ",
        miscPrice: "$ 192.09 / € 294.45 / £ 184.99",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 585485 (v8), 719815 (v9)\nGeekBench: 2831 (v5.1)\nGFXBench: 39 fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: Infinite (nominal)",
      },
    },
    pixel5: {
      phoneDetails: {
        yearValue: "2020",
        brandValue: "Google",
        modelValue: "Pixel 5",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716825772/pixels/pixel5/dywrrapnapatdmcbx9to.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
      },
      BodyDetails: {
        bodyDimensions: "144.7 x 70.4 x 8 mm (5.70 x 2.77 x 0.31 in)",
        bodyWeight: "151 g (5.33 oz)",
        bodySim: "Nano-SIM and eSIM",
        bodyBuild:
          "Glass front (Gorilla Glass 6), aluminum back, aluminum frame",
        bodyProtection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType: "OLED, 90Hz, HDR10+",
        displaySize: "6.0 inches, 87.6 cm2 (~85.9% screen-to-body ratio)",
        displayResolution:
          "1080 x 2340 pixels, 19.5:9 ratio (~432 ppi density)",
        displayProtection: "Corning Gorilla Glass 6",
        displayOther1: "Always-on display",
      },
      PlatformDetails: {
        platformOs: "Android 11, upgradable to Android 14",
        platformChipset: "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
        platformCpu:
          "Octa-core (1x2.4 GHz Kryo 475 Prime & 1x2.2 GHz Kryo 475 Gold & 6x1.8 GHz Kryo 475 Silver)",
        platformGpu: "Adreno 620",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 8GB RAM",
        memoryType: "UFS 2.1",
      },
      MainCameraDetails: {
        mainCameraFeatures: "LED flash, Pixel Shift, Auto-HDR, panorama",
        mainCameraQuad:
          '12.2 MP, f/1.7, 27mm (wide), 1/2.55", 1.4µm, dual pixel PDAF, OIS\n16 MP, f/2.2, 117˚ (ultrawide), 1.0µm',
        mainCameraVideo: "4K@30/60fps, 1080p@30/60/120/240fps; gyro-EIS",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Auto-HDR",
        selfieCameraSingle: '8 MP, f/2.0, 24mm (wide), 1/4.0", 1.12µm',
        selfieCameraVideo: "1080p@30fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE, aptX HD",
        communicationsNfc: "Yes",
        communicationsUsb: "USB Type-C 3.1",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct",
        communicationsPositioning: "GPS, GLONASS, GALILEO, QZSS, BDS",
        communicationsRadio: "No",
      },
      FeaturesDetails: {
        featureSensors:
          "Fingerprint (under display, optical), accelerometer, gyro, compass, ultrasound proximity",
      },
      BatteryDetails: {
        batteryCharging: "18W wired, PD2.0\n12W wireless\n5W reverse wired",
        batteryType: "Li-Po 4080 mAh, non-removable",
      },
      MiscDetails: {
        miscColors: "Just Black, Sorta Sage",
        miscModels: "GD1YQ, GTT9Q, G5NZ6",
        miscPrice: "$ 162.99 / € 211.99 / £ 134.99",
      },
      TestsDetails: {
        testsDisplay: "Contrast ratio: Infinite (nominal)",
      },
    },
    pixel4xl: {
      phoneDetails: {
        yearValue: "2019",
        brandValue: "Google",
        modelValue: "Pixel 4 XL",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716825792/pixels/pixel4/ckl8xgndqer7gxcdmmyj.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
      },
      BodyDetails: {
        bodyDimensions: "160.4 x 75.1 x 8.2 mm (6.31 x 2.96 x 0.32 in)",
        bodyWeight: "193 g (6.81 oz)",
        bodySim: "Nano-SIM and eSIM",
        bodyBuild:
          "Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame",
        bodyProtection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType: "P-OLED, 90Hz, HDR",
        displaySize: "6.3 inches, 98.0 cm2 (~81.3% screen-to-body ratio)",
        displayResolution: "1440 x 3040 pixels, 19:9 ratio (~537 ppi density)",
        displayProtection: "Corning Gorilla Glass 5",
        displayOther1: "Always-on display",
      },
      PlatformDetails: {
        platformOs: "Android 10, upgradable to Android 13",
        platformChipset: "Qualcomm SM8150 Snapdragon 855 (7 nm)",
        platformCpu:
          "Octa-core (1x2.84 GHz Kryo 485 & 3x2.42 GHz Kryo 485 & 4x1.78 GHz Kryo 485)",
        platformGpu: "Adreno 640",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 6GB RAM, 128GB 6GB RAM",
        memoryType: "UFS 2.1",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED flash, Pixel Shift, Auto-HDR, panorama",
        mainCameraDual:
          '12.2 MP, f/1.7, 27mm (wide), 1/2.55", 1.4µm, dual pixel PDAF, OIS\n16 MP, f/2.4, 50mm (telephoto), 1/3.6", 1.0µm, PDAF, OIS, 2x optical zoom',
        mainCameraVideo: "4K@30fps, 1080p@30/60/120fps, 1080p@30fps (gyro-EIS)",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Auto-HDR",
        selfieCameraSingle:
          "8 MP, f/2.0, 22mm (wide), 1.22µm, no AF\nTOF 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "1080p@30fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, DLNA",
        communicationsBluetooth: "5.0, A2DP, LE, aptX HD",
        communicationsPositioning: "GPS, GLONASS, BDS, GALILEO",
        communicationsNfc: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1",
      },
      FeaturesDetails: {
        featureSensors:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryType: "Li-Po 3700 mAh, non-removable",
        batteryCharging: "18W wired, PD2.0\nWireless",
      },
      MiscDetails: {
        miscColors: "Clearly White, Just Black, Oh So Orange",
        miscModels: "G020P, G020, GA01181-US, GA01182-US, GA01180-US",
        miscPrice: "$149.00 / €173.29 / £149.99",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 323305 (v7), 403267 (v8)\nGeekBench: 10171 (v4.4), 2267 (v5.1)\nGFXBench: 21fps (ES 3.1 onscreen)",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "Voice 80dB / Noise 78dB / Ring 88dB",
        testsAudioQuality: "Noise -93.9 / Crosstalk -94.1",
      },
    },
    pixel3xl: {
      phoneDetails: {
        yearValue: "2018",
        brandValue: "Google",
        modelValue: "Pixel 3 XL",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716825816/pixels/pixel3/pkxbmjbge3ueyxvfzmhb.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
      },
      BodyDetails: {
        bodyDimensions: "158 x 76.7 x 7.9 mm (6.22 x 3.02 x 0.31 in)",
        bodyWeight: "184 g (6.49 oz)",
        bodySim: "Nano-SIM and eSIM",
        bodyBuild:
          "Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame",
        bodyProtection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType: "P-OLED, HDR",
        displaySize: "6.3 inches, 100.3 cm2 (~82.8% screen-to-body ratio)",
        displayResolution:
          "1440 x 2960 pixels, 18.5:9 ratio (~523 ppi density)",
        displayProtection: "Corning Gorilla Glass 5",
        displayOther1: "Always-on display",
      },
      PlatformDetails: {
        platformOs: "Android 9.0 (Pie), upgradable to Android 12",
        platformChipset: "Qualcomm SDM845 Snapdragon 845 (10 nm)",
        platformCpu:
          "Octa-core (4x2.5 GHz Kryo 385 Gold & 4x1.6 GHz Kryo 385 Silver)",
        platformGpu: "Adreno 630",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 128GB 4GB RAM",
        memoryType: "UFS 2.1",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED flash, Pixel Shift, Auto-HDR, panorama",
        mainCameraSingle:
          '12.2 MP, f/1.8, 28mm (wide), 1/2.55", 1.4µm, dual pixel PDAF, OIS',
        mainCameraVideo: "4K@30fps, 1080p@30/60/120fps, 1080p@30fps (gyro-EIS)",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Auto-HDR",
        selfieCameraDual:
          "8 MP, f/1.8, 28mm (wide), PDAF\n8 MP, f/2.2, 19mm (ultrawide), no AF",
        selfieCameraVideo: "1080p@30fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, DLNA",
        communicationsBluetooth: "5.0, A2DP, LE, aptX HD",
        communicationsPositioning: "GPS, GLONASS, BDS, GALILEO",
        communicationsNfc: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1",
      },
      FeaturesDetails: {
        featureSensors:
          "Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryType: "Li-Po 3430 mAh, non-removable",
        batteryCharging: "18W wired, PD2.0",
      },
      MiscDetails: {
        miscColors: "Clearly White, Just Black, Not Pink",
        miscModels: "G013C",
        miscPrice: "About 260 EUR",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 258244 (v7), 341814 (v8)\nGeekBench: 8088 (v4.4), 2092 (v5.1)\nGFXBench: 12fps (ES 3.1 onscreen)",
      },
    },
    pixel2xl: {
      phoneDetails: {
        yearValue: "2017",
        brandValue: "Google",
        modelValue: "Pixel 2 XL",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716825842/pixels/pixel2/sfhwg8bcwq8kzxian80b.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
      },
      BodyDetails: {
        bodyDimensions: "157.9 x 76.7 x 7.9 mm (6.22 x 3.02 x 0.31 in)",
        bodyWeight: "175 g (6.17 oz)",
        bodySim: "Nano-SIM and eSIM",
        bodyBuild:
          "Glass front (Gorilla Glass 5), aluminum/glass back, aluminum frame",
        bodyProtection: "IP67 dust/water resistant (up to 1m for 30 min)",
      },
      DisplayDetails: {
        displayType: "P-OLED",
        displaySize: "6.0 inches, 92.6 cm2 (~76.4% screen-to-body ratio)",
        displayResolution: "1440 x 2880 pixels, 18:9 ratio (~538 ppi density)",
        displayProtection: "Corning Gorilla Glass 5",
        displayOther1: "Always-on display",
      },
      PlatformDetails: {
        platformOs: "Android 8.0 (Oreo), upgradable to Android 11",
        platformChipset: "Qualcomm MSM8998 Snapdragon 835 (10 nm)",
        platformCpu: "Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo)",
        platformGpu: "Adreno 540",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 128GB 4GB RAM",
        memoryType: "UFS 2.1",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED flash, HDR, panorama",
        mainCameraSingle:
          '12.2 MP, f/1.8, 27mm (wide), 1/2.55", 1.4µm, dual pixel PDAF, Laser AF, OIS',
        mainCameraVideo:
          "4K@30fps (gyro-EIS), 1080p@30/60/120fps (gyro-EIS), 720p@240fps (gyro-EIS)",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle: '8 MP, f/2.4, 25mm (wide), 1/3.2", 1.4µm',
        selfieCameraVideo: "1080p@30fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, DLNA",
        communicationsBluetooth: "5.0, A2DP, LE, aptX HD",
        communicationsPositioning: "GPS, GLONASS, BDS, GALILEO",
        communicationsNfc: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1",
      },
      FeaturesDetails: {
        featureSensors:
          "Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass, barometer",
      },
      BatteryDetails: {
        batteryType: "Li-Ion 3520 mAh, non-removable",
        batteryCharging: "10.5W wired (capped), PD2.0",
      },
      MiscDetails: {
        miscColors: "Just Black, Black & White",
        miscModels: "G011C",
        miscPrice: "About 520 EUR",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 206711 (v7)\nGeekBench: 6055 (v4.4)\nGFXBench: 13fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: ∞",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "Voice 66dB / Noise 70dB / Ring 78dB",
        testsAudioQuality: "Noise - 93.7 / Crosstalk - 79.7",
      },
    },
  },
};
const commonModels = {
  Apple: {
    iphone15promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 15 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716658956/iphone/iphone15/uoup5oo5y121boklmgcr.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "159.9 x 76.7 x 8.3 mm (6.30 x 3.02 x 0.33 in)",
        bodyWeight: "221 g (7.80 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), titanium frame (grade 5)",
      },
      DisplayDetails: {
        displayType:
          "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
        displaySize: "6.7 inches, 110.2 cm2 (~89.8% screen-to-body ratio)",
        displayResolution:
          "1290 x 2796 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
        displayOther1: "Always-On display",
      },
      PlatformDetails: {
        platformChipset: "Apple A17 Pro (3 nm)",
        platformCpu: "Hexa-core (2x3.78 GHz + 4x2.11 GHz)",
        platformGpu: "Apple GPU (6-core graphics)",
        platformOs: "iOS 17, upgradable to iOS 17.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "256GB 8GB RAM, 512GB 8GB RAM, 1TB 8GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "48 MP, f/1.8, 24mm (wide), 1/1.28\u0022, 1.22\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.8, 120mm (periscope telephoto), 1/3.06\u0022, 1.12\u00b5m, dual pixel PDAF, 3D sensor\u2011shift OIS, 5x optical zoom\n 12 MP, f/2.2, 13mm, 120\u02da (ultrawide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), 3D (spatial) video, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@24/30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF, OIS\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "USB Type-C 3.2 Gen 2, DisplayPort",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband 2 (UWB) support",
        featureCall: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 15W wireless (Qi2) - requires iOS 17.2 update\n 4.5W reverse wired",
        batteryType: "Li-Ion 4441 mAh, non-removable",
      },
      MiscDetails: {
        miscColors:
          "Black Titanium, White Titanium, Blue Titanium, Natural Titanium",
        miscModels: "A2849, A3105, A3106, A3108, iPhone16,2",
        miscPrice:
          "$\u20091,149.00 / \u00a3\u20091,149.00 / \u20ac\u20091,369.00 / \u20b9\u2009156,900",
      },
      TestsDetails: {
        testsPerformance: "AnTuTu: 1487203 (v10)\n GeekBench: 7237 (v6.0)",
      },
    },
    iphone14promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 14 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716810688/iphone/iphone14/sbxfqi0q8nstlyvdvwoi.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)",
        bodyWeight: "240 g (8.47 oz)",
        bodySim:
          "Nano-SIM and eSIM - International\n Dual eSIM with multiple numbers - USA\n Dual SIM (Nano-SIM, dual stand-by) - China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
        displaySize: "6.7 inches, 110.2 cm2 (~88.3% screen-to-body ratio)",
        displayResolution:
          "1290 x 2796 pixels, 19.5:9 ratio (~460 ppi density)",
        displayProtection: "Ceramic Shield glass",
        displayOther1: "Always-On display",
      },
      PlatformDetails: {
        platformChipset: "Apple A16 Bionic (4 nm)",
        platformCpu: "Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 16, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "48 MP, f/1.8, 24mm (wide), 1/1.28\u0022, 1.22\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.8, 77mm (telephoto), 1/3.5\u0022, PDAF, OIS, 3x optical zoom\n 12 MP, f/2.2, 13mm, 120\u02da (ultrawide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, Cinematic mode (4K@24/30fps)",
        selfieCameraSingle:
          "12 MP, f/1.9, 23mm (wide), 1/3.6\u0022, PDAF, OIS (unconfirmed)\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.3, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureBand: "Ultra Wideband (UWB) support",
        featureCall: "Emergency SOS via satellite (SMS sending/receiving)",
      },
      BatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 4323 mAh, non-removable (16.68 Wh)",
      },
      MiscDetails: {
        miscColors: "Space Black, Silver, Gold, Deep Purple",
        miscModels: "A2894, A2651, A2893, A2895, iphone15,3",
        miscPrice:
          "\u20ac\u20091,449.00 / $\u20091,099.99 / \u00a3\u20091,199.00 / \u20b9\u2009139,900",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 955884 (v9)\n GeekBench: 5423 (v5.1)\n GFXBench: 54fps (ES 3.1 onscreen)",
      },
    },
    iphone13promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 13 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811073/iphone/iphone13/mpmdsltwwbm0alwqcgfx.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in)",
        bodyWeight: "240 g (8.47 oz)",
        bodySim: "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (HBM), 1200 nits (peak)",
        displaySize: "6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)",
        displayResolution:
          "1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A15 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
        platformGpu: "Apple GPU (5-core graphics)",
        platformOs: "iOS 15, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal:
          "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.5, 26mm (wide), 1/1.7\u0022, 1.9\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.8, 77mm (telephoto), PDAF, 1/3.5\u0022, OIS, 3x optical zoom\n 12 MP, f/1.8, 13mm, 120\u02da (ultrawide), 1/3.5\u0022, PDAF\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (1080p@30fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/25/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 4352 mAh, non-removable (16.75 Wh)",
      },
      MiscDetails: {
        miscColors: "Graphite, Gold, Silver, Sierra Blue, Alpine Green",
        miscModels: "A2643, A2484, A2641, A2644, A2645, iphone14,3",
        miscPrice:
          "$\u2009775.00 / \u20ac\u20091,624.42 / \u00a3\u20091,279.00 / \u20b9\u2009119,900 / Rp\u200923,681,736",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 801691 (v9)\n GeekBench: 4706 (v5.1)\n GFXBench: 60fps (ES 3.1 onscreen)",
      },
    },
    iphone12promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 12 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716811622/iphone/iphone12/olnrlvfvqx7lebx78wjf.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        networkSpeed: "HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "160.8 x 78.1 x 7.4 mm (6.33 x 3.07 x 0.29 in)",
        bodyWeight: "228 g (8.04 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)",
        displayResolution:
          "1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Ceramic Shield glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A14 Bionic (5 nm)",
        platformCpu: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 14.1, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.6, 26mm (wide), 1.7\u00b5m, dual pixel PDAF, sensor-shift OIS\n 12 MP, f/2.2, 65mm (telephoto), 1/3.4\u0022, 1.0\u00b5m, PDAF, OIS, 2.5x optical zoom\n 12 MP, f/2.4, 13mm, 120\u02da (ultrawide), 1/3.6\u0022\n TOF 3D LiDAR scanner (depth)",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, 10\u2011bit HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n 15W wireless (MagSafe)\n 7.5W wireless (Qi)",
        batteryType: "Li-Ion 3687 mAh, non-removable (14.13 Wh)",
      },
      MiscDetails: {
        miscColors: "Silver, Graphite, Gold, Pacific Blue",
        miscModels: "A2411, A2342, A2410, A2412, iPhone13,4",
        miscPrice: "$\u2009599.00 / Rp\u200920,299,000",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 638584 (v8)\n GeekBench: 4240 (v5.1)\n GFXBench: 55fps (ES 3.1 onscreen)",
      },
    },
    iphone11promax: {
      phoneDetails: {
        brandValue: "Apple",
        modelValue: "iPhone 11 Pro Max",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716812258/iphone/iphone11/lws5ece5lauln577s5cw.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / EVDO / LTE",
        networkSpeed: "HSPA, LTE-A 1.6 Gbps DL, EV-DO Rev.A 3.1 Mbps",
      },
      BodyDetails: {
        bodyDimensions: "158 x 77.8 x 8.1 mm (6.22 x 3.06 x 0.32 in)",
        bodyWeight: "226 g (7.97 oz)",
        bodySim:
          "Nano-SIM and eSIM or Dual SIM (Nano-SIM, dual stand-by) - for China",
        bodyBuild:
          "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
      },
      DisplayDetails: {
        displayType:
          "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        displaySize: "6.5 inches, 102.9 cm2 (~83.7% screen-to-body ratio)",
        displayResolution:
          "1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)",
        displayProtection: "Scratch-resistant glass",
      },
      PlatformDetails: {
        platformChipset: "Apple A13 Bionic (7 nm+)",
        platformCpu: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
        platformGpu: "Apple GPU (4-core graphics)",
        platformOs: "iOS 13, upgradable to iOS 16.2",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM",
        memoryOther1: "NVMe",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Dual-LED dual-tone flash, HDR (photo/panorama)",
        mainCameraTriple:
          "12 MP, f/1.8, 26mm (wide), 1/2.55\u0022, 1.4\u00b5m, dual pixel PDAF, OIS\n 12 MP, f/2.0, 52mm (telephoto), 1/3.4\u0022, 1.0\u00b5m, PDAF, OIS, 2x optical zoom\n 12 MP, f/2.4, 120\u02da, 13mm (ultrawide), 1/3.6\u0022",
        mainCameraVideo:
          "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR",
        selfieCameraSingle:
          "12 MP, f/2.2, 23mm (wide), 1/3.6\u0022\n SL 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS",
      },
      SoundDetails: {
        sound35MmJack: "No",
        soundLoudspeaker: "Yes, with stereo speakers",
      },
      CommunicationsDetails: {
        communicationsBluetooth: "5.0, A2DP, LE",
        communicationsNfc: "Yes",
        communicationsUsb: "Lightning, USB 2.0",
        communicationsWlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, accelerometer, gyro, proximity, compass, barometer",
        featureBand: "Ultra Wideband (UWB) support",
      },
      gsmBatteryDetails: {
        batteryCharging:
          "Wired, PD2.0, 50% in 30 min (advertised)\n Wireless (Qi)",
        batteryType: "Li-Ion 3969 mAh, non-removable (15.04 Wh)",
      },
      MiscDetails: {
        miscColors:
          "Matte Space Gray, Matte Silver, Matte Gold, Matte Midnight Green",
        miscModels: "A2218, A2161, A2220, iPhone12.5",
        miscPrice: "$\u2009419.00",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 459713 (v7), 536883 (v8)\n GeekBench: 13870 (v4.4), 3503 (v5.1)\n GFXBench: 57fps (ES 3.1 onscreen)",
      },
    },
  },
  Huawei: {
    pura70ultra: {
      phoneDetails: {
        yearValue: "2024",
        brandValue: "Huawei",
        modelValue: "Pura 70 Ultra",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755093/common/q8tkxcj6etzh93ylxfgj.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / CDMA2000 / LTE / 5G",
      },
      BodyDetails: {
        bodyDimensions: "162.6 x 75.1 x 8.4 mm (6.40 x 2.96 x 0.33 in)",
        bodyWeight: "226 g (7.97 oz)",
        bodySim: "Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild:
          "Glass front, aluminum frame, silicone polymer back (eco leather)",
        bodyProtection: "IP68 dust/water resistant (up to 2m for 30 min)",
      },
      DisplayDetails: {
        displayType: "LTPO OLED, 1B colors, HDR, 120Hz, 2500 nits (peak)",
        displaySize: "6.8 inches, 109.0 cm2 (~89.3% screen-to-body ratio)",
        displayResolution: "1260 x 2844 pixels (~460 ppi density)",
        displayProtection: "Kunlun Glass (Basalt-tempered)",
      },
      PlatformDetails: {
        platformOs: "EMUI 14.2 (International), HarmonyOS 4.2 (China)",
        platformChipset: "Kirin 9010 (7 nm)",
        platformCpu:
          "Octa-core (1x2.3 GHz Taishan Big & 3x2.18 GHz Taishan Mid & 4x1.55 GHz Cortex-A510)",
      },
      MemoryDetails: {
        memoryCardSlot: "No",
        memoryInternal: "512GB 16GB RAM, 1TB 16GB RAM",
      },
      MainCameraDetails: {
        mainCameraFeatures: "LED flash, panorama, HDR",
        mainCameraTriple:
          '50 MP, f/1.6-4.0, 23mm (wide), 1.0"-type, PDAF, Laser AF, sensor-shift OIS, retractable lens\n50 MP, f/2.1, 90mm (telephoto), PDAF (5cm - ∞), OIS, 3.5x optical zoom\n40 MP, f/2.2, 13mm (ultrawide), AF',
        mainCameraVideo: "4K, 1080p, HDR, gyro-EIS, OIS",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "HDR, panorama",
        selfieCameraSingle: "13 MP, f/2.4, (ultrawide), AF",
        selfieCameraVideo: "Yes, HDR",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE, L2HC",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (L1), BDS (B1I+B1c+B2a+B2b), GALILEO (E1+E5a+E5b), QZSS (L1+L5), NavIC",
        communicationsNfc: "Yes; NFC-SIM, HCE",
        communicationsInfrared: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1, OTG, DisplayPort 1.2",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (under display, optical), accelerometer, proximity, gyro, compass, color spectrum",
        featureCall: "BDS Satellite Calling and Message",
      },
      BatteryDetails: {
        batteryType: "Li-Po 5200 mAh, non-removable",
        batteryCharging:
          "100W wired\n80W wireless\n20W reverse wireless\n18W reverse wired",
      },
      MiscDetails: {
        miscColors: "Black, White, Brown, Green",
        miscModels: "HBP-LX9, HBP-AL00",
        miscPrice: "$ 1,656.00 / € 1,499.00",
      },
      TestsDetails: {
        testsLoudspeaker: "-28.3 LUFS (Average)",
      },
    },
    p60pro: {
      phoneDetails: {
        yearValue: "2023",
        brandValue: "Huawei",
        modelValue: "P60 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755093/common/ahqxybnxel01ivyaje2g.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / CDMA2000 / LTE",
      },
      BodyDetails: {
        bodyDimensions: "161 x 74.5 x 8.3 mm (6.34 x 2.93 x 0.33 in)",
        bodyWeight: "200 g (7.05 oz)",
        bodySim:
          "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)",
        bodyBuild: "IP68 dust/water resistant (up to 1.5m for 30 min)",
        bodyProtection: "Kunlun Glass",
      },
      DisplayDetails: {
        displayType: "LTPO OLED, 1B colors, 120Hz",
        displaySize: "6.67 inches, 107.7 cm2 (~89.8% screen-to-body ratio)",
        displayResolution: "1220 x 2700 pixels (~444 ppi density)",
        displayProtection: "Kunlun Glass",
        displayOther1: "Always-on display",
      },
      PlatformDetails: {
        platformOs:
          "HarmonyOS 3.1 (China), EMUI 13.1 (Europe), no Google Play Services",
        platformChipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)",
        platformCpu:
          "Octa-core (1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x2.0 GHz Cortex-A510)",
        platformGpu: "Adreno 730",
      },
      MemoryDetails: {
        memoryCardSlot: "NM (Nano Memory), up to 256GB (uses shared SIM slot)",
        memoryInternal: "256GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM",
        memoryType: "UFS",
      },
      MainCameraDetails: {
        mainCameraFeatures: "LED flash, HDR, panorama",
        mainCameraTriple:
          "48 MP, f/1.4-f/4.0, 25mm (wide), PDAF, Laser AF, OIS\n48 MP, f/2.1, 90mm (telephoto), PDAF, sensor-shift OIS, 3.5x optical zoom\n13 MP, f/2.2, 13mm (ultrawide), AF",
        mainCameraVideo: "4K@30/60fps, 1080p@30/60fps, 1080p@960fps; gyro-EIS",
      },
      SelfieCameraDetails: {
        selfieCameraSingle: "13 MP, f/2.4, (ultrawide)",
        selfieCameraFeatures: "Panorama, HDR",
        selfieCameraVideo: "4K@30/60fps, 1080p@30fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (B1I+B1c+B2a), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5), NavIC",
        communicationsNfc: "Yes; NFC-SIM, HCE",
        communicationsInfrared: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1, OTG",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum",
        featureCall: "BDS Satellite Calling",
      },
      BatteryDetails: {
        batteryType: "Li-Po 4815 mAh, non-removable",
        batteryCharging: "88W wired\n50W wireless\nReverse wireless",
      },
      MiscDetails: {
        miscColors: "Black, Green, Violet, Rococo Pearl",
        miscModels: "MNA-AL00, MNA-LX9",
        miscPrice: "$ 1,120.00 / € 928.12 / £ 1,049.32",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 1030473 (v9)\nGeekBench: 4422 (v6)\nGFXBench: 65fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: Infinite (nominal)",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "-27.3 LUFS (Good)",
      },
    },
    p50pro: {
      phoneDetails: {
        yearValue: "2021",
        brandValue: "Huawei",
        modelValue: "P50 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755093/common/xumw1kzatl8kbjz9bzyi.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / CDMA2000 / LTE",
      },
      BodyDetails: {
        bodyDimensions: "158.8 x 72.8 x 8.5 mm (6.25 x 2.87 x 0.33 in)",
        bodyWeight: "195 g (6.88 oz)",
        bodyBuild: "Glass front, glass back, aluminum frame",
        bodySim:
          "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)",
        bodyProtection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType: "OLED, 1B colors, 120Hz",
        displaySize: "6.6 inches, 105.4 cm2 (~91.2% screen-to-body ratio)",
        displayResolution: "1228 x 2700 pixels (~450 ppi density)",
      },
      PlatformDetails: {
        platformOs:
          "HarmonyOS 2.0 (China), EMUI 12 (Europe), no Google Play Services",
        platformChipset:
          "Kirin 9000 (5 nm), Qualcomm SM8350 Snapdragon 888 4G (5 nm)",
        platformCpu:
          "Octa-core (1x3.13 GHz Cortex-A77 & 3x2.54 GHz Cortex-A77 & 4x2.05 GHz Cortex-A55), Octa-core (1x2.84 GHz Cortex-X1 & 3x2.42 GHz Cortex-A78 & 4x1.80 GHz Cortex-A55)",
        platformGpu: "Mali-G78 MP24, Adreno 660",
      },
      MemoryDetails: {
        memoryCardSlot: "NM (Nano Memory), up to 256GB (uses shared SIM slot)",
        memoryInternal:
          "128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM, 512GB 12GB RAM",
        memoryType: "UFS 4.0",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Leica optics, dual-LED flash, panorama, HDR",
        mainCameraQuad:
          "50 MP, f/1.8, 23mm (wide), PDAF, Laser AF, OIS\n64 MP, f/3.5, 90mm (periscope telephoto), PDAF, OIS, 3.5x optical zoom, 7x lossless zoom\n13 MP, f/2.2, 13mm (ultrawide), AF\n40 MP, f/1.6, 23mm (B/W), AF",
        mainCameraVideo: "4K@30/60fps, 1080p@30/60fps, 1080p@960fps; gyro-EIS",
      },
      SelfieCameraDetails: {
        selfieCameraFeatures: "Panorama, HDR",
        selfieCameraSingle: "13 MP, f/2.4, (wide), AF",
        selfieCameraVideo: "4K@30fps, 1080p@30/60/240fps",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (L1), BDS (B1I+B1c+B2a+B2b), GALILEO (E1+E5a+E5b), QZSS (L1+L5), NavIC",
        communicationsNfc: "Yes",
        communicationsInfrared: "Yes",
        communicationsRadio: "No",
        communicationsUsb: "USB Type-C 3.1, OTG",
      },
      FeaturesDetails: {
        featureSensor:
          "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, barometer, color spectrum",
      },
      BatteryDetails: {
        batteryType: "Li-Po 4360 mAh, non-removable",
        batteryCharging: "66W wired, 50W wireless, Reverse wireless charging",
      },
      MiscDetails: {
        miscColors: "Golden Black, Cocoa Gold, Pearl White, Charm Pink",
        miscModels: "JAD-AL50, JAD-LX9, JAD-AL00",
        miscPrice: "€ 719.99",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 793876 (v8), 786215 (v9)\nGeekBench: 3145 (v5.1)\nGFXBench: 44fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: Infinite (nominal)",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "-27.3 LUFS (Good)",
      },
    },
    p40pro: {
      phoneDetails: {
        yearValue: "2020",
        brandValue: "Huawei",
        modelValue: "P40 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755092/common/kxxzwxsrzmfxtekeytno.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / HSPA / LTE / 5G",
      },
      BodyDetails: {
        bodyDimensions: "158.2 x 72.6 x 9 mm (6.23 x 2.86 x 0.35 in)",
        bodyWeight: "209 g (7.37 oz)",
        build: "Glass front, glass back, aluminum frame",
        sim: "Nano-SIM and eSIM or Hybrid Dual SIM (Nano-SIM, dual stand-by)",
        protection: "IP68 dust/water resistant (up to 1.5m for 30 min)",
      },
      DisplayDetails: {
        displayType: "OLED, 90Hz, HDR10",
        displaySize: "6.58 inches, 105.2 cm2 (~91.6% screen-to-body ratio)",
        displayResolution: "1200 x 2640 pixels (~441 ppi density)",
      },
      PlatformDetails: {
        os: "Android 10, EMUI 10.1, no Google Play Services",
        chipset: "Kirin 990 5G (7 nm+)",
        cpu: "Octa-core (2x2.86 GHz Cortex-A76 & 2x2.36 GHz Cortex-A76 & 4x1.95 GHz Cortex-A55)",
        gpu: "Mali-G76 MP16",
      },
      MemoryDetails: {
        cardSlot: "NM (Nano Memory), up to 256GB (uses shared SIM slot)",
        internal: "128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM",
        type: "UFS 3.0",
      },
      MainCameraDetails: {
        mainCameraFeatures: "Leica optics, LED flash, panorama, HDR",
        mainCameraTriple:
          '50 MP, f/1.9, 23mm (wide), 1/1.28", 1.22µm, dual pixel PDAF, OIS\n12 MP, f/3.4, 125mm (periscope telephoto), PDAF, OIS, 5x optical zoom\n40 MP, f/1.8, 18mm (ultrawide), 1/1.54", PDAF\nTOF 3D, (depth)',
        mainCameraVideo:
          "4K@30/60fps, 1080p@30/60fps, 720@7680fps, 1080p@960fps, HDR; gyro-EIS",
      },
      SelfieCameraDetails: {
        selfieCameraSingle: '32 MP, f/2.2, 26mm (wide), 1/2.8", 0.8µm, AF',
        selfieCameraFeatures: "HDR",
        selfieCameraVideo: "4K@30/60fps, 1080p@30/60fps",
      },
      SoundDetails: {
        loudspeaker: "Yes",
        jack: "No",
        audioFeatures: "32-bit/384kHz audio",
      },
      CommunicationsDetails: {
        wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        bluetooth: "5.1, A2DP, LE",
        positioning:
          "GPS (L1+L5), GLONASS (L1), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5), NavIC",
        nfc: "Yes",
        infrared: "Yes",
        radio: "No",
        usb: "USB Type-C 3.1, OTG",
      },
      FeaturesDetails: {
        featureSensor:
          "Infrared Face ID, fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum",
      },
      BatteryDetails: {
        batteryType: "Li-Po 4200 mAh, non-removable",
        batteryCharging: "40W wired\n27W wireless\n27W reverse wireless",
      },
      MiscDetails: {
        colors: "Silver Frost, Blush Gold, Deep Sea Blue, Ice White, Black",
        models: "ELS-NX9, ELS-N04, ELS-AN00, ELS-TN00",
        price: "$495.00 / €395.01 / £471.99",
      },
      TestsDetails: {
        performance:
          "AnTuTu: 496356 (v8)\nGeekBench: 12848 (v4.4), 3197 (v5.1)\nGFXBench: 31fps (ES 3.1 onscreen)",
        display: "Contrast ratio: Infinite (nominal)",
        camera: "Photo / Video",
        loudspeaker: "-27.5 LUFS (Good)",
      },
    },
    mate50pro: {
      phoneDetails: {
        yearValue: "2022",
        brandValue: "Huawei",
        modelValue: "Mate 50 Pro",
        image:
          "https://res.cloudinary.com/dwbt979k3/image/upload/v1716755092/common/b612gfll1vbe7p34duaq.png",
      },
      NetworkDetails: {
        networkTechnology: "GSM / CDMA / HSPA / CDMA2000 / LTE",
      },
      BodyDetails: {
        bodyDimensions: "162.1 x 75.5 x 8.5 mm (6.38 x 2.97 x 0.33 in)",
        bodyWeight: "205 g / 209 g (7.23 oz)",
        bodySim:
          "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)",
        bodyProtection: "IP68 dust/water resistant (up to 6m for 30 min)",
      },
      DisplayDetails: {
        displayType: "OLED, 1B colors, 120Hz",
        displaySize: "6.74 inches, 111.8 cm2 (~91.3% screen-to-body ratio)",
        displayResolution:
          "1212 x 2616 pixels, 19.5:9 ratio (~428 ppi density)",
        displayProtection: "Huawei Kunlun Glass",
      },
      PlatformDetails: {
        platformOs: "EMUI 13 (International); HarmonyOS 3.0 (China)",
        platformChipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)",
        platformCpu:
          "Octa-core (1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x2.0 GHz Cortex-A510)",
        platformGpu: "Adreno 730",
      },
      MemoryDetails: {
        memoryCardSlot: "NM (Nano Memory), up to 256GB (uses shared SIM slot)",
        memoryInternal: "256GB 8GB RAM, 512GB 8GB RAM",
        memoryType: "UFS 3.1",
      },
      MainCameraDetails: {
        mainCameraFeatures: "LED flash, panorama, HDR",
        mainCameraTriple:
          "50 MP, f/1.4-f/4.0, 24mm (wide), PDAF, Laser AF, OIS\n64 MP, f/3.5, 90mm (periscope telephoto), PDAF, OIS, 3.5x optical zoom\n13 MP, f/2.2, 13mm, 120˚ (ultrawide), PDAF",
        mainCameraVideo:
          "4K@30/60fps, 1080p@30/60/120/240/480fps, 720p@960fps, 720p@3840fps, HDR, gyro-EIS",
      },
      SelfieCameraDetails: {
        selfieCameraSingle:
          "13 MP, f/2.4, 18mm (ultrawide)\nTOF 3D, (depth/biometrics sensor)",
        selfieCameraVideo: "4K@30/60fps, 1080p@30/60/240fps",
        selfieCameraFeatures: "HDR, panorama",
      },
      SoundDetails: {
        soundLoudspeaker: "Yes, with stereo speakers",
        sound35MmJack: "No",
        soundOtherFeatures: "32-bit/384kHz audio",
      },
      CommunicationsDetails: {
        communicationsWlan:
          "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
        communicationsBluetooth: "5.2, A2DP, LE",
        communicationsPositioning:
          "GPS (L1+L5), GLONASS (L1), BDS (B1I+B1c+B2a), GALILEO (E1+E5a), QZSS (L1+L5), NavIC (L5)",
        communicationsNfc: "Yes",
        communicationsInfraredPort: "Yes",
        communicationsUsb: "USB Type-C 3.1, OTG, Display Port 1.2",
      },
      FeaturesDetails: {
        featureSensor:
          "Face ID, fingerprint (under display, optical), accelerometer, gyro, proximity, barometer, compass, color spectrum",
        featureCall: "BDS Satellite Message (sending only)",
      },
      BatteryDetails: {
        batteryType: "Li-Po 4700 mAh, non-removable",
        batteryCharging: "66W wired\n50W wireless\n5W reverse wireless",
      },
      MiscDetails: {
        miscColors: "Black, Silver, Purple, Orange",
        miscModels: "DCO-AL00, DCO-LX9",
        miscPrice: "$ 775.00 / € 424.99 / £ 1,279.77",
      },
      TestsDetails: {
        testsPerformance:
          "AnTuTu: 979921 (v9)\nGeekBench: 3839 (v5.1)\nGFXBench: 68fps (ES 3.1 onscreen)",
        testsDisplay: "Contrast ratio: Infinite (nominal)",
        testsCamera: "Photo / Video",
        testsLoudspeaker: "-24.8 LUFS (Very good)",
      },
    },
  },
};

// Get All Brands Names
app.get("/api/mobile-brands", (req, res) => {
  res.json(mobileBrands);
});

// Get All commong models of ALL Brands
app.get("/api/common-brand", (req, res) => {
  res.json(commonModels);
});
// Get All models of brand
app.get("/api/:brandName", (req, res) => {
  const brandName = req.params.brandName;
  const models = phoneModels[brandName];
  if (models) {
    res.json(models);
  } else {
    res.status(404).send("Brand not found");
  }
});
// Get Brands Model's Specifications
app.get("/api/:brandName/:modelName", (req, res) => {
  const brandName = req.params.brandName;
  const modelName = req.params.modelName;
  const brand = phoneModels[brandName];
  if (brand) {
    const model = brand[modelName];
    if (model) {
      res.json(model);
    } else {
      res.status(404).send("Model not found");
    }
  } else {
    res.status(404).send("Brand not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
