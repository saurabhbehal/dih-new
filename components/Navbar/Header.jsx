"use client";
import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { SocialIcon } from "react-social-icons";
import Modal from "react-modal";
import Image from "next/image";
import mobileHeader from "./MobileHeader";
import Assistance from "../assistance/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faPencil,
  faNewspaper,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
//import ThemeSwitcher from '@/app/ThemeSwitcher'
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import "./Omsai.css";
import Link from "next/link";
import MegaMenuDesignIdeasContent from "./MegaMenuDesignIdeasContent";
import ColorSwitch from "../../components/ColorSwitch/page";
import ColorSwitchD from "../../components/ColorSwitchD/page";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isCloseIconVisible, setIsCloseIconVisible] = useState(false);

  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    const hideTextTimeout = setTimeout(() => {
      setIsShowing(false);
    }, 5000);

    const showTextTimeout = setTimeout(() => {
      setIsShowing(true);
    }, 10000);

    // Clean up timeouts to avoid memory leaks
    return () => {
      clearTimeout(hideTextTimeout);
      clearTimeout(showTextTimeout);
    };
  }, [isShowing]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setIsRotated(!isRotated);
    setIsCloseIconVisible(!isCloseIconVisible);
  };
  const megaMenuRef = useRef(null);
  const closeMegaMenu = () => {
    setMegaMenuVisible(false);
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseOverImage = (item) => {
    console.log("mouse hovered");
    setHoveredItem(item);
  };

  const handleMouseLeaveImage = () => {
    setHoveredItem(null);
  };

  const getImageForItem = (item) => {
    const imageMapping = {
      //interior
      " 1bhk":
        "/images/interiors/bebeautiful-designs-for-1bhk-flats-interiors-residences-in-delhi-gurgaon-noida-india (1).jpeg",
      "2bhk":
        "/images/interiors/2bhk-2-bedroom-interior-designing-cost-price-makeover-redesigning-services-in-delhi-gurgaon-noida-india (1).jpg",
      "3bhk":
        "/images/interiors/3-bhk-best-interior-design-ideas-in-delhi-gurgaon-noida-india (1).jpg",
      "4bhk":
        "/images/interiors/amazing-4bhk-designs-4-bedrooms-for-interiors-designing-ideas-in-delhi-gurgaon-noida-india (7).jpg",
      farmhouse:
        "/images/interiors/beautiful-farmhouses-designs-interiors-in-delhi-gurgaon-noida-faridabad-india (1).jpeg",
      pent: "/images/interiors/beautiful-elegant-pent-house-designs-ideas-concepts-apartments-flats-interior-design-ideas-in-delhi-gurgaon-noida-india (1).jpeg",
      office:
        "/images/interiors/best-residential-office-designs-in-budget-interiors-in-delhi-gurgaon-noida-india (1).jpg",
      studio:
        "/images/interiors/beautiful-interior-designs-renovations-for-studio-apartments-in-delhi-gurgaon-noida-india (1).jpeg",
      bunglow:
        "/images/interiors/amazing-bunglow-designing-ideas-concepts-architectural-services-in-delhi-gurgaon-noida-india (1).jpeg",
      duplex:
        "/images/interiors/amazing-beautiful-designs-interiors-gallery-collection-pictures-for-duplex-flats-residences-apartments-in-delhi-gurgaon-noida-india (1).jpg",
      cottage:
        "/images/interiors/cottage-interiors-top-interior-architectural-brand-in-delhi-gurgaon-noida-india (4).jpg",
      villa:
        "/images/interiors/best - interior - design - ideas - for  - villa - in - delhi - gurgaon - noida - faridabad.jpg",

      //end to end interior
      bathroom:
        "/images/end-to-end-interior/bathroom-designs-in-delhi-gurgaon-noida-india (5).jpg",
      verticalGarden:
        "/images/end-to-end-interior/beautiful-verticle-gardens-designs-collection-dealers-in-delhi-gurgaon-noida-india (1).jpg",
      wallPanneling:
        "/images/end-to-end-interior/beautiful-wall-panelling-designs-gallery-in-delhi-gurgaon-noida-india (5).jpg",
      woodenFlooring:
        "/images/end-to-end-interior/best-designs-of-wooden-floorings-in-delhi-gurgaon-noida-india (1).jpg",
      door: "/images/end-to-end-interior/best-doors-manufacturers-dealers-suppliers-in-delhi-gurgaon-noida-india (8).jpg",
      foyer:
        "/images/end-to-end-interior/best-foyer-area-renovation-decoration-in-delhi-gurgaon-noida-india (6).jpg",
      plumbing:
        "/images/end-to-end-interior/best-plumbing-works-contractors-in-delhi-gurgaon-noida-india (7).jpg",
      woodenCeiling:
        "/images/end-to-end-interior/best-wooden-false-ceiling-designs-in-2024-delhi-gurgaon-noida-india (1).jpeg",
      woodenPolishing:
        "/images/end-to-end-interior/best-wooden-polishing-works-services-in-delhi-gurgaon-noida-india (1).jpg",
      bedDesigning:
        "/images/end-to-end-interior/collection-of-beds-designs-delhi-gurgaon-noida-india (1).jpeg",
      commercialServices:
        "/images/end-to-end-interior/commercial-architects-designs-delhi-gurgaon-noida-india (1).jpg",
      kitchenLighting:
        "/images/end-to-end-interior/contemporary-kitchen-living-space-herts-sue-murphy-interiors-img~4711f67a055b320a_14-4529-1-5e01505.jpg",
      glassPartion:
        "/images/end-to-end-interior/designer-glass-partitions-dealers-in-delhi-gurgaon-noida-india (6).jpg",
      exteriorCladding:
        "/images/end-to-end-interior/exterior-cladding-designs-in-delhi-gurgaon-noida-india (6).jpg",
      painting:
        "/images/end-to-end-interior/exterior-interior-painting-services-in-delhi-gurgaon-noida-india (3).jpg",
      floorTilling:
        "/images/end-to-end-interior/floor-tiles-dealers-installers-in-delhi-gurgaon-noida-india (3).jpg",
      endtoend:
        "/images/end-to-end-interior/largest-luxury-interior-designs-ideas-gallery-pictures-in-delhi-gurgaon-noida-india.webp",
      upvc: "/images/end-to-end-interior/largest-UPVC-doors-windows-dealers-manufacturers-delhi-gurgaon-noida-india (1).jpg",
      sofa: "/images/end-to-end-interior/lowest-price-sofa-designs-in-delhi-gurgaon-noida-india (6).jpg",
      tvunits:
        "/images/end-to-end-interior/tv-units-dealers-and-manufacturers-in-delhi-gurgaon-noida-india (1).jpg",
      electricalServices:
        "/images/end-to-end-interior/best-redoing-electric-works-company-in-delhi-gurgaon-noida-india (3).jpg",
      shoesRack:
        "/images/end-to-end-interior/top-shoeracks-dealers-manufacturers-in-delhi-gurgaon-noida-india (4).jpg",
      vanities:
        "/images/end-to-end-interior/bathroom-vanities-dealers-and-manufacturers-in-delhi-gurgaon-noida-india (5).jpg",
      //renovation
      structural:
        "/images/renovation/complete-building-structures-end-to-end-builders-developers-in-delhi-gurgaon-noida-india (6).jpg",
      bathroom:
        "/images/renovation/bathroom-redesigning-services-in-delhi-gurgaon-noida-india (4).jpeg",
      livingroom:
        "/images/renovation/beautiful-small-living-room-decor-designing-interiors-designs-in-delhi-gurgaon-noida-faridabad-india (2).jpg",
      gym: "/images/renovation/gym-and-spa-redesigning-services-in-renovations-in-delhi-gurgaon-noida-india (2).jpg",
      interiorRenovation:
        "/images/renovation/gym-and-spa-redesigning-services-in-renovations-in-delhi-gurgaon-noida-india (2).jpg",
      terrace:
        "/images/renovation/gym-and-spa-redesigning-services-in-renovations-in-delhi-gurgaon-noida-india (2).jpg",
      bedroom:
        "/images/renovation/top-bedroom-design-ideas-concepts-interior-designers-architects-delhi-gurgaon-noida-india (1).jpg",
      mandir:
        "/images/renovation/top-mandir-manufacturers-in-delhi-gurgaon-noida-india (7).jpg",
      farmhouseRenovation:
        "/images/renovation/end-to-end-farmhouse-renovations-services-turnkey-farmhouse-designing-building-in-delhi-gurgaon-noida-india (7).jpg",
      wardrobeRenovation:
        "/images/renovation/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (6).jpg",
      villRenovation:
        "/images/renovation/beautiful-villa-designs-in-delhi-gurgaon-noida-india (1).jpg",
      banquet:
        "/images/renovation/banquet-designers-developers-architects-builders-in-delhi-gurgaon-noida-india (2).jpeg",
      hotel:
        "/images/renovation/best-hotel-interior-designs-renovations-redesigning-hotels-architects-interior-designers-delhi-gurgaon-noida-india (1).jpg",
      modularKitchen:
        "/images/renovation/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (4).jpg",
      loungRenovation: "/images/renovation/loung renovation.jpg",

      //Architectural large
      luxury:
        "/images/consultancy/larg_image/affordable-luxury-residences-flats-apartments-interior-designs-in-delhi-gurgaon-noida-india (9).jpg",
      consultant:
        "/images/consultancy/larg_image/Architect - consultant - in - delhi - gurgaon - noida.jpg",
      design:
        "/images/consultancy/larg_image/beautiful - design - project -planing - in - delhi - gurgaon - noida.jpg",
      renovation:
        "/images/consultancy/larg_image/structural-designing-buildings-developers-architects-services-renovations-in-delhi-gurgaon-noida-india (1).jpg",
      project:
        "/images/consultancy/larg_image/villa-renovation-services-in-delhi-gurgaon-india-noida (3).jpg",

      //Architectural small
      luxurysm:
        "/images/consultancy/short_image/affordable-luxury-residences-flats-apartments-interior-designs-in-delhi-gurgaon-noida-india (5).jpg",
      consultantsm:
        "/images/consultancy/Consultancy - in delhi - gurgaon - noida - faridabad.jpg",
      designsm:
        "/images/consultancy/short_image/Beautiful - Design- project - in - delhi - gurgaon- noida.jpg",
      renovationsm:
        "/images/consultancy/short_image/villa-renovation-services-in-delhi-gurgaon-india-noida (1).jpg",
      projectsm:
        "/images/consultany/short_image/complete-turnkey-structures-builders-developers-end-to-end-building-works-in-delhi-gurgaon-noida-india (6).jpg",

      //Modular Kitchen large
      type: "/images/modular_kitchen/larg/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (2).jpg",
      modular:
        "/images/modular_kitchen/larg/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (4).jpg",
      luxury_modular:
        "/images/modular_kitchen/larg/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (4).jpg",
      kitchen_renovation:
        "/images/modular_kitchen/larg/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (7).jpg",
      renovationss:
        "/images/modular_kitchen/larg/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (6).jpg",

      //wardrobe-design-gallery-india

      types_wardrobe:
        "/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (3).jpg",
      luxury_wardrobe:
        "/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (4).jpg",
      wardrobe_design:
        "/images/wardrobe/larg/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (7).jpg",
      glass_wardrobe:
        "/images/wardrobe/larg/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (2).jpg",
      wardrobe_renovation:
        "/images/wardrobe/larg/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (1).jpg",

      //Living

      tv_units:
        "/images/living/larg/best-design-for-tv-units-in-delhi-gurgaon-noida-faridabad.jpg",
      crockery_unit:
        "/images/living/larg/best-design-for-crockery-units-in-delhi-noida-gurgaon.jpg",
      bookshlaves:
        "/images/living/larg/Beautiful-design-bookshelves-in-noida-gurgaon-faridabad.jpg",
      glass_partition:
        "/images/living/larg/designer-glass-partitions-dealers-in-delhi-gurgaon-noida-india (5).jpg",
      dressing:
        "/images/living/larg/beautiful-dressing-unit-in-delhi-gurgaon-noida.jpg",
      home_office:
        "/images/living/larg/ideas-budget-interior-designs-for-residential-offices-in-delhi-gurgaon-noida-india (2).webp",
      shoes_rack:
        "/images/living/larg/best-design-shoe-racks-in-delhi-gurgaon-noida.jpg",
      living_renovation:
        "/images/living/larg/best-interior-designing-company-in-delhi-gurgaon-noida-india-Design-Indian-Homes (2).jpg",

      //Modular Interior
      mandir_interior:
        "/images/modular_interior/larg/designer-mandir-dealers-manufacturers-in-delhi-gurgaon-noida-india (3).jpg",
      chest_drawer:
        "/images/modular_interior/larg/beautiful-design-shoe-racks-in-delhi-gurgaon-noida.jpeg",
      bar_unit:
        "/images/modular_interior/larg/beautiful-design-bar-unit-in-delhi-gurgaon-noida.jpg",
      side_table:
        "/images/modular_interior/larg/side-table-design-in delhi-gurgaon-noida-faridabad.jpg",
      foldable_bed:
        "/images/modular_interior/larg/beautiful-foldable-bed-in-delhi-gurgaon-noida-faridabad.jpg",
      foyer_cabinet:
        "/images/modular_interior/larg/foyer-area-wooden-cabinets-dealers-manufacturers-delhi-gurgaon-noida-india (1).jpg",
      bathroom_vatities:
        "/images/modular_interior/larg/bathroom-designs-in-delhi-gurgaon-noida-india (1).jpeg",
    };
    return imageMapping[item] || "/images/top4.jpeg";
  };

  const MegaMenuInteriorsContent = () => (
    <div
      className="bg-white shadow-2xl rounded-lg flex justify-center absolute w-full p-4 pt-6 h-auto text-black"
      onMouseLeave={handleMouseLeave}
      style={{ marginTop: "110px" }}
    >
      <div className="flex gap-8">
        <div>
          <ul className="text-sm">
            <Link href="/home-interior-designs">
              <h3 className="text-lg font-bold text-black">
                Types of Interior Design Ideas
              </h3>
            </Link>
            <Link href="/1bhk-apartment-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("1bhk")}
                onMouseLeave={handleMouseLeaveImage}
              >
                1bhk residence interior designs
              </li>
            </Link>
            <Link href="/2bhk-apartment-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("2bhk")}
                onMouseLeave={handleMouseLeaveImage}
              >
                2bhk residence interior designs
              </li>{" "}
            </Link>
            <Link href="/3bhk-apartment-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("3bhk")}
                onMouseLeave={handleMouseLeaveImage}
              >
                3bhk residence interior designs{" "}
              </li>{" "}
            </Link>
            <Link href="/4bhk-apartment-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("4bhk")}
                onMouseLeave={handleMouseLeaveImage}
              >
                4bhk residence interior designs
              </li>{" "}
            </Link>
            <Link href="/villa-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("villa")}
                onMouseLeave={handleMouseLeaveImage}
              >
                Villa interior designs
              </li>{" "}
            </Link>
            <Link href="/farmhouse-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("farmhouse")}
                onMouseLeave={handleMouseLeaveImage}
              >
                farmhouse interior designs
              </li>{" "}
            </Link>
            <Link href="/penthouse-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("pent")}
                onMouseLeave={handleMouseLeaveImage}
              >
                Penthouse interior designs
              </li>{" "}
            </Link>
            <Link href="/studio-apartment-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("office")}
                onMouseLeave={handleMouseLeaveImage}
              >
                Studio apartment interior designs
              </li>{" "}
            </Link>
            <Link href="/bungalow-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("bunglow")}
                onMouseLeave={handleMouseLeaveImage}
              >
                Bungalow interior designs
              </li>{" "}
            </Link>
            <Link href="/duplex-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("duplex")}
                onMouseLeave={handleMouseLeaveImage}
              >
                Duplex Residence interior Designs
              </li>{" "}
            </Link>
            <Link href="/cottage-interior-designs">
              <li
                onMouseOver={() => handleMouseOverImage("cottage")}
                onMouseLeave={handleMouseLeaveImage}
              >
                Cottage Interior Designs
              </li>{" "}
            </Link>
          </ul>
          <button className="bg-red-600 text-white text-m py-3 px-6 rounded-full mt-6">
            <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
              Get Free Estimate
            </Link>
          </button>
        </div>

        <div className="">
          <ul className="text-xs">
            <h3 className="text-lg font-bold text-black">
              <Link href="/home-interior-services-india">
                End to End Interior
              </Link>
            </h3>
            <Link href="/home-interior-services-india/bed-designs-dealers-manufacturers-india">
              <li onMouseOver={() => handleMouseOverImage("bedDesigning")}>
                Bed Designs
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/ceiling-design-ideas-inspiration-india">
              <li onMouseOver={() => handleMouseOverImage("woodenCeiling")}>
                Ceiling Designs
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/commercial-interiors-services-delhi-ncr-india">
              <li
                onMouseOver={() => handleMouseOverImage("commercialServices")}
              >
                Commercial Services
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/wooden-ceiling-designs-ideas-inspiration">
              <li onMouseOver={() => handleMouseOverImage("woodenCeiling")}>
                Wooden Ceilings
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/wooden-flooring-designs">
              <li onMouseOver={() => handleMouseOverImage("woodenFlooring")}>
                Wooden Floorings
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/wooden-polishing-designs">
              <li onMouseOver={() => handleMouseOverImage("woodenPolishing")}>
                Wooden Polishing
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/door-design-dealers-manufacturers-india">
              <li onMouseOver={() => handleMouseOverImage("door")}>
                Door Designs
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/end-to-end-interior-services-delhi-ncr-india">
              <li onMouseOver={() => handleMouseOverImage("endtoend")}>
                End to End Services
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/exterior-cladding-design-ideas">
              <li onMouseOver={() => handleMouseOverImage("exteriorCladding")}>
                Exterior Cladding
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/glass-partition-designs">
              <li onMouseOver={() => handleMouseOverImage("glassPartion")}>
                Glass Partitions
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/home-painting-services-delhi-ncr">
              <li onMouseOver={() => handleMouseOverImage("painting")}>
                Painting Services
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/home-plumbing-services-india">
              <li onMouseOver={() => handleMouseOverImage("plumbing")}>
                Plumbing Services
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/home-electric-works-services">
              <li
                onMouseOver={() => handleMouseOverImage("electricalServices")}
              >
                Electrical Services
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/kitchen-lightening-inspiration-ideas-india">
              <li onMouseOver={() => handleMouseOverImage("kitchenLighting")}>
                Kitchen Lightening
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/sofa-designs-ideas">
              <li onMouseOver={() => handleMouseOverImage("sofa")}>
                Sofa Designs
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/tiling-design-ideas">
              <li onMouseOver={() => handleMouseOverImage("floorTilling")}>
                Tiling Designs
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/tv-unit-designs">
              <li onMouseOver={() => handleMouseOverImage("tvunits")}>
                TV Unit Designs
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/upvc-window-designs">
              <li onMouseOver={() => handleMouseOverImage("upvc")}>
                UPVC Windows
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/vertical-garden-designs">
              <li onMouseOver={() => handleMouseOverImage("verticalGarden")}>
                Vertical Gardens
              </li>{" "}
            </Link>
            <Link href="/home-interior-services-india/wall-panelling-designs">
              <li onMouseOver={() => handleMouseOverImage("villaRenovation")}>
                Wall Panelling Designs
              </li>{" "}
            </Link>
            <button className="bg-red-600 text-white text-m py-3 px-6 rounded-full mt-2">
              <Link href="/selected-homes-exclusive-interior-designs-india">
                Selected Home
              </Link>
            </button>
          </ul>
        </div>
        <div className="">
          <ul className="text-xs">
            <Link href="/modular-interiors">
              <h3 className="text-lg font-bold text-black">
                Modular Interiors
              </h3>
            </Link>
            <Link href="/modular-interiors/mandir">
              <li onMouseOver={() => handleMouseOverImage("mandir")}>Mandir</li>{" "}
            </Link>
            <Link href="/modular-interiors/bar-unit">
              <li onMouseOver={() => handleMouseOverImage("bar_unit")}>
                Bar Units
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/side-tables">
              <li onMouseOver={() => handleMouseOverImage("side_table")}>
                Side Tables
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/foldable-beds">
              <li onMouseOver={() => handleMouseOverImage("foldable_bed")}>
                Foldable Beds
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/bathroom-vanities">
              <li onMouseOver={() => handleMouseOverImage("bathroom_vatities")}>
                Bathroom Vanities
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/foyer-cabinets">
              <li onMouseOver={() => handleMouseOverImage("foyer_cabinet")}>
                Foyer Cabinets
              </li>{" "}
            </Link>
            <Link href="/modular-kitchen-top-brand-india">
              <li onMouseOver={() => handleMouseOverImage("modularKitchen")}>
                Modular Kitchen
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/wardrobe">
              <li
                onMouseOver={() => handleMouseOverImage("wardrobe_renovation")}
              >
                Wardrobes
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/dressers">
              <li onMouseOver={() => handleMouseOverImage("dressing")}>
                Dressers
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/tv-unit-designs">
              <li onMouseOver={() => handleMouseOverImage("tv_units")}>
                TV Unit
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/crockery-units">
              <li onMouseOver={() => handleMouseOverImage("crockery_unit")}>
                Crockery Units
              </li>{" "}
            </Link>
            <Link href=" /modular-interiors/chest-of-drawers">
              <li onMouseOver={() => handleMouseOverImage("chest_drawer")}>
                Chest Of Drawers
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/glass-partition">
              <li onMouseOver={() => handleMouseOverImage("glass_partition")}>
                Glass Partitions
              </li>{" "}
            </Link>

            <Link href="/modular-interiors/vanities">
              <li onMouseOver={() => handleMouseOverImage("vanities")}>
                Vanities
              </li>{" "}
            </Link>
            <Link href="/modular-interiors/shoes-rack">
              <li onMouseOver={() => handleMouseOverImage("shoesRack")}>
                Shoes Rack
              </li>{" "}
            </Link>
            <Link href="/homes-by-design-indian-homes">
              <li onMouseOver={() => handleMouseOverImage("hotel")}>
                Homes by DIH
              </li>{" "}
            </Link>
            <button className="bg-red-600 text-white text-m py-3 px-6 rounded-full mt-2">
              <Link href="/luxury-residence-designs-delhi-india">
                Luxury Interiors
              </Link>
            </button>
          </ul>
        </div>
        <div className="center">
          <Image
            src={
              hoveredItem ? getImageForItem(hoveredItem) : "/images/top4.jpeg"
            }
            alt=""
            className="shadow-sm rounded-xl border-2 object-cover "
            width={550}
            height={350}
            style={{ width: "550px", height: "350px", marginLeft: "120px" }}
            layout="fixed"
          />

          <div className="flex justify-center ml-40 mt-2">
            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
              <Link href="/homes-by-design-indian-homes">Homes By DIH</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const MegaMenuArchitectureContent = () => (
    <div
      className="bg-white shadow-2xl rounded-lg  flex absolute justify-center w-full p-4 pt-6 h-auto text-black"
      onMouseLeave={handleMouseLeave}
      style={{ marginTop: "110px" }}
    >
      <div className="flex ">
        <div className="w-1/3 ml-4 mt-4">
          <div className="text-left">
            <h1 className="text-3xl font-bold w-[400px]">
              Top Architectural Services
            </h1>
            <p className="text-black w-[400px]">
              Architecture Tips, Designs & Executions,
              <br /> Ideas and Advice from Experts
            </p>
            <div className="flex flex-col gap-2 pt-4 pr-4">
              {" "}
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/refer-and-get-rewards-interior-designers">
                  Refer for Rewards
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/homes-by-design-indian-homes">Homes By DIH</Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/selected-homes-exclusive-interior-designs-india">
                  Selected Homes
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                  Get Free Estimate
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/luxury-residence-designs-delhi-india">
                  Luxury Interiors
                </Link>
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="flex w-1/3">
          <div className="">
            <ul className="">
              {/* { Starting, this is the sub-category} */}
              <div className="flex gap-2">
                <Image
                  src="/images/consultancy/short_image/Consultancy - in delhi - gurgaon - noida - faridabad.jpeg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/architectural-consultancy">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("consultant")}
                    >
                      Consultancy
                    </h3>
                  </Link>
                  <p className="text-xs text-black">
                    Connect with the Top Architectural Brand
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3 ">
                <Image
                  src="/images/consultancy/short_image/Beautiful - Design- project - in - delhi - gurgaon- noida.jpeg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/architectural-brand-in-india">
                    {" "}
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("design")}
                    >
                      Designing & Planning
                    </h3>
                  </Link>
                  <p className="text-xs text-black">
                    Connect with the Best Architects in the Town
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/consultancy/short_image/complete-turnkey-structures-builders-developers-end-to-end-building-works-in-delhi-gurgaon-noida-india (6).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/top-architects-in-india">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("project")}
                    >
                      End to End Structural Projects
                    </h3>
                  </Link>

                  <p className="text-xs">
                    Connect with Most Experienced Architects & Interior
                    Consultants
                  </p>
                </div>
              </div>
              {/* 
              ---- */}
              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/consultancy/short_image/affordable-luxury-residences-flats-apartments-interior-designs-in-delhi-gurgaon-noida-india (5).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/commercial-architectural-delhi-india">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("luxury")}
                    >
                      Luxury Residences
                    </h3>
                  </Link>

                  <p className="text-xs">
                    Connect with the Largest Luxury Interior Brand
                  </p>
                </div>
              </div>
              {/* ---- */}
              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/consultancy/short_image/villa-renovation-services-in-delhi-gurgaon-india-noida (1).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/home-renovation-services">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("renovation")}
                    >
                      Renovations
                    </h3>
                  </Link>
                  <p className="text-xs">
                    Connect with the Top Renovators across Delhi -NCR
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            src={
              hoveredItem ? getImageForItem(hoveredItem) : "/images/top4.jpeg"
            }
            alt=""
            className="shadow-sm ml-2 border-2 rounded-xl"
            width={750}
            height={450}
            style={{ width: "750px", height: "350px" }}
            layout="fixed"
          />

          <div className="flex justify-center">
            <p className="text-lg font-bold mt-2">
              Decorate Your Own Beautiful Home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  const MegaMenuModularKitchenContent = () => (
    <div
      className="bg-white shadow-2xl rounded-lg  flex absolute justify-center w-full p-4 pt-6 h-auto text-black"
      onMouseLeave={handleMouseLeave}
      style={{ marginTop: "110px" }}
    >
      <div className="flex">
        <div className="w-1/3 ml-4 mt-4">
          <div className="text-left">
            <h1 className="text-3xl font-bold w-[400px]">
              Modular Kitchen Largest Manufacturers
            </h1>
            <p className="text-black w-[400px]">
              Exclusive Modular Kitchen Designs, Tips, Ideas and Advice from Our
              Experts
            </p>
            <div className="flex flex-col gap-2 pt-4 pr-4">
              {" "}
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/refer-and-get-rewards-interior-designers">
                  Refer for Rewards
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/homes-by-design-indian-homes">Homes By DIH</Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/selected-homes-exclusive-interior-designs-india">
                  Selected Homes
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                  Get Free Estimate
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/luxury-residence-designs-delhi-india">
                  Luxury Interiors
                </Link>
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="flex w-1/3">
          <div className="">
            <ul className="">
              {/* { Starting, this is the sub-category} */}
              <div className="flex gap-2">
                <Image
                  src="/images/modular_kitchen/short/best-modular-kitchen-wardrobes-designs-small-kitchen-designs-wardrobe-designs-in-delhi-gurgaon-noida-india (5).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/types-of-modular-kitchens">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("type")}
                    >
                      Types of Modular Kitchen
                    </h3>
                  </Link>

                  <p className="text-xs text-black">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/modular_kitchen/short/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (1).png"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-kitchen-top-brand-india/modular-kitchen-designs">
                    {" "}
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("modular")}
                    >
                      Modular Kitchen Designs
                    </h3>
                  </Link>

                  <p className="text-xs text-black">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/modular_kitchen/short/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (7).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-kitchen-top-brand-india/luxury-modular-kitchens">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("luxury_modular")}
                    >
                      Luxury Modular Kitchen
                    </h3>
                  </Link>

                  <p className="text-xs text-black ">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 ">
                <Image
                  src="/images/modular_kitchen/short/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (5).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/modular-kitchen-top-brand-india/kitchen-renovations">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() =>
                        handleMouseOverImage("kitchen_renovation")
                      }
                    >
                      Kitchen Renovation
                    </h3>
                  </Link>

                  <p className="text-xs text-black">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/modular_kitchen/short/top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india (7).jpg"
                  alt="top-modular-kitchen-and-wardrobe-brand-in-delhi-gurgaon-noida-india"
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/shutter-finish">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("renovations")}
                    >
                      Shutter Finish
                    </h3>
                  </Link>
                  <p className="text-xs text-black">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            src={
              hoveredItem ? getImageForItem(hoveredItem) : "/images/top4.jpeg"
            }
            alt=""
            className="shadow-sm ml-2 border-2 rounded-xl"
            width={750}
            height={450}
            style={{ width: "750px", height: "350px" }}
            layout="fixed"
          />

          <div className="flex justify-center">
            <p className="text-lg font-bold mt-2">
              Decorate Your Own Beautiful Home
            </p>
          </div>
          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}
        </div>
      </div>
    </div>
  );
  const MegaMenuWardrobesContent = () => (
    <div
      className="bg-white shadow-2xl rounded-lg pt-6 flex absolute w-full p-4 h-auto text-black"
      onMouseLeave={handleMouseLeave}
      style={{ marginTop: "110px" }}
    >
      <div className="flex gap-4">
        <div className="w-1/3 ml-4 mt-4">
          <div className="text-left">
            <h1 className="text-3xl font-bold w-[400px]">
              Wardrobe Dealers & Manufacturers
            </h1>
            <p className="text-black w-[400px]">
              Wardrobes Designs, Manufacturing. Tips, Tricks, Ideas and advice
              from top experts
            </p>
            <div className="flex flex-col gap-2 pt-4 pr-4">
              {" "}
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/refer-and-get-rewards-interior-designers">
                  Refer for Rewards
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/homes-by-design-indian-homes">Homes By DIH</Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/selected-homes-exclusive-interior-designs-india">
                  Selected Homes
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                  Get Free Estimate
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/luxury-residence-designs-delhi-india">
                  Luxury Interiors
                </Link>
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="flex w-1/3">
          <div className="">
            <ul className="">
              {/* { Starting, this is the sub-category} */}
              <div className="flex gap-2 ">
                <Image
                  src="/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (1).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/types-of-wardrobe">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("types_wardrobe")}
                    >
                      Types of Wardrobes
                    </h3>
                  </Link>

                  <p className="text-xs">
                    Check out Our Multi-Types of Wardrobe Types
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/wardrobe/complete-modular-kitchens-wardrobe-renovation-services-in-delhi-gurgaon-noida-india (2).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/wardrobe-design-gallery-india/luxury-wardrobes-designs">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() =>
                        handleMouseOverImage("luxury_wardrobe")
                      }
                    >
                      Luxury Wardrobes
                    </h3>
                  </Link>
                  <p className="text-xs">
                    Connect with the Top Luxury Wardrobe Dealer
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/wardrobe/largest-collection-of-modular-kitchens-wardrobes-designs-in-delhi-gurgaon-noida-india (5).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/wardrobe-design-gallery-india/wardrobe-designs">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() =>
                        handleMouseOverImage("wardrobe_design")
                      }
                    >
                      Wardrobe Designs
                    </h3>
                  </Link>

                  <p className="text-xs">
                    Connect with the top end to end Wardrobe Manufacturing Brand
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/wardrobe/modular-kitchen-wardrobe-designs-dealers-manufacturers-in-delhi-gurgaon-noida-india (2) (1).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/wardrobe-design-gallery-india/lacquer-glass-wardrobe-designs">
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() => handleMouseOverImage("glass_wardrobe")}
                    >
                      Lacquer Glass Wardrobe Designs
                    </h3>
                  </Link>

                  <p className="text-xs">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/wardrobe-design-gallery-india/wardrobe-renovations-services">
                    {" "}
                    <h3
                      className="w-fit font-extrabold bg-black text-white center p-2 text-xs"
                      onMouseOver={() =>
                        handleMouseOverImage("wardrobe_renovation")
                      }
                    >
                      Wardrobe Renovation Services
                    </h3>
                  </Link>
                  <p className="text-xs">
                    Connect with the top Wardrobe Renovator Brand
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            src={
              hoveredItem ? getImageForItem(hoveredItem) : "/images/top4.jpeg"
            }
            alt=""
            className="shadow-sm ml-2 border-2 rounded-xl"
            width={750}
            height={450}
            style={{ width: "750px", height: "350px" }}
            layout="fixed"
          />
          <div className="flex justify-center">
            <p className="text-lg font-bold mt-2">
              Decorate Your Own Beautiful Home
            </p>
          </div>
          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}
        </div>
      </div>
    </div>
  );
  const MegaMenuLivingContent = () => (
    <div
      className="bg-white shadow-2xl rounded-lg  flex absolute w-full p-4 pt-6 h-auto text-black"
      onMouseLeave={handleMouseLeave}
      style={{ marginTop: "110px" }}
    >
      <div className="flex ">
        <div className="">
          <div className="">
            <h1 className="text-4xl font-bold">Living Décor Advice</h1>
            <p className="text-black">
              Living décor tips, tricks, ideas and advice from experts
            </p>
            <button className="bg-green-500 text-white text-sm py-2 px-3 rounded-full mt-6">
              explore Now
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <ul className="">
              {/* { Starting, this is the sub-category} */}
              <div className="flex gap-2">
                <Image
                  src="/images/living/beautiful-design-tv-unit-in-delhi-gurgaon-noida.jpg"
                  alt=""
                  width={100}
                  height={50}
                  style={{
                    width: "100px",
                    height: "50px",
                    borderRadius: "4px",
                  }}
                />
                <div>
                  <h3
                    className="text-sm text-white bg-black"
                    onMouseOver={() => handleMouseOverImage("tv_units")}
                  >
                    TV Units
                  </h3>
                  <p className="text-xs text-black">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <Image
                  src="/images/living/best-designing-services-crockery-unit-in-gurgaon-delhi-noida-faridabad.jpeg"
                  alt=""
                  width={100}
                  height={50}
                  style={{
                    width: "100px",
                    height: "50px",
                    borderRadius: "4px",
                  }}
                />
                <div>
                  <h3
                    className="text-sm text-white bg-black"
                    onMouseOver={() => handleMouseOverImage("crockery_unit")}
                  >
                    Crockery Units
                  </h3>
                  <p className="text-xs text-black">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <Image
                  src="/images/living/best-residential-office-designs-in-budget-interiors-in-delhi-gurgaon-noida-india (1).jpg"
                  alt=""
                  width={100}
                  height={50}
                  style={{
                    width: "100px",
                    height: "50px",
                    borderRadius: "4px",
                  }}
                />
                <div>
                  <h3
                    className="text-sm text-white bg-black absolute"
                    onMouseOver={() => handleMouseOverImage("home_office")}
                  >
                    Home Office
                  </h3>
                  <p className="text-xs mt-4">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <Image
                  src="/images/living/beautiful-design-shoe-racks-in-delhi-gurgaon-noida-faridabad.jpeg"
                  alt=""
                  width={100}
                  height={50}
                  style={{
                    width: "100px",
                    height: "50px",
                    borderRadius: "4px",
                  }}
                />
                <div>
                  <h3
                    className="text-sm text-white bg-black absolute"
                    onMouseOver={() => handleMouseOverImage("shoes_rack")}
                  >
                    Shoes Racks
                  </h3>
                  <p className="text-xs mt-4">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
            </ul>
          </div>

          <div className="ml-2">
            <div className="flex gap-2 ">
              <Image
                src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (2).jpg"
                alt=""
                width={100}
                height={50}
                style={{ width: "100px", height: "50px", borderRadius: "4px" }}
              />

              <div>
                <h3
                  className="text-sm text-white bg-black"
                  onMouseOver={() => handleMouseOverImage("glass_partition")}
                >
                  Glass Partition
                </h3>
                <p className="text-xs">
                  Connect with the top end to end interior Brand
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <Image
                src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg"
                alt=""
                width={100}
                height={50}
                style={{ width: "100px", height: "50px", borderRadius: "4px" }}
              />

              <div>
                <h3
                  className="text-sm text-white bg-black"
                  onMouseOver={() => handleMouseOverImage("dressing")}
                >
                  Dressings
                </h3>
                <p className="text-xs">
                  Connect with the top end to end interior Brand
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <Image
                src="/images/living/best-interior-designing-company-in-delhi-gurgaon-noida-india-Design-Indian-Homes (6).jpg"
                alt=""
                width={100}
                height={50}
                style={{ width: "100px", height: "50px", borderRadius: "4px" }}
              />
              <div>
                <h3
                  className="text-sm text-white bg-black"
                  onMouseOver={() => handleMouseOverImage("living_renovation")}
                >
                  Renovation Services
                </h3>
                <p className="text-xs">
                  Connect with the top end to end interior Brand
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={
              hoveredItem ? getImageForItem(hoveredItem) : "/images/top4.jpeg"
            }
            alt=""
            className="shadow-sm rounded-full border-2"
            width={550}
            height={250}
            style={{ width: "550px", height: "250px" }}
            layout="fixed"
          />
          {/* <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button> */}
        </div>
      </div>
    </div>
  );
  const MegaMenuModularInteriorContent = () => (
    <div
      className="bg-white shadow-2xl rounded-lg  flex absolute w-full p-4 pt-6 h-auto text-black"
      onMouseLeave={handleMouseLeave}
      style={{ marginTop: "110px" }}
    >
      <div className="flex ">
        <div className="w-1/3 ml-4 mt-4">
          <div className="">
            <h1 className="text-3xl font-bold" style={{ width: "350px" }}>
              End to End Interior Solutions
            </h1>
            <p className="text-black" style={{ width: "450px" }}>
              Modular Interior Execution, Designs, Manufacturing, Tips, Ideas
              and Advice from Industry&apos;s Top Experts
            </p>
            <div className="flex flex-col gap-2 pt-4 pr-4">
              {" "}
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/refer-and-get-rewards-interior-designers">
                  Refer for Rewards
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/homes-by-design-indian-homes">Homes By DIH</Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/selected-homes-exclusive-interior-designs-india">
                  Selected Homes
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                  Get Free Estimate
                </Link>
              </button>
              <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
                <Link href="/luxury-residence-designs-delhi-india">
                  Luxury Interiors
                </Link>
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="flex w-1/3 mr-2">
          <div className="">
            <ul className="">
              {/* { Starting, this is the sub-category} */}
              <div className="flex gap-2">
                <Image
                  src="/images/living/beautiful-design-tv-unit-in-delhi-gurgaon-noida.jpg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-interiors/mandir-designs">
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() =>
                        handleMouseOverImage("mandir_interior")
                      }
                    >
                      Mandir
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              {/* <div className="flex gap-2 mt-2">
                <Image
                  src="/images/living/best-designing-services-crockery-unit-in-gurgaon-delhi-noida-faridabad.jpeg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/chest-of-drawer-designs">
                    <h3
                      className="text-base font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() => handleMouseOverImage('chest_drawer')}
                    >
                      Chest of Drawers
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div> */}

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/living/best-residential-office-designs-in-budget-interiors-in-delhi-gurgaon-noida-india (1).jpg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-interiors/bar-units-designs">
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() => handleMouseOverImage("bar_unit")}
                    >
                      Bar Units
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/modular_interior/side-table-in- delhi-gurgaon-noida-faridabad.jpg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-interiors/side-tables-designs">
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() => handleMouseOverImage("side_table")}
                    >
                      Side Tables
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 ">
                <Image
                  src="/images/modular_interior/beautiful-foldable-beds-design-in-delhi-gurgaon-noida.jpeg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/modular-interiors/foldable-beds-designs">
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() => handleMouseOverImage("foldable_bed")}
                    >
                      Foldable Beds
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/living/best-interior-designing-company-in-delhi-gurgaon-noida-india-Design-Indian-Homes (6).jpg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-interiors/bathroom-vanities-designs">
                    {" "}
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() =>
                        handleMouseOverImage("bathroom_vatities")
                      }
                    >
                      Bathroom Vanities
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/living/foyer-cab.jpg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-interiors/foyer-area-designs">
                    {" "}
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() =>
                        handleMouseOverImage("bathroom_vatities")
                      }
                    >
                      Foyer Cabinets
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
            </ul>
          </div>

          {/* <div className="ml-2">
           

            <div className="flex gap-2 mt-2">
              <Image
                src="/images/wardrobe/modular-kitchen-wardrobe-largest-manufacturers-dealers-in-delhi-gurgaon-noida-faridabad-india (6).jpg"
                alt=""
                width={100}
                height={50}
                style={{ width: '100px', height: '50px', borderRadius: '4px' }}
              />

              <div>
                <Link href="/foyer-area-designs">
                  <h3
                    className="text-base font-extrabold absolute px-2 py-1  text-white bg-black"
                    onMouseOver={() => handleMouseOverImage('foyer_cabinet')}
                  >
                    Foyer Cabinets
                  </h3>
                </Link>

                <p className="text-xs mt-8">
                  Connect with the top end to end interior Brand
                </p>
              </div>
            </div> 
            
          </div> */}
        </div>{" "}
        <div className="flex w-1/3">
          <div className="">
            <ul className="">
              {/* { Starting, this is the sub-category} */}
              <div className="flex gap-2">
                <Image
                  src="/images/living/mod-kitc.jpg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-interiors/modular-kitchen-top-brand-india">
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() =>
                        handleMouseOverImage("mandir_interior")
                      }
                    >
                      Modular Kitchen
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              {/* <div className="flex gap-2 mt-2">
                <Image
                  src="/images/living/best-designing-services-crockery-unit-in-gurgaon-delhi-noida-faridabad.jpeg"
                  alt=""
                  width={100}
                  height={70}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/chest-of-drawer-designs">
                    <h3
                      className="text-base font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() => handleMouseOverImage('chest_drawer')}
                    >
                      Chest of Drawers
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div> */}

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/living/wardrobe.jpeg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-interiors/wardrobe-designs">
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() => handleMouseOverImage("bar_unit")}
                    >
                      Wardrobes
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/living/dressers.jpeg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-interiors/dressers-designs">
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() => handleMouseOverImage("side_table")}
                    >
                      Dressers
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 ">
                <Image
                  src="/images/living/tv unit.jpeg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />

                <div>
                  <Link href="/modular-interiors/tv-unit-designs">
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() => handleMouseOverImage("foldable_bed")}
                    >
                      TV Unit
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/living/crockery-unit.png"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/modular-interiors/crockery-units-designs">
                    {" "}
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() =>
                        handleMouseOverImage("bathroom_vatities")
                      }
                    >
                      Crockery Units
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Image
                  src="/images/living/homesdih.jpg"
                  alt=""
                  width={80}
                  height={60}
                  className=" rounded-lg"
                />
                <div>
                  <Link href="/homes-by-design-indian-homes">
                    {" "}
                    <h3
                      className="text-sm font-extrabold absolute px-2 py-1  text-white bg-black"
                      onMouseOver={() =>
                        handleMouseOverImage("bathroom_vatities")
                      }
                    >
                      Homes by DIH
                    </h3>
                  </Link>

                  <p className="text-xs mt-8">
                    Connect with the top end to end interior Brand
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
        {/* <div className="w-1/3">
          <Image
            src={
              hoveredItem ? getImageForItem(hoveredItem) : '/images/top4.jpeg'
            }
            alt=""
            className="shadow-sm ml-2 border-2 rounded-xl"
            width={750}
            height={450}
            style={{ width: '750px', height: '350px' }}
            layout="fixed"
          />
          <div className="flex justify-center">
            <p className="text-lg font-bold mt-2">
              Decorate Your Own Beautiful Home
            </p>
          </div>
          <button className='mt-4 bg-green-400 p-3 ml-8 rounded-full text-white font-bold'>Book an Architectural Consultancy </button>
        </div> */}
      </div>
    </div>
  );
  const MegaMenuMore = () => (
    <div
      className="bg-white shadow-2xl rounded-lg flex absolute w-full p-4 pt-6 justify-center h-auto text-black"
      onMouseLeave={handleMouseLeave}
      style={{ marginTop: "110px" }}
    >
      <div className="flex ">
        <div className="w-1/2 flex mr-4">
          <ul className="text-sm font-bold p-4">
            <h3 className="">
              <Link href="/home-renovation-services">Renovation</Link>
            </h3>
            <Link href="/virtual-interior-designing-meeting">
              <h3 className="">Book a Virtual Meeting</h3>
            </Link>
            <Link href="/about-best-interior-designers-architects">
              <h3 className=""> About Us</h3>
            </Link>

            <Link href="/collaborate-with-architects-interior-designers">
              <h3 className="">Collaborate with Us</h3>
            </Link>
            <Link href="/customer-reviews-interior-designs">
              {" "}
              <h3 className="">Reviews</h3>
            </Link>
            <Link href="/home-interior-designs-designing-plans-for-residences">
              <h3 className=""> Our Packages </h3>
            </Link>
            <Link href="/why-choose-the-best-interior-designers">
              <h3 className="">Why Choose Us</h3>
            </Link>
            <Link href="/join-the-largest-interior-designing-brand">
              <h3 className="">Join As a Designer</h3>
            </Link>
            <Link href="/book-with-top-interior-designers-architects">
              <h3 className="">Book a Design Visit</h3>
            </Link>
            <Link href="/nri-interior-architectural-services-delhi-gurgaon-noida-india">
              <h3 className="">NRI - Sr Citizens Friendly </h3>
            </Link>
            <Link href="/interior-digest-magazine-india">
              <h3 className="">Magazine</h3>
            </Link>
          </ul>
          <div className="flex flex-col gap-2 py-4">
            {" "}
            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full ">
              <Link href="/refer-and-get-rewards-interior-designers">
                Refer for Rewards
              </Link>
            </button>
            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full ">
              <Link href="/homes-by-design-indian-homes">Homes By DIH</Link>
            </button>
            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full ">
              <Link href="/selected-homes-exclusive-interior-designs-india">
                Selected Homes
              </Link>
            </button>
            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
              <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                Get Free Estimate
              </Link>
            </button>
            <button className="bg-red-600 text-white text-sm py-3 px-6 rounded-full w-52">
              <Link href="/luxury-residence-designs-delhi-india">
                Luxury Interiors
              </Link>
            </button>{" "}
          </div>
        </div>
        <div className="w-2/3">
          <div
            className="w-full flex flex-col items-center justify-center bg-cover rounded-lg  "
            style={{
              backgroundImage: "url('/images/get-free-estimate.jpg')",
              backgroundSize: "fit",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              width: "850px",
              height: "400px",
            }}
          >
            <div className="relative z-10 m-16">
              <Link href="/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india">
                <h1 className="text-xl md:text-4xl font-bold text-center bg-white bg-opacity-50 p-4 rounded-full">
                  Get Your Estimates Free
                </h1>
              </Link>
            </div>
            {/* <h1 className="text-md md:text-xl sm:my-4 text-center sm:p-4 bg-white rounded-md">
                LOVE ALL SERVER ALL
              </h1> */}
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const handleDocumentClick = (e) => {
      console.log("Document Clicked");
      console.log("megaMenuRef:", megaMenuRef.current);

      // Check if the click is outside the mega menu
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
        closeMegaMenu();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleMouseOver = (category) => {
    setActiveCategory(category);
    setMegaMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
    setMegaMenuVisible(false);
  };

  const [scrollDirection, setScrollDirection] = useState("up");
  const [springPropsLeftLogo, setSpringPropsLeftLogo] = useSpring(() => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    scale: 1,
  }));
  const [springPropsCenterLogo, setSpringPropsCenterLogo] = useSpring(() => ({
    translateY: 0,
    translateX: 0,
    opacity: 1,
    scale: 1,
  }));

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setSpringPropsLeftLogo({
      translateY: scrollDirection === "up" ? -100 : 0,
      translateX: scrollDirection === "down" ? 0 : -100,
      opacity: scrollDirection === "up" ? 0 : 1,
      scale: scrollDirection === "up" ? 0.5 : 1,
    });
    setSpringPropsCenterLogo({
      translateY: scrollDirection === "down" ? 100 : 0,
      translateX: scrollDirection === "down" ? 0 : -100,
      opacity: scrollDirection === "down" ? 0 : 1,
      scale: scrollDirection === "down" ? 0.5 : 1,
    });
  }, [scrollDirection, setSpringPropsLeftLogo, setSpringPropsCenterLogo]);

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };
  const toggleMobileMenu = () => {
    setMobileMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const body = document.body;

    if (mobileMenuVisible) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    // Cleanup the style when the component unmounts or the menu is closed
    return () => {
      body.style.overflow = "auto";
    };
  }, [mobileMenuVisible]);
  return (
    <div className={` bg-white  ${scrollDirection === "down"}`}>
      <div className="z-[200] invisible lg:visible  lg:flex">
        {/* Desktop Header */}
        <div
          className={`bg-white py-0 drop-shadow-lg  mb-px w-full z-50 transition-transform ease-in-out duration-300 ${
            scrollDirection === "down" ? "-translate-y-10" : "translate-y-0"
          }`}
          style={{
            position: "fixed",
            top: 30,

            marginTop: 0,
          }}
        >
          {activeCategory && (
            <div ref={megaMenuRef} className="group-hover:flex">
              {activeCategory === "DesignIdeas" && (
                <MegaMenuDesignIdeasContent
                  handleMouseLeave={handleMouseLeave}
                />
              )}
              {activeCategory === "Interiors" && <MegaMenuInteriorsContent />}
              {activeCategory === "Architectural" && (
                <MegaMenuArchitectureContent />
              )}
              {activeCategory === "Modular Kitchen" && (
                <MegaMenuModularKitchenContent />
              )}
              {activeCategory === "Wardrobes" && <MegaMenuWardrobesContent />}
              {activeCategory === "Living" && <MegaMenuLivingContent />}
              {activeCategory === "Modular Interiors" && (
                <MegaMenuModularInteriorContent />
              )}
              {activeCategory === "More" && <MegaMenuMore />}
            </div>
          )}

          <div className="animated-bg text-black  sticky top-0 ">
            <div className="flex justify-center xl:space-x-16 lg:space-x-16 mt-2">
              <div className="flex ml-0 gap-2 w-[100px]">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-sm text-black mt-[6px]"
                  style={{ width: "24px", height: "24px" }}
                />{" "}
                <a
                  className="text-sm text-black font-bold mt-2"
                  href="tel:+919899264978"
                >
                  Call Us
                </a>{" "}
              </div>
              <div className="flex gap-4 md:text-sm text-black mt-2">
                <Link href="/book-with-top-interior-designers-architects">
                  {" "}
                  <p>Book a Visit</p>
                </Link>
                <p>
                  <Link href="/refer-and-get-rewards-interior-designers">
                    | Refer For Rewards
                  </Link>
                </p>

                <p>
                  |{" "}
                  <Link href="/collaborate-with-architects-interior-designers">
                    Architects & Interior Designers
                  </Link>
                </p>
              </div>
              <div className="flex gap-1 py-1">
                <SocialIcon
                  href="https://www.instagram.com/designindiankitchen/?hl=en"
                  network="instagram"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />

                <SocialIcon
                  href="https://www.youtube.com/channel/UCqkIRwI6EL9QmaTZHYm6Hug"
                  network="youtube"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />

                <SocialIcon
                  href="https://wa.me/+919899264978"
                  network="whatsapp"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />

                {/* <ThemeSwitcher /> */}
              </div>
            </div>
          </div>

          <div
            className="w-full"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link href="/">
              <animated.img
                srcSet="/images/left.gif"
                alt="Left Logo"
                className="hidden md:flex h-12 w-12 mr-2"
                style={{
                  transform: springPropsLeftLogo.translateX.to(
                    (x) => `translateX(${x}%)`
                  ),
                  opacity: springPropsLeftLogo.opacity,
                  transition:
                    "transform 0.1s ease-in-out, opacity 0.1s ease-in-out",

                  marginTop: "10px",
                }}
              />
            </Link>

            {/* Main Header Navigation scroll up header */}
            <div className="sm:px-0 md:px-0 xl:px-1  ">
              <nav
                className="flex  w-full justify-center xl:text-sm  lg:text-[9px] lg:font-bold items-center mt-4 text-black space-x-6"
                style={{ justifyContent: "center" }}
              >
                <p
                  className=" flex center  font-bold text-black hover:text-green-400"
                  onMouseOver={() => handleMouseOver("DesignIdeas")}
                >
                  <Link href="/modular-interior-design-ideas">
                    {" "}
                    Design Ideas
                  </Link>
                </p>

                <p
                  className="flex font-bold text-black hover:text-green-400"
                  onMouseOver={() => handleMouseOver("Interiors")}
                >
                  <Link href="/home-interior-services-india"> Interiors</Link>
                </p>

                <p
                  className="flex  font-bold text-black hover:text-green-400"
                  onMouseOver={() => handleMouseOver("Architectural")}
                >
                  <Link href="/architectural-designs-services-india">
                    Architectural
                  </Link>
                </p>

                <p
                  className="flex  font-bold text-black hover:text-green-400"
                  onMouseOver={() => handleMouseOver("Modular Kitchen")}
                >
                  <Link href="/modular-kitchen-top-brand-india">
                    Modular Kitchen
                  </Link>
                </p>
                <Link href="/">
                  <animated.img
                    srcSet="/images/Logo.gif"
                    alt="Center Logo"
                    className="top-2/4 transform -translate-y-2/4 scale-150 mt-4"
                    style={{
                      transform: springPropsCenterLogo.translateY.to(
                        (y) =>
                          `translateY(${y}%) scale(${springPropsCenterLogo.scale})`
                      ),
                      opacity: springPropsCenterLogo.opacity,
                      display: springPropsCenterLogo.opacity.to((opacity) =>
                        opacity === 0 ? "none" : "block"
                      ),
                      transition:
                        "transform 0.1s ease-in-out, opacity 0.1s ease-in-out",
                      width: "60px",
                      height: "30px",
                    }}
                  />
                </Link>

                <p
                  className=" font-bold text-black hover:text-green-400"
                  onMouseOver={() => handleMouseOver("Wardrobes")}
                >
                  <i className="fi fi-tr-clothes-hanger"></i>
                  <Link href="/wardrobe-design-gallery-india">Wardrobes</Link>
                </p>

                {/* <p className="text-sm font-bold" onMouseOver={() => handleMouseOver('Living')}>
                  <i class="fi fi-ts-fireplace"></i>
                  Living
                </p> */}

                <p
                  className=" font-bold text-black hover:text-green-400"
                  onMouseOver={() => handleMouseOver("Modular Interiors")}
                >
                  <i className="fi fi-ts-loveseat"></i>
                  <Link href="/modular-interiors"> Modular Interiors</Link>
                </p>

                <div>
                  <p
                    className=" font-bold text-black hover:text-green-400"
                    onMouseOver={() => handleMouseOver("More")}
                  >
                    <Link href="#"> More</Link>
                  </p>
                </div>
                <Link href="/home-interior-designs-designing-estimates-pricing">
                  {" "}
                  <button className="bg-yellow-400 hover:bg-yellow-500 hover:text-white text-sm py-2 px-2 rounded-full  center mb-1">
                    Get Quotes
                  </button>
                </Link>
                <button
                  className=" hover:bg-yellow-500 hover:text-white text-sm py-2 px-4 rounded-full  center mb-1"
                  style={{
                    // alignItems: 'center',
                    // borderRadius: '50px',
                    border: "1px solid black",
                    // marginBottom: '7px',
                  }}
                >
                  <Link href="/book-a-interior-design-visit">Contact</Link>
                </button>
                <div className=" mb-2">
                  <ColorSwitchD />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* {bottom menu} */}

      <Assistance />
      <MobileHeader />
    </div>
  );
};

Header.ssr = false;
export default Header;
