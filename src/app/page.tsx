'use client';

import { useState } from 'react';

type State = {
  message: string;
  options: Record<string, string> | null; // 選択肢: 遷移先
};

const conversationMap: Record<string, State> = {
  start: {
    message: 'こんにちは！元気ですか？',
    options: {
      はい: 'good',
      いいえ: 'bad',
    },
  },
  good: {
    message: 'それはよかった！今日の予定は？',
    options: {
      仕事: 'work',
      遊び: 'play',
    },
  },
  bad: {
    message: 'そうなんだ…無理せずにね！',
    options: null,
  },
  work: {
    message: '頑張って！応援してるよ💪',
    options: null,
  },
  play: {
    message: 'リラックスして楽しんでね〜',
    options: null,
  },
};

export default function Home() {
  const [current, setCurrent] = useState('start');

  const state = conversationMap[current];

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>{state.message}</h2>
      <div style={{ marginTop: 20 }}>
        {state.options && Object.entries(state.options).map(([label, next]) => (
          <button
            key={label}
            onClick={() => setCurrent(next)}
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
        {state.options === null && (
          <button
            onClick={() => setCurrent('start')}
            style={{ marginRight: 10, padding: '8px 16px', fontSize: 16, cursor: 'pointer' }}
          >
            戻る
          </button>
        )}
      </div>
    </main>
  );
}