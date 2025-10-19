import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImage } from '@fortawesome/free-solid-svg-icons';

interface MediaCardProps {
  title: string;
  type: 'video' | 'image';
  thumbnailUrl?: string;
  onClick?: () => void;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  title,
  type,
  thumbnailUrl,
  onClick,
}) => {
  return (
    <Card className="media-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-thumbnail">
        {thumbnailUrl ? (
          <Card.Img variant="top" src={thumbnailUrl} />
        ) : (
          <div className="placeholder-thumbnail">
            <FontAwesomeIcon
              icon={type === 'video' ? faVideo : faImage}
              size="3x"
            />
          </div>
        )}
      </div>
      <Card.Body>
        <Card.Title className="text-truncate" title={title}>
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};