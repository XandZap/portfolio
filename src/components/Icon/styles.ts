"use client";

import styled from "styled-components";
import { PiGearBold } from "react-icons/pi";

export const RotationGear = styled(PiGearBold)`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 7s linear infinite;
`;

export const BouncingIcon = styled.span`
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  animation: bounce 2s infinite;
`;

