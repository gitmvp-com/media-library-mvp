import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { MediaGrid } from '../components/MediaGrid';

// Mock data - in real app this would come from GraphQL API
const mockVideos = [
  {
    id: '1',
    title: 'Sample Video 1.mp4',
    type: 'video' as const,
  },
  {
    id: '2',
    title: 'Sample Video 2.mp4',
    type: 'video' as const,
  },
  {
    id: '3',
    title: 'Sample Video 3.mp4',
    type: 'video' as const,
  },
  {
    id: '4',
    title: 'Sample Video 4.mp4',
    type: 'video' as const,
  },
  {
    id: '5',
    title: 'Sample Video 5.mp4',
    type: 'video' as const,
  },
  {
    id: '6',
    title: 'Sample Video 6.mp4',
    type: 'video' as const,
  },
];

export const Videos: React.FC = () => {
  const handleVideoClick = (item: any) => {
    alert(`Clicked: ${item.title}`);
  };

  return (
    <Container>
      <h1 className="mb-4">Videos</h1>
      <MediaGrid items={mockVideos} onItemClick={handleVideoClick} />
    </Container>
  );
};