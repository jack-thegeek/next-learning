"use client";
import React from 'react';
import { useState } from 'react';
export default function Page() {
    const [contentVisible, setContentVisible] = useState(false);

    const handleClick = () => {
        setContentVisible(true);
    };

    const data = 'Server-Side Rendered Page'
    return (
        <div>
            <h1>Home Page</h1>
            <pre>{data}</pre>
            <button onClick={handleClick}>显示新增内容</button>
            {contentVisible && <p>这是一段添加的内容</p>}
        </div>
    );
}
