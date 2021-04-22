import React from "react";
import Button from '@material-ui/core/Button';
import "./button.css";


export interface ButtonProps  {
  /**
   * What background color to use
   */
  color?: 'default' | 'inherit' | 'primary'| 'secondary';
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

/**
 * Primary UI component for user interaction
 */
const DefaultButton = ({
  color = 'primary',
  size = 'medium',
  onClick,
  label,
}: ButtonProps) => {
  return (
    <Button onClick={onClick} size={size} color={color} variant="contained">
      {label}
    </Button>
  );
};


export default DefaultButton;