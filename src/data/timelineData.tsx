import React from 'react';
import { Heart, Coffee, MapPin, Cake, Star, Gift, Music, Camera, Sparkles, Home } from 'lucide-react';

export interface TimelineItem {
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
}

export const timelineData: TimelineItem[] = [
  {
    title: "When We First Met",
    date: "May 15, 2019",
    description: "The day our paths crossed at the downtown café. I knew there was something special about you from the first smile.",
    icon: <Coffee size={16} />,
    imageUrl: "/images/cafe.jpg"
  },
  {
    title: "Our First Date",
    date: "June 2, 2019",
    description: "That magical evening at Riverside Park, where we talked until the stars came out. The beginning of our story.",
    icon: <Star size={16} />,
    imageUrl: "/images/park.jpg"
  },
  {
    title: "First 'I Love You'",
    date: "August 18, 2019",
    description: "Under the meteor shower, those three words that changed everything. The universe seemed to celebrate with us.",
    icon: <Heart size={16} />,
    imageUrl: "/images/stars.jpg"
  },
  {
    title: "Our First Trip Together",
    date: "December 5, 2019",
    description: "The weekend getaway to the mountains. Building snowmen, sharing dreams, and falling deeper in love.",
    icon: <MapPin size={16} />,
    imageUrl: "/images/trip.jpg"
  },
  {
    title: "Moving In Together",
    date: "March 20, 2020",
    description: "The day we created our first home together. Every box unpacked was a new chapter beginning.",
    icon: <Home size={16} />,
    imageUrl: "/images/home.jpg"
  },
  {
    title: "Our First Anniversary",
    date: "June 2, 2020",
    description: "One year of laughter, growth, and incredible love. We celebrated with a picnic under our favorite tree.",
    icon: <Cake size={16} />,
    imageUrl: "/images/picnic.jpg"
  },
  {
    title: "The Concert Night",
    date: "September 12, 2021",
    description: "Dancing to our favorite songs, feeling invincible together as the music played just for us.",
    icon: <Music size={16} />,
    imageUrl: "/images/concert.jpg"
  },
  {
    title: "Special Surprise",
    date: "February 14, 2022",
    description: "The elaborate surprise you planned for months. I've never felt more cherished and loved.",
    icon: <Gift size={16} />,
    imageUrl: "/images/surprise.jpg"
  },
  {
    title: "Adventure in the Wild",
    date: "July 30, 2022",
    description: "Our camping trip where we saw the most beautiful sunrise. Perfectly imperfect and absolutely us.",
    icon: <Camera size={16} />,
    imageUrl: "/images/camping.jpg"
  },
  {
    title: "Today",
    date: "Present",
    description: "Every day with you continues to be the greatest adventure. Here's to all the memories yet to come.",
    icon: <Sparkles size={16} />,
    imageUrl: "/images/today.jpg"
  }
];