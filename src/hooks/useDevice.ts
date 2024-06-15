import { useState, useEffect } from "react";

type Device = {
  isMobile: boolean;
  isTablet: boolean;
  isPc: boolean;
};

export const useDevice = (): Device => {
  const [device, setDevice] = useState<Device>({
    isMobile: false,
    isTablet: false,
    isPc: false,
  });

  const updateDevice = () => setDevice(validateDevice());

  useEffect(() => {
    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return device;
};

const validateDevice = () => {
  const width = window.innerWidth;

  if (width <= 640) {
    return {
      isMobile: true,
      isTablet: false,
      isPc: false,
    };
  }

  if (width > 640 && width < 1024) {
    return {
      isMobile: false,
      isTablet: true,
      isPc: false,
    };
  }

  return {
    isMobile: false,
    isTablet: false,
    isPc: true,
  };
};
