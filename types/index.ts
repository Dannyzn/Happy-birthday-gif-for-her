export interface Template {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  textArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Card {
  templateId: string;
  recipient: string;
  message: string;
  sender: string;
}
