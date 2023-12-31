import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion";


function Card({ data,reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:200,bounceDamping:30}} dragElastic={0.2} className="relative flex-shrink-0 w-52 h-60 rounded-[28PX] bg-zinc-900/90 text-white p-5 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex items-center justify-between px-3 py-3 m-2">
          <h5 className="text-sm">{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <MdOutlineFileDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
