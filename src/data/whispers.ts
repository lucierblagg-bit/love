export interface Whisper {
  id: number;
  sender: "weiwei" | "qinqin";
  message: string;
  time: string;
}

export const whispers: Whisper[] = [
  { id: 1, sender: "qinqin", message: "今天好想你呀 🥺", time: "09:15" },
  { id: 2, sender: "weiwei", message: "我也想你，中午一起吃饭好不好？", time: "09:16" },
  { id: 3, sender: "qinqin", message: "好呀好呀！吃什么呢", time: "09:16" },
  { id: 4, sender: "weiwei", message: "你想吃什么都行，我请客 😎", time: "09:17" },
  { id: 5, sender: "qinqin", message: "哇，今天太阳从西边出来了", time: "09:17" },
  { id: 6, sender: "weiwei", message: "因为遇到你之后每天都是好日子呀", time: "09:18" },
  { id: 7, sender: "qinqin", message: "油嘴滑舌！但是我喜欢听 ☺️", time: "09:18" },
  { id: 8, sender: "weiwei", message: "那我以后天天说给你听", time: "09:19" },
  { id: 9, sender: "qinqin", message: "说话算数哦", time: "09:19" },
  { id: 10, sender: "weiwei", message: "拉钩 🤙", time: "09:20" },
  { id: 11, sender: "qinqin", message: "嗯！一百年不许变 💕", time: "09:20" },
  { id: 12, sender: "weiwei", message: "一百年都不够，要一辈子", time: "09:21" },
];
