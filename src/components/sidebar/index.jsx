import { motion } from "framer-motion";

import { Link, NavLink } from "react-router-dom";

import { Article, Gauge, HandCoins, ShoppingBag, ShoppingCart, User } from "@phosphor-icons/react";

import Icon from "../icon";
import { logo_text } from "../../assets/icons";

export const ListMenu = [
  { title: "Dashboard", links: [{ name: "IFL Malang", icon: <Gauge size={24} />, path: "/dashboards" }] },
  {
    title: "Bismar",
    links: [
      { name: "Product", icon: <ShoppingBag size={24} />, path: "/dashboard/product" },
      { name: "Order List", icon: <ShoppingCart size={24} />, path: "/dashboard/order-list" },
      { name: "Donation", icon: <HandCoins size={24} />, path: "/dashboard/donation" },
    ],
  },
  { title: "Copy Writer", links: [{ name: "Blog", icon: <Article size={24} />, path: "/dashboard/blog" }] },
  { title: "Admin", links: [{ name: "User", icon: <User size={24} />, path: "/dashboard/user" }] },
];

const Sidebar = ({ openNav, animation }) => {
  return (
    <motion.div
      variants={animation}
      animate={openNav ? "open" : "closed"}
      className="fixed w-64 h-screen py-8 space-y-4 overflow-auto bg-primary-1 z-1000 sidebar"
    >
      <Link aria-label="navigate-dashboard" to="/dashboards" className="flex items-center justify-center mx-2">
        <Icon src={logo_text} description="IFL Malang" size="logo" />
      </Link>
      <ul className="divide-y-2">
        {ListMenu.map((item) => (
          <li className="px-4" key={item.title}>
            <p className="my-4 uppercase text-light-1/50">{item.title}</p>
            <menu className="mb-4 space-y-2">
              {item.links.map((link) => {
                return (
                  <NavLink
                    to={link.path}
                    key={link.name}
                    aria-label={`navigate-${link.name}`}
                    className={({ isActive }) => (isActive ? "sidebar-link bg-primary-2" : "sidebar-link bg-primary-1")}
                  >
                    {link.icon}
                    <span className="capitalize whitespace-nowrap">{link.name}</span>
                  </NavLink>
                );
              })}
            </menu>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
