"use client";
import Image from "next/image";
import Rating from "@/components/Rating.component";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { usePathname } from "next/navigation";
import { ProductType } from "@/lib/type";
import { useAppStore } from "@/lib/appStore";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CiShoppingBasket } from "react-icons/ci";

interface ProductProps {
  product: ProductType;
  colorBgHeader?: string;
}

const Product: React.FC<ProductProps> = ({ product, colorBgHeader }) => {
  const {
    setCartItemList,
    openProductDetail,
    setCurrentProduct,
  } = useAppStore();
  const pathname = usePathname();
  const parts = pathname.split("/");

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
      className={`relative w-[350px] h-[450px] bg-base-100 border border-${colorBgHeader !== undefined ? colorBgHeader : "primary"} shadow-lg flex flex-col p-5 rounded-lg gap-3`}
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
        <p className="text-sm">({product.votes})</p>
      </div>
      <div>
        <p className="pt-4">
          <span className="font-bold text-lg">{product.title}</span>,{" "}
          {product.description}
        </p>
      </div>
      <div className="flex justify-between items-center absolute bottom-2 left-0 w-full pb-1 px-5">
        <div>
          <p className={`font-bold text-lg`}> {product.price} €</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out">
            <IoMdInformationCircleOutline
              size={40}
              className="text-accent"
              onClick={handleOpenDetail}
            />
          </button>
          <button
            className="max-md:active:scale-95 md:hover:scale-105 transition duration-150 ease-in-out"
            onClick={handleAddProduct}
          >
            <div className={`flex justify-center items-center w-[50px] h-[50px] rounded-full bg-${colorBgHeader !== undefined ? colorBgHeader : "primary"}`}>
              <CiShoppingBasket size={30} />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
