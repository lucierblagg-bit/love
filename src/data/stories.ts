export interface Story {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  content: string[];
  coverImage: string;
  images: string[];
}

export const stories: Story[] = [
  {
    id: "first-meet",
    date: "待填写",
    title: "初次遇见你",
    subtitle: "第一次见面",
    content: [
      "那是一个普通的日子，却因为遇见你变得不再普通。",
      "在这里写下你们第一次见面的故事...",
      "每一个细节都值得被记住，因为那是一切美好的开始。",
    ],
    coverImage: "https://picsum.photos/seed/meet/1200/800",
    images: [
      "https://picsum.photos/seed/meet1/800/600",
      "https://picsum.photos/seed/meet2/800/600",
    ],
  },
  {
    id: "first-date",
    date: "待填写",
    title: "第一次约会",
    subtitle: "第一次约会",
    content: [
      "紧张又期待，和你走在一起的感觉真好。",
      "在这里写下你们第一次约会的故事...",
      "那天的天气、那条路、那家店，都因为有你而变得特别。",
    ],
    coverImage: "https://picsum.photos/seed/date/1200/800",
    images: [
      "https://picsum.photos/seed/date1/800/600",
      "https://picsum.photos/seed/date2/800/600",
    ],
  },
  {
    id: "confession",
    date: "2025年7月11日",
    title: "在一起吧",
    subtitle: "表白的那天",
    content: [
      "鼓起全部的勇气，只想对你说那三个字。",
      "在这里写下表白那天的故事...",
      "从那一刻起，我们的故事正式开始了。",
    ],
    coverImage: "https://picsum.photos/seed/love/1200/800",
    images: [
      "https://picsum.photos/seed/love1/800/600",
      "https://picsum.photos/seed/love2/800/600",
    ],
  },
  {
    id: "first-trip",
    date: "待填写",
    title: "和你去看世界",
    subtitle: "第一次旅行",
    content: [
      "第一次一起出发，每一步都是风景。",
      "在这里写下你们第一次旅行的故事...",
      "不在乎目的地是哪里，只要身边的人是你就好。",
    ],
    coverImage: "https://picsum.photos/seed/trip/1200/800",
    images: [
      "https://picsum.photos/seed/trip1/800/600",
      "https://picsum.photos/seed/trip2/800/600",
    ],
  },
];
