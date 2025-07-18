import { createContext, useContext, useState } from 'react';

const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [bannerTitle, setBannerTitle] = useState('');
  const [breadcrumb, setBreadcrumb] = useState('');
  const [bannerImage, setBannerImage] = useState('');

  return (
    <BannerContext.Provider value={{ bannerTitle, setBannerTitle, breadcrumb, setBreadcrumb, bannerImage, setBannerImage }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBanner = () => useContext(BannerContext);
