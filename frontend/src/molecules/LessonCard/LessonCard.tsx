import React from 'react';
import './LessonCard.scss';

type LessonCardProps = {
  title: string;
  description: string;
  borderRadius?: string;
  background?: string;
};

const LessonCard: React.FC<LessonCardProps> = ({ title, description, borderRadius, background }) => (
  <div
    className="lesson-card fade-in"
    style={{ borderRadius: borderRadius || '12px', background: background || '#fff' }}
  >
    <h3 className="lesson-card-title">{title}</h3>
    <p className="lesson-card-desc">{description}</p>
  </div>
);

export default LessonCard; 