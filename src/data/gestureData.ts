
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
    name: "Swipe Right",
    description: "Navigate to the next page or item in a sequence.",
    howTo: "Place your hand flat, fingers together and move from left to right in a smooth motion.",
    imageUrl: "/images/swipe-right.jpg",
    category: "navigation",
    tips: "Keep your hand visible to the camera and move at a moderate speed for best recognition."
  },
  {
    id: 2,
    name: "Swipe Left",
    description: "Navigate to the previous page or item in a sequence.",
    howTo: "Place your hand flat, fingers together and move from right to left in a smooth motion.",
    imageUrl: "/images/swipe-left.jpg",
    category: "navigation"
  },
  {
    id: 3,
    name: "Pinch Zoom",
    description: "Zoom in on the current view or document.",
    howTo: "Start with thumb and index finger pinched together, then move them apart.",
    imageUrl: "/images/pinch-zoom.jpg",
    category: "zoom",
    tips: "The distance between your fingers determines the zoom level."
  },
  {
    id: 4,
    name: "Spread Zoom Out",
    description: "Zoom out from the current view or document.",
    howTo: "Start with thumb and index finger spread apart, then pinch them together.",
    imageUrl: "/images/spread-zoom.jpg",
    category: "zoom"
  },
  {
    id: 5,
    name: "Two Finger Scroll",
    description: "Scroll up or down on a page or document.",
    howTo: "Hold two fingers parallel and move them up or down together.",
    imageUrl: "/images/two-finger-scroll.jpg",
    category: "scrolling",
    tips: "Maintain consistent distance between fingers for smooth scrolling."
  },
  {
    id: 6,
    name: "Rotate",
    description: "Rotate an image or object on screen.",
    howTo: "Place two fingers on the screen and rotate them clockwise or counterclockwise.",
    imageUrl: "/images/rotate-gesture.jpg",
    category: "manipulation"
  },
  {
    id: 7,
    name: "Palm Push",
    description: "Dismiss or close the current window or dialog.",
    howTo: "Face your palm toward the screen and push forward in a gentle motion.",
    imageUrl: "/images/palm-push.jpg",
    category: "system",
    tips: "Keep your palm flat and make a decisive motion for better recognition."
  },
  {
    id: 8,
    name: "Finger Click",
    description: "Select or click on an on-screen element.",
    howTo: "Extend your index finger and make a quick forward jabbing motion.",
    imageUrl: "/images/finger-click.jpg",
    category: "selection"
  },
  {
    id: 9,
    name: "Peace Sign",
    description: "Capture a screenshot or trigger the camera.",
    howTo: "Form a peace sign with your index and middle fingers extended.",
    imageUrl: "/images/peace-sign.jpg",
    category: "system",
    tips: "Hold the gesture steady for about 2 seconds to trigger the action."
  }
];
