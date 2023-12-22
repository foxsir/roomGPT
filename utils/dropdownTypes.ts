export type themeType =
  | "现代"
  | "古典"
  | "极简"
  | "专业"
  | "热带风";

export type roomType =
  | "客厅"
  | "餐厅"
  | "办公室"
  | "卧室"
  | "盥洗室"
  | "游戏室";

export const themes: themeType[] = [
  "现代",
  "古典",
  "极简",
  "专业",
  "热带风",
];
export const rooms: roomType[] = [
  "客厅",
  "餐厅",
  "办公室",
  "卧室",
  "盥洗室",
  "游戏室",
];


export const roomMap = {
  "客厅": "Living Room",
  "餐厅": "Dining Room",
  "办公室": "Office",
  "卧室": "Bedroom",
  "盥洗室": "Bathroom",
  "游戏室": "Gaming Room",
}

export const themeMap = {
  "现代": "Modern",
  "古典": "Vintage",
  "极简": "Minimalist",
  "专业": "Professional",
  "热带风": "Tropical"
}
