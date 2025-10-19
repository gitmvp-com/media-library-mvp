import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MediaCard } from './MediaCard';

interface MediaItem {
  id: string;
  title: string;
  type: 'video' | 'image';
  thumbnailUrl?: string;
}

interface MediaGridProps {
  items: MediaItem[];
  onItemClick?: (item: MediaItem) => void;
}

export const MediaGrid: React.FC<MediaGridProps> = ({ items, onItemClick }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <MediaCard
            title={item.title}
            type={item.type}
            thumbnailUrl={item.thumbnailUrl}
            onClick={() => onItemClick?.(item)}
          />
        </Col>
      ))}
    </Row>
  );
};