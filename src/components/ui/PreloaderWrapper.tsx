"use client";

import { useState, useCallback } from "react";
import Preloader from "./Preloader";

export default function PreloaderWrapper() {
  const [show, setShow] = useState(true);
  const handleDone = useCallback(() => setShow(false), []);
  if (!show) return null;
  return <Preloader onDone={handleDone} />;
}
