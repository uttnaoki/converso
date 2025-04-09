'use client';

import React from 'react';

type ConversationButtonsProps = {
  options: Record<string, string> | null;
  onSelect: (next: string) => void;
};

export const ConversationButtons: React.FC<ConversationButtonsProps> = ({
  options,
  onSelect,
}) => {
  return (
    <div style={{ marginTop: 20 }}>
      {options &&
        Object.entries(options).map(([label, next]) => (
          <button
            key={label}
            onClick={() => onSelect(next)}
            style={{
              marginRight: 10,
              padding: '8px 16px',
              fontSize: 16,
              cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
      {options === null && (
        <button
          onClick={() => onSelect('start')}
          style={{
            marginRight: 10,
            padding: '8px 16px',
            fontSize: 16,
            cursor: 'pointer',
          }}
        >
          戻る
        </button>
      )}
    </div>
  );
};
