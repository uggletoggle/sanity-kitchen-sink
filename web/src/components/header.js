import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true }) => {
  let headerClass = "fixed w-full z-30 top-0 text-white";
  headerClass += scrolled ? " bg-white shadow" : "";

  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";
  navActionClass += !textWhite || !scrolled ? " bg-white text-gray-800" : "";
  navActionClass += textWhite || scrolled ? " gradient text-white" : "";

  let navContentClass =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
  navContentClass += !textWhite || !scrolled ? " lg:bg-transparent bg-gray-100" : "";
  navContentClass += textWhite || scrolled ? " bg-white" : "";

  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";
  titleClass += !textWhite || scrolled ? " text-gray-800" : "";
  titleClass += textWhite || !scrolled ? " text-white" : "";

  return (
    <nav id="header" className={headerClass}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link id="siteTitle" className={titleClass} to="/">
      
            
            <svg id="Capa_1"
             viewBox="0 0 2250 2250" 
             xmlns="http://www.w3.org/2000/svg">
               <g id="XMLID_236_">
                 <path id="XMLID_275_" 
                 d="m472.922 395.981c-7.176 4.484-11.917 7.447-23.179 7.447-2.96 0-5.462-.209-7.684-.593 2.781-6.93 4.257-14.377 4.257-21.973 0-28.845-20.812-52.904-48.205-57.993l-70.812-190.171-.015-2.332c-.113-18.268-7.93-34.757-20.33-46.417v-30.444c0-24.247-19.726-43.973-43.973-43.973-24.246 0-43.972 19.726-43.972 43.973v30.37c-12.518 11.742-20.361 28.413-20.361 46.89v1.979l-70.795 190.127c-27.392 5.088-48.205 29.148-48.205 57.993 0 7.595 1.476 15.043 4.257 21.973-2.221.383-4.721.592-7.68.592-11.261 0-16-2.963-23.175-7.447-8.559-5.35-19.211-12.007-39.075-12.007h-13.975v30h13.976c11.261 0 16 2.963 23.175 7.447 8.559 5.349 19.211 12.007 39.075 12.007 19.865 0 30.517-6.657 39.076-12.007 7.175-4.484 11.915-7.447 23.176-7.447s16.001 2.963 23.176 7.447c8.56 5.35 19.211 12.007 39.076 12.007 19.864 0 30.517-6.658 39.075-12.007 7.175-4.484 11.914-7.447 23.175-7.447s16.001 2.963 23.176 7.447c8.56 5.35 19.211 12.007 39.076 12.007s30.518-6.657 39.077-12.007c7.175-4.484 11.915-7.447 23.177-7.447 11.263 0 16.004 2.963 23.18 7.447 8.56 5.35 19.212 12.007 39.078 12.007 19.865 0 30.518-6.657 39.077-12.007 7.176-4.484 11.917-7.447 23.18-7.447v-30c-19.867 0-30.52 6.657-39.079 12.006zm-209.955-299.535c15.289 0 28.323 10.112 32.726 24h-65.457c4.391-13.896 17.402-24 32.731-24zm-14.986 54v171.417h-87.741l63.83-171.417zm30 0h23.913l63.83 171.417h-87.743zm-28.971-96.941c0-7.704 6.268-13.973 13.972-13.973s13.973 6.269 13.973 13.973v14.5c-4.508-1.009-9.185-1.558-13.987-1.558-4.793 0-9.46.544-13.957 1.543v-14.485zm99.398 342.476c-7.175 4.484-11.915 7.447-23.177 7.447-11.261 0-16.001-2.963-23.176-7.447-8.56-5.35-19.211-12.007-39.076-12.007-19.864 0-30.517 6.657-39.075 12.007-7.175 4.484-11.914 7.447-23.175 7.447s-16.001-2.963-23.176-7.447c-8.56-5.35-19.211-12.007-39.076-12.007-12.018 0-20.651 2.441-27.502 5.551-.87-2.781-1.328-5.699-1.328-8.662 0-15.99 13.01-29 29-29h248.667c15.99 0 29 13.01 29 29 0 2.964-.458 5.881-1.327 8.662-6.851-3.109-15.484-5.551-27.503-5.551-19.864.001-30.516 6.658-39.076 12.007z"/><path id="XMLID_280_" d="m325.231 472.468c-11.261 0-16.001-2.963-23.176-7.447-8.56-5.35-19.211-12.007-39.076-12.007-19.864 0-30.517 6.657-39.075 12.007-7.175 4.484-11.914 7.447-23.175 7.447s-16.001-2.963-23.176-7.447c-8.56-5.35-19.211-12.007-39.076-12.007v30c11.261 0 16.001 2.963 23.176 7.447 8.56 5.35 19.211 12.007 39.076 12.007 19.864 0 30.517-6.657 39.075-12.007 7.175-4.484 11.914-7.447 23.175-7.447s16.001 2.963 23.176 7.447c8.56 5.35 19.211 12.007 39.076 12.007s30.518-6.657 39.077-12.007c7.175-4.484 11.915-7.447 23.177-7.447v-30c-19.865 0-30.518 6.657-39.077 12.007-7.175 4.484-11.915 7.447-23.177 7.447z"/>
                </g>
            </svg>{" "}
            Boya Desarrollos
          </Link>
        </div>

        {showNav && navMenuItems && (
          <div className={navContentClass} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {navMenuItems.map((i) => (
                <li className="mr-3">
                  <CTALink {...i} buttonActionClass={navActionClass} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Header;
