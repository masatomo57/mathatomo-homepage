import React, { ChangeEvent, useState } from 'react'
import superagent from 'superagent'

export default function voiceButton({ image, url, title, discription, tag=[] }) {

    
  return (
    <div style={contentStyle}>
        <h2>読み上げたい文章を入力</h2>
        <textarea 
          style={textareaStyle}
          value={inputText}
          onChange={
            (e: ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)
          }
        />
    </div>

      {inputText ? (
        <div style={contentStyle}>
          <p>↓</p>
          <h2>文章からクエリデータを作成</h2>
          <button style={buttonStyle} onClick={createQuery}>クエリ作成</button>
        </div>
      ) : null}

      {queryJson ? (
        <div style={contentStyle}>
          <p>↓</p>
          <h2>クエリデータから音声を合成</h2>
          <button style={buttonStyle} onClick={createVoice}>音声合成</button>
        </div>
      ) : null}
      
      {audioData ? (
        <div style={contentStyle}>
          <p>↓</p>
          <h2>返却された音声ファイルを再生</h2>
          <audio
            style={audioStyle}
            controls
            src={audioData ? window.URL.createObjectURL(audioData) : undefined}>
          </audio>
        </div>
      ) : null}
    </div>
  )
}
