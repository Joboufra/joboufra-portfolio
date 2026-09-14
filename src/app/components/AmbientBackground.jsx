"use client";

import { useEffect, useRef } from 'react';

const FALLBACK_COLORS = {
  accent: { red: 112, green: 208, blue: 193 },
  cyan: { red: 118, green: 200, blue: 195 },
};

const readCssColor = (value, fallback) => {
  const hex = value.trim().replace(/^#/, '');
  if (!/^[\da-f]{6}$/i.test(hex)) return fallback;

  return {
    red: parseInt(hex.slice(0, 2), 16),
    green: parseInt(hex.slice(2, 4), 16),
    blue: parseInt(hex.slice(4, 6), 16),
  };
};

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    const rootStyles = getComputedStyle(document.documentElement);
    const accent = readCssColor(rootStyles.getPropertyValue('--accent'), FALLBACK_COLORS.accent);
    const cyan = readCssColor(rootStyles.getPropertyValue('--cyan'), FALLBACK_COLORS.cyan);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // The full-page canvas is deliberately omitted on small screens. It is a
    // decorative layer, and keeping it off the main thread leaves scrolling
    // and touch interactions responsive on mobile devices.
    if (isMobile) return undefined;

    const state = {
      width: 0,
      height: 0,
      columns: 0,
      nodes: [],
      edges: [],
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
      frame: undefined,
      lastDraw: 0,
    };

    const createNodes = () => {
      const spacing = Math.max(100, Math.min(155, state.width / 9));
      const columns = Math.ceil(state.width / spacing) + 1;
      const rows = Math.ceil(state.height / spacing) + 1;

      state.columns = columns;
      state.nodes = Array.from({ length: columns * rows }, (_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        return {
          x: column * spacing + (row % 2 ? spacing * 0.18 : 0),
          y: row * spacing,
          radius: index % 5 === 0 ? 1.8 : 1.1,
          phase: index * 1.73,
        };
      });

      state.edges = [];
      for (let row = 0; row < rows - 1; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const index = row * columns + column;

          if (column < columns - 1) state.edges.push([index, index + 1]);
          state.edges.push([index, index + columns]);
          if (column > 0) state.edges.push([index, index + columns - 1]);
          if (column < columns - 1) state.edges.push([index, index + columns + 1]);
        }
      }
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, state.width, state.height);
      const animationTime = reducedMotion ? 0 : time;

      const nodes = state.nodes.map((node) => {
        const distance = Math.hypot(state.currentX - node.x, state.currentY - node.y);
        const influence = Math.max(0, 1 - distance / 260);
        const driftX = Math.sin(animationTime * 0.00035 + node.phase) * 3.5;
        const driftY = Math.cos(animationTime * 0.00028 + node.phase) * 2.5;
        return {
          ...node,
          x: node.x + driftX + (state.currentX - node.x) * influence * 0.08,
          y: node.y + driftY + (state.currentY - node.y) * influence * 0.08,
          influence,
        };
      });

      context.lineWidth = 1;
      for (const [index, next] of state.edges) {
        const distance = Math.hypot(nodes[index].x - nodes[next].x, nodes[index].y - nodes[next].y);
        if (distance > 156) continue;

        const influence = Math.max(nodes[index].influence, nodes[next].influence);
        const pulse = (Math.sin(animationTime * 0.001 + nodes[index].phase + nodes[next].phase) + 1) / 2;
        context.strokeStyle = `rgba(${accent.red}, ${accent.green}, ${accent.blue}, ${0.035 + pulse * 0.05 + influence * 0.16})`;
        context.beginPath();
        context.moveTo(nodes[index].x, nodes[index].y);
        context.lineTo(nodes[next].x, nodes[next].y);
        context.stroke();
      }

      // A few moving points make the network read as an active system rather than a static texture.
      const signalCount = Math.min(10, Math.floor(nodes.length / 12));
      context.save();
      context.shadowColor = `rgba(${cyan.red}, ${cyan.green}, ${cyan.blue}, 0.8)`;
      context.shadowBlur = 9;
      for (let index = 0; index < signalCount; index += 1) {
        const startIndex = (index * 17) % Math.max(1, nodes.length - state.columns);
        const endIndex = startIndex + state.columns;
        const start = nodes[startIndex];
        const end = nodes[endIndex];
        if (!start || !end) continue;

        const progress = ((animationTime * (0.00004 + (index % 3) * 0.000012)) + index * 0.17) % 1;
        const x = start.x + (end.x - start.x) * progress;
        const y = start.y + (end.y - start.y) * progress;
        context.fillStyle = `rgba(${cyan.red}, ${cyan.green}, ${cyan.blue}, 0.9)`;
        context.beginPath();
        context.arc(x, y, 1.7, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();

      nodes.forEach((node) => {
        const pulse = (Math.sin(animationTime * 0.0012 + node.phase) + 1) / 2;
        context.fillStyle = `rgba(${cyan.red}, ${cyan.green}, ${cyan.blue}, ${0.16 + pulse * 0.12 + node.influence * 0.38})`;
        context.beginPath();
        context.arc(node.x, node.y, node.radius + pulse * 0.4 + node.influence * 1.3, 0, Math.PI * 2);
        context.fill();
      });
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      state.width = window.innerWidth;
      state.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
      canvas.width = state.width * ratio;
      canvas.height = state.height * ratio;
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      state.currentX = state.targetX = state.width / 2;
      state.currentY = state.targetY = state.height / 2;
      createNodes();
      draw(performance.now());
    };

    const animate = (time) => {
      if (time - state.lastDraw < 32) {
        state.frame = requestAnimationFrame(animate);
        return;
      }

      state.currentX += (state.targetX - state.currentX) * 0.1;
      state.currentY += (state.targetY - state.currentY) * 0.1;
      state.lastDraw = time;
      draw(time);
      state.frame = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      state.targetX = event.clientX;
      state.targetY = event.clientY + window.scrollY;
      if (reducedMotion) draw(performance.now());
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    if (!reducedMotion) state.frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      if (state.frame !== undefined) cancelAnimationFrame(state.frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-background" aria-hidden="true" />;
}
