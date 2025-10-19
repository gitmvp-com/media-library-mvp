import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { MediaGrid } from '../components/MediaGrid';

// Mock data - in real app this would come from GraphQL API
const mockImages = [
  {
    id: '1',
    title: 'Sample Image 1.jpg',
    type: 'image' as const,
  },
  {
    id: '2',
    title: 'Sample Image 2.jpg',
    type: 'image' as const,
  },
  {
    id: '3',
    title: 'Sample Image 3.jpg',
    type: 'image' as const,
  },
  {
    id: '4',
    title: 'Sample Image 4.jpg',
    type: 'image' as const,
  },
  {
    id: '5',
    title: 'Sample Image 5.jpg',
    type: 'image' as const,
  },
  {
    id: '6',
    title: 'Sample Image 6.jpg',
    type: 'image' as const,
  },
];

export const Images: React.FC = () => {
  const handleImageClick = (item: any) => {
    alert(`Clicked: ${item.title}`);
  };

  return (
    <Container>
      <h1 className="mb-4">Images</h1>
      <MediaGrid items={mockImages} onItemClick={handleImageClick} />
    </Container>
  );
};