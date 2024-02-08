import { useTranslation } from "react-i18next";

export const Banner = () => {
    const { t } = useTranslation();

  return (
    <div>
      <div className="bg-white">
        <div
          className="p-4 text-danger"
          style={{
            background:
              'repeating-linear-gradient(-55deg, #222, rgb(34, 34, 34) 10px, rgb(234, 179, 8) 10px, rgb(234, 179, 8) 20px)',
          }}
        />
        <div className="p-4 text-center text-gray-900 bg-yellow-500 font-bold">
            {t("under-construction")}
        </div>
      </div>
    </div>
  );
}
