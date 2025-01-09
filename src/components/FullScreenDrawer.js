import { useState } from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material"; // For the menu and expand icons
import useDarkMode from "@/hooks/useDarkMode";

const FullScreenDrawer = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  // Toggle Drawer open/close
  const toggleDrawer = () => {
    setOpen(!open);
    console.log(isDarkMode);
  };

  const list = [
    { name: "Developers", link: "#" },
    { name: "Designers", link: "#" },
    { name: "Marketing Experts", link: "#" },
    { name: "SEO Experts", link: "#" },
    { name: "Product Managers", link: "#" },
  ];

  return (
    <div className="block lg:hidden ml-auto">
      {/* Button to open Drawer, visible only on mobile */}
      <Button
        onClick={toggleDrawer}
        className="text-black dark:text-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-10"
        sx={{ fontSize: "1rem" }}
      >
        <MenuIcon className="text-3xl" />
      </Button>

      {/* The Drawer component */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        className=""
        sx={{
          width: "60%",
          flexShrink: 0,
          backgroundColor: isDarkMode ? "#333" : "#fff",
          "& .MuiDrawer-paper": {
            width: "60%",
            height: "100%",
            backgroundColor: isDarkMode ? "#333" : "#fff",
            padding: "20px",
          },
        }}
      >
        {/* Drawer Content */}
        <List className="text-black dark:text-white space-y-1">
          {/* Hire Talent Accordion */}
          <Accordion
            className="text-black dark:text-white border-b-[1px]"
            sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          >
            {/* Accordion Summary */}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="dark:text-white" />}
              aria-controls="hire-talent-content"
              id="hire-talent-header"
            >
              <ListItemText primary="Hire Talent" />
            </AccordionSummary>

            {/* Accordion Details */}
            <AccordionDetails className="bg-white dark:bg-black text-gray-700 dark:text-white p-0">
              <div className="space-y-2">
                {list.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="block text-sm px-4 py-2 ml-1 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-opacity-10"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-row text-xs w-full text-gray-400 px-4 py-1 border-t-[1px] border-opacity-40">
                  <p>Want to hire an entire team?</p>
                </div>
                <a
                  href="#"
                  className="block px-4 py-2 ml-1 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-opacity-10"
                >
                  Hire a Team
                </a>
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Other Nav Items */}
          <a
            href="#"
            className="block border-b-[1px] text-sm px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-opacity-10"
          >
            Consulting & Services
          </a>
          <a
            href="#"
            className="block border-b-[1px] text-sm px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-opacity-10"
          >
            Clients
          </a>
          <a
            href="#"
            className="block border-b-[1px] text-sm px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-opacity-10"
          >
            Blog
          </a>
          <a
            href="#"
            className="block border-b-[1px] text-sm px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-opacity-10"
          >
            About Us
          </a>
        </List>
        <button className="mx-auto mt-5 px-2 py-2 min-w-[80%] text-sm font-medium text-white bg-violet-600 hover:bg-violet-800 transition-colors ease-in rounded-[0.25rem]">
          Hire Top Talent
        </button>
      </Drawer>
    </div>
  );
};

export default FullScreenDrawer;
