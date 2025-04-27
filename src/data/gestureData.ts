
export interface GestureType {
  id: number;
  name: string;
  description: string;
  howTo: string;
  imageUrl: string;
  category: string;
  tips?: string;
}

export const gestureData: GestureType[] = [
  {
    id: 1,
    name: "Move Cursor",
    description: "Move cursor on entire screen.",
    howTo: "Use index finger and middle finger of right hand and move from left to right in a smooth motion.",
    imageUrl: "/images/move_cursor.PNG",
    category: "move"
  },
  {
    id: 2,
    name: "Drag And Drop",
    description: "Move item from one folder to other.",
    howTo: "Use index finger and middle finger of right hand and bend the fingers.",
    imageUrl: "/images/drag-n-drop.PNG",
    category: "move"
  },
  {
    id: 3,
    name: "Lock Screen",
    description: "Locks the screen.",
    howTo: "Join index finger and middle finger of left hand and hold it for few seconds.",
    imageUrl: "/images/lock_screen.PNG",
    category: "screen"
  },
  {
    id: 4,
    name: "Screenshot",
    description: "Takes screenshot.",
    howTo: "Use index finger, middle finger and ring finger of right hand and move fingers slightly upward.",
    imageUrl: "/images/screenshot.png",
    category: "screen"
  },
  {
    id: 5,
    name: "Volume Control",
    description: "Controls the volume.",
    howTo: "Make a small pinch of thumb and index finger and move slightly up or down.",
    imageUrl: "/images/volume_control.PNG",
    category: "manipulation"
  },
  {
    id: 6,
    name: "Scroll",
    description: "Scroll on a page or document.",
    howTo: "Make a small pinch of thumb and index finger of left hand and move slightly up/down or left/right.",
    imageUrl: "/images/scroll.PNG",
    category: "scroll"
  },
  {
    id: 7,
    name: "Right Click",
    description: "Performs right click.",
    howTo: "Use index and middle finger of right hand and bend the middle finger of right hand.",
    imageUrl: "/images/right_click.PNG",
    category: "click"
  },
  {
    id: 8,
    name: "Click",
    description: "Performs single click",
    howTo: "Use index and middle finger of right hand and bend the index finger of right hand.",
    imageUrl: "/images/left_click.PNG",
    category: "click"
  },
  {
    id: 9,
    name: "Double Click",
    description: "Performs double click which opens the file or folder.",
    howTo: "Use the index and middle finger of right hand and perform action of joining both fingers.",
    imageUrl: "/images/double_click.PNG",
    category: "click"
  }
];
