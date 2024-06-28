"use client";

const EmptyShop = () => {

  return (
    <div className="w-[800px] max-md:w-[90%] h-[300px] bg-primary shadow-primary shadow-lg flex justify-center items-center mt-24">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-gray-200"> Désolé...</p>
        <p className="text-gray-200">
        Aucun produit ne correspond à votre recherche
        </p>
      </div>
    </div>
  );
};

export default EmptyShop;
