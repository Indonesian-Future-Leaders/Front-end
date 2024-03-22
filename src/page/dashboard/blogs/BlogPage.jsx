import * as React from "react";

import { Link } from "react-router-dom";

import { Funnel, Trash } from "@phosphor-icons/react";

import Dashboard from "../../../layouts/dashboard";

import { Button } from "../../../components/button";
import Image from "../../../components/image";
import EventsDropdown from "../../../components/dropdown";

import { formatDate } from "../../../utils/formatDate";
import { dataBlog } from "../../../static/temp";

const CardBlog = ({ data }) => {
  return (
    <menu className="flex flex-wrap gap-4 mt-4">
      {data.map((item, index) => (
        <article key={index} className="card max-w-300">
          <Image src={item.picture} className="w-full rounded-lg cursor-pointer h-72" description={item.title} />

          <div className="flex items-center justify-between">
            <div className="space-y-1 cursor-pointer">
              <p className="text-sm font-semibold ">{item.category}</p>
              <h1 className="text-lg font-semibold text-primary-1">{item.title}</h1>
              <p className="text-sm line-clamp-2">{item.description}</p>
            </div>
          </div>
          <div className="relative flex justify-center mt-4">
            <Button ariaLabel="navigate-edit-blog" className="!text-sm" intent="secondary">
              Edit Blog
            </Button>
            <button className="absolute p-2 duration-300 bg-gray-200 border rounded-md right-4 hover:bg-red-100">
              <Trash size={20} className="text-red-500" />
            </button>
          </div>
        </article>
      ))}
    </menu>
  );
};

const BlogPage = () => {
  const [isPopoverOpen, setPopoverOpen] = React.useState(false);
  const [filteredBlog, setFilteredBlog] = React.useState("All");

  const filteredBlogs = dataBlog.filter((item) => {
    return item.category === filteredBlog;
  });

  const blog = ["All", "Education", "Social", "Environment", "Health"];

  const detail = <p className="text-xs text-gray-500">Last updated at: {formatDate(new Date())}</p>;

  return (
    <Dashboard title="Blog Management" detail={detail}>
      <div className="flex justify-between mt-4">
        <div className="flex items-center h-full gap-4 border border-gray-300 divide-x divide-gray-300 rounded-lg">
          <span className="hidden py-2 pl-4 sm:block">
            <Funnel size={20} />
          </span>
          <span className="hidden py-2 pl-4 font-bold sm:block">Filter By</span>
          <EventsDropdown
            isPopoverOpen={isPopoverOpen}
            setFiltered={setFilteredBlog}
            setPopoverOpen={setPopoverOpen}
            filtered={filteredBlog}
            typeList={blog}
            title="Blog Type"
          />
        </div>
        <Link to="/dashboard/blog/add" aria-label="navigate-add-blog">
          <Button ariaLabel="navigate-add-blog" intent="secondary">
            Add New Blog
          </Button>
        </Link>
      </div>
      <CardBlog data={filteredBlog === "All" ? dataBlog : filteredBlogs} />
    </Dashboard>
  );
};

export default BlogPage;
