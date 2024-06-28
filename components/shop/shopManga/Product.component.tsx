"use client";
import { useEffect } from "react";
import Image from "next/image";
import Rating from "@/components/Rating.component";
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { ProductType } from "@/lib/type";
import { useAppStore } from "@/lib/appStore";
import { toast } from "sonner";
import ProductDetailModal from "@/components/modals/ProductDetail.modal";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProductProps {
  product: ProductType;
  colorBgHeader: string;
}

const Product: React.FC<ProductProps> = ({ product, colorBgHeader }) => {
  const {
    cartItemList,
    setCartItemList,
    openProductDetail,
    setCurrentProduct,
  } = useAppStore();
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const router = useRouter();

  const handleAddProduct = () => {
    setCartItemList(product);
    toast.success(`${product.title} a été ajouté au panier`);
  };

  const handleOpenDetail = () => {
    openProductDetail();
    setCurrentProduct(product);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`relative w-[350px] h-[450px] bg-primary border border-${colorBgHeader ? colorBgHeader : "primary"} shadow-lg flex flex-col p-5 rounded-lg gap-3`}
    >
      <div className="flex justify-center items-center">
        <Image
          src={product.imagePath}
          width={150}
          height={200}
          alt="Tome One piece"
          className="h-[200px]"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Rating rating={product.rating} />
        <p className="text-gray-200 text-sm">({product.votes})</p>
      </div>
      <div>
        <p className="text-gray-200 pt-4">
          <span className="font-bold text-accent">{product.title}</span>,{" "}
          {product.description}
        </p>
      </div>
      <div className="flex justify-between items-center absolute bottom-2 left-0 w-full pb-1 px-5">
        <div>
          <p className="font-bold text-lg text-success"> {product.price} €</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out">
            <IoMdInformationCircleOutline
              size={35}
              className="text-accent"
              onClick={handleOpenDetail}
            />
          </button>
          <button
            className="max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out"
            onClick={handleAddProduct}
          >
            <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-secondary text-gray-200">
              <MdAddShoppingCart size={30} />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
