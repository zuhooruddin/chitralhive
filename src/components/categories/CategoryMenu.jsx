/* eslint-disable react-hooks/exhaustive-deps */
import { Box, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import CategoryMenuCard from "./CategoryMenuCard";

// Premium Wrapper with better z-index and positioning
const Wrapper = styled(Box)(({ open, theme: { direction } }) => ({
  cursor: "pointer",
  position: "relative",
  zIndex: 1600, // High z-index to ensure it's above Sticky (1500) and Header (1000)
  "& .dropdown-icon": {
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform: `rotate(${
      open ? (direction === "rtl" ? "-90deg" : "90deg") : "0deg"
    })`,
  },
}));

// ===========================================================

// ===========================================================
const CategoryMenu = ({ open: isOpen = false, children, navCategories }) => {
  const [open, setOpen] = useState(isOpen);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef(null);
  const popoverRef = useRef(open);
  popoverRef.current = open;

  const toggleMenu = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // Always allow toggling, regardless of isOpen prop
    const newOpenState = !open;
    setOpen(newOpenState);
    
    // Debug log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('CategoryMenu toggle:', { 
        currentState: open, 
        newState: newOpenState,
        isOpenProp: isOpen 
      });
    }
  };

  const handleDocumentClick = (e) => {
    // Don't close if clicking inside the menu
    if (popoverRef.current && !isOpen) {
      const target = e.target;
      const menuElement = document.querySelector('.category-menu-card-wrapper');
      if (menuElement && !menuElement.contains(target)) {
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    if (open) {
      // Add click listener when menu is open
      document.addEventListener("click", handleDocumentClick);
      // Also close on scroll to prevent menu staying open
      const handleScroll = () => {
        if (popoverRef.current && !isOpen) {
          setOpen(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        document.removeEventListener("click", handleDocumentClick);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [open, isOpen]);

  // Update state when isOpen prop changes
  useEffect(() => {
    if (isOpen !== undefined) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  // Calculate menu position when opening
  useEffect(() => {
    if (open && triggerRef.current) {
      const updatePosition = () => {
        const rect = triggerRef.current.getBoundingClientRect();
        setMenuPosition({
          top: rect.bottom + window.scrollY + 8,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      };
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition, true);
      };
    }
  }, [open]);

  const menuCard = open && typeof window !== 'undefined' ? (
    createPortal(
      <CategoryMenuCard 
        open={open} 
        navCategories={navCategories}
        className="category-menu-card-wrapper"
        style={{
          position: 'fixed',
          top: `${menuPosition.top}px`,
          left: `${menuPosition.left}px`,
          width: `${Math.max(menuPosition.width, 300)}px`,
        }}
      />,
      document.body
    )
  ) : null;

  return (
    <Wrapper open={open} ref={triggerRef}>
      {React.cloneElement(children, {
        open,
        onClick: toggleMenu,
        className: `${children.props.className || ''} category-menu-trigger`,
      })}

      {menuCard}
    </Wrapper>
  );
};

export default CategoryMenu;
