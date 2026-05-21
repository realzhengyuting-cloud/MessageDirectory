export interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: "you", name: "You", icon: "person", color: "#5E5CE6" },
  { id: "home", name: "Home", icon: "home", color: "#FF6B6B" },
  { id: "love", name: "Love", icon: "heart", color: "#FF2D55" },
  { id: "family", name: "Family", icon: "people", color: "#FF9500" },
  { id: "friends", name: "Friends", icon: "chatbubbles", color: "#30D158" },
  { id: "school", name: "School", icon: "school", color: "#007AFF" },
];

export const messages: Record<string, Message[]> = {
  you: [
    { id: "1", sender: "Reminder", content: "Don't forget to submit assignment 3!", time: "9:00 AM" },
    { id: "2", sender: "Note", content: "Buy groceries on the way home", time: "8:30 AM" },
    { id: "3", sender: "Goal", content: "Finish reading chapter 5 today", time: "7:00 AM" },
  ],
  home: [
    { id: "1", sender: "Mom", content: "Dinner is ready at 7pm tonight", time: "5:30 PM" },
    { id: "2", sender: "Dad", content: "Can you help me fix the Wi-Fi?", time: "3:15 PM" },
    { id: "3", sender: "Sister", content: "I borrowed your charger, hope that's ok!", time: "1:00 PM" },
  ],
  love: [
    { id: "1", sender: "Partner", content: "Miss you! See you this weekend ❤️", time: "10:00 PM" },
    { id: "2", sender: "Partner", content: "That restaurant you picked was amazing", time: "8:45 PM" },
    { id: "3", sender: "Partner", content: "Good morning sunshine ☀️", time: "7:30 AM" },
  ],
  family: [
    { id: "1", sender: "Uncle Bob", content: "Happy birthday! Wishing you the best", time: "12:00 PM" },
    { id: "2", sender: "Grandma", content: "Come visit us this holiday season", time: "11:00 AM" },
    { id: "3", sender: "Cousin", content: "Did you see the family photo album?", time: "9:30 AM" },
  ],
  friends: [
    { id: "1", sender: "Alex", content: "Movie tonight? New Marvel is out 🎬", time: "4:00 PM" },
    { id: "2", sender: "Jordan", content: "Thanks for helping me move!", time: "2:30 PM" },
    { id: "3", sender: "Sam", content: "Check out this meme 😂", time: "11:00 AM" },
  ],
  school: [
    { id: "1", sender: "Professor", content: "Assignment 3 due next Friday", time: "2:00 PM" },
    { id: "2", sender: "Study Group", content: "Meeting at library at 4pm", time: "12:30 PM" },
    { id: "3", sender: "TA", content: "Office hours moved to Room 204", time: "10:00 AM" },
  ],
};
