export const SECTIONS: SECTION_TYPE[] = [
  {
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    imgUrl: "model-s.jpg",
  },
  {
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    imgUrl: "model-y.jpg",
  },
  {
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    imgUrl: "model-3.jpg",
  },
  {
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    imgUrl: "model-x.jpg",
  },
  {
    title: "Lowest Cost Solar Panels in America",
    description: "Money-back Guarantee",
    leftBtnText: "Order Now",
    rightBtnText: "Learn More",
    imgUrl: "solar-panel.jpg",
  },
  {
    title: "Solar for New Roofs",
    description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
    leftBtnText: "Order Now",
    rightBtnText: "Learn More",
    imgUrl: "solar-roof.jpg",
  },
  {
    title: "Accessories",
    description: "",
    leftBtnText: "Shop Now",
    imgUrl: "accessories.jpg",
  },
];

type SECTION_TYPE = {
  title: string;
  description: string;
  leftBtnText: string;
  rightBtnText?: string;
  imgUrl: string;
};
