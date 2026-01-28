export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  category: string;
  imageUrl: string;
  price?: number;
  isSwapOnly: boolean;
  location: string;
  ownerId: string;
  ownerName: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location?: string;
  booksListed: number;
  booksSwapped: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  bookId: string;
  message: string;
  createdAt: Date;
  isRead: boolean;
}
