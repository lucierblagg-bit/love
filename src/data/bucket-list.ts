export interface BucketItem {
  id: number;
  text: string;
  completed: boolean;
  completedDate?: string;
}

export const bucketList: BucketItem[] = [
  { id: 1, text: "一起看日出", completed: true, completedDate: "2025-08-15" },
  { id: 2, text: "一起去海边", completed: false },
  { id: 3, text: "一起养一只猫", completed: false },
  { id: 4, text: "一起看一场演唱会", completed: false },
  { id: 5, text: "一起跨年倒计时", completed: false },
  { id: 6, text: "一起拍一组情侣照", completed: false },
  { id: 7, text: "一起做一顿大餐", completed: false },
  { id: 8, text: "一起看星星", completed: false },
  { id: 9, text: "一起坐摩天轮", completed: false },
  { id: 10, text: "一起去游乐园", completed: false },
  { id: 11, text: "一起淋一场雨", completed: false },
  { id: 12, text: "一起看完一部长篇电视剧", completed: false },
];
